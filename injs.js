const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".nav-links");

hamburger.onclick=()=>{
nav.classList.toggle("active");
};

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;
const target=+counter.dataset.target;

let count=0;

const update=()=>{

count+=Math.ceil(target/100);

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}
else{

counter.innerText=target+"+";

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(c=>observer.observe(c));

const reveal=document.querySelectorAll("section");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});

reveal.forEach(sec=>{

sec.style.opacity=0;
sec.style.transform="translateY(50px)";
sec.style.transition="1s";

revealObserver.observe(sec);

});