"use client";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

const Home = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSites = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
        if (!res.ok) throw new Error("Failed to fetch websites");
        const result = await res.json();

        console.log("✅ API result:", result);

        if (Array.isArray(result.data)) {
          setWebsites(result.data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <DotLottieReact
          src="https://lottie.host/85d7c3ff-a5af-4ba0-aced-d3c75753f1c0/siXo0yfAz4.lottie"
          loop
          autoplay
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <section className={styles.website}>
          {error ? (
            <p className={styles.error}>⚠️ {error}</p>
          ) : websites.length === 0 ? (
            <p>No matching websites found.</p>
          ) : (
            websites.map((site) => (
              <Card
                key={site.id}
                title={site.name || "Untitled Site"}
                url={site.baseUrl || "#"}
                src={site.thumbnail || "/placeholder.png"}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
