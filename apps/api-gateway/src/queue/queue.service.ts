import { Inject, Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE } from './constants';

@Injectable()
export class QueueService {
                      // // to inject queue we use inject que decorater || decorator accepts queue name || we provide variable with which we access queue
                      //   constructor(@InjectQueue('fileUpload') private readonly fileUpload: Queue) {}
                      //   async uploadFile(file) {
                      //     console.log({ file});
                      //     const {originalname} = file;

                      //     //add method accepts object
                      //     await this.fileUpload.add('upload images',//we can name our queue
                      //       {
                      //       //because it's an object we need to provide keys also
                      //       buffer:file.buffer,
                      //       bucket:process.env.S3_BUCKET,
                      //       originalname,
                      //       fmimeTime: file.mimetype,
                      //     },
                      //   //after we create a name's job, we also need to crate process to process this job
                      //     {delay: 3000, lifo: true},
                      //   )
                      //   }
  constructor(@InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue, ){}

  async transcode() {
    await this.transcodeQueue.add({
      filename: './file.mp3'    //next we need to create a consumer for this job 'transcode-consumer'
    });  
  }
}
