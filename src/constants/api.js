export const apiBaseURL = {
  production: 'http://localhost:3000',
  dev: 'http://localhost:3000',
}[process.env.NODE_ENV || 'production'];
