import "@google/model-viewer";

export default function ModelViewer({ src }) {
  return (
    <div className="viewerWrap">
      <model-viewer
        src={src}
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-placement="floor"
        ar-scale="auto"
        shadow-intensity="1"
        exposure="1"
        touch-action="pan-y"
        style={{ width: "100%", height: "100%" }}
        alt="3D model"
      >
        {/* ปุ่ม AR สวยๆ */}
        <button slot="ar-button" className="arBtn">
          เปิด AR
        </button>
      </model-viewer>
    </div>
  );
}
