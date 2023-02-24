import { Button, Card, Group, Text } from '@mantine/core';

interface Props {
  name: string;
  weekdays: string;
  holiday: string;
}

export const LineItem = ({ name, weekdays, holiday }: Props) => (
  <Card>
    <Group>
      <Text size="md" weight={800}>
        {name}
      </Text>

      <Button component="a" href={weekdays}>
        平日
      </Button>

      <Button component="a" href={holiday}>
        休日
      </Button>
    </Group>
  </Card>
);
