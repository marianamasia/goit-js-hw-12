import{a as v,S as M,i as c}from"./assets/vendor-S2qh7U4E.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const P="https://pixabay.com/api/",q="56824350-607ae6fe1baa32f463874c421";async function p(r,o){return(await v.get(P,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),B=new M(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const o=r.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:w,downloads:S})=>`
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
            <span>${t}</span>
          </p>

          <p>
            <b>Views</b>
            <span>${i}</span>
          </p>

          <p>
            <b>Comments</b>
            <span>${w}</span>
          </p>

          <p>
            <b>Downloads</b>
            <span>${S}</span>
          </p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",o),B.refresh()}function $(){f.innerHTML=""}function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function R(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}const b=document.querySelector(".form"),O=document.querySelector(".load-more");let l="",s=1,u=0;b.addEventListener("submit",x);O.addEventListener("click",E);async function x(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!!l){s=1,$(),d(),y();try{const o=await p(l,s);if(u=o.totalHits,o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits);const a=Math.ceil(u/15);s<a?R():(d(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{c.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{L(),b.reset()}}}async function E(){s+=1,y();try{const r=await p(l,s);g(r.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"});const n=Math.ceil(u/15);s>=n&&(d(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{c.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
