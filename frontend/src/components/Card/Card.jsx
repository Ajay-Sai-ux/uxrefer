import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ src, title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink} // optional, to style the anchor tag
    >
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={`https://s.wordpress.com/mshots/v1/${url}?w=1800`} alt={title} />
        </div>
        <div className={styles.content}>
          <p>{title}</p>
          <img className={styles.arrow} src="/rightarrow.svg" alt="Arrow" />
        </div>
      </div>
    </a>
  );
};

export default Card;
