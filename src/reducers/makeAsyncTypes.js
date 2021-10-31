const makeAsyncTypes = (entity) => [
   `${entity}/pending`,
   `${entity}/fulfilled`,
   `${entity}/rejected`,
];

export default makeAsyncTypes;
