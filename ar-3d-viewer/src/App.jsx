import React, { useMemo, useState } from "react";
import ModelViewer from "./components/ModelViewer.jsx";
import ModelPicker from "./components/ModelPicker.jsx";

export default function App() {
  const models = useMemo(
    () => [
      { name: "Sample 1", src: `${import.meta.env.BASE_URL}models/3DModel.glb` },
    ],
    []
  );

  const [activeSrc, setActiveSrc] = useState(models[0].src);

  return (
  <div className="page">
    <header className="topbar">
      <div className="topbarInner">
        <div className="brand">
          <div className="title">3D Viewer</div>
          <div className="subtitle">React + GLB</div>
        </div>

        <div className="actions">
          <ModelPicker
            models={models}
            value={activeId}   // หรือ activeSrc แล้วแต่ของ Zen
            onChange={setActiveId}
          />
        </div>
      </div>
    </header>

    <main className="content">
      <div className="shell">
        <ModelViewer src={active?.src} />
      </div>
    </main>
  </div>
  );

}
