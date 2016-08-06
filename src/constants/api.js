export const apiBaseURL = {
  production: '',
  dev: '',
}[process.env.NODE_ENV || 'production'];
