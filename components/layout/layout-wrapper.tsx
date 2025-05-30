"use client"

import { MantineProvider, createTheme } from '@mantine/core';
import { useTheme } from '@/contexts/ThemeContext';
import AppLayout from './app-layout';

interface ILayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: ILayoutWrapperProps) {
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