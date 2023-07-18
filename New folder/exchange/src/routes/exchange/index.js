const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.post(
  '/addToken',
  validator.addTokenValidator(),
  controller.validate,
  controller.addToken
);

router.post(
  '/createPair',
  validator.createPair(),
  controller.validate,
  controller.createPair
);
router.post(
  '/getAddress',

  controller.validate,
  controller.getAddress
);

router.post(
  '/getTokenPrice',
  controller.validate,
  controller.getTokenPrice
);

router.post(
  '/setPricesWithAmounts',
  controller.validate,
  controller.setPricesWithAmounts
);
router.post(
  '/tokenValidation',

  controller.validate,
  controller.tokenValidation
);

module.exports = router;  