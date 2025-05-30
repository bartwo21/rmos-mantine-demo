import { AppShell } from '@mantine/core';

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <AppShell.Main>
      <div>
        {children}
      </div>
    </AppShell.Main>
  );
} 