import React from "react";
import { TagCloud } from "react-tagcloud";

function tagCloud() {
  const bgImageRandom = [
    "https://blog.kakaocdn.net/dn/cBOYPU/btqSXjlLpaY/sNnDtHL2Hsfw7JHgkTRIjk/img.jpg",
    "https://blog.kakaocdn.net/dn/b80sq3/btqDli9NMy6/ZqnKTEIgpYxVfNyEkejZjK/img.png",
    "https://cdn.shopify.com/s/files/1/0575/4532/6644/products/KakaoTalk_20220827_153301760_02_740x.jpg?v=1661590423",
    "https://cdn.shopify.com/s/files/1/0575/4532/6644/products/KakaoTalk_20220712_131510124_02_740x.jpg?v=1657771184"
  ];
  //   const randomValue =
  //     bgImageRandom[Math.floor(Math.random() * bgImageRandom.length)];
  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        fontSize: `${size / 6}em`,
        margin: "3px",
        padding: "3px",
        display: "inline-block",
        color: "white",
        backgroundImage:
          "url('https://blog.kakaocdn.net/dn/cBOYPU/btqSXjlLpaY/sNnDtHL2Hsfw7JHgkTRIjk/img.jpg')",
        // backgroundImage: `url(${randomValue})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "200px",
        height: "200px"
        // background: `${color}`
      }}
    >
      {tag.value}
    </span>
  );

  const data = [
    {
      value: "dsfsdfsdfsdfsdfs",
      count: 15,
      props: {
        style: {
          color: "red",
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0575/4532/6644/products/KakaoTalk_20220712_131510124_02_740x.jpg?v=1657771184)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "200px",
          height: "200px",
          padding: "20px"
        }
      }
    },
    {
      value: "hello",
      count: 18,
      props: {
        style: {
          color: "red",
          backgroundImage:
            "url(https://blog.kakaocdn.net/dn/cBOYPU/btqSXjlLpaY/sNnDtHL2Hsfw7JHgkTRIjk/img.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "200px",
          height: "200px",
          padding: "20px"
        }
      }
    },
    { value: "hi", count: 28 },
    { value: "hellllllloooooooo", count: 20 },
    { value: "sdfsdfsdfsdfsdfsdf", count: 28 }
  ];
  console.log(data[0].props.style.backgroundImage);
  return (
    <div style={{ border: "1px solid blue" }}>
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={data}
        // style={{ width: 300 }}
        className="myTagCloud"
        // renderer={customRenderer}
      />
    </div>
  );
}

export default tagCloud;
