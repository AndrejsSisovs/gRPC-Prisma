import { OnQueueActive, OnQueueCompleted, Process, Processor } from "@nestjs/bull";
import { TRANSCODE_QUEUE } from "./constants";
import { Job } from "bull";
import { Logger } from "@nestjs/common";
import { resolve } from "path";

//adding a new consumer class
//to define it as a consumer class we mark it with processor decorator || and we provide name of our queue ||
@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {

  private readonly logger = new Logger(TranscodeConsumer.name);
  
  //now we define the method
  //to define it as a worker process we need to define it with decorator
  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(`Transcoding message: ${job.id}`);
    this.logger.debug('Data:', job.data);
    await new Promise <void> ((resolve) => setTimeout(()=> resolve(), 8000));
    this.logger.log(`Transcoding compete for job: ${job.id}`)
  } 

}


  //event listeners must be deckared in a consumers class
  // @OnQueueActive()
  // onAcrive(job: Job) {
  //   console.log(
  //     `Processing job ${job.id} of type ${job.name} with data ${job.data}`
  //   );
  // }

  // @OnQueueCompleted()
  // onCompleted(job: Job) {
  //   console.log(`Job with ${job.id} completed...`)
  // }