const convertToArray = (obj) => {
  return Object.entries(obj);
};

console.log(convertToArray({ a: 1, b: 2, c: 3 }));

const employee = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  salary: 100000,
  department: "IT",
  position: "Developer",
  email: "john@example.com",
  phone: "1234567890",
  address: "123 Main St, Anytown, USA",
};

const deepClonedCopy = { ...employee };
deepClonedCopy.name = "Jane";
console.log(employee);
console.log(deepClonedCopy);
