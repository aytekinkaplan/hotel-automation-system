const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController"); // Doğru dosya yolunu kontrol edin

// Route tanımlamaları
router.get("/", hotelController.getAllHotels); // Tüm otelleri getir
router.get("/:id", hotelController.getHotel); // Belirli bir oteli ID ile getir
router.post("/", hotelController.createHotel); // Yeni otel oluştur
router.put("/:id", hotelController.updateHotel); // Otel bilgilerini güncelle
router.delete("/:id", hotelController.deleteHotel); // Oteli sil

module.exports = router;
