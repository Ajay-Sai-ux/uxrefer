"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Dropdown from "@/components/Dropdown/Dropdown";

const Home = () => {
  const [websites, setWebsites] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [stylesList, setStyles] = useState([]);
  const [pageTypes, setPageTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedStyle, setSelectedStyle] = useState("all");
  const [selectedPageType, setSelectedPageType] = useState("all");

  // Fetch all dropdown values
  useEffect(() => {
    const fetchDropdownValues = async () => {
      const { data, error } = await supabase.from("sites").select("industries, styles, pageType");

      if (error) {
        console.error("Failed to fetch dropdown values:", error);
        return;
      }

      const industrySet = new Set();
      const styleSet = new Set();
      const pageTypeSet = new Set();

      data.forEach((site) => {
        site.industries?.forEach((item) => industrySet.add(item));
        site.styles?.forEach((item) => styleSet.add(item));
        site.pageType?.forEach((item) => pageTypeSet.add(item));
      });

      const format = (set, label) => [
        { label, value: "all" },
        ...Array.from(set).map((item) => ({ label: item, value: item })),
      ];

      setIndustries(format(industrySet, "All Industries"));
      setStyles(format(styleSet, "All Styles"));
      setPageTypes(format(pageTypeSet, "All Page Types"));
    };

    fetchDropdownValues();
    fetchSites(); // initial fetch
  }, []);

  const fetchSites = async (industry = selectedIndustry, style = selectedStyle, pageType = selectedPageType) => {
    setLoading(true);
    let query = supabase.from("sites").select("*");

    if (industry !== "all") query = query.contains("industries", [industry]);
    if (style !== "all") query = query.contains("styles", [style]);
    if (pageType !== "all") query = query.contains("pageType", [pageType]);

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching sites:", error);
    } else {
      setWebsites(data);
    }

    setLoading(false);
  };

  const handleIndustrySelect = (option) => {
    setSelectedIndustry(option.value);
    fetchSites(option.value, selectedStyle, selectedPageType);
  };

  const handleStyleSelect = (option) => {
    setSelectedStyle(option.value);
    fetchSites(selectedIndustry, option.value, selectedPageType);
  };

  const handlePageTypeSelect = (option) => {
    setSelectedPageType(option.value);
    fetchSites(selectedIndustry, selectedStyle, option.value);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <section className={styles.filters}>
          <Dropdown options={pageTypes} onSelect={handlePageTypeSelect} label="Page Type" />
          <Dropdown options={industries} onSelect={handleIndustrySelect} label="Industry" />
          <Dropdown options={stylesList} onSelect={handleStyleSelect} label="Style" />
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
                url={site.baseUrl}
                src={site.thumbnail}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
