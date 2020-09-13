import React from "react";
import Head from "next/head";
import Footer from "../comps/Footer";
import Header from "../comps/Header";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Head>
        <title>waShop.fi</title>

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={props.text || "Venda en linea con WhatsApp"}
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <meta property="og:site_name" content="waShop.fi" key="ogsitename" />
        <meta
          property="og:title"
          content={
            props.title
              ? `wakket.com: ${props.title}`
              : "Tienda en línea y Mercado de WhatsApp"
          }
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "Venda en línea atravez de whatsapp. Wakket esta hecho para vender desde su teléfono celular sin tener que aprender nada nuevo."
          }
          key="ogdesc"
        />

        <meta property="og:image" content="http://wakket.com/hero3.png" />
      </Head>

      <Header onCartClick={props.onCartClick} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
