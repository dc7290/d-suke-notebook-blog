import dayjs, { Dayjs } from 'dayjs'

export const formatDate: Dayjs['format'] = (text) =>
  dayjs(text).format('YYYY/MM/DD')
