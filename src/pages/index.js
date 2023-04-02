import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@component/styles/Home.module.css";
import GameCarousel from "@component/components/GameCarousel";
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-slick";

// import Navbar from "@component/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>JPGAMES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.carousel}> */}
      <GameCarousel />
      {/* </div>
        </div>
      </main> */}
    </>
  );
}
