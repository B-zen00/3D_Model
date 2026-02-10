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
        <div className="brand">
          <div className="title">3D Viewer</div>
        </div>

        <ModelPicker
          models={models}
          value={activeSrc}
          onChange={setActiveSrc}
        />
      </header>

      <main className="content">
        <ModelViewer src={activeSrc} />
      </main>
    </div>
  );
}
