export const required = value => value ? undefined : 'Required';
export const notEmpty = value => value.trim() !== '' ? undefined : 'Must not be empty';
export const lengthOfFive = value => value.length === 5 ? undefined : 'Must be 5 numbers long'
export const isNumber = value => typeof value === 'number' ? undefined : 'Must be a number';