import "./Random.css";

const MyComponent = () => {
  //   const bgImageArr = [
  //     "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test1.png?raw=true",
  //     "https://cdn.shopify.com/s/files/1/0575/4532/6644/products/KakaoTalk_20220827_153301760_02_740x.jpg?v=1661590423",
  //     "https://blog.kakaocdn.net/dn/b80sq3/btqDli9NMy6/ZqnKTEIgpYxVfNyEkejZjK/img.png"
  //   ];
  const arr = [
    {
      text: "안녕 안녕 반가워 안녕 안녕 반가워",
      idx: 0,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test2.png?raw=true"
    },
    {
      text: "반갑습니다 222222",
      idx: 1,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test1.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하세요",
      idx: 2,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test3.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까 ?",
      idx: 3,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까2 ?",
      idx: 4,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까3 ?",
      idx: 5,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까4 ?",
      idx: 6,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까5 ?",
      idx: 7,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까6 ?",
      idx: 8,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까7 ?",
      idx: 9,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까8 ?",
      idx: 10,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    },
    {
      text: "안녕하세요 안녕하시렵니까9 ?",
      idx: 11,
      url: "https://github.com/LetterRabbit/front/blob/feature/editor/public/images/test4.png?raw=true"
    }
  ];
  const styledRandom = (idx) => {
    const hashKey = (13 / (idx + 1) + 0.2) % 1;
    const x = Math.floor(hashKey * 40);
    const y = Math.floor(hashKey * 40);
    const rotate = Math.floor(hashKey * (idx % 2 === 0 ? 30 : -30));
    return {
      transform:
        "rotate(" +
        rotate +
        "deg) " +
        "translateX(" +
        x +
        "px) " +
        "translateY(" +
        y +
        "px) "
    };
  };
  const bgImage = (idx) => {
    // const randomNumber = Math.floor(Math.random() * bgImageArr.length);
    const randomBg = arr[idx];
    return randomBg.url;
  };

  return (
    <div className="letters-wrap">
      {arr.map((item, idx) => {
        return (
          <div
            key={idx}
            style={styledRandom(idx)}
            data-content={bgImage(idx)}
            className="random"
          >
            {item.text}
          </div>
        );
      })}
    </div>
  );
};

export default MyComponent;
