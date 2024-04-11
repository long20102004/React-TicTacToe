import "./Log.css";
export default function Log({ turn }) {
  return (
    <div className="log-list">
      {turn.map((item, index) => (
        <div key={index} className="log-detail">
          {item}
        </div>
      ))}
    </div>
  );
}
