// モバイルナビゲーションの開閉
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.classList.toggle("is-active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// ナビリンク押下時にメニューを閉じる
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ロゴ・HOMEリンク等クリックでページ最上部へスクロール
document.querySelectorAll('a[href="#home"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ページトップボタンの表示制御
const pagetop = document.getElementById("pagetop");

window.addEventListener("scroll", () => {
  pagetop.classList.toggle("is-visible", window.scrollY > 400);
});
