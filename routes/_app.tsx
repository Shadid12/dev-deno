/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}