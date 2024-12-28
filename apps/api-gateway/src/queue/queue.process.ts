// //adding a new consumer class
// import { OnQueueActive, OnQueueCompleted, Process, Processor } from "@nestjs/bull";
// import { Job } from "bull";
// import { uploadToS3 } from "./utils/s3.utils";

// //to define it as a consumer class we mark it with processor decorator || and we provide name of our queue ||
// @Processor('fileUpload')
// export class UserFileUpload {
//   //now we define the method
//   //to define it as a worker process we need to define it with decorator
//   @Process('upload-image')
//   async handleFileUpload(job: Job) {
//     console.log(job.data);

//     const { buffer, bucket, originalname, mimetype} = job.data;
//     await uploadToS3(buffer, bucket, originalname, mimetype);
//   } // this decorator method is called when the worker is idle



//   //event listeners must be deckared in a consumers class
//   @OnQueueActive()
//   onAcrive(job: Job) {
//     console.log(
//       `Processing job ${job.id} of type ${job.name} with data ${job.data}`
//     );
//   }

//   @OnQueueCompleted()
//   onCompleted(job: Job) {
//     console.log(`Job with ${job.id} completed...`)
//   }
// }