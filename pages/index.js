import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import BigImages from '../components/BigImages';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Rarity from '../components/Rarity';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KucingPunk</title>
        <meta
          name="description"
          content="KucingPunk is an NFT collection of 'kucing' or cats inspired by the immensely popular CryptoPunk."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <BigImages />
      <Rarity />
      <Footer />
    </Layout>
  );
}
