import { Grid } from '@mui/material';
import { SolutionType } from 'types/solution';
import styles from './PillarSolution.module.scss';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
const solutions: SolutionType[] = [
  {
    title: 'Condominium Unit Management',
    icon: <CachedOutlinedIcon htmlColor="#2563eb" />,
    content:
      'Efficiently manage all condominium units with automated workflows, lease tracking, and occupancy monitoring. Keep detailed records of each unit\'s status and history.',
  },
  {
    title: 'Homeowner Association (HOA) Tools',
    icon: <KeyOutlinedIcon htmlColor="#2563eb" />,
    content:
      'Complete HOA management tools including board meeting coordination, document management, voting systems, and transparent financial reporting for all residents.',
  },
  {
    title: 'Maintenance & Facilities Management',
    icon: <PriceCheckIcon htmlColor="#2563eb" />,
    content:
      'Streamline maintenance requests, track work orders, manage vendors, and maintain common areas. Automated scheduling and communication keep everything running smoothly.',
  },
];

const PillarSolution = () => {
  return (
    <section id="solutions" className={styles['pillar-solution']}>
      <div className={styles['pillar-solution-header']}>
        <h3>Condominium Management Solutions</h3>
      </div>
      <div className={styles['pillar-solution-content']}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['pillar-solution-content-item']}>
                {solution.icon}
                {/* <h6>LOREM IPSUM</h6> */}
                <h3>{solution.title}</h3>
                <p>{solution.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default PillarSolution;
