import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StopssModule } from './stops/stops.module';

@Module({
  imports: [ProductsModule, StopssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
