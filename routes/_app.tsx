/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";
import FreshAndFauna from "../components/FreshAndFauna.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Navbar />
      <Component />
      <FreshAndFauna />
    </>
  );
}