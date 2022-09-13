import { AppProps } from "$fresh/server.ts";
import FreshAndFauna from "../components/FreshAndFauna.tsx";
import NavComponent from "../components/NavComponent.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <NavComponent />
      <Component />
      <FreshAndFauna />
    </>
  );
}