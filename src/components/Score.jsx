import "../styles/score.css";

export default function Score({ score, highscore }) {
  return (
    <div className="score">
      <h3> Current score : {score}</h3>
      <h3> High score : {highscore}</h3>
    </div>
  );
}
