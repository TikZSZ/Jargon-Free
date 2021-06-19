import { createWorker,ImageLike } from 'tesseract.js'

export type Image= File & ImageLike

export const recognize = async (image:Image,helpTrack:(m:{jobId:string,progress:string,status:string})=>void) => {
  const worker = createWorker({
    logger: helpTrack,
    workerBlobURL:true
  });
  await worker.load(image.name);
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const {data:{text }}= await worker.recognize(image)
  worker.terminate()
  return text
}

