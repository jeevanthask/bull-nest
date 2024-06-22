import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('transcode') private transcodeQueue: Queue) {}

  async transcode() {
    await this.transcodeQueue.add({
      fileName: './file1.mp3',
    });
  }
}
