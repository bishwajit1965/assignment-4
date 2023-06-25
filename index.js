// The function mindGame() will take a positive number then will multiply the number with 3 then will add 10 with the multiplication result then will divide the output with 2 and will subtract 5 from the output of subtraction.

function mindGame(number) {
  if (
    Number.isInteger(number) &&
    Math.sign(-number) != true &&
    Math.sign(number) != 0
  ) {
    return (number * 3 + 10) / 2 - 5;
  } else {
    return "Please insert a positive number greater than 0.";
  }
}

// The function evenOdd() will take a string as an input parameter. It will find out the length of characters of the string and will output "Odd" or "Even" on the basis of the length of the string.

function evenOdd(data) {
  if (typeof data === "string" || data instanceof String) {
    let dataLength = data.length;
    if (dataLength % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Invalid input! Please insert a string.";
  }
}

// The function isLGSeven() will take a number as input. It will then find out the difference between the input value and 7. If the difference is less than 7 then the function will return the difference, otherwise return the double of the input value.

function isLGSeven(number) {
  if (Number.isInteger(number)) {
    const subtraction = number - 7;
    if (subtraction < 0) {
      return subtraction;
    } else {
      const subtraction = number * 2;
      return subtraction;
    }
  } else {
    return "Invalid input! Please insert a number.";
  }
}

// The function findBadData() will an array as an input with positive or negative values. If any number is negative, it will be called as a "Bad Data" and a positive number will be called a "Good Data". The function will find out the number of "Bad Data" from the array.

function findingBadData(ages) {
  const badData = [];
  if (Array.isArray(ages)) {
    for (let i = 0; i < ages.length; i++) {
      const age = ages[i];
      if (age < 0) {
        badData.push(age);
      }
    }
  } else {
    return "Invalid input! Please input an array as input.";
  }
  return badData.length;
}

// The function gemsToDiamond() will take three numbers(integer) as parameters which are the gem point numbers of three friends of mine. The power of per gem point of the first friend equals to 21 diamonds, the power of per gem point of the second friend equals to 32 diamonds and the power of per gem point of the third friend equals to 43 diamonds respectively. Now the function will find out the total of the power of gem points of three friends and will find out  the number of diamonds multiplying the power with the points collectively. If the number of total diamonds is greater than or equals to double of 1000, the function will deduct 2000 diamonds from the total and return the rest number of diamonds. If the number of diamonds is less than double of 1000, it will simply return the number of diamonds calculated.

function gemsToDiamond(
  firstFriendGemPoints,
  secondFriendGemPoints,
  thirdFriendGemPoints
) {
  if (
    Number.isInteger(firstFriendGemPoints) &&
    Number.isInteger(secondFriendGemPoints) &&
    Number.isInteger(thirdFriendGemPoints) &&
    Math.sign(-firstFriendGemPoints) != true &&
    Math.sign(-secondFriendGemPoints) != true &&
    Math.sign(-thirdFriendGemPoints) != true &&
    Math.sign(firstFriendGemPoints) != 0 &&
    Math.sign(secondFriendGemPoints) != 0 &&
    Math.sign(thirdFriendGemPoints) != 0
  ) {
    const total =
      firstFriendGemPoints * 21 +
      secondFriendGemPoints * 32 +
      thirdFriendGemPoints * 43;
    if (total >= 1000 * 2) {
      return total - 2000;
    } else {
      if (total < 1000 * 2) {
        return total;
      }
    }
  } else {
    return "Invalid input! Please insert all positive numbers greater than 0.";
  }
}
