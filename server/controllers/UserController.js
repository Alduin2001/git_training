const express = require("express");
const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const { where } = require("sequelize");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class UserController {
  static async createUser(req, res) {
    const { firstname, lastname, login, password } = req.body;

    const finded = await User.findOne({ where: { login: login } });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    if (finded) {
      res.json({ msg: "Пользователь уже существует" });
    } else {
      const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        login: login,
        password: hashed,
      });
      user
        ? res.json({ msg: "Пользователь добавлен" })
        : res.json({ msg: "Не удалось" });
    }
  }
  static async getAll() {}
  static async getOne(req, res) {}
  static async updateUser() {}
  static async deleteUser() {}
  static async Auth(req, res) {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login: login } });
    if (bcrypt.compareSync(password, user.password)) {
      const to_token = {
        user_id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        login: user.login,
      };
      const token = jwt.sign(to_token, process.env.SECRET_KEY, {
        expiresIn: "1m",
      });
      const updated_token = await User.update(
        { auth_token: token },
        { where: { login: login } }
      );
      if (updated_token) {
        return res.json({ token: token });
      }
    } else {
      return res.json({ msg: "Ошибка" });
    }
  }
  static async Logout(req, res) {
    const { token } = req.body;
    
    const logout_user = await User.update(
      { auth_token: "" },
      { where: { auth_token: token } }
    );
    logout_user ? res.json({ msg: "Exit" }) : res.json({ msg: "Error" });
  }
}
module.exports = UserController;
