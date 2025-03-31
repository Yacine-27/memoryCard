export default function Score({ score, highscore }) {
  return (
    <div className="score">
      <div> Current score : {score}</div>
      <div> High score : {highscore}</div>
    </div>
  );
}
