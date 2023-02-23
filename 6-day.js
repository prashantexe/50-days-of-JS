// TODO: Write a function to remove array element based on object property?

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
  ];
  
  const filterField = "money";
  
  function removeArrayElement(filterField) {
    // write your solution here
    const newArr = array.filter((item) => item.field !== filterField);
    return newArr;
  }
  
  let res = removeArrayElement(filterField);
  console.log(res);
  