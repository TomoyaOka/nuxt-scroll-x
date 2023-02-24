import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default class Animation {
  constructor() {
    this.container = document.querySelector(".container");
    this.wrapper = document.querySelector(".wrapper");
    this.wrapper_w = this.wrapper.offsetWidth;
    this.container_w = this.container.getBoundingClientRect().width;
    this.current = this.container.getBoundingClientRect().left;
    this.ease = 0.05;
    this.current = 0;
    this.bodyScroll = this.bodyScroll.bind(this);
    this.target = 0;
    this.bodyCurrent = 0;
    this.bodyTarget = 0;
    this.window_w = window.innerWidth;
    this.window_h = window.innerHeight;
    this.height = document.querySelector(".js-height span");
    this.sections = document.querySelectorAll(".js-section");
    this.fade = document.querySelectorAll(".js-fade");
  }

  lerp(start, end, multiplier) {
    return (1 - multiplier) * start + multiplier * end;
  }

  _setHeight() {
    //01. wrapperに要素*100%のwidthを設定する
    this.wrapper.style.width = `${document.querySelectorAll(".js-section").length * 100}%`;
    //02. bodyに (containerの横幅 - 画面の幅 + 画面の高さ)pxを設定する
    document.body.style.height = `${this.container_w - this.window_w + this.window_h}px`;

    //画面にbodyの高さを表示させる(確認用)
    this.height.innerHTML = `${this.container_w - this.window_w + this.window_h}px`;
  }

  bodyScroll() {
    this.bodyCurrent = parseFloat(this.lerp(this.bodyCurrent, this.bodyTarget, this.ease)).toFixed(2);
    this.bodyTarget = window.scrollY;
    //1フレーム毎にスクロールに合わせて位置を変更する
    this.container.style.transform = `translate3d(-${this.bodyCurrent}px, 0px, 0px)`;
    requestAnimationFrame(this.bodyScroll);
  }

  animated() {
    //https://dev.to/itepifanio/horizontal-scroll-with-lazy-loading-578c
    const onIntersection = (elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          // console.log("execution");
          // element.target.style.color = "red";
        }
      });
    };
    const observer = new IntersectionObserver(onIntersection, { threshold: 0.3, horizontal: true });

    this.sections.forEach((section) => {
      observer.observe(section);
    });
  }

  init() {
    this._setHeight();
    this.bodyScroll();
    this.animated();
    window.addEventListener("resize", () => {
      location.reload();
    });
  }
}
