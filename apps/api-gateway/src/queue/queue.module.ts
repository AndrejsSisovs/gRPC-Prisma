import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { BullModule } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { TranscodeConsumer } from './transcode.consumer';
// import { UserFileUpload } from './queue.process';

@Module({
  imports: [BullModule.registerQueue(
    { //configKey: 'alternative-config', //if we ant to use specific config
      name: TRANSCODE_QUEUE}
    // {name: 'another queue'}
  )],
  controllers: [QueueController],
  providers: [QueueService, TranscodeConsumer],
})
export class QueueModule {}
