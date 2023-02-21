// TODO: Write a function to check if an object is empty or not in javaScript?

const obj = { key: 1 };

function isEmpty(obj) {
  let flag = true;

  for (keys in obj) {
    flag = false;
    break;
  }
  // flag will only become false when the for loop runs
  // for loop will only run when key/s exist inside the object
  // if true => flag is false and we break the loop
  return flag;
}

console.log(`is empty object: ${isEmpty(obj)}`);