import styles from "./Coins.module.css";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../context/";
import StarIcon from "../../img/StarIcon";

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  let {favourites, setFavourites} = useContext(Context);

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
    <div className={styles.coin_main}>
      <div className={styles.coin_icon_favourite} onClick={() => handleFavourite(name)}>
        <StarIcon filledIcon={favourites.includes(name) ? '#F39C12' : 'none'} />
      </div>
      <Link href="/coin/[id]" as={`/coin/${id}`}>
        <a>
          <div
            className={styles.coin_container}
            // style={{ backgroundColor: favourites.includes(name)?'yellow':'inherit'}}
          >
            <div className={styles.coin_row}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price}</p>
              <p className={styles.coin_volume}>{volume.toLocaleString()}</p>
              {/* if the price is negative it will show it in red otherwise in green */}
              {priceChange < 0 ? (
                <p className={`${styles.coin_percent} ${styles.red}`}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={`${styles.coin_percent} ${styles.green}`}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
              <p className={styles.coin_marketcap}>
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Coins;
