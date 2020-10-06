import all from './all/all.route';
import board from './board/board.route';

export default function registerApiRoutes(app, prefix = '') {
  app.use(`${prefix}/all`, all);
  app.use(`${prefix}/boards`, board);
}
