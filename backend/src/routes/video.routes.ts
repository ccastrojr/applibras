import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import VideoRepository from '../repositories/VideoRepository';

import CreateVideoService from '../services/CreateVideoService';

const videoRouter = Router();

videoRouter.post('/', async (req, res) => {
  const { title, url, assunto } = req.body;

  const video = await new CreateVideoService().execute({ title, url, assunto });

  return res.status(200).json(video);
});

videoRouter.get('/', async (req, res) => {
  const repository = getCustomRepository(VideoRepository);
  const videos = repository.find();

  return res.status(200).json(videos);
});

videoRouter.get('/:id', async (req, res) => {
  const repository = getCustomRepository(VideoRepository);

  const { id } = req.params;
  const video = await repository.findOne(id);

  return res.status(200).json(video);
});

export default videoRouter;
