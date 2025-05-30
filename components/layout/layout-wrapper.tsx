"use client"

import { MantineProvider, createTheme } from '@mantine/core';
import { useTheme } from '@/contexts/ThemeContext';
import AppLayout from './app-layout';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { primaryColor } = useTheme();

  const theme = createTheme({
    primaryColor: primaryColor,
  });

  return (
    <MantineProvider theme={theme}>
      <AppLayout>
        {children}
      </AppLayout>
    </MantineProvider>
  );
} 