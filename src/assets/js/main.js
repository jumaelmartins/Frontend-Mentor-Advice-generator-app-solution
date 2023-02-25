import "../styles/main.scss";
import { convertAdviceToHtml, getAdvice } from "./adviceApi";

const main = document.querySelector("main");

const updateHtml = async () => {
  main.innerHTML =
    (await convertAdviceToHtml(await getAdvice())) + main.innerHTML;
};

const updateHtmlByClick = async () => {
  document.addEventListener("click", (e) => {
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");

    const button = e.target.closest("button");

    if (button) {
      h1.remove();
      p.remove();
      updateHtml();
    }
  });
};

const init = async () => {
  updateHtml();
  updateHtmlByClick();
};

init();
