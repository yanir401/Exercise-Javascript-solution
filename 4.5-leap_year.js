const ifLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    console.log("It is indeed aleap year");
};

ifLeapYear(2020);
