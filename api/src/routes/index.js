const { Router } = require('express');
const { getDogsHandler, getDogsIdHandler } = require('../handlers/dogsHandlers');
const { postDogsHandler } = require('../handlers/postDogHandlers');

const router = Router();

router.get('/', getDogsHandler);
router.get('/:id', getDogsIdHandler);

router.post('/', postDogsHandler);

module.exports = router;
