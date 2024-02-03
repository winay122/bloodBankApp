const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

// routes
// add inventory || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware, getInventoryController);

//GET Donar RECORDS
router.get("/get-donars", authMiddelware, getDonarsController);

// Get hospital record
router.get("/get-hospitals", authMiddelware, getHospitalController);

//GEt hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);

//Get organisation records
router.get("/get-organisation", authMiddelware, getOrgnaisationController);

// GEt organistion record for hospital
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddelware,
  getOrgnaisationForHospitalController
);

//GET Recent blood records
router.get(
  "/get-recent-inventory",
  authMiddelware,
  getRecentInventoryController
);

module.exports = router;
