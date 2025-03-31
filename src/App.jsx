import { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import Score from "./components/Score";

function App() {
  const [cards, setCards] = useState([
    { text: "card 1", id: 1, isClicked: false },
    { text: "card 2", id: 2, isClicked: false },
    { text: "card 3", id: 3, isClicked: false },
    { text: "card 4", id: 4, isClicked: false },
    { text: "card 5", id: 5, isClicked: false },
  ]);
  const [highscore, setHighscore] = useState(0);
  const score = cards.filter((card) => card.isClicked).length;
  const findCardById = (id) => {
    return cards.find((card) => card.id === id);
  };
  const resetAllCards = () => {
    const cardsReseted = cards.map((card) => {
      return { ...card, isClicked: false };
    });
    setCards(cardsReseted);
  };
  const handleCardClick = (id) => {
    const card = findCardById(id);
    if (card.isClicked) {
      resetAllCards();
    } else {
      const newCards = cards.map((card) =>
        card.id === id ? { ...card, isClicked: true } : card
      );
      setCards(newCards);
      const newScore = newCards.filter((c) => c.isClicked).length;
      setHighscore((prevHighscore) => Math.max(prevHighscore, newScore));
    }
  };
  const randomizedCards = () => {
    const colonedCards = [...cards];
    for (let i = colonedCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [colonedCards[i], colonedCards[j]] = [colonedCards[j], colonedCards[i]];
    }
    return colonedCards;
  };
  return (
    <>
      <Score score={score} highscore={highscore} />
      <div className="cards">
        {randomizedCards().map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
