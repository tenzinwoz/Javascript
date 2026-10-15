// Recursively flatten a nested object
const flattenObject = (obj, parentKey, result = {}) => {
  for (let key in obj) {
    //Main logic is here
    const propName = parentKey ? parentKey + "." + key : key;

    if (typeof obj[key] === "object") {
      flattenObject(obj[key], propName, result);
    } else {
      result[propName] = obj[key];
    }
  }
  console.log(result, "resu");
  return result;
};

const user = {
  name: {
    firstName: "Tenzin",
    lastName: "Woeser",
  },
  age: 30,
  address: {
    street: "200 north carson",
    city: "Toronto",
    country: "CA",
  },
  tech: {
    name: "Javascript",
    specialty: {
      name: "React",
      yoe: 12,
    },
  },
};

console.log(flattenObject(user));
