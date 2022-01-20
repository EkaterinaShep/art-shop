import { randomUUID } from 'crypto';
import { createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { customEventEmitter } from '../../constants/constants.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const promisifiedPipeline = promisify(pipeline);

async function uploadFile(part) {
  const fileName = randomUUID() + getFileExt(part.filename);
  const path = resolve(__dirname, '../../', 'static', fileName);

  await promisifiedPipeline(part.file, createWriteStream(path));

  customEventEmitter.emit('changeFileName', fileName);
}

function getFileExt(filename) {
  return filename.slice(filename.lastIndexOf('.'));
}

export { uploadFile };
