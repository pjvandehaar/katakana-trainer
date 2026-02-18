
interface FlashcardProps {
  word: string;
  slideClass: string;
  style?: React.CSSProperties;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, slideClass, style }) => {
  return (
    <div className={`flashcard ${slideClass}`} style={style}>
      <div className="flashcard-word" dangerouslySetInnerHTML={{ __html: word }}></div>
    </div>
  );
};

export default Flashcard;
