const navbar=document.querySelector(".navbar");
const bar=document.querySelector("#bar-icon");

bar.onclick=()=>{
    navbar.classList.toggle("active");
    bar.classList.toggle("fa-times");
}
window.onscroll=()=>{
    navbar.classList.remove("active");
    bar.classList.remove("fa-times");
}

document.querySelector(".load-more .btn").onclick=()=>{
    if(document.querySelector(".load-more .btn").innerText=="Load More"){
        document.querySelectorAll('.courses .box-container .hide').forEach(show=>{
            show.style.display="block";
        })
        document.querySelector(".load-more .btn").innerText="show less";
    }else{
        document.querySelectorAll('.courses .box-container .hide').forEach(show=>{
            show.style.display="none";
        })
        document.querySelector(".load-more .btn").innerText="load more";
    }
}