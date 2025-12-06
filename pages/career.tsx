import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/career/Banner';
import Values from 'components/career/Values';
import Benefits from 'components/career/Benefits';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';

const Career: NextPage = () => {
  // const matches = useMediaQuery('(max-width:912px)');

  return (
    <MainLayout
      navbarProps={{
        // logoColor: matches ? 'white' : 'black',
        logoColor: 'black',
      }}>
      <Head>
        <title>Resources - Saaf Immo</title>
        <meta
          name="description"
          content="Access helpful property management resources, guides, best practices, and expert support for condominium management."
        />
      </Head>
      <Banner imgSrc="/career/hero.jpeg" />
      <Values />
      <Benefits imgSrc="/career/benefit-hero.png" />
    </MainLayout>
  );
};

export default Career;
