import { Tabs, Button, Group, HoverCard, Text } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { ProductCard } from './index';

export function TabsSection() {
  const productData = {
    title: "Norway Fjord Adventures",
    description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    imageUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    badgeText: "On Sale",
    badgeColor: "pink",
    buttonText: "Book classic tour now"
  };

  return (
    <Tabs defaultValue="gallery" className='mt-5 -ml-4'>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" className="ml-4 mt-2 flex flex-col gap-4">
        <div className='mt-4 flex gap-4'>
          <ProductCard {...productData} />
          <ProductCard {...productData} />
          <ProductCard {...productData} />
        </div>
        <Group justify="center">
          <HoverCard width={280} shadow="lg">
            <HoverCard.Target>
              <Button>Hover to reveal the card</Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
                Hover card is revealed when user hovers over target element, it will be hidden once
                mouse is not over both target and dropdown elements
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </Tabs.Panel>

      <Tabs.Panel value="messages" className="ml-4 mt-2">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" className="ml-4 mt-2">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
} 