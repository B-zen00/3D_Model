import React, { useEffect } from "react";
import "@google/model-viewer";

export default function ModelViewer({ src }) {
  useEffect(() => {
    // กัน cache แปลก ๆ ในบางเคส (ไม่จำเป็นก็ได้)
  }, [src]);

  return (
    <div className="viewerWrap">
      <model-viewer
        src={src}
        camera-controls
        touch-action="pan-y"
        shadow-intensity="1"
        exposure="1"
        auto-rotate
        rotation-per-second="20deg"
        style={{ width: "100%", height: "100%" }}
        alt="3D model"
      >
        <div className="hint" slot="poster">
          Loading model…
        </div>
      </model-viewer>
    </div>
  );
}
