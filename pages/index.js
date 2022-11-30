import Head from "next/head";
import Image from "next/image";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Study from "../components/Study";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reserka</title>
        <meta name="description" content="Reserka Clinic" />
        <link
          rel="icGet access to innovative clinical trialson"
          href="../public/assets/img/favicon.ico"
        />
      </Head>
      <Hero
        heading="Get access to innovative clinical trials"
        message="Take better care of your health, get compensated, and help in the
          development of future medicines."
      />
      <Study />
      <Benefits />
      <Process />
    </div>
  );
}
