import styles from './HowItWorks.module.scss';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HowItWorks: React.FC = () => {
  return (
    <section className={styles['how-it-works']}>
      <h3>How it Works</h3>
      <h6>Streamlined condominium management process</h6>
      <p>
        Get started with our platform <span>in just a few simple steps</span>
      </p>

      <div className={styles['how-it-works-cards']}>
        <div className={styles['how-it-works-cards-small']}>
          <WarningAmberOutlinedIcon htmlColor="#FFD130" />
          <h4>Initial Setup & Onboarding</h4>
          <p>
            <span>We work with you</span> to import your existing condominium data, set up unit information, and configure your management preferences
          </p>
        </div>
        <div className={styles['how-it-works-cards-icon']}>
          <ArrowForwardIosIcon htmlColor="#00838F" />
        </div>
        <div className={styles['how-it-works-cards-large']}>
          <CheckCircleOutlineIcon htmlColor="#00838F" />
          <h4>Platform Activation</h4>
          <div className={styles['how-it-works-cards-large-row']}>
            <p>All condominium units and resident information are loaded into the system</p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>

            <p>
              Automated workflows are configured for billing, maintenance, and communication processes
            </p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>
            <p>Ongoing management with real-time reporting and automated financial tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
