import React, { ReactNode, useState } from 'react';
import Navbar, { NavbarProps } from 'components/Navbar';
import Head from 'next/head';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  navbarProps?: NavbarProps;
}

const MainLayout: React.FC<Props> = ({ title, description, children, navbarProps }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <meta
          name={description || 'description'}
          content="Saaf Immo is a modern property management platform designed to streamline condominium management operations, tenant relations, and financial management for property managers and homeowners associations."
        />
      </Head>
      <Navbar setOpen={() => setOpen(!open)} {...navbarProps} />
      <Sidebar open={open} setOpen={() => setOpen(!open)} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
