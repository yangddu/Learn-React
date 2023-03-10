import React from "react";
import ReactWordcloud from "react-wordcloud";

const wordsList = [
  {
    text: "Lorem Ipsum is simply dummy instry. ",
    value: 26
  },
  {
    text: "It is a long e when looking at its layout. ",
    value: 28
  },
  {
    text: "The standard chunk of Lorem I",
    value: 26
  },
  {
    text: "There are many ",
    value: 30
  }
];

const callbacks = {
  onWordClick: console.log,
  onWordMouseOver: console.log,
  getWordTooltip: (word) =>
    `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`
};
const options = {
  rotations: 3,
  rotationAngles: [0, 0],
  fontSizes: [25, 30]
};
const size = [400, 600];

function SimpleWordcloud() {
  return (
    <ReactWordcloud
      callbacks={callbacks}
      words={wordsList}
      options={options}
      size={size}
    />
  );
}

export default SimpleWordcloud;
