import { Router } from 'express';

import videoRouter from './video.routes';

const routes = Router();

routes.use('/video', videoRouter);

export default routes;
