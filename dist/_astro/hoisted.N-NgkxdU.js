import"./hoisted.zU_1TsLA.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".openModal"),e=document.getElementById("modal")?.classList,n=document.getElementById("closeModal");o&&e&&n?(o.forEach(t=>{t.addEventListener("click",()=>{e.remove("hidden")})}),n.addEventListener("click",()=>{e.add("hidden")})):console.warn("Required elements for modal functionality not found.")});