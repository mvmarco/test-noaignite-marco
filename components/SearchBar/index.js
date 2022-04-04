import styles from "./Search.module.css";

const SearchBar = (props) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...props}/>
    </div>
  );
}

export default SearchBar