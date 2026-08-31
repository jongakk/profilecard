const year = document.getElementById("year");
const themeButton = document.getElementById("themeButton");
const shareButton = document.getElementById("shareButton");

// Footer 연도 자동 표시
year.textContent = new Date().getFullYear();

// 라이트 / 다크 테마 변경
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  themeButton.textContent = isLight ? "☾" : "☼";
  themeButton.setAttribute(
    "aria-label",
    isLight ? "다크 테마로 변경" : "라이트 테마로 변경"
  );
});

// 페이지 공유
shareButton.addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "Network Security Engineer Profile",
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      // 사용자가 공유 창을 닫은 경우
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(window.location.href);

    shareButton.textContent = "✓";

    setTimeout(() => {
      shareButton.textContent = "↗";
    }, 1500);
  } catch (error) {
    alert("현재 페이지 주소를 복사할 수 없습니다.");
  }
});