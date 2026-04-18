const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// _.throttle(함수,시간)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 숨기기
      // gsap.to (요소, 지속시간 옵션)
      gsap.to(badgEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to(badgEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300),
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  pagination: {
    //페이지 번호 사용 여부
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    //슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".promotion .swiper-button-prev", // 이전 버튼 선택자
    nextEl: ".promotion .swiper-button-next", // 다음 버튼 선택자
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    //슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".awards .swiper-button-prev", // 이전 버튼 선택자
    nextEl: ".awards .swiper-button-next", // 다음 버튼 선택자
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //보임처리
    promotionEl.classList.remove("hide");
  }
});

// 랜덤 함수 사용 (소수점 2자리 까지 해당 범위 내의 랜덤 수 반환)
function random(min, max) {
  // '.toFixed()'를 통해 반환된 문자 데이터를,
  // '.parseFloat()'를 을 통해 소수점을 가지는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to (요소, 지속시간 , 옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {
      //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    },
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
