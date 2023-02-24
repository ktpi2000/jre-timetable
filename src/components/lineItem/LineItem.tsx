import { Button, Card, Flex, Group, Text } from '@mantine/core';

interface Props {
  name: string;
  weekdays: string;
  holiday: string;
}

export const LineItem = ({ name, weekdays, holiday }: Props) => (
  <Card>
    <Flex justify="space-between" align="center">
      <Text size="lg" weight={800}>
        {name}
      </Text>

      <Group>
        <Button component="a" href={weekdays} color="blue.5">
          平日
        </Button>

        <Button component="a" href={holiday} color="pink.5">
          休日
        </Button>
      </Group>
    </Flex>
  </Card>
);
