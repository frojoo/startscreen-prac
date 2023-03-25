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
setInterval(getDate, 1000);

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

const QUOTES = "quotes";

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");

  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "아무것도 하지 않으면 아무 일도 일어나지 않는다",
        "오늘 할 일을 내일로 미루지 마라",
        "미래를 만드는건 현재다",
        "행복은 돈으로 살 수 없지만, 가난으로도 살 수 없다",
        "할 수 있다고 믿는 사람은 결국 그렇게 된다",
        "나는 이룰 때까지 노력한다",
      ])
    );
    savedQuotes = localStorage.getItem(QUOTES);
  }
  let quotesArray = JSON.parse(savedQuotes);
  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}
getQuotes();

function onclickAdd() {
  const newQuotes = document.querySelector(".newQuotes");
  newQuotes.style.display = "inline-block";
}

function onclickRegist() {
  const newQuotesInput = document.querySelector(".newQuotesInput");
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");

  if (!newQuotesInput.value) {
    return;
  }

  let savedQuotes = localStorage.getItem(QUOTES);
  let quotesArray = JSON.parse(savedQuotes);

  quotesArray.push(newQuotesInput.value);
  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerText = `${newQuotesInput.value}`;
  newQuotes.style.display = "none";
}
