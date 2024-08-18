export interface ApplicationConfig {
  env: 'development' | 'production' | 'test';
  host: string;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  port: number;
}
