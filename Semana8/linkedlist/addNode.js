let singlyLinked = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
        // Null para permitir que halla otro
      },
    },
  },
};
const recorrer = (lista) => {
  for (i of lista) {
    console.log(i);
  }
};

recorrer(singlyLinked);
