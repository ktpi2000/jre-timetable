interface Line {
  name: string;
  weekday_url: string;
  holiday_url: string;
}

export const lineData: Line[] = [
  {
    name: '横須賀線(下り)',
    weekday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/222d1.html',
    holiday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/222d2.html#time_0',
  },
  {
    name: '山手線(外回り)',
    weekday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/630d1.html#time_0',
    holiday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/630d2.html#time_0',
  },
];
