import fs from "node:fs";
import path from "node:path";

const MODELS_DIR = path.resolve("public/models");
const OUT_FILE = path.join(MODELS_DIR, "models.json");

const files = fs
  .readdirSync(MODELS_DIR)
  .filter((f) => f.toLowerCase().endsWith(".glb"))
  .sort((a, b) => a.localeCompare(b));

const data = files.map((file) => ({
  name: file.replace(/\.glb$/i, ""),
  file,
}));

fs.writeFileSync(OUT_FILE, JSON.stringify(data, null, 2));
console.log("✅ models.json generated");
