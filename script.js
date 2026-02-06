function confetti(){
  const duration = 2000;
  const end = Date.now() + duration;
  const colors = ['#ff4d4d', '#ff99cc', '#ffffff'];

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  const particles = [];
  for (let i = 0; i < 200; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
    });

    if (Date.now() < end) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  animate();
}


const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');

let noClickCount = 0;
const imagePaths = [
    'image1.gif',
    'image2.gif',
    'image3.gif',
    'image4.gif',
    'image5.gif',
    'sadAnya1.gif',
    'image7.gif'
];
const noButtonTexts = [
    'No',
    'Are you sure?',
    'Pookie please',
    "Don't do this to me :(",
    "Pratiksha You're breaking my heart",
    "I'm gonna cry..."
];

noButton.addEventListener('click', () => {
    if (noClickCount < noButtonTexts.length - 1) {
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount];
        const scaleFactor = 1 + noClickCount * 0.1;
        yesButton.style.transform = `scale(${scaleFactor})`;
        noButton.textContent = noButtonTexts[noClickCount];
    }
});

yesButton.addEventListener('click', () => {
    imageDisplay.src = imagePaths[imagePaths.length - 1];
    valentineQuestion.innerHTML = 'Yayyy!! :3 <br> Now you are my girlfriend';
    responseButtons.style.display = 'none';
    confetti();
});
