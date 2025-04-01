import { useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card";
import Score from "./components/Score";
import CardsNoSetter from "./components/CardsNoSetter";
import Header from "./components/Header.jsx";

import { getMultiplePokemonImages } from "./utilities";

function App() {
  const [cards, setCards] = useState([]);
  const [cardsNo, setCardsNo] = useState(8);
  const [highscore, setHighscore] = useState(0);
  useEffect(() => {
    let ignore = false;
    getMultiplePokemonImages(cardsNo).then((data) => {
      if (!ignore) {
        setCards(
          data.map((src) => {
            return { src: src, id: crypto.randomUUID(), isClicked: false };
          })
        );
      }
    });
    return () => {
      ignore = true;
    };
  }, [cardsNo]);
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
  const handleCardsNoChange = (newNumber) => {
    setCardsNo(newNumber);
  };
  const score = cards.filter((card) => card.isClicked).length;

  return (
    <>
      <Header />
      <CardsNoSetter onSubmit={handleCardsNoChange} cardsNo={cardsNo} />
      <Score score={score} highscore={highscore} />
      <div className="cards">
        {randomizedCards().map((card) => (
          <Card
            key={card.id}
            id={card.id}
            src={card.src}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
