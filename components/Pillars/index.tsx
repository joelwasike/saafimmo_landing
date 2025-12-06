import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import PillarCard from './components/PillarCard';
import styles from './Pillar.module.scss';

interface iPillarCards {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  path?: string;
}

const pillarCardsContent: iPillarCards[] = [
  {
    image: '/alexsander-barhon-iNBpHBTepHw-unsplash.jpg',
    title: 'Smart Property Management',
    subtitle: 'Automated Operations & Maintenance Tracking',
    description:
      'Streamline your property operations with intelligent automation, comprehensive maintenance tracking, and real-time monitoring of all your properties in one unified platform.',
  },
  {
    image: '/breno-assis-r3WAWU5Fi5Q-unsplash.jpg',
    title: 'Tenant Management',
    subtitle: 'Lease Management & Communication Hub',
    description:
      'Manage all tenant relationships from lease signing to renewal. Automated rent collection, maintenance requests, and seamless communication tools keep everything organized.',
  },
  {
    image: '/colin-watts-PzdCBU9H7F0-unsplash.jpg',
    title: 'Financial Analytics',
    subtitle: 'Real-Time Reporting & Revenue Insights',
    description:
      'Get comprehensive financial insights with automated reporting, expense tracking, and revenue analytics. Make data-driven decisions with customizable dashboards and reports.',
  },
  {
    image: '/safwan-c-k-XFlOH4PkrPk-unsplash.jpg',
    title: 'Portfolio Overview',
    subtitle: 'Multi-Property Management Made Simple',
    description:
      'Manage your entire property portfolio from a single dashboard. Track performance, occupancy rates, and financial metrics across all your properties with ease.',
    path: '/sponsor',
  },
];

const Pillars = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/sponsor');
  };

  return (
    <section className={styles.pillars}>
      <h3>Platform Features</h3>
      <div className={styles['pillars-content']}>
        <Grid container>
          {pillarCardsContent.map(({ title, subtitle, description, image, path }, index) => {
            const isLast = index === pillarCardsContent.length - 1;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index} sx={{ display: 'flex' }}>
                <div
                  onClick={isLast ? handleNavigate : undefined}
                  style={{ cursor: isLast ? 'pointer' : 'default', width: '100%', height: '100%' }}>
                  <PillarCard
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    imageSrc={image}
                    styles={styles}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Pillars;
