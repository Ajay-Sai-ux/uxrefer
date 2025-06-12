"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Dropdown from "@/components/Dropdown/Dropdown";

export default function Home() {
  const [websites, setWebsites] = useState([]);
  const [industries, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all unique industries
  useEffect(() => {
    const fetchTags = async () => {
      const { data, error } = await supabase.from("sites").select("industries");

      if (error) {
        console.error("Failed to fetch industries:", error);
        return;
      }

      const tagSet = new Set();
      data.forEach((site) => {
        site.industries?.forEach((tag) => tagSet.add(tag));
      });

      const dropdownOptions = Array.from(tagSet).map((tag) => ({
        label: tag,
        value: tag,
      }));

      setTags([{ label: "All", value: "all" }, ...dropdownOptions]);
    };

    fetchTags();
    fetchSites(); // initial data load
  }, []);

  const fetchSites = async (tag = "all") => {
    setLoading(true);

    let query = supabase.from("sites").select("*");

    if (tag !== "all") {
      query = query.contains("industries", [tag]);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching sites:", error);
    } else {
      setWebsites(data);
    }

    setLoading(false);
  };

  const handleSelect = (option) => {
    fetchSites(option.value);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <section className={styles.filters}>
          <Dropdown  options={industries} onSelect={handleSelect} />
          <div className={styles.line}></div>
          <Dropdown options={industries} onSelect={handleSelect} />
          <div className={styles.line}></div>
          <Dropdown  options={industries} onSelect={handleSelect} />
        </section>

        <section className={styles.website}>
          {loading ? (
            <DotLottieReact
              src="https://lottie.host/85d7c3ff-a5af-4ba0-aced-d3c75753f1c0/siXo0yfAz4.lottie"
              loop
              autoplay
            />
          ) : websites.length === 0 ? (
            <p>No matching websites found.</p>
          ) : (
            websites.map((site) => (
              <Card
                key={site.id}
                title={site.name}
                url={site.base_url}
                src={site.thumbnail}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}
