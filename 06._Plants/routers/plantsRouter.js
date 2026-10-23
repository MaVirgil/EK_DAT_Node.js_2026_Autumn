import { Router } from 'express';
import { fetchAllPlants, fetchPlant } from '../util/fetchPlants.js';

const router = Router();

router.get('/api/plants', async (req, res) => {
  res.send({
    data: await fetchAllPlants(),
  });
});

router.get('/api/plants/:slug', async (req, res) => {
  const slug = req.params.slug;
  res.send({
    data: await fetchPlant(slug),
  })
});

export default router;