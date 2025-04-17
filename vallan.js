const commsBtn = document.getElementById('comms-btn');
const armedBtn = document.getElementById('armed-btn');
const commsPulse = document.getElementById('comms-pulse');
const armedPulse = document.getElementById('armed-pulse');

function resetAnim () {
  commsPulse.style.visibility = 'hidden';
  armedPulse.style.visibility = 'hidden';

  commsBtn.disabled = false;
  armedBtn.disabled = false;
}

function showComms () {
  commsPulse.style.visibility = 'visible';

  commsBtn.disabled = true;
  armedBtn.disabled = true;

  setTimeout(resetAnim, 3500);
}

function showWeapons () {
  armedPulse.style.visibility = 'visible';

  commsBtn.disabled = true;
  armedBtn.disabled = true;

  setTimeout(resetAnim, 7500);
}

commsBtn.onclick = showComms;
armedBtn.onclick = showWeapons;