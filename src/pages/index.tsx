import { Container, Input, Paper, Space, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { LineItem } from '../components/lineItem/LineItem';
import { lineData } from '../constants/lineData';

export const HomePage = () => {
  const [keyword, setKeyword] = useState('');

  const filteredList = lineData.filter((line) => new RegExp(keyword).test(line.name));

  return (
    <Container size="xs">
      <Title order={1}>JREast Digital Timetable</Title>

      <Space h="sm" />

      <Input
        value={keyword}
        onChange={(event) => setKeyword(event.currentTarget.value)}
        placeholder="路線名で絞り込み"
      />

      {filteredList.map((item, index) => (
        <div>
          <Space h="sm" />
          <LineItem
            key={index}
            name={item.name}
            weekdays={item.weekday_url}
            holiday={item.holiday_url}
          />
        </div>
      ))}

      <Space h="md" />

      <Paper shadow="xs" p="md" withBorder>
        <Text>
          ⚠️このサイトは公式サイトではありません。あくまでも個人が制作した非公式のサイトです。
        </Text>
      </Paper>
    </Container>
  );
};

export default HomePage;
