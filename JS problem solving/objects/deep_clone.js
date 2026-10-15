const deepClone = (user) => {
  //Easier
  //   const newUserObj = { ...user };

  // Modern
  const newUserObj = structuredClone(user);

  newUserObj.age = 30;

  return { user, newUserObj };
};

const user = {
  name: "Tenzin",
  age: 29,
};

console.log(deepClone(user));
