import { AppShell, Burger, Button, Avatar } from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';

interface IAppHeaderProps {
  opened: boolean;
  toggleNavbar: () => void;
}

export function AppHeader({ opened, toggleNavbar }: IAppHeaderProps) {
  const { toggle: toggleFullscreen, fullscreen } = useFullscreen();

  return (
    <AppShell.Header className='flex items-center justify-between px-10'>
      <Burger
        opened={opened}
        onClick={toggleNavbar}
        hiddenFrom="sm"
        size="sm"
      />
      <div>Logo</div>
      <div className='flex items-center gap-2'>
        <Button onClick={toggleFullscreen} color={fullscreen ? 'gray' : 'blue'} variant='light' size='xm'>
          {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </Button>
        <Avatar color="cyan" radius="xl">BÇ</Avatar>
      </div>
    </AppShell.Header>
  );
} 