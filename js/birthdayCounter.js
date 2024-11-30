function updateCountdown() {
  const today = new Date();
  const birthday = new Date(today.getFullYear(), 3, 26);

  if (today > birthday) birthday.setFullYear(today.getFullYear() + 1);

  if (
    today.getDate() === birthday.getDate() &&
    today.getMonth() === birthday.getMonth()
  ) {
    document.getElementById("birthdayCountdown").textContent =
      "Today is ZionChik's birthday!";
  } else {
    const timeLeft = birthday - today;
    const monthsLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    const daysLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    let countdownText = "";
    if (monthsLeft > 0) countdownText += `${monthsLeft}mo  `;
    if (daysLeft > 0 || monthsLeft > 0) countdownText += `${daysLeft}d  `;
    if (hoursLeft > 0 || daysLeft > 0 || monthsLeft > 0)
      countdownText += `${hoursLeft}h  `;
    if (minutesLeft > 0 || hoursLeft > 0 || daysLeft > 0 || monthsLeft > 0)
      countdownText += `${minutesLeft}min  `;
    countdownText += `${secondsLeft}s  until ZionChik's birthday`;

    document.getElementById("birthdayCountdown").textContent =
      countdownText.trim();
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
