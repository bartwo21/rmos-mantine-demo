"use client"

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppHeader, AppNavbar } from './components';
import { MainContent } from './components/main-content';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [opened, { toggle: toggleNavbar }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppHeader opened={opened} toggleNavbar={toggleNavbar} />
      <AppNavbar />
      <MainContent>
        {children}
      </MainContent>
    </AppShell>
  );
} 