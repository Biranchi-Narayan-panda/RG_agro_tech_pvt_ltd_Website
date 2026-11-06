# ==========================================
# Stage 1: Build stage
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for Docker layer caching
COPY package.json package-lock.json ./

# Install exact dependencies
RUN npm ci

# Copy application source code
COPY . .

# Build production assets into /app/dist
RUN npm run build

# ==========================================
# Stage 2: Production runtime stage (Nginx)
# ==========================================
FROM nginx:1.27-alpine AS runner

# Set working directory to Nginx html folder
WORKDIR /usr/share/nginx/html

# Clean default static assets
RUN rm -rf ./*

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist .

# Copy production Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports (5000 primary, 80 fallback)
EXPOSE 5000 80

# Health check to verify Nginx is responding on port 5000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/health || wget --no-verbose --tries=1 --spider http://localhost:80/health || exit 1

# Launch Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

