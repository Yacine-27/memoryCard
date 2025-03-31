import "../styles/card.css";
export default function Card({ id, text, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      {text}
    </div>
  );
}
