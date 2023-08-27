import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Julia Kombucha</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header
          title="Julia Kombucha"
          logo="/logo-header.png"
          alt="Julia Kombucha"
        />
        <p className="description">
          Gostoso e refrescante.
          <br />
          Valinhos, SP
          <br />
          Instagram: @juliakombuchareal
          <br />
          WhatsApp: (19)98999-4753
        </p>
      </main>

      <Footer />
    </div>
  );
}
