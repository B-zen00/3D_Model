import { useParams, Link } from "react-router-dom";
import ModelViewer from "../components/ModelViewer.jsx";

export default function ViewerPage() {
  const { file } = useParams();
  const filename = decodeURIComponent(file);
  const src = `${import.meta.env.BASE_URL}models/${filename}`;

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <div className="title">3D Viewer</div>
            <div className="subtitle">{filename}</div>
          </div>

          <div className="actions">
            <Link className="btn" to="/">
              ← 
            </Link>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="shell">
          <ModelViewer src={src} />
        </div>
      </main>
    </div>
  );
}
