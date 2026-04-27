import app from './src/app';
import { config } from './src/config/env';

(() => {
  try {
    app.listen(config.PORT, () => {
      console.log(`
🚀 Server is running!
🏠 Mode: ${config.NODE_ENV}
🔌 Port: ${config.PORT}
🔗 URL: http://localhost:${config.PORT}${config.API_PREFIX}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})()
