const reverseString = (myString) => {
    return myString.split("").reverse().join("");
  };
  
  function spinWords(string) {
    const stringArr = string.split(" ");
    const myArr = stringArr.map((str) =>
      str.length >= 5 ? reverseString(str) : str
    );
    // console.log(myArr)
    return myArr.join(" ");
  }
  
  console.log(spinWords("Seriously this is the last one"));
  