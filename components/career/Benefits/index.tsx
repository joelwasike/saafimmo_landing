import { Grid, useMediaQuery } from '@mui/material';
import { handleMoveToId } from 'utils';
import styles from './Benefits.module.scss';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  imgSrc: string;
}

const benefits = [
  'Comprehensive documentation and user guides',
  '24/7 customer support via email and live chat',
  'Regular webinars and training sessions',
  'Expert tips for HOA management and compliance',
  'Case studies from successful property managers',
];

const Benefits: React.FC<Props> = ({ imgSrc }) => {
  //const matches = useMediaQuery('(max-width:600px)');

  let listOfBenefits = benefits;

  // if (matches) {
  //   listOfBenefits = [benefits[0], benefits[1], benefits[2]];
  // }

  return (
    <section className={styles.benefits}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{}}>
          <div className={styles['benefits-hero']} style={{ backgroundImage: `url(${imgSrc})` }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={styles['benefits-content']}>
            <h1>Support & Resources</h1>
            {listOfBenefits.map((benefit, idx) => (
              <div key={idx} className={styles['benefits-content-item']}>
                <AddIcon />
                <p>{benefit}</p>
              </div>
            ))}
            <div className={styles['button-container']}>
              <button className="ui-button-2" onClick={() => handleMoveToId()}>
                CONTACT SUPPORT
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
