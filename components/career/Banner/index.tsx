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
        <div className={styles['banner-content-careers']}>
          <h6>RESOURCES</h6>
        </div>
        <h1>Property Management Resources & Support</h1>
        <p>Access helpful guides, best practices, and expert tips to maximize your property management efficiency.</p>
      </div>
    </section>
  );
};

export default Banner;
