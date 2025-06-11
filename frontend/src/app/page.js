
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
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
            <p>Loading...</p>
          ) : (
            websites.map((site, index) => (
              <Card
                key={site.id}
                title={site.name}
                url={site.base_url}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}
