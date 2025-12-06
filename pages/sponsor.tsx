import useMediaQuery from '@mui/material/useMediaQuery';
import CTA from 'components/CTA';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Sponsor/Banner';
import Financial from 'components/Sponsor/Financial';
import HowItWorks from 'components/Sponsor/HowItWorks';
import PillarSolution from 'components/Sponsor/PillarSolution';
import Until from 'components/Sponsor/Until';
import type { NextPage } from 'next';
import Head from 'next/head';

const Sponsor: NextPage = () => {
  const matches = useMediaQuery('(max-width:912px)');

  return (
    <MainLayout>
      <Head>
        <title>Condominium Management Solutions - Property Management Platform</title>
        <meta
          name="description"
          content="Comprehensive property management solutions specifically designed for real estate condominiums. Streamline operations, tenant relations, and financial management."
        />
      </Head>
      <Banner imgSrc={`/sponsor/${matches ? 'mobile-bg' : 'bg'}.png`} />
      <Financial />
      <Until />
      <PillarSolution />
      <HowItWorks />
      <CTA />
    </MainLayout>
  );
};

export default Sponsor;
