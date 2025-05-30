import { Tabs, Button, Group, HoverCard, Text, Autocomplete, MultiSelect, TagsInput, Slider, ColorInput } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { ProductCard } from './index';
import { productData } from '@/lib/constants';

export function TabsSection() {
  return (
    <Tabs defaultValue="gallery">
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
        <Group justify="center">
          <Autocomplete
            label="Choose"
            placeholder="Pick value or enter anything"
            data={['React', 'Angular', 'Vue', 'Svelte']}
          />
          <MultiSelect
            label="Your favorite libraries"
            placeholder="Pick value"
            data={['React', 'Angular', 'Vue', 'Svelte']}
          />
          <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
          <ColorInput
            label="Input label"
            placeholder="Input placeholder"
          />
        </Group>
          <Slider
            color="blue"
            defaultValue={40}
            marks={[
              { value: 20, label: '20%' },
              { value: 50, label: '50%' },
              { value: 80, label: '80%' },
            ]}
          />
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