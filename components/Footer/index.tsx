import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles['footer-section']}>
      <div className={styles['footer-section-content']}>
        <img src="/download.jpeg" alt="Saaf Immo Logo footer" width={90} height={45} />
        <p>Modern Technology Powering Property Management</p>
        <a href="mailto:info@saafimmo.com">info@saafimmo.com</a>
        <div className={styles['button-container']}>
          <a target="_blank" rel="noopener noreferrer" className={styles['icon']}>
            <LinkedInIcon fontSize="large" sx={{ color: '#ffffff', fontSize: 28 }} />
          </a>
          <a target="_blank" className={styles['icon']} rel="noopener noreferrer">
            <TwitterIcon fontSize="large" sx={{ color: '#ffffff', fontSize: 28 }} />
          </a>
        </div>
      </div>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Saaf Immo Inc.</p>
        <Link href="/sponsor">Sponsors</Link>
        <Link href="/career">Resources</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/privacy-and-cookies">Privacy and Cookies</Link>
        <Link href="/confidentiality-agreement">Confidentiality Agreement</Link>
      </footer>
    </section>
  );
};

export default Footer;
