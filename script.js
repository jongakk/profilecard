// DOM 요소
const contactBtn = document.getElementById('contactBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const copyBtn = document.getElementById('copyBtn');

// 모달 열기
contactBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// 모달 닫기
closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// 배경 클릭 시 모달 닫기
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// 이메일 클립보드 복사
copyBtn.addEventListener('click', () => {
    const email = 'jimin.kim@example.com';
    navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '복사 완료!';
        copyBtn.style.backgroundColor = 'var(--primary-color)';
        copyBtn.style.color = '#ffffff';

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.backgroundColor = '';
            copyBtn.style.color = '';
        }, 2000);
    }).catch(() => {
        alert('복사에 실패했습니다.');
    });
});