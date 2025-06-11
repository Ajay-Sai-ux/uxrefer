import styles from "./Card.module.css";


const Card = ({ src, title, url }) => {
  return (
    <a
      href={`${url}?ref=uxRefer.com`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink} // optional, to style the anchor tag
    >
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={src}
            alt={title}
          />
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
