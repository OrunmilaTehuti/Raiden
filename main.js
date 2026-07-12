from textwrap import dedent
js=dedent("""
document.addEventListener("DOMContentLoaded",()=>{

const nav=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    if(window.scrollY>80){
        nav.style.background="rgba(0,0,0,.92)";
        nav.style.boxShadow="0 8px 25px rgba(0,0,0,.4)";
    }else{
        nav.style.background="rgba(0,0,0,.35)";
        nav.style.boxShadow="none";
    }
});

const revealItems=document.querySelectorAll("section, .cards article, .split div, blockquote");

const observer=new IntersectionObserver((entries)=>{
 entries.forEach(entry=>{
    if(entry.isIntersecting){
        entry.target.animate([
            {opacity:0, transform:"translateY(50px)"},
            {opacity:1, transform:"translateY(0)"}
        ],{
            duration:700,
            easing:"ease-out",
            fill:"forwards"
        });
        observer.unobserve(entry.target);
    }
 });
},{threshold:.15});

revealItems.forEach(item=>{
    item.style.opacity="0";
    observer.observe(item);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
 anchor.addEventListener("click",function(e){
    e.preventDefault();
    const target=document.querySelector(this.getAttribute("href"));
    if(target){
        target.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    }
 });
});

document.querySelectorAll(".btn").forEach(btn=>{
 btn.addEventListener("mouseenter",()=>{
    btn.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.05)"},
        {transform:"scale(1)"}
    ],{duration:300});
 });
});

console.log("Black Raiden Experiences loaded successfully.");

});
""")
path="/mnt/data/main.js"
open(path,"w").write(js)
print(path)
