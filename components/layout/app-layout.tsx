"use client"

import { AppShell, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppHeader, AppNavbar } from './components';
import { MainContent } from './components/main-content';
import { useTheme } from '@/contexts/ThemeContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [opened, { toggle: toggleNavbar }] = useDisclosure();
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const { changePrimaryColor } = useTheme();

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
      <AppNavbar 
        setColorScheme={setColorScheme} 
        colorScheme={colorScheme}
        changePrimaryColor={changePrimaryColor}
      />
      <MainContent>
        {children}
      </MainContent>
    </AppShell>
  );
} 