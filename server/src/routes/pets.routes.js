import { Router } from 'express';
import { listPets, getPet, createPet, updatePet, deletePet } from '../controllers/pets.controller.js';
import { authRequired } from '../middleware/auth.js';

const router = Router();

router.get('/', listPets);
router.get('/:id', getPet);
router.post('/', authRequired, createPet);
router.patch('/:id', authRequired, updatePet);
router.delete('/:id', authRequired, deletePet);

export default router;
