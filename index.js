(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const c={form:document.querySelector(".js-search-form"),weatherContainer:document.querySelector(".js-weather-wrapper")};function l(t){return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=1&appid=95632b02f9162f375a368971925f5209`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function u(t,r){return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${r}&appid=95632b02f9162f375a368971925f5209&units=metric`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function a(t){const r=new Date(t*1e3),s=String(r.getHours()).padStart(2,"0"),i=String(r.getMinutes()).padStart(2,"0");return`${s}:${i}`}function p(t){return`<div class="weather-card">
        <h2 class="city-name">${t.name}</h2>
        <ul class="weather-info list">
          <li class="weather-info-item">
            <p class="temp">
              Температура: ${t.main.temp}<sup>&#176;</sup>
            </p>
          </li>
          <li class="weather-info-item">
            <p class="feels-like-temp">
              Відчувається як: ${t.main.feels_like}<sup>&#176;</sup>
            </p>
          </li>
          <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${a(t.sys.sunrise)}</p>
          </li>
          <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${a(t.sys.sunset)}</p>
          </li>
          <li class="weather-info-item">
            <p class="clouds">Хмарність: ${t.clouds.all}%</p>
          </li>
        </ul>
      </div>
    `}function f(t){t.preventDefault();const r=t.target.elements.user_country.value.trim();if(!r)return alert("Заповніть поле пошуку!");l(r).then(s=>{if(s.length===0)return alert("Міста не знайдено!");const{lat:i,lon:e}=s[0];return u(i,e)}).then(s=>{const i=p(s);c.weatherContainer.innerHTML=i}).catch(s=>console.log(s))}c.form.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
