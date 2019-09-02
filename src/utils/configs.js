const env = process.env.NODE_ENV || 'development';

export const configs = {
  development: {
    apiUrl: 'https://newsapi.org/v2',
    newsApiKey: '737bdfba233545ccbe798486b09e34ef',
  },
  production: {
    apiUrl: 'https://newsapi.org/v2',
    newsApiKey: '737bdfba233545ccbe798486b09e34ef',
  },
}[env];
