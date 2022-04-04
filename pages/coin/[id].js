import Layout from "../../components/Layout/Layout";
import styles from "./Coin.module.css";
import { useContext } from "react";
import { Context } from "../../context/";
import StarIcon from "../../img/StarIcon";

const Coin = ({ coin }) => {
  let { favourites, setFavourites } = useContext(Context);
    function handleFavourite(sym) {
      let newF = [...favourites];
      let present = favourites.indexOf(sym);
      if (present > -1) {
        newF.splice(present, 1);
      } else {
        newF.push(sym);
      }
      setFavourites(newF);
    }
  return (
    <Layout>
      <div
        className={styles.coin_page}
       
      >
        <div className={styles.coin_container}>
          <div
            className={styles.coin_icon_favourite}
            onClick={() => handleFavourite(coin.name)}
          >
            <StarIcon
              filledIcon={favourites.includes(coin.name) ? "#F39C12" : "none"}
            />
          </div>

          <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol}</p>
          <p className={styles.coin_current}>
            {coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
