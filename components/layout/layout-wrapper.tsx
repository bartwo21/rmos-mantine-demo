"use client"

import { MantineProvider, createTheme } from '@mantine/core';
import { useTheme } from '@/contexts/ThemeContext';
import AppLayout from './app-layout';
import { useEffect, useState } from 'react';

interface ILayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: ILayoutWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const { primaryColor } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = createTheme({
    primaryColor: primaryColor,
  });

  return (
    <MantineProvider theme={theme}>
      {mounted && (
        <AppLayout>
          {children}
        </AppLayout>
      )}
    </MantineProvider>
  );
} 