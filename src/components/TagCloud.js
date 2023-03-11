import React from "react";
import { TagCloud } from "react-tagcloud";

function tagCloud() {
  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        fontSize: `${size / 6}em`,
        margin: "3px",
        padding: "3px",
        display: "inline-block",
        color: "white",
        // backgroundImage: URL(
        //   "https://blog.kakaocdn.net/dn/cBOYPU/btqSXjlLpaY/sNnDtHL2Hsfw7JHgkTRIjk/img.jpg"
        // ),
        backgroundImage:
          "url('https://blog.kakaocdn.net/dn/cBOYPU/btqSXjlLpaY/sNnDtHL2Hsfw7JHgkTRIjk/img.jpg')",
        width: "200px",
        height: "200px"
        // background: `${color}`
      }}
    >
      {tag.value}
    </span>
  );

  const data = [
    { value: "jQuery", count: 15 },
    { value: "MongoDB", count: 18 },
    { value: "JavaScript", count: 28 },
    { value: "React", count: 20 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25 }
  ];
  return (
    <div style={{ border: "1px solid blue" }}>
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={data}
        // style={{ width: 300 }}
        className="myTagCloud"
        renderer={customRenderer}
      />
    </div>
  );
}

export default tagCloud;
