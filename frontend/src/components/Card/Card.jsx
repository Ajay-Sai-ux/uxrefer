"use client";
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ src, title, url }) => {
  return (
    <a
      href={`${url}?ref=uxRefer.com`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={src}
            alt={title}
            width={400} // Set actual image width
            height={250} // Set actual image height
            layout="responsive" // Makes it scale correctly
            objectFit="cover" // Similar to CSS object-fit
            loading="lazy" // Lazy load images
          />
        </div>
        <div className={styles.content}>
          <p>{title}</p>
          <Image
            className={styles.arrow}
            src="/rightarrow.svg"
            alt="Arrow"
            width={16}
            height={16}
          />
        </div>
      </div>
    </a>
  );
};

export default Card;
