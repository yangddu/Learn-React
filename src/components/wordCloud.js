import React from "react";
import ReactWordcloud from "react-wordcloud";

const wordsList = [
  {
    text: "Lorem Ipsum is simply dummy instry. ",
    value: 26,
    img: "https://blog.kakaocdn.net/dn/cBOYPU/btqSXjlLpaY/sNnDtHL2Hsfw7JHgkTRIjk/img.jpg"
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
  fontSizes: [25, 30],
  backgroundColor: "#333",
  getWordColor: (word) => (word.text === "There are many" ? "blue" : "green") // 각 텍스트에 대한 배경색 지정
};
const size = [400, 600];

function SimpleWordcloud() {
  return (
    <div style={{ height: 400, width: 600 }}>
      <div>
        <ReactWordcloud
          callbacks={callbacks}
          words={wordsList}
          options={options}
          size={size}
        />
      </div>
    </div>
  );
}

export default SimpleWordcloud;
