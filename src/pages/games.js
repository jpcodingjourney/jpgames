import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

const Games = () => {
  return (
    <>
      <Head>
        <title>JPGAMES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="text-3xl mt-8 mb-6">Try some game now!</div>

        <div className={styles.grid}>
          <a
            href="https://genshin.hoyoverse.com/en/home"
            className={`my-12 text-center ${styles.card}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Genshin Impact <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </a>

          <a
            href="https://undertale.com/"
            className={`my-12 text-center ${styles.card}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Undertale <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </a>

          <a
            href="https://www.pathofexile.com/"
            className={`my-12 text-center ${styles.card}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Path of Exile <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </a>

          <a
            href="https://pubg.com/"
            className={`my-12 text-center ${styles.card}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              PUBG: Battlegrounds <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </a>

          <a
            href="https://www.dota2.com/home"
            className={`my-12 text-center ${styles.card}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              DOTA 2 <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </a>
          <a
            href="https://worldofwarcraft.blizzard.com/"
            className={`my-12 text-center ${styles.card}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Wolrd of Warcraft <span>-&gt;</span>
            </h2>
            <p className={inter.className}></p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Games;
