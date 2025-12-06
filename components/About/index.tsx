import React from 'react';
import { Grid } from '@mui/material';
import { PersonType } from 'types/person';
import Person from './components/Person';
import styles from './About.module.scss';

const people: PersonType[] = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    avatar: '/people/1.png',
    role: 'CHIEF EXECUTIVE OFFICER',
    summary:
      'MBA from Harvard Business School, 18+ years in real estate technology, former VP at leading PropTech companies',
    description: `Dr. Sarah Mitchell brings over 18 years of executive leadership experience in the property management technology sector. She holds an MBA from Harvard Business School and a Ph.D. in Real Estate Finance from MIT. Prior to joining Saaf Immo, Sarah served as Vice President of Product Strategy at Buildium, where she led the development of solutions serving over 20,000 property management companies. She has been instrumental in raising $45M in venture capital and scaling technology platforms that manage over $50 billion in property assets. Sarah is a recognized thought leader, having published 12 research papers on property management automation and spoken at 30+ industry conferences worldwide.`,
  },

  {
    id: 2,
    name: 'Michael Chen',
    avatar: '/people/1.png',
    role: 'CHIEF PRODUCT OFFICER',
    summary:
      'Stanford CS graduate, 15+ years product leadership, former Director of Product at AppFolio and Yardi Systems',

    description: `Michael Chen is a product innovation leader with 15+ years of experience designing enterprise software solutions for the real estate industry. He holds a Master's in Computer Science from Stanford University and a Bachelor's in Business Administration from UC Berkeley. Michael previously served as Director of Product Management at AppFolio, where he led a team of 25 product managers and designers, launching features that increased user engagement by 40%. Before that, he spent 8 years at Yardi Systems, where he architected products now used by 11,000+ property management companies globally. Michael holds 3 patents in property management automation and has been featured in TechCrunch and Forbes for his innovative approach to PropTech product development.`,
  },

  {
    id: 3,
    name: 'Jennifer Rodriguez',
    avatar: '/people/1.png',
    role: 'CHIEF OPERATING OFFICER',
    summary:
      'Wharton MBA, 20+ years operations excellence, former COO at RealPage with expertise in scaling SaaS operations',

    description: `Jennifer Rodriguez is an operations executive with 20+ years of experience building and scaling high-growth technology companies. She earned her MBA from The Wharton School at the University of Pennsylvania and holds a Bachelor's in Industrial Engineering from Georgia Tech. Jennifer previously served as Chief Operating Officer at RealPage, where she managed operations for a $1.2B revenue business serving 19 million units globally. She led initiatives that improved operational efficiency by 35% and reduced customer churn by 28%. Jennifer is a certified Six Sigma Black Belt and has expertise in process optimization, customer success, and international expansion. She has successfully scaled operations across 12 countries and managed teams of over 500 employees.`,
  },

  {
    id: 4,
    name: 'David Kim',
    avatar: '/people/1.png',
    role: 'CHIEF TECHNOLOGY OFFICER',
    summary:
      'MIT Computer Science, 22+ years engineering leadership, former Principal Architect at Salesforce and Microsoft',
    description: `David Kim is a technology visionary with 22+ years of experience architecting enterprise-scale software systems. He holds a Master's in Computer Science from MIT and a Bachelor's in Software Engineering from Carnegie Mellon University. David previously served as Principal Architect at Salesforce, where he designed cloud infrastructure handling 50+ million daily transactions. Before that, he spent 10 years at Microsoft, leading teams that built Azure services now used by Fortune 500 companies. David is an expert in distributed systems, cloud architecture, and AI/ML applications. He has published 8 technical papers, holds 5 patents in cloud computing, and has been a keynote speaker at AWS re:Invent and Google Cloud Next. Under his leadership, Saaf Immo's platform processes over 100 million property transactions annually with 99.99% uptime.`,
  },
];
const About = () => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((value) => !value);
  };

  return (
    <section id="about-us" className={styles.about}>
      <div className={styles['about-header']}>
        <h3>About Us</h3>
        <p>A dedicated team with deep expertise in property management, technology, and real estate operations.</p>
      </div>
      <div className={styles['about-content']}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {people.map((person, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
              <Person person={person} styles={styles} show={show} toggleShow={toggleShow} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
