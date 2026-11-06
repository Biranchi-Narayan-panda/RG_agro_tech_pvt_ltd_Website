# Production Deployment Guide: Radha Gobinda Agro Tech Website

This guide walks you through deploying the **Radha Gobinda Agro Tech Pvt. Ltd.** website onto a Linux VPS (Ubuntu/Debian) using Docker and Docker Compose.

---

## 1. Project Architecture Overview

- **Framework**: React 19 + TypeScript + Vite + Tailwind CSS v4.
- **Docker Setup**: 
  - **Stage 1 (`builder`)**: Uses `node:22-alpine` to install dependencies cleanly and build optimized production static files into `/app/dist`.
  - **Stage 2 (`runner`)**: Uses ultra-lightweight `nginx:1.27-alpine` (< 25 MB RAM usage).
  - **Nginx Configuration**: Configured with gzip compression, SPA fallback routing (`try_files $uri $uri/ /index.html;`), immutable caching for static assets, no-cache headers for `index.html` (instant updates), and a health check endpoint `/health`.
  - **Docker Compose**: Handles restart policies, log rotation limits (preventing full disks), port mapping, and container health checks.

---

## 2. Prerequisites on Your VPS

Connect to your VPS via SSH:
```bash
ssh root@YOUR_VPS_IP
```

### Install Docker & Docker Compose (Ubuntu/Debian)
If Docker is not already installed on your VPS, run:

```bash
# Update package lists
sudo apt update && sudo apt upgrade -y

# Install Docker and Docker Compose plugin
sudo apt install -y docker.io docker-compose-plugin

# Enable and start Docker service
sudo systemctl enable --now docker

# (Optional) Verify installation
docker --version
docker compose version
```

---

## 3. Clone Repository on VPS

Choose a directory on your VPS (e.g. `/var/www/rg-agro-tech`):

```bash
sudo mkdir -p /var/www/rg-agro-tech
sudo chown -R $USER:$USER /var/www/rg-agro-tech
cd /var/www/rg-agro-tech

# Clone your project repository
git clone https://github.com/Biranchi-Narayan-panda/RG_agro_tech_pvt_ltd_Website.git .
```

---

## 4. Environment Configuration

Create a `.env` file from the provided example:

```bash
cp .env.example .env
```

The port is set to **5000** by default:
```env
PORT=5000
```

---

## 5. Build and Launch Container

Start the application in background (detached mode):

```bash
docker compose up -d --build
```

### Accessing Your Website:
Open your browser and navigate to:
```
http://YOUR_VPS_IP:5000
```

### Verify Deployment:
```bash
# Check running container status and health
docker compose ps

# View live container logs
docker compose logs -f

# Test the health check endpoint on port 5000
curl -I http://localhost:5000/health
```
You should see `HTTP/1.1 200 OK` and `"healthy"`.

---

## 6. Configuring SSL (HTTPS) with Domain (Port 5000)

If you have a custom domain name (e.g. `rgagrotech.com`) and want free SSL/HTTPS:

1. Keep `PORT=5000` in `.env`. The container runs cleanly on port 5000.

2. Install Nginx and Certbot on your VPS:
   ```bash
   sudo apt install -y nginx certbot python3-certbot-nginx
   ```

3. Create an Nginx site reverse proxy configuration:
   ```bash
   sudo nano /etc/nginx/sites-available/rg-agro-tech.conf
   ```
   Paste the following:
   ```nginx
   server {
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://127.0.0.1:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Enable site and obtain free SSL certificate:
   ```bash
   sudo ln -s /etc/nginx/sites-available/rg-agro-tech.conf /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx

   # Obtain free Let's Encrypt SSL certificate
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```
   Certbot will automatically configure HTTPS redirection and auto-renewals!

---

## 7. How to Update Your Website (Continuous Updates)

Whenever you push changes to your GitHub repository, you can update your VPS using the included `deploy.sh` script or run the commands manually:

### Option A: Using the automated update script
```bash
cd /var/www/rg-agro-tech
chmod +x deploy.sh
./deploy.sh
```

### Option B: Manual commands
```bash
cd /var/www/rg-agro-tech
git pull origin main
docker compose up -d --build
docker image prune -f
```
Docker will recompile the static bundle inside the builder container and swap to the new version with zero manual file copying.

---

## 8. Useful Management Commands

| Action | Command |
| :--- | :--- |
| **Check container health** | `docker compose ps` |
| **View logs** | `docker compose logs -f --tail 100` |
| **Restart container** | `docker compose restart` |
| **Stop container** | `docker compose down` |
| **Rebuild without cache** | `docker compose build --no-cache && docker compose up -d` |
| **Clean up unused Docker images** | `docker image prune -f` |

---

## 9. Firewall Setup (UFW)

Make sure port 5000 (and standard ports) are open on your VPS firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 5000/tcp
sudo ufw enable
sudo ufw status
```

