import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, query, useFetch } from "data/Api";

import Layout from "views/Layout";
import Hero from "comps/marketing/Hero";
import Feature from "comps/marketing/Feature";
import Logos from "comps/marketing/Logos";
import Sellos from "comps/marketing/Sellos";
import Centros from "comps/marketing/Centros";
import Publicidad from "comps/marketing/Publicidad";
import Cta from "comps/marketing/Cta";
import Cta2 from "comps/marketing/Cta2";
import Faq from "comps/marketing/Faq";
import Footer from "comps/marketing/Footer";

export default function Home(props) {
  const router = useRouter();

  return (
    <Layout>
      <Hero />
      <Feature />
      <Sellos />
      <Cta />
      <Centros />
      <Publicidad />

      <Cta2 />
      <Faq />
      <Footer />
    </Layout>
  );
}
