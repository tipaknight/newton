const x=document.querySelectorAll("[data-modal-button]"),S=document.querySelectorAll("[data-modal-closed]");x.forEach(function(e){e.addEventListener("click",function(){const t=this.dataset.modalButton;document.querySelector("#"+t).classList.remove("hidden")})});S.forEach(function(e){e.addEventListener("click",function(){const t=this.closest("[data-modal]");t.classList.add("hidden"),t.classList.remove("modal-thank")})});const b=document.querySelectorAll(".tabs__nav-btn"),w=document.querySelectorAll(".tabs__item");b.forEach(q);function q(e){e.addEventListener("click",function(){let t=e,c=t.getAttribute("data-tab"),n=document.querySelector(c);t.classList.contains("active")||(b.forEach(function(a){a.classList.remove("active")}),w.forEach(function(a){a.classList.remove("active")}),t.classList.add("active"),n.classList.add("active"))})}document.querySelector(".tabs__nav-btn").click();const _=document.querySelectorAll(".tabs__nav-btn-ind"),I=document.querySelectorAll(".tabs__item-ind");_.forEach(A);function A(e){e.addEventListener("click",function(){let t=e,c=t.getAttribute("data-tab"),n=document.querySelector(c);t.classList.contains("active")||(_.forEach(function(a){a.classList.remove("active")}),I.forEach(function(a){a.classList.remove("active")}),t.classList.add("active"),n.classList.add("active"))})}document.querySelector(".tabs__nav-btn-ind").click();function B(){document.querySelectorAll(".accordion__item-trigger").forEach(t=>{t.addEventListener("click",()=>{const c=t.parentNode;c.classList.contains("accordion__item-active")?c.classList.remove("accordion__item-active"):(document.querySelectorAll(".accordion__item").forEach(n=>n.classList.remove("accordion__item-active")),c.classList.add("accordion__item-active"))})})}B();function C(){const e=document.querySelector(".burger"),t=document.querySelector(".menu"),c=document.querySelector("body");e.addEventListener("click",()=>{t.classList.contains("active")?(t.classList.remove("active"),e.classList.remove("active-burger"),c.classList.remove("locked")):(t.classList.add("active"),e.classList.add("active-burger"),c.classList.add("locked"))}),window.addEventListener("resize",()=>{window.innerWidth>991.98&&(t.classList.remove("active"),e.classList.remove("active-burger"),c.classList.remove("locked"))}),t.addEventListener("click",()=>{t.classList.remove("active"),e.classList.remove("active-burger"),c.classList.remove("locked")})}C();function D(){const e=document.querySelector("nav"),t=1;window.scrollY>=t?e.classList.add("fixed__nav"):e.classList.remove("fixed__nav")}window.addEventListener("scroll",D);let h=window.pageYOffset;window.onscroll=function(){let e=window.pageYOffset;h>e?document.getElementById("navbar").style.top="0":document.getElementById("navbar").style.top="-80px",h=e};window.addEventListener("DOMContentLoaded",function(){[].forEach.call(document.querySelectorAll(".mask-tel"),function(e){let t;function c(n){n.keyCode&&(t=n.keyCode),this.selectionStart<3&&n.preventDefault();let u="+7 (___) ___ ____",i=0,k=u.replace(/\D/g,""),g=this.value.replace(/\D/g,""),r=u.replace(/[_\d]/g,function(v){return i<g.length?g.charAt(i++)||k.charAt(i):v});i=r.indexOf("_"),i!=-1&&(i<5&&(i=3),r=r.slice(0,i));let m=u.substring(0,this.value.length).replace(/_+/g,function(v){return"\\d{1,"+v.length+"}"}).replace(/[+()]/g,"\\$&");m=new RegExp("^"+m+"$"),(!m.test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=r),n.type=="blur"&&this.value.length<5&&(this.value="")}e.addEventListener("input",c,!1),e.addEventListener("focus",c,!1),e.addEventListener("blur",c,!1),e.addEventListener("keydown",c,!1)})});const o=document.getElementsByClassName("gallery-item"),s=document.createElement("div"),d=document.createElement("div"),E=document.createElement("img"),f=document.createElement("div"),L=document.createElement("div");s.classList.add("lightbox");d.classList.add("lightbox-content");f.classList.add("arr","arr-left","lightbox-prev");L.classList.add("arr","arr-right","lightbox-next");s.appendChild(d);d.appendChild(E);d.appendChild(f);d.appendChild(L);document.body.appendChild(s);let l=1;function y(e){e>o.length?l=1:e<1&&(l=o.length);let t=o[l-1].children[0].getAttribute("src");E.setAttribute("src",t)}function N(){s.style.display="block";let e=parseInt(this.getAttribute("data-index"));y(l=e)}for(let e=0;e<o.length;e++)o[e].addEventListener("click",N);function p(e){y(l+=e)}function O(){p(-1)}function T(){p(1)}f.addEventListener("click",O);L.addEventListener("click",T);function Y(){this===event.target&&(s.style.display="none")}s.addEventListener("click",Y);