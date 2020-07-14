import { EntityRepository, Repository } from 'typeorm';

import Video from '../models/Video';

@EntityRepository(Video)
class VideoRepository extends Repository<Video> {
  public async findByUrl(title: string): Promise<Video | undefined> {
    const video = await this.findOne({ where: { title } });

    return video;
  }
}

export default VideoRepository;
