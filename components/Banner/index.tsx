import { handleMoveToId } from 'utils';
import styles from './Banner.module.scss';
interface Props {
  imgSrc: string;
}

const Banner: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section
      className={`${styles.banner} padding-wrapper complete`}
      style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles['banner-content']}>
        <h1>Your Real Estate and Condominium Management Solution</h1>
        <p className={`${styles['large']} large`}>
          Streamline operations. Automate workflows. Maximize efficiency. Data-driven insights. Property management,
          simplified.
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2 primary" onClick={() => handleMoveToId()}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
