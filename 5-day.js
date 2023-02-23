// TODO: Create a regular expression to validate if the given input is valid Indian mobile number or not

// ? ANSWER GIVEN ALONG WITH HINTS

const number = "+919876543210";

function validateMobile(number) {
  let regex = /^([+]?([9][1]))?[0]?\s?\d{10}$/g;
  // ^                    starts with
  // ([+]?([9][1]))?      grouped for +91 occuring zero or one time
  // [0]?                 this is for 0 occuring zero or one time
  // \s?                  space occuring zero or one time
  // \d{10}               10 digit number
  // $                    ends with
  return regex.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);6