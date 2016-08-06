export const apiBaseURL = {
  production: 'http://52.79.173.235:3000',
  dev: 'http://localhost:3000',
}[process.env.NODE_ENV || 'production'];
