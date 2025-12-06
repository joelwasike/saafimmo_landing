import { Grid } from '@mui/material';
import styles from './Values.module.scss';
import { ValueType } from 'types/value';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

const values: ValueType[] = [
  {
    title: 'Guides & Tutorials',
    icon: <LocalPoliceIcon htmlColor="#2563eb" />,
    subTitle: 'Step-by-step guides for property management tasks.',
  },
  {
    title: 'Best Practices',
    icon: <BorderClearIcon htmlColor="#2563eb" />,
    subTitle: 'Industry-proven strategies and workflows.',
  },
  {
    title: 'Video Library',
    icon: <EmojiPeopleIcon htmlColor="#2563eb" />,
    subTitle: 'Watch tutorials and feature demonstrations.',
  },
  {
    title: 'Community Support',
    icon: <StackedLineChartIcon htmlColor="#2563eb" />,
    subTitle: 'Connect with other property managers.',
  },
];

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles['values-header']}>
        <h3>Learning Resources</h3>
        <p>Everything you need to master property management and get the most out of our platform.</p>
      </div>
      <div className={styles['values-content']}>
        <Grid container rowSpacing={2}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
              <div className={styles['value-item']}>
                {value.icon}
                {/* <img src={value.icon} alt={value.title} /> */}
                <h3>{value.title}</h3>
                <p>{value.subTitle}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Values;
