import React from 'react';
import { Grid } from '@mui/material';
import styles from './About.module.scss';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';

interface CompanyInfo {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const companyInfo: CompanyInfo[] = [
  {
    id: 1,
    icon: <BusinessIcon sx={{ fontSize: 48, color: '#60a5fa' }} />,
    title: 'Our Mission',
    description: 'To revolutionize property and condominium management through innovative technology solutions that streamline operations, enhance tenant experiences, and maximize property value. We empower property managers with tools that simplify complex workflows and provide data-driven insights for better decision-making.',
  },
  {
    id: 2,
    icon: <TrendingUpIcon sx={{ fontSize: 48, color: '#60a5fa' }} />,
    title: 'Our Vision',
    description: 'To become the leading platform for property management in the real estate industry, recognized for our commitment to innovation, reliability, and customer success. We envision a future where property management is seamless, automated, and accessible to all.',
  },
  {
    id: 3,
    icon: <SecurityIcon sx={{ fontSize: 48, color: '#60a5fa' }} />,
    title: 'Security & Reliability',
    description: 'We prioritize the security and privacy of your data. Our platform is built with enterprise-grade security measures, including end-to-end encryption, regular security audits, and compliance with industry standards. With 99.99% uptime, you can trust us to keep your operations running smoothly.',
  },
  {
    id: 4,
    icon: <SupportIcon sx={{ fontSize: 48, color: '#60a5fa' }} />,
    title: 'Customer Success',
    description: 'Your success is our success. We provide comprehensive onboarding, 24/7 customer support, and continuous platform improvements based on your feedback. Our dedicated team is committed to helping you achieve your property management goals.',
  },
];

const About = () => {
  return (
    <section id="about-us" className={styles.about}>
      <div className={styles['about-header']}>
        <h3>About Saaf Immo</h3>
        <p>
          A comprehensive property management platform designed to streamline operations, tenant management, and financial reporting for real estate and condominium properties.
        </p>
      </div>
      <div className={styles['about-content']}>
        <Grid container columnSpacing={3} rowSpacing={3}>
          {companyInfo.map((info) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={info.id}>
              <div className={styles['info-card']}>
                <div className={styles['info-card-icon']}>{info.icon}</div>
                <div className={styles['info-card-content']}>
                  <h4>{info.title}</h4>
                  <p className={styles['info-card-description']}>{info.description}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className={styles['about-story']}>
          <h4>Our Story</h4>
          <p>
            Saaf Immo was founded with a simple yet powerful vision: to transform the way property and condominium management is done. Recognizing the challenges faced by property managers—from manual processes to fragmented systems—we set out to create an all-in-one platform that brings everything together.
          </p>
          <p>
            Today, our platform serves property management companies, real estate professionals, and condominium associations, helping them manage thousands of units efficiently. We combine cutting-edge technology with deep industry expertise to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
          </p>
          <p>
            We're committed to continuous innovation, listening to our customers, and building a platform that grows with your business. Whether you're managing a single condominium building or a large portfolio of properties, Saaf Immo provides the tools and insights you need to succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
