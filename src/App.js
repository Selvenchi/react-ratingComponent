import { useState } from "react";

export default function App() {
  return <Rating />;
}

function Rating() {
  const ratings = [1, 2, 3, 4, 5];
  const [submit, setSubmit] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleClick(rating) {
    setSelected(rating);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit((cur) => !submit);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {!submit ? (
        <div className="flex flex-col items-start gap-4 w-[26rem] bg-gradient-to-b from-blue to-dark p-10 rounded-2xl">
          <img
            src="/images/icon-star.svg"
            className="bg-blue rounded-full p-4"
            alt="Icon"
          />
          <h1 className="text-white text-3xl">How did we do?</h1>
          <p className="text-grey opacity-60">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ButtonList
            ratings={ratings}
            selected={selected}
            handleClick={handleClick}
          />
          <button
            className="bg-primary w-full py-2 rounded-full font-bold text-sm tracking-widest mt-3 hover:bg-white hover:transition-colors"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 w-[26rem] bg-gradient-to-b from-blue to-dark p-10 rounded-2xl">
          <img src="/images/illustration-thank-you.svg" alt="Illust" />
          <p className="text-primary bg-blue opacity-80 px-5 py-2 rounded-full m-3">
            You selected {selected} out of 5
          </p>
          <h1 className="text-white text-3xl">Thank you!</h1>
          <p className="text-grey text-center opacity-60">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}

function ButtonList({ ratings, selected, handleClick }) {
  return (
    <div className="flex gap-4 mt-2">
      {ratings.map((rating, i) => (
        <button
          key={i}
          onClick={() => handleClick(rating)}
          className={`text-grey bg-blue rounded-full p-[1.7rem] w-12 h-12 flex items-center justify-center ${
            selected !== rating
              ? `hover:bg-white hover:text-blue hover:transition-colors`
              : ``
          } ${selected === rating ? `bg-primary text-blue` : ``}`}
        >
          {rating}
        </button>
      ))}
    </div>
  );
}
