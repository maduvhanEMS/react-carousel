import React, { useState } from "react";
import Card from "./Card";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { CSSTransition } from "react-transition-group";

import Arrows from "./Arrow";
import { data } from "./Data";

function Cards({ data, startingIndex }) {
  const [activeIndex, setActiveIndex] = useState(startingIndex);
  const [direction, setDirection] = useState("");

  const nextCard = () => {
    var newActiveIndex = activeIndex + 1;
    setActiveIndex(newActiveIndex > data.length - 1 ? 0 : newActiveIndex);
    setDirection("right");
  };

  const prevCard = () => {
    var newActiveIndex = activeIndex - 1;
    setActiveIndex(newActiveIndex < 0 ? data.length - 1 : newActiveIndex);
    setDirection("left");
  };

  const determineClass = (levelIndex) => {
    if (levelIndex === 0) {
      return "level0";
    } else if (levelIndex === 1) {
      return "level1";
    } else if (levelIndex === -1) {
      return "level-1";
    } else if (levelIndex === -2) {
      return "level-2";
    }

    return "level2";
  };

  const generateCards = (activeIndex) => {
    let cards = [];

    for (var i = activeIndex - 2; i < activeIndex + 3; i++) {
      var index = i;
      if (i < 0) {
        index = data.length + i;
      } else if (i >= data.length) {
        index = i % data.length;
      }

      cards.push(
        <CSSTransition>
          <Card
            {...data[index]}
            key={index}
            cardStyle={determineClass(activeIndex - i)}
            bodyStyle={
              determineClass(activeIndex - i) === "level0" &&
              `trans-${direction}`
            }
          />
        </CSSTransition>
      );
    }
    return cards;
  };

  return (
    <div className="container">
      <div className="container-header">
        What are you <span>hear to do</span>
      </div>
      <div className="container-button">
        <Arrows
          direction="left"
          icon={<MdKeyboardArrowLeft />}
          handleClick={prevCard}
        />
        <Arrows
          direction="right"
          icon={<MdKeyboardArrowRight />}
          handleClick={nextCard}
        />
      </div>
      <div className="cards-container">{generateCards(activeIndex)}</div>
    </div>
  );
}

export default Cards;

Cards.defaultProps = {
  data: data,
  startingIndex: 0,
};
