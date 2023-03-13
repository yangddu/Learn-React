import "./Random.css";

const MyComponent = () => {
  const arr = [
    {
      text: "좋아좋아 하모니카 솔로 ~~",
      idx: 0,
      url: "https://blog.kakaocdn.net/dn/cBOYPU/btqSXjlLpaY/sNnDtHL2Hsfw7JHgkTRIjk/img.jpg"
    },
    {
      text: "꽃송이가 꽃송이가 꽃송이가 그래그래 피었네",
      idx: 0,
      url: "https://cdn.shopify.com/s/files/1/0575/4532/6644/products/KakaoTalk_20220827_153301760_02_740x.jpg?v=1661590423"
    },
    {
      text: "거리에 사람들 ~ 수많은 사람들 ~ 그래 나는 네게 얼마만큼 특별한건지 그게 어려운거야 ~",
      idx: 0,
      url: "https://blog.kakaocdn.net/dn/b80sq3/btqDli9NMy6/ZqnKTEIgpYxVfNyEkejZjK/img.png"
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
  return (
    <div>
      {arr.map((item, idx) => {
        return (
          <div key={idx} style={styledRandom(idx)} className="random">
            {item.text}
          </div>
        );
      })}
    </div>
  );
};

export default MyComponent;
