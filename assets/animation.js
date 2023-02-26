import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default class Animation {
  constructor() {
    this.container = document.querySelector(".container");
    this.container_w = this.container.getBoundingClientRect().width;
    this.container_h = this.container.getBoundingClientRect().height;

    this.wrapper = document.querySelector(".wrapper");
    this.wrapper_w = this.wrapper.offsetWidth;

    // this.current = this.container.getBoundingClientRect().left;
    this.ease = 0.05;
    this.current = 0;

    this.scroll_pc = this.scroll_pc.bind(this);
    this.scroll_mobile = this.scroll_mobile.bind(this);

    this.target = 0;
    this.bodyCurrent = 0;
    this.bodyTarget = 0;

    this.window_w = window.innerWidth;
    this.window_h = window.innerHeight;

    this.height = document.querySelector(".js-height span");
    this.sections = document.querySelectorAll(".js-section");
    this.filter = document.querySelectorAll(".js-filter");
  }

  lerp(start, end, multiplier) {
    return (1 - multiplier) * start + multiplier * end;
  }

  /**
   * @setting
   */
  _setHeight() {
    //01. wrapperに要素*100%のwidthを設定する
    this.wrapper.style.width = `${document.querySelectorAll(".js-section").length * 100}%`;
    //02. bodyに (containerの横幅 - 画面の幅 + 画面の高さ)pxを設定する
    document.body.style.height = `${this.container_w - this.window_w + this.window_h}px`;
  }

  _setWidth() {
    this.wrapper.style.height = `${document.querySelectorAll(".js-section").length * 100}%`;
    document.body.style.height = `${this.container_h}px`;
  }

  /**
   * @scroll
   */
  scroll_pc() {
    this.bodyCurrent = parseFloat(this.lerp(this.bodyCurrent, this.bodyTarget, this.ease)).toFixed(2);
    this.bodyTarget = window.scrollY;
    //1フレーム毎にスクロールに合わせて位置を変更する
    this.container.style.transform = `translate3d(-${this.bodyCurrent}px, 0px, 0px)`;
    requestAnimationFrame(this.scroll_pc);
  }

  scroll_mobile() {
    this.bodyCurrent = parseFloat(this.lerp(this.bodyCurrent, this.bodyTarget, this.ease)).toFixed(2);
    this.bodyTarget = window.scrollY;
    //1フレーム毎にスクロールに合わせて位置を変更する
    this.container.style.transform = `translate3d(0, -${this.bodyCurrent}px, 0px)`;
    requestAnimationFrame(this.scroll_mobile);
  }

  /**
   * @animation
   */
  animated() {
    //https://dev.to/itepifanio/horizontal-scroll-with-lazy-loading-578c
    const onIntersection = (elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          //add animations
          gsap.to(element.target, {
            width: 0,
            ease: Power4.easeOut,
            duration: 1.6,
          });
        }
      });
    };
    const observer = new IntersectionObserver(onIntersection, { threshold: 0.4, horizontal: true });
    this.filter.forEach((filter) => {
      observer.observe(filter);
    });
  }

  /**
   * @init
   */
  init_pc() {
    this._setHeight();
    this.scroll_pc();
    this.animated();
  }

  init_mobile() {
    this._setWidth();
    this.scroll_mobile();
    this.animated();
  }
  /**
   * @resize
   */
  onResize() {
    location.reload();
  }
}
