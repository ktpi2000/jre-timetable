import { Container, Space, Text } from '@mantine/core';
import { LineItem } from '../components/lineItem/LineItem';

const list = [
  {
    name: '東海道線',
    weekdays: 'https://fjfjfjjf',
    holiday: 'https://jfkkl',
  },
  {
    name: '横須賀線',
    weekdays: 'https://fjfjfjjf',
    holiday: 'https://jfkkl',
  },
];

export default function HomePage() {
  return (
    <Container size="xs">
      <Text>JREAST TIMETABLE</Text>
      {list.map((item, index) => (
        <div>
          <Space h="sm" />
          <LineItem key={index} name={item.name} weekdays={item.weekdays} holiday={item.holiday} />
        </div>
      ))}
    </Container>
  );
}
