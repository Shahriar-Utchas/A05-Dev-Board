//blog page connection
const discover = document.getElementById("discover");
discover.addEventListener("click", () => {
  window.location.href = "blog.html";
});

//set the date
const { formattedDate, formattedDay } = getDate();
document.getElementById("date-month-year").innerText = formattedDate;
document.getElementById("date-day").innerText = formattedDay;

//random theme
const randomTheme = document.getElementById("random-theme");
randomTheme.addEventListener("click", () => {
  const themes = ["bg-[#F4F7FF] ", "bg-black ", "bg-gray-800 ", "bg-blue-900", "bg-yellow-900"];
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  document.body.className = randomTheme;
});
