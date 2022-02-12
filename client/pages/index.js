import Head from "next/head";
import { TypographyBlock } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TypographyBlock />
      </main>
    </div>
  );
}
