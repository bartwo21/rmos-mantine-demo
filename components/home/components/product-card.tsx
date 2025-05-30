import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface IProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  badgeText: string;
  badgeColor: string;
  buttonText: string;
}

export function ProductCard({ 
  title, 
  description, 
  imageUrl, 
  badgeText, 
  badgeColor, 
  buttonText 
}: IProductCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageUrl}
          height={160}
          alt={title}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color={badgeColor}>{badgeText}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        {buttonText}
      </Button>
    </Card>
  );
} 