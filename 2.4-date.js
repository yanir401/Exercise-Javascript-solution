function whatDateToday() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  currentDate = new Date();
  let dayInMonth = currentDate.getDate();
  let month = currentDate.getMonth();
  let day = currentDate.getDay();
  let fullYear = currentDate.getFullYear();
  currentDate.getDate;
  return `Today is ${days[day]} the ${dayInMonth} of ${months[month]}, ${fullYear}`;
}
console.log(whatDateToday());
