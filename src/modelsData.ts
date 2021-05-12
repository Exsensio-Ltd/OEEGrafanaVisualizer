import { SelectOption } from 'models';

export const CalculationTypes: SelectOption[] = [
  { text: 'Simple', value: 0 },
  { text: 'Acvanced', value: 1 }
];

export const Periods: SelectOption[] = [
  { value: 1, text: '1 Hour' },
  { value: 2, text: '2 Hours' },
  { value: 3, text: '3 Hours' },
  { value: 4, text: '4 Hours' },
  { value: 5, text: '5 Hours' },
  { value: 6, text: '6 Hours' },
  { value: 7, text: '7 Hours' },
  { value: 8, text: '8 Hours' },
];

export const Margin = {
  top: 10,
  right: 20,
  bottom: 50,
  left: 0
};

export const Colors = {
  Success: '#01E400',
  Notice: '#feff01',
  Warning: '#ff7e00',
  Danger: '#fb0300',
};
