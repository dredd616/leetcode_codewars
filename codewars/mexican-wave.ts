// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

const wave = (str: string): (string | null)[] => {
  return str
    .split("")
    .map((value, index, array) => {
      if (value === " ") return null;

      const tempArr = [...array];
      tempArr[index] = value.toUpperCase();

      return tempArr.join("");
    })
    .filter(Boolean);
};