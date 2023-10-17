import styles from "./CountryCard.module.css";

export const CountryCard = ({ country, description, imgUrl }) => {
  return (
    <div className="country-imgbx">
      <img src={imgUrl} className={styles.Cardimg} />
      <div className="country-txtx">
        <h4>{country}</h4>
      </div>
    </div>
  );
};
