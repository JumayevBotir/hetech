let search=document.querySelector('.navbar-right_search');
let navbar=document.querySelector('.navbar');
let originalNavbarContent = navbar.innerHTML;
let inputSearch=document.createElement('input')
let divNow=document.createElement('div')
divNow.classList.add('divNow')
let imgX=document.createElement("img");
imgX.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubXSwM5i62z5ZsAhDsg1db5y7_DPEjLPRYQ&s"
imgX.classList.add('imgX')
inputSearch.type='search';
inputSearch.placeholder='Xizmatni qidiring';
divNow.appendChild(inputSearch);
divNow.appendChild(imgX)
inputSearch.classList.add('inputSearch')
search.addEventListener('click',(e)=>{
    navbar.innerHTML="";
    navbar.appendChild(divNow)
})
imgX.addEventListener('click',()=>{
    navbar.innerHTML = originalNavbarContent;
})