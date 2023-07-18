const express = require('express');
const router = express.Router();
const tokenRouter = require('./exchange');

// const {isLoggined , isAdmin} = require('./../middlewares/auth')
const error = require('./../middlewares/error');

router.use('/token', tokenRouter);

// router.use('/user', isLoggined, userRouter);
// router.use('/admin', isLoggined, isAdmin, adminRouter);

router.use(error);

module.exports = router;