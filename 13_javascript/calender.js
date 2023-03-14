//エラーハンドリングとコードの整理
const m = process.argv[3];
const date = new Date(`${m}-1-2023`);
const week = "Su Mo Tu We Th Fr Sa";
const year = date.getFullYear();
const month = Number(date.getMonth()) + 1;

//今日の日付
const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = Number(today.getMonth()) + 1;
const thisDay = today.getDate();

const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
const lastDateOfMonth = new Date(year, month, 0).getDate() + 1;
const initPos = " ".repeat(3 * firstDayOfWeek);
let currentCalenderRow = initPos;
const monthNameLong = date.toLocaleString("en-US", { month: "long" });

console.log(`     ${monthNameLong} ${year}`);
console.log(week);
// console.log(`${spaceForFirstDay}1`);
for (let i = 1; i <= lastDateOfMonth; i++) {
  let stringI = `${i}`;
  if (year === thisYear && month === thisMonth && i === thisDay) {
    stringI = `\x1b[47m${stringI}\x1b[0m`;
  }

  const targetDay = new Date(year, month - 1, i);

  if ((i > 1 && targetDay.getDay() === 0) || i === lastDateOfMonth) {
    console.log(currentCalenderRow);

    currentCalenderRow = "";
  }

  if (currentCalenderRow !== "") currentCalenderRow += " ".repeat(1);
  if ((1 < i && i < 10) || (i === 1 && firstDayOfWeek === 0)) {
    currentCalenderRow += " ".repeat(1) + stringI;
  } else {
    currentCalenderRow += stringI;
  }
}
