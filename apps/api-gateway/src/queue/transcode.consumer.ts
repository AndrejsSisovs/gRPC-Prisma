import { Process, Processor } from "@nestjs/bull";
import { TRANSCODE_QUEUE } from "./constants";
import { Job } from "bull";
import { Logger } from "@nestjs/common";
import { resolve } from "path";

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {

  private readonly logger = new Logger(TranscodeConsumer.name);
  
  @Process()
  async transcode(job: Job<unknown>) {
    //this.logger.log(JSON.stringify(job));
    this.logger.log(`Transcoding message: ${job.id}`);
    this.logger.debug('Data:', job.data);
    await new Promise <void> ((resolve) => setTimeout(()=> resolve(), 8000));
    this.logger.log(`Transcoding compete for job: ${job.id}`)
  }
}