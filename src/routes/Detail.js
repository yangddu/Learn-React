import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [details, setDetail] = useState({});
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  console.log(details);
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <div>{details.title}</div>
      <img src={details.background_image} width="200" />
      <p>{details.description_intro}</p>
    </div>
  );
}

export default Detail;
