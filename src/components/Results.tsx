
interface ResultsProps {
  score: number;
  total: number;
  cheatUseCount: number;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ score, total, cheatUseCount, onRestart }) => {
  let message = '';
  if (cheatUseCount > 0) {
    message = `You got ${score}/${total} correct. But you used the cheat sheet ${cheatUseCount} time${cheatUseCount > 1 ? 's' : ''}!`;
  } else {
    if (score === total) {
      message = 'Perfect! You got them all correct!';
    } else if (score >= 8) {
      message = 'Excellent! Almost perfect!';
    } else if (score >= 6) {
      message = 'Great job! Keep practicing!';
    } else if (score >= 4) {
      message = 'Good effort! Try again to improve!';
    } else {
      message = 'Keep practicing! You\'ll get better!';
    }
  }

  return (
    <div className="results show" id="results">
      <h2>Finished!</h2>
      <div className="results-score" id="results-score">{score}/{total}</div>
      <div className="results-message" id="results-message">{message}</div>
      <button className="restart-button" id="restart-btn" onClick={onRestart}>Try Again</button>
    </div>
  );
};

export default Results;
