"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

export default function Home() {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Added this

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("sites").select("*");

      if (error) {
        console.error("Supabase fetch error:", error);
      } else {
        console.log("✅ Supabase data:", data);
        setWebsites(data);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <section className={styles.website}>
          {loading ? (
            <DotLottieReact
              src="https://lottie.host/85d7c3ff-a5af-4ba0-aced-d3c75753f1c0/siXo0yfAz4.lottie"
              loop
              autoplay
            />
            
          ) : (
            websites.map((sites, index) => (
              <Card key={sites.id} title={sites.name} url={sites.base_url} src={sites.thumbnail} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}
