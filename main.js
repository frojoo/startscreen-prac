function getDate() {
  const date = document.querySelector(".date");

  const newDate = new Date();
  const years = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const days = newDate.getDate();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = newDate.getDay();
  const today = weekday[day];

  date.innerText = `${years}.${month}.${days} ${today}`;
}
getDate();

function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();
  let hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");
  const days = newDate.getDay();

  if (Number(hours) >= 12) {
    if (Number(hours) >= 13) {
      hours = String(hours - 12).padStart(2, "0");
    }
    time.innerText = `${hours}:${minutes}:${seconds} PM`;
  } else {
    time.innerText = `${hours}:${minutes}:${seconds} AM`;
  }
}

getTime();

setInterval(getTime, 1000);
