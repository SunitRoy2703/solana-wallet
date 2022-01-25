import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CreateAccount from "../components/CreateAccount";
import RestoreAccount from "../components/RestoreAccount";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>Wallet Tutorial</title>
        <meta name="description" content="Web3 tutorial for Solana crypto wallet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTitle>
        A simple, non-custodial crypto wallet for managing{" "}
        <a href="https://solana.com/">Solana</a> digital assets.
      </HomeTitle>

      <HomeGrid>
        <CreateAccount />
        <RestoreAccount />
      </HomeGrid>
    </>
  );
};

const HomeTitle = styled.h1`
  padding: 0 3rem;
  margin: 3rem 1rem;
  line-height: 1.25;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;

  & > a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const HomeGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
`;

export default Home;
