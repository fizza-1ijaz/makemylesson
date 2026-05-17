# Production Deployment Guide for Make My Lesson

## Prerequisites

- Node.js 18+ (LTS recommended)
- PM2 (process manager for production)
- Nginx or Apache (reverse proxy)
- Ubuntu/Linux server

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Production

```bash
npm run build
```

### 3. Type Check (Optional but recommended)

```bash
npm run type-check
```

### 4. Lint Code

```bash
npm run lint
```

## Deployment with PM2

### Setup PM2

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start ecosystem.config.js --env production

# Enable auto-restart on reboot
pm2 startup
pm2 save

# Monitor the application
pm2 monit

# View logs
pm2 logs makemylesson
```

### Restart Commands

```bash
# Soft restart (0-second downtime)
pm2 reload ecosystem.config.js --env production

# Hard restart
pm2 restart ecosystem.config.js --env production

# Stop
pm2 stop makemylesson

# Status
pm2 status
```

## Environment Configuration

Create `.env.production.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SITE_KEY=makemylesson
NEXT_PUBLIC_SITE_URL=https://makemylesson.ai
```

## Nginx Configuration Example

```nginx
upstream makemylesson {
    server 127.0.0.1:3001;
}

server {
    listen 80;
    server_name makemylesson.ai www.makemylesson.ai;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name makemylesson.ai www.makemylesson.ai;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/makemylesson.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/makemylesson.ai/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Logging
    access_log /var/log/nginx/makemylesson_access.log;
    error_log /var/log/nginx/makemylesson_error.log;

    # Proxy configuration
    location / {
        proxy_pass http://makemylesson;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static file caching
    location /_next/static {
        proxy_pass http://makemylesson;
        proxy_cache_valid 200 60d;
        proxy_cache_control "public, immutable";
        expires 60d;
        add_header Cache-Control "public, immutable";
    }

    # Image optimization caching
    location /images {
        proxy_pass http://makemylesson;
        proxy_cache_valid 200 30d;
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

## Monitoring & Logs

```bash
# Real-time monitoring
pm2 monit

# View logs
pm2 logs makemylesson

# Log files location (from ecosystem.config.js)
tail -f /var/log/makemylesson/out.log
tail -f /var/log/makemylesson/error.log

# Clear logs
pm2 flush
```

## Health Checks

The application will be available at:
- `http://localhost:3001` (from PM2)
- `https://makemylesson.ai` (from Nginx)

## Troubleshooting

### Application won't start

```bash
# Check PM2 logs
pm2 logs makemylesson --err

# Check if port 3001 is in use
lsof -i :3001

# Rebuild from scratch
rm -rf .next node_modules
npm install
npm run build
pm2 restart makemylesson
```

### High memory usage

- Check `ecosystem.config.js` `max_memory_restart` setting
- Monitor with `pm2 monit`
- Consider increasing the value if legitimate

### Build failures

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm install
npm run build

# Type check for issues
npm run type-check
```

## Updates & Deployment

### Zero-downtime deployment

```bash
# Pull latest code
git pull origin main

# Install dependencies
npm install

# Build
npm run build

# Reload with PM2 (zero-downtime)
pm2 reload ecosystem.config.js --env production
```

## Performance Tips

1. Enable compression in Nginx
2. Use CDN for static assets
3. Monitor bundle size with `npm run build`
4. Use `pm2 monit` to identify bottlenecks
5. Enable caching headers in Nginx

## Security Checklist

- [ ] SSL/TLS certificates configured
- [ ] Security headers in Nginx
- [ ] Environment variables secured
- [ ] Database credentials in `.env.production.local`
- [ ] PM2 running as non-root user
- [ ] Firewall configured to allow only 80, 443
- [ ] Regular backups configured
- [ ] Monitoring alerts set up

## Backup Strategy

```bash
# Backup application files
tar -czf makemylesson-backup-$(date +%Y%m%d).tar.gz /var/www/makemylesson

# Backup logs
tar -czf makemylesson-logs-$(date +%Y%m%d).tar.gz /var/log/makemylesson
```

## Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Nginx Configuration](https://nginx.org/en/docs/)
