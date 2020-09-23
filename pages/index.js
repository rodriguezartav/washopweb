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
      <div className="w-full mx-auto my-10">
        <video
          controls="true"
          className="mx-auto w-11/12 object-cover"
          src="https://d7cpe2rif0q4d.cloudfront.net/wakket_v1/mp4-wakket_v1.webm"
        />
      </div>

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
