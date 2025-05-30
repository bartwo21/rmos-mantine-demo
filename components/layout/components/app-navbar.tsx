import { AppShell, Button, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

interface IAppNavbarProps {
  setColorScheme: (colorScheme: 'light' | 'dark') => void;
  colorScheme: string;
  changePrimaryColor: () => void;
}

export function AppNavbar({ setColorScheme, colorScheme, changePrimaryColor }: IAppNavbarProps) {
  return (
    <AppShell.Navbar p="md">
      <NavLink
        href="/"
        label="Pages"
        leftSection={<IconGauge size={16} stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink href="/" label="Home" />
        <NavLink label="About" href="/about" />
        <NavLink label="Contacts" childrenOffset={28} href="/contact">
          <NavLink label="Contact 1" href="/contact" />
          <NavLink label="Contact 2" href="/contact" />
          <NavLink label="Contact 3" href="/contact" />
        </NavLink>
      </NavLink>

      <NavLink
        href="/"
        label="Settings"
        leftSection={<IconFingerprint size={16} stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="Home" href="/" />
        <NavLink label="About" href="/about" />
        <NavLink label="Contacts" href="/contact" />
      </NavLink>
      <NavLink label="Contact" href="/contact" />
      <NavLink label="Contact" href="/contact" />
      <NavLink label="Contact" href="/contact" />
      <div className='mt-auto flex gap-2 justify-center'>
        <Button onClick={changePrimaryColor} variant="filled">
          Change Color
        </Button>
        <Button variant="default" onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
          {colorScheme === 'light' ? 'Dark' : 'Light'}
        </Button>
      </div>
    </AppShell.Navbar>
  );
} 