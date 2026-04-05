export default function RadioGroup({ field, opts, data, set }) {
  return (
    <div className="radio-group">
      {opts.map(v => (
        <div 
          key={v} 
          className={`radio-btn ${data[field] === v ? "active" : ""}`} 
          onClick={() => set(field, v)}
        >
          {v}
        </div>
      ))}
    </div>
  );
}
