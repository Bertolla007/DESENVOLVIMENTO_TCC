import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getStatus() {
		return {
			status: 'ok',
			timestamp: new Date().toISOString(),
			system: {
				platform: process.platform,
				nodeVersion: process.version,
				memoryUsage: process.memoryUsage(),
				uptime: process.uptime(),
			},
		};
	}
}

