import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { QueueService } from './queue.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('transcode')
  async transcode() {
    return this.queueService.transcode();
  }
}

