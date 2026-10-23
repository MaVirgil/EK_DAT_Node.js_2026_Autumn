import { Router } from 'express';
import fs from 'fs';

const router = Router();

const frontpage = fs.readFileSync(
  './public/pages/frontpage/frontpage.html',
  'utf-8',
);
const aboutPage = fs.readFileSync('./public/pages/about/about.html', 'utf-8');

router.get('/', (req, res) => {
  res.send(frontpage);
});

router.get('/about', (req, res) => {
  res.send(aboutPage);
});

export default router;
