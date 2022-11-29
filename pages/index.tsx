import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Nauman's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <h1 className="text-red-500">nextjs dev portfolio</h1>
    </div>
  );
}
