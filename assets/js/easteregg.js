if (!window.easterEggLoaded) {
  window.easterEggLoaded = true;

  console.log("JS loaded");

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded fired");

    const triggers = document.querySelectorAll('.easter-trigger');
    if (!triggers.length) return;

    let expectedSequence = "";
    let currentInput = "";
    let imageSrc = null;
    let isActive = false;

    triggers.forEach(el => {
      el.addEventListener('click', () => {
        expectedSequence = el.dataset.sequence?.toLowerCase();
        imageSrc = el.dataset.img;
        currentInput = "";
        isActive = true;
        console.log(`${el.textContent.trim()} clicked → waiting for: ${expectedSequence}`);
      });
    });

    window.addEventListener('keydown', (event) => {
      if (!isActive || !expectedSequence) return;

      const key = event.key.toLowerCase();

      currentInput += key;
      console.log(`Typed so far: ${currentInput}`);

      // 입력된 내용이 일치하지 않으면 초기화
      if (!expectedSequence.startsWith(currentInput)) {
        console.log("Incorrect sequence. Reset.");
        currentInput = "";
        return;
      }

      if (currentInput === expectedSequence) {
        console.log("Sequence matched! Triggering easter egg!");
        showSurpriseImage(imageSrc);
        isActive = false;
      }
    });
  });

  function showSurpriseImage(imageUrl) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    overlay.appendChild(img);

    document.body.appendChild(overlay);

    window.addEventListener('keydown', function escListener(e) {
      if (e.key === 'Escape') {
        overlay.remove();
        window.removeEventListener('keydown', escListener);
      }
    });
  }
}