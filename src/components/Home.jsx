import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";

const Home = () => {
  const [coindetails, setCoinDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const baseUrl =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20";
        const { data } = await axios.get(`${baseUrl}posts`);
        console.log(data);
        setCoinDetails(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="home">
      {loading ? <Loader/> : (
        coindetails.map((coin, _) => (
          <Card
            id={coin.id}
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
          />
        ))
      )}
    </div>
  );
};

export default Home;
