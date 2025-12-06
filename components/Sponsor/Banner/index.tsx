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
        <div className={styles['banner-content-solutions']}>
          <h6>SOLUTIONS</h6>
        </div>
        <h1>Complete Condominium Management Solutions</h1>
        <p className={`${styles['large']} large`}>
          Streamline your condominium property management with our comprehensive platform. Manage units, tenants, maintenance, and finances all in one place.
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2" onClick={() => handleMoveToId()}>
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
