import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import websites from "@/data/websites"; // adjust the path if needed

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <section className={styles.website}>
          {websites.map((site, index) => (
            <Card
              key={index}
              src={site.src}
              title={site.title}
              url={site.url}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
