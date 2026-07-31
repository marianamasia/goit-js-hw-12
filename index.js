import{a as q,S as M,i as c}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const R="https://pixabay.com/api/",B="56824350-607ae6fe1baa32f463874c421";async function f(r,t){return(await q.get(R,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),E=new M(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const t=r.map(({webformatURL:a,largeImageURL:n,tags:e,likes:o,views:i,comments:v,downloads:P})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img
              src="${a}"
              alt="${e}"
              loading="lazy"
            />
          </a>

          <div class="info">
            <p>
              <b>Likes</b>
              <span>${o}</span>
            </p>

            <p>
              <b>Views</b>
              <span>${i}</span>
            </p>

            <p>
              <b>Comments</b>
              <span>${v}</span>
            </p>

            <p>
              <b>Downloads</b>
              <span>${P}</span>
            </p>
          </div>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",t),E.refresh()}function $(){h.innerHTML=""}function L(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}function u(){g.classList.remove("hidden")}function p(){g.classList.add("hidden")}const w=document.querySelector(".form");let l="",s=1,d=0;const S=15;w.addEventListener("submit",O);document.querySelector(".load-more").addEventListener("click",x);async function O(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!!l){s=1,d=0,$(),p(),L();try{const t=await f(l,s);if(d=t.totalHits,t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits);const a=Math.ceil(d/S);s<a?u():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{c.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{b(),w.reset()}}}async function x(){s+=1,p(),L();try{const r=await f(l,s);y(r.hits);const t=document.querySelector(".gallery-item");if(t){const n=t.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}const a=Math.ceil(d/S);s>=a?(p(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):u()}catch{c.error({message:"Something went wrong. Please try again!",position:"topRight"}),u()}finally{b()}}
//# sourceMappingURL=index.js.map
