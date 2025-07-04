// Coin flip animation
function flipCoin() {
  const coin = document.querySelector('.spinning-coin');
  coin.classList.toggle('flipped');
}

// FOMO Button
function fomo() {
  const messages = [
    "You missed out! (Or did you?)",
    "Minting... Just kidding, nothing happened.",
    "You feel the urge to buy carrots.",
    "Congratulations! You minted 0 coins.",
    "You just joined the Roman Empire of Memes.",
    "FOMO level: MAXIMUM",
    "Ave Carota! Ave Canina!"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('fomo-message').textContent = msg;
}

// Optional: Make coin auto-flip every so often
setInterval(() => {
  if (Math.random() > 0.7) flipCoin();
}, 4000);

