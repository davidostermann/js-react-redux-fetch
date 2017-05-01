
export const getNextId = (collection) => {
  return collection.reduce( (acc, item) => Math.max(acc, item.id), 0) + 1;
};

export const getRandomHex = () =>
(Math.floor(Math.random()*16777215).toString(16));
