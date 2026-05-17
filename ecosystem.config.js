const path = require('path')

/**
 * PM2 production config for Make My Lesson (Next.js 14)
 *
 * Usage:
 *   npm run build
 *   pm2 start ecosystem.config.js --env production
 *   pm2 save
 *
 * Environment: copy .env.production to the server or set vars in env_production below.
 */
module.exports = {
  apps: [
    {
      name: 'makemylesson',
      cwd: path.resolve(__dirname),
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      interpreter: 'node',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      max_restarts: 10,
      min_uptime: '10s',
      kill_timeout: 5000,
      listen_timeout: 10000,
      merge_logs: true,
      time: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      // Optional: absolute log paths on Linux (create dirs first)
      // out_file: '/var/log/makemylesson/out.log',
      // error_file: '/var/log/makemylesson/error.log',
    },
  ],
}
