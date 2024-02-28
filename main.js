// Set the target date
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

// Update the countdown every second
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, show a message
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "Countdown over!";
  }
}

// Call updateCountdown function every second
const interval = setInterval(updateCountdown, 1000);
