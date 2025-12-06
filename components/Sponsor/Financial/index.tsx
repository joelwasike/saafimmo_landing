import { Grid, useMediaQuery } from '@mui/material';
import { FinancialType } from 'types/financial';
import styles from './Financial.module.scss';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

const financial: FinancialType[] = [
  {
    title: 'Condominium Financial Management',
    icon: <PieChartOutlineOutlinedIcon htmlColor="#2563eb" />,

    content: 'Track HOA fees, maintenance costs, and unit revenue. Automated financial reporting and budgeting tools for complete transparency.',
  },
  {
    title: 'Resident Billing & Payments',
    icon: <ReceiptLongOutlinedIcon htmlColor="#2563eb" />,

    content:
      'Automated billing for HOA fees, utilities, and special assessments. Online payment processing with multiple payment methods and automated reminders.',
  },
  {
    title: 'Resident Communication Portal',
    icon: <AccessibilityNewOutlinedIcon htmlColor="#2563eb" />,
    content: 'Centralized communication hub for residents. Announcements, maintenance updates, and community news all in one accessible platform.',
  },
];

const Financial = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles.financial}>
      <div className={styles['financial-header']}>
        {/* <h6>SPONSORS</h6> */}
        <h3>Comprehensive Condominium Management Features</h3>
      </div>
      <div className={styles['financial-content']}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {financial.map((financial, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['financial-content-item']}>
                {financial.icon}
                <h2>{financial.title}</h2>
                <p>{financial.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Financial;
