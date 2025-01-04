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

    if (!selected) return;

    setSubmit((cur) => !submit);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      {!submit ? (
        <div className="flex flex-col items-start text-sm sm:text-[16px] w-[21rem] sm:w-[26rem] gap-2 sm:gap-4 bg-gradient-to-b from-blue to-dark px-6 py-8 rounded-2xl">
          <img
            src="/images/icon-star.svg"
            className="bg-blue rounded-full p-4"
            alt="Icon"
          />
          <h1 className="text-white text-3xl">How did we do?</h1>
          <p className="text-grey opacity-80">
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
        <div className="flex flex-col items-center gap-4 w-[20rem] sm:w-[26rem] bg-gradient-to-b from-blue to-dark px-6 py-10 rounded-2xl">
          <img src="/images/illustration-thank-you.svg" alt="Illust" />
          <p className="text-primary bg-blue opacity-80 px-5 py-2 rounded-full m-3">
            You selected {selected} out of 5
          </p>
          <h1 className="text-white text-3xl">Thank you!</h1>
          <p className="text-grey text-center opacity-80 text-sm sm:text-[16px]">
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
    <div className="flex gap-4 sm:gap-5 mt-2">
      {ratings.map((rating, i) => (
        <button
          key={i}
          onClick={() => handleClick(rating)}
          className={`bg-blue rounded-full p-[0.5rem] w-11 h-11 sm:w-12 sm:h-12 sm:p-[1.7rem] flex items-center justify-center ${
            selected === rating
              ? `bg-primary text-blue`
              : `text-grey hover:bg-white hover:text-blue hover:transition-colors`
          }`}
        >
          {rating}
        </button>
      ))}
    </div>
  );
}
