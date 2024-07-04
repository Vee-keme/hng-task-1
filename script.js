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

// Call the function to update time on load and set an interval to update every minute
updateTime();
setInterval(updateTime, 60000);
