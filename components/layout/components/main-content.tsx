import { AppShell } from '@mantine/core';

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <AppShell.Main>
      <div className="mt-4">
        {children}
      </div>
    </AppShell.Main>
  );
} 