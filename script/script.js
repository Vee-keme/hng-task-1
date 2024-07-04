// Function to update current time in UTC and current day
function updateTime() {
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const day = now.toLocaleDateString("en-US", { weekday: "long" });

  currentTimeUTC.textContent = utcTime;
  currentDay.textContent = day;
}

updateTime();
setInterval(updateTime, 1000);
