export const getBMICategory = (bmi) => {
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obesity";
  }
};
