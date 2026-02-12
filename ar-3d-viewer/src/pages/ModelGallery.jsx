import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ModelGallery() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}models/models.json`)
      .then(res => res.json())
      .then(setModels);
  }, []);

  return (
    <div className="gallery">
      <h1>เลือกโมเดล</h1>

      <div className="grid">
        {models.map(m => (
          <Link
            key={m.file}
            to={`/viewer/${m.file}`}
            className="model-card"
          >
            {m.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
