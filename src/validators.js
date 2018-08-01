export const required = value => value ? undefined : 'Required';
export const notEmpty = value => value.trim() !== '' ? undefined : 'Must not be empty';
export const lengthOfFive = length => value => value.length === length ? undefined : 'Must be 5 numbers long'
export const isNumber = value => /^\d+$/.test(value) ? undefined : 'Must be a number';