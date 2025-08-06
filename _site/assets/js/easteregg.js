// 중복 실행 방지
if (!window.easterEggLoaded) {
  window.easterEggLoaded = true;

  console.log("JS loaded");

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded fired");

    const tahirElement = document.getElementById('egg');
    console.log("Tahir element:", tahirElement);

    if (!tahirElement) return;

    let tPressCount = 0;
    const triggerCount = 9;
    let isActive = false;

    // 클릭 시 이스터에그 활성화
    tahirElement.addEventListener('click', () => {
      console.log("Tahir clicked!");
      isActive = true;
      tPressCount = 0;
    });

    // 키보드 T 키 누를 때 감지
    window.addEventListener('keydown', (event) => {
      console.log("Key detected:", event.key);
      if (!isActive) return;

      if (event.key.toLowerCase() === 't') {
        tPressCount++;
        console.log(`T pressed ${tPressCount} times`);
        if (tPressCount === triggerCount) {
          console.log("Trigger activated!");
          showSurpriseImage();
          isActive = false;
        }
      } else {
        tPressCount = 0;
      }
    });
  });

  // 이미지 띄우는 함수
  function showSurpriseImage() {
    console.log("Easter egg triggered!");
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
    img.src = '/assets/images/member/tungegg.png'; // ✅ 여기에 실제 이미지 경로 입력
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    overlay.appendChild(img);

    document.body.appendChild(overlay);

    // ESC 키로 닫기
    window.addEventListener('keydown', function escListener(e) {
      if (e.key === 'Escape') {
        overlay.remove();
        window.removeEventListener('keydown', escListener);
      }
    });
  }
}
