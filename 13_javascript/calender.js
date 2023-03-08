const date = new Date("3-1-2023");
const week = "Su Mo Tu We Th Fr Sa";
const year = date.getFullYear();
const month = date.getMonth() - 1;

const firstDayOfWeek = new Date(year, month, 1).getDay();
const spaceForFirstDay = " ".repeat(1 + 3 * firstDayOfWeek);
const monthNameLong = date.toLocaleString("en-US", { month: "long" });

console.log(`     ${monthNameLong} ${year}`);
console.log(week);
console.log(`${spaceForFirstDay}1`);
