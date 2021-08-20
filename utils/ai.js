import shuffle from 'lodash/shuffle'

const yeses = [
  'yes',
  'Yes',
  'YES',
  'Yeah',
  'yeah',
  'YEAH',
  'yeaaah',
  'yup',
  'Yup',
  'YUP',
  'Of course',
  'Sure'
]

const puncuations = [
  ' ',
  ', ',
  '... ',
  ' ...',
  '! ',
  '? ',
]

const ands = [
  'and',
  'AND',
  'anddddd',
]

export default function ai(_msg) {
  return `${shuffle(yeses)[0]}${shuffle(puncuations)[0]}${shuffle(ands)[0]}${shuffle(puncuations)[0]}`
}
