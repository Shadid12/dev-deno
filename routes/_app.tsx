/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Navbar from "../islands/Navbar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
      </Head>
      <Navbar />
      <Component />
    </>
  );
}