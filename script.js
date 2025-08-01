const background = document.querySelector('.animated-background');

function spawnLogo() {
  const logo = document.createElement('img');
  logo.src = 'logo.webp';
  logo.className = 'floating-logo';

  // Spawn at random X (horizontal) position at the top of the screen
  const maxX = window.innerWidth - 60;
  const x = Math.random() * maxX;

  logo.style.left = `${x}px`;
  logo.style.top = `-60px`; // start just above viewport

  background.appendChild(logo);

  setTimeout(() => {
    background.removeChild(logo);
  }, 6000); // match animation duration
}

function spawnLogoRandomInterval() {
  spawnLogo();

  // Random delay between 1s and 4s (adjust as you like)
  const randomDelay = 1000 + Math.random() * 3000;

  setTimeout(spawnLogoRandomInterval, randomDelay);
}

// Start the random interval spawning
spawnLogoRandomInterval();
