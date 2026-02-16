import type { Express } from "express";
import express from "express";
import multer from "multer";

// =============================
// FILE UPLOAD CONFIG
// =============================
const uploadStorage = multer.diskStorage({
  destination: "server/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: uploadStorage });

// =============================
// REGISTER ROUTES
// =============================
export async function registerRoutes(app: Express) {

  const router = express.Router();

  // 🔵 Health Check
  router.get("/api/health", (req, res) => {
    res.json({ status: "OK" });
  });

  // 🔴 AI ANALYZE ROUTE
  router.post("/api/analyze", upload.single("report"), (req, res) => {

    const {
      name,
      age,
      gender,
      bloodGroup,
      symptoms,
      painLevel,
    } = req.body;

    let risk = "LOW";
    let recommendation = "Rest and monitor symptoms.";

    if (Number(painLevel) >= 4) {
      risk = "HIGH";
      recommendation = "Immediate doctor consultation required.";
    } else if (Number(painLevel) >= 2) {
      risk = "MEDIUM";
      recommendation = "Visit hospital if symptoms persist.";
    }

    res.json({
      success: true,
      risk,
      recommendation,
      fileUploaded: req.file?.filename || null,
    });
  });

  // ⭐⭐⭐ MOST IMPORTANT LINE ⭐⭐⭐
  app.use(router);
}
