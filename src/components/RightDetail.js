import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";

const RightDetail = (props) => {
  
  console.log(props);
  const [yaziDetayi, setYaziListesi] = useState({});
  const { id } = useParams();
  // const [yorumlar, setYorumlar] = useState([]);


  useEffect(() => {
    axios
      .get(`https://6359a65738725a1746b58fe0.mockapi.io/posts/${id}`)
      .then((res) => {
        setYaziListesi(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

 
  }, []);

  return <>
  <h2 className="ui header">{yaziDetayi.title}</h2>
  <p>{yaziDetayi.created_at}</p>
      <p>{yaziDetayi.content}</p>
  </>
};

export default RightDetail;
