import { AppShell, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

export function AppNavbar() {
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
    </AppShell.Navbar>
  );
} 