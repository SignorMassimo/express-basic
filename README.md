# Express basic project

### src/app.ts

```typescript
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/env.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import routes from './routes/index.js';

const app = express();

/**
 * Basic security and logging middlewares.
 * We use Helmet for security headers and CORS for cross-origin requests.
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/**
 * Main application routes.
 */
app.use(config.API_PREFIX, routes);

/**
 * Fallback for routes that don't exist.
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Path ${req.originalUrl} not found`,
  });
});

/**
 * Global error handler should be the last middleware.
 * It catches all errors passed to next(error).
 */
app.use(errorMiddleware);

export default app;
```

### server.ts

```typescript
import app from './src/app';
import { config } from './src/config/env';

const startServer = () => {
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
};

startServer();
```
