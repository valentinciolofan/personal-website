const n=()=>{const e=document.getElementById("navbar")?.style;e&&(e.display=e.display==="block"?"none":"block")};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("hamburger");e?e.addEventListener("click",n):console.warn("Hamburger element not found. Navigation bar toggle might not work.")});