import { Link } from "react-router-dom";

// ดึงรายชื่อไฟล์ .glb ใน public/models
const files = import.meta.glob("/public/models/*.glb");

export default function ModelGallery() {
  const list = Object.keys(files).map((p) => p.split("/").pop());

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ margin: "0 0 12px" }}>เลือกโมเดล</h2>

      <div style={{ display: "grid", gap: 10, maxWidth: 520 }}>
        {list.map((name) => (
          <Link
            key={name}
            to={`/viewer/${encodeURIComponent(name)}`}
            style={{
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,.15)",
              borderRadius: 12,
              padding: 12,
              color: "#111",
              background: "#fff",
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
