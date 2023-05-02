import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>JPGAMES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex pt-8 lg:pt-12 2xl:pt-20">
        <div className="px-16">
          <div className="lg:px-96 lg:text-xl mb-16">
            Welcome to my personal game website, where I share a collection of
            games that I love to play. As a passionate gamer, I have a
            particular affinity for role-playing games (RPGs) and massively
            multiplayer online games (MMOs). I have curated a selection of my
            favorite titles in these genres, ranging from classic games to
            modern releases.
          </div>
          <div className="lg:px-96 lg:text-xl mb-10">
            My hope is to provide a platform for fellow gamers to discover and
            enjoy new games, as well as revisit old favorites. Whether you're an
            RPG enthusiast, an MMO veteran, or simply someone who loves to game,
            I invite you to explore the games on my website and join me in the
            wonderful world of gaming.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
