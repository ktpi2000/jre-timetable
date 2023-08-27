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
  {
    name: '山手線(内回り)',
    weekday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/630u1.html',
    holiday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/630u2.html',
  },
  {
    name: '横須賀線(上り)',
    weekday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/222u1.html',
    holiday_url: 'https://www.jreast-timetable.jp/2302/timetable-v/222u2.html',
  },
  {
    name: '京浜東北線(北行き)',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/623u1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/623u2.html#time_22',
  },
  {
    name: '東海道線(下り)',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/101d1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/101d2.html#time_22',
  },
  {
    name: '東海道線(上り)',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/101u1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/101u2.html#time_22',
  },
  {
    name: '湘南新宿ライン(北行)',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/102u1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/102u2.html#time_22',
  },
  {
    name: '横須賀線(下り',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/222d1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/222d2.html#time_22',
  },
  {
    name: '横須賀線(上り)',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/222u1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/222u2.html#time_22',
  },
  {
    name: '東北・北海道新幹線(下り',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/003d1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/003d2.html#time_22',
  },
  {
    name: '秋田新幹線(下り',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/003d1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/003d2.html#time_22',
  },
  {
    name: '山形新幹線(下り',
    weekday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/003d1.html#time_22',
    holiday_url: 'https://www.jreast-timetable.jp/2309/timetable-v/003d2.html#time_22',
  },
];
