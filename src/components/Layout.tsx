import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingAppointmentButton } from '@/components/FloatingAppointmentButton';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <FloatingAppointmentButton />
    </div>
  );
};

export default Layout;
