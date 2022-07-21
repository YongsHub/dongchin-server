import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToonRepository } from '../repository/toon.repository';
import { BannerController } from './banner.controller';
import { BannerRepository } from '../repository/banner.repository';
import { BannerService } from './banner.service';
import { ToonToBannerRepository } from '../repository/toonToBanner.repository';

@Module({
  imports: [
    // import ToonRepository
    TypeOrmModule.forFeature([
      BannerRepository,
      ToonRepository,
      ToonToBannerRepository,
    ]),
  ],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}
