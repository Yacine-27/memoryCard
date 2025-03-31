import "../styles/card.css";
export default function Card({ id, src, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={src} alt="pokemon card" className="pokemon-img" />
    </div>
  );
}
