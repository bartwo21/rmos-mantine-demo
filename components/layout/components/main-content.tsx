import { AppShell } from '@mantine/core';

interface IMainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: IMainContentProps) {
  return (
    <AppShell.Main>
      <div>
        {children}
      </div>
    </AppShell.Main>
  );
} 