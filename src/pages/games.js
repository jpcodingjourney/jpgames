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
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>
        <div>games page games page games page games page games page</div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Games;
