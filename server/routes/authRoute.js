const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authController");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12),
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

module.exports = router;
