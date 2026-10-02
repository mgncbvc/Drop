'use strict';
const deadline = Date.parse('2026-10-05T09:30:00+03:00');
const units = ['days', 'hours', 'minutes', 'seconds'].map(id => document.getElementById(id));
let interval;
function updateCountdown() {
  const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
  units.forEach((element, index) => { element.textContent = String(values[index]).padStart(2, '0'); });
  if (remaining === 0) {
    document.getElementById('finished').hidden = false;
    clearInterval(interval);
  }
}
interval = setInterval(updateCountdown, 1000);
updateCountdown();
document.addEventListener('visibilitychange', updateCountdown);
