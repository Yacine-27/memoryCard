import { useState } from "react";

export default function CardsNoSetter({ onSubmit, cardsNo }) {
  const [value, setValue] = useState(cardsNo);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(Number(value));
  };
  return (
    <form className="cards-setter" onSubmit={handleSubmit}>
      <label htmlFor="cards-setter">No. of Cards : </label>
      <input
        type="number"
        id="cards-setter"
        name="cardsSetter"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="submit">Change Cards number:</button>
    </form>
  );
}
