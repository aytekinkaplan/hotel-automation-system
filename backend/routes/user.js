// routes/user.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Kontrol edin: userController'da tüm fonksiyonlar doğru tanımlı mı?
router.post("/register", userController.register); // Bu fonksiyon tanımlı mı?
router.post("/login", userController.login); // Bu fonksiyon tanımlı mı?
router.get("/users", userController.getAllUsers); // Bu fonksiyon tanımlı mı?
router.get("/users/:id", userController.getUser); // Bu fonksiyon tanımlı mı?
router.put("/users/:id", userController.updateUser); // Bu fonksiyon tanımlı mı?
router.delete("/users/:id", userController.deleteUser); // Bu fonksiyon tanımlı mı?

module.exports = router;
