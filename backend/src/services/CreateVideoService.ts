import { getCustomRepository } from 'typeorm';
import VideoRepository from '../repositories/VideoRepository';
import Video from '../models/Video';

interface Request {
  title: string;
  url: string;
  assunto: string;
}

class CreateVideoService {
  public async execute({ title, url, assunto }: Request): Promise<Video> {
    const repository = getCustomRepository(VideoRepository);

    const newVideo = repository.create({ title, url, assunto });

    await repository.save(newVideo);

    return newVideo;
  }
}

export default CreateVideoService;
