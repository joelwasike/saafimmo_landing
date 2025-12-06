import { Grid, useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import styles from './Until.module.scss';

const untilNow = [
  'Manual tracking of units, tenants, and maintenance requests',
  'Scattered communication across emails, phone calls, and paper documents',
  'Time-consuming financial reporting and billing processes',
  'Difficulty coordinating HOA meetings and resident communications',
];

const withSaafImmo = [
  'Centralized platform for all condominium management tasks',
  'Automated workflows reduce manual work and improve efficiency',
  'Real-time financial dashboards and automated billing systems',
  'Integrated communication portal keeps residents informed and engaged',
];

const Until: React.FC = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles.until}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{}}>
          <div className={styles['until-now']}>
            {/* <div className={styles['until-now-tag']}>
              <div>
                <img src="/sponsor/users.svg"></img>
              </div>
              <p>Then</p>
            </div> */}
            <h1>Status Quo</h1>
            {untilNow.map((el, idx) => (
              <div key={idx} className={styles['until-now-item']}>
                <img src={`/sponsor/${matches ? 'remove.svg' : 'arrow-left.svg'}`} alt="plus-icon" />
                <p>{el}</p>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classNames(styles['until-now'], styles['right'])}>
            {/* <div className={styles['until-now-tag']}>
              <div>
                <img src="/sponsor/users.svg"></img>
              </div>
              <p>Now</p>
            </div> */}
            <h1 className={styles['right']}>With Our Platform</h1>
            {withSaafImmo.map((el, idx) => (
              <div key={idx} className={styles['until-now-item']}>
                <img src={`/sponsor/check.svg`} alt="check" />
                <p className={styles['right']}>{el}</p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Until;
