import { getCustomRepository } from 'typeorm';
import VideoRepository from '../repositories/VideoRepository';
import Video from '../models/Video';

interface Request {
  title: string;
  video_url: string;
  image_url: string;
  description: string;
  tags: string[];
}


class CreateVideoService {
  public async execute({ title, video_url, image_url, description, tags }: Request): Promise<Video> {
    const repository = getCustomRepository(VideoRepository);

    const newVideo = repository.create({ title, video_url, image_url, description, tags });

    await repository.save(newVideo);

    return newVideo;
  }
}

export default CreateVideoService;
