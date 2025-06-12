"use client";
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ src, url }) => {
  return (
    <a
      href={`https://${url}${url.includes("?") ? "&" : "?"}ref=uxRefer.com`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.macButton}>
            <Image
              className={styles.logo}
              src="/mac-buttons.svg"
              alt="mac-buttons"
              width={10}
              height={10}
            />
            <Image
              className={styles.logo}
              src="/mac-buttons.svg"
              alt="mac-buttons"
              width={10}
              height={10}
            />
            <Image
              className={styles.logo}
              src="/mac-buttons.svg"
              alt="mac-buttons"
              width={10}
              height={10}
            />
          </div>

          <div className={styles.cardTitle}>
            <p>{url}</p>
          </div>

          <Image
            className={styles.arrow}
            src="/arrow_insert.svg"
            alt="Arrow"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={src}
            alt={url}
            width={400} // Set actual image width
            height={250} // Set actual image height
            layout="responsive" // Makes it scale correctly
            objectFit="cover" // Similar to CSS object-fit
            loading="lazy" // Lazy load images
          />
        </div>
      </div>
    </a>
  );
};

export default Card;
