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
  const themes = [
    "bg-[#F4F7FF] ",
    "bg-black ",
    "bg-gray-800 ",
    "bg-blue-900",
    "bg-yellow-900",
  ];
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  document.body.className = randomTheme;
});

//complete task
const buttons = document.querySelectorAll(".complete-btn");

for (button of buttons) {
  button.addEventListener("click", function () {
    const taskTitle = document.getElementById(this.value);

    //Activity List
    const activity = document.getElementById("activity-log");
    const newActivity = document.createElement("div");
    newActivity.classList.add("activity-item");
    const Time = getTime();
    newActivity.innerHTML = `
        <p class="text-sm">You have completed the task <span class = "font-bold">${taskTitle.innerText}</span> at ${Time}</p>
        
      </div>
      <hr class="my-2">
    `;
    activity.appendChild(newActivity);

    //task-assign-count
    const taskAssignedCount = document.getElementById("tasks-assigned-count");
    const taskAssignedCountResult = parseInt(taskAssignedCount.innerText) - 1;
    console.log(taskAssignedCountResult);
    taskAssignedCount.innerText = taskAssignedCountResult;

    //increase the task completed count
    const taskCompletedCount = document.getElementById("task-complete-count");
    const taskCompletedCountResult = parseInt(taskCompletedCount.innerText) + 1;
    taskCompletedCount.innerText = taskCompletedCountResult;
    if (parseInt(taskAssignedCount.innerText) == 0) {
      alert("congress!! You have completed all the tasks!");
    } else {
      alert("Task completed successfully!");
    }
    //disable the button
    this.disabled = true;
  });
}

//clear activity log
const clearActivity = document.getElementById("clear-activity");
clearActivity.addEventListener("click", () => {
  const activity = document.querySelectorAll(".activity-item");
  for (item of activity) {
    item.innerHTML = "";
  }
});
