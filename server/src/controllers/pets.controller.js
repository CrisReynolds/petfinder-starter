import { Pet } from '../models/index.js';

export async function listPets(req, res) {
  try {
    const { species, color, size, status, q } = req.query;
    const where = {};
    if (species) where.species = species;
    if (color) where.color = color;
    if (size) where.size = size;
    if (status) where.status = status;
    if (q) where.description = { $like: `%${q}%` }; // Sequelize v6: use Op.like; kept simple for starter
    const items = await Pet.findAll({ where, order: [['created_at', 'DESC']] });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: 'List failed', detail: e.message });
  }
}

export async function getPet(req, res) {
  try {
    const item = await Pet.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: 'Get failed', detail: e.message });
  }
}

export async function createPet(req, res) {
  try {
    const ownerId = req.user?.uid;
    const { name, species, breed, color, size, description, status, lastSeenAddress, lastSeenLat, lastSeenLng, photoUrl } = req.body;
    if (!ownerId) return res.status(401).json({ error: 'Unauthorized' });
    if (!species) return res.status(400).json({ error: 'species required' });
    const created = await Pet.create({
      name, species, breed, color, size, description, status,
      lastSeenAddress, lastSeenLat, lastSeenLng, photoUrl, ownerId
    });
    res.status(201).json(created);
  } catch (e) {
    res.status(500).json({ error: 'Create failed', detail: e.message });
  }
}

export async function updatePet(req, res) {
  try {
    const ownerId = req.user?.uid;
    const item = await Pet.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    if (item.ownerId !== ownerId) return res.status(403).json({ error: 'Forbidden' });
    await item.update(req.body);
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: 'Update failed', detail: e.message });
  }
}

export async function deletePet(req, res) {
  try {
    const ownerId = req.user?.uid;
    const item = await Pet.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    if (item.ownerId !== ownerId) return res.status(403).json({ error: 'Forbidden' });
    await item.destroy();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Delete failed', detail: e.message });
  }
}
