import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  /**
   * Endpoint de health check para o frontend testar a API.
   * Retorna status simples e timestamp.
   */
  @Get('health')
  health() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('status')
  getStatus() {
    return this.appService.getStatus();
  }
}
