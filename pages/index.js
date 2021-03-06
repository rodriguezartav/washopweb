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
          preload="yes"
          playsinline
          controls="true"
          className="mx-auto max-w-xl2 w-10/12 object-cover"
        >
          <source src="wakket_v2/mp4-wakket_v2.mp4" type="video/mp4" />

          <source
            type="video/webm"
            src="https://d7cpe2rif0q4d.cloudfront.net/wakket_v1/mp4-wakket_v1.webm"
          />
        </video>
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
