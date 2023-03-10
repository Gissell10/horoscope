import Head from "next/head";
import Signes from "./components/Signes";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title> Horoscope </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.svg" />
      </Head>
      <main>
        <Hero />
        <Menu />
        <Signes />
      </main>
    </>
  );
}
