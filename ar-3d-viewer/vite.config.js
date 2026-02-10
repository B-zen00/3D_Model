import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/3D_Model/", // 👈 ต้องตรงกับชื่อ repo
});
