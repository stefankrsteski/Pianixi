const background = document.querySelector('.animated-background');

function spawnLogo() {
  const logo = document.createElement('img');
  logo.src = 'logo.webp';
  logo.className = 'floating-logo';

  // Random position
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  logo.style.left = `${x}px`;
  logo.style.top = `${y}px`;

  // Optional: random size or rotation
  // logo.style.transform = `rotate(${Math.random() * 360}deg)`;

  background.appendChild(logo);

  setTimeout(() => {
    background.removeChild(logo);
  }, 3000); // match animation duration
}

setInterval(spawnLogo, 1000); // one every second
