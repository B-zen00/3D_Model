import React from "react";

export default function ModelPicker({ models, value, onChange }) {
  return (
    <div className="picker">
      <label className="label">Model</label>
      <select
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {models.map((m) => (
          <option key={m.src} value={m.src}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}
