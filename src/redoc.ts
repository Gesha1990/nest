import redoc from 'redoc-express';

export function setupRedoc(app) {
  const redocOptions = {
    title: 'Your API Title',
    version: '1.0',
    specUrl: '/api-json',
  };

  app.use('/docs', redoc(redocOptions));
}
