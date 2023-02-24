import { Container, Input, Space } from '@mantine/core';
import { useState } from 'react';
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

export const HomePage = () => {
  const [keyword, setKeyword] = useState('');

  const filteredList = list.filter((line) => new RegExp(keyword).test(line.name));

  return (
    <Container size="xs">
      <Input
        value={keyword}
        onChange={(event) => setKeyword(event.currentTarget.value)}
        placeholder="路線名で絞り込み"
      />

      {filteredList.map((item, index) => (
        <div>
          <Space h="sm" />
          <LineItem key={index} name={item.name} weekdays={item.weekdays} holiday={item.holiday} />
        </div>
      ))}
    </Container>
  );
};

export default HomePage;
