////////Search uchun qilingan ish//////////////////
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
/////////////////////////////////////Aylanma yozuv uchun qilingan ish/////////////////
let headrAylanma=document.querySelector('.headr-aylanma');
let aylanmaYozuv=["Kompyuter","Wi-fi tarmog'i","Prenter",'Uy Teatri'];
let index=0;
function yangila(){
    headrAylanma.innerHTML=aylanmaYozuv[index];
    index=(index+1)%aylanmaYozuv.length;
}
setInterval(yangila,2000);
yangila()
////////////////////////////////////////////
///////Modal/////////////

let navModal = document.querySelector('.main-modal');
navModal.style.display = "none";

let mainBtn = document.querySelector('.main-bottom_btn');
let modalImgs = document.querySelector('.modal-imgs');

modalImgs.addEventListener('click', () => {
    navModal.style.display = "none";
});

mainBtn.addEventListener('click', () => {
    navModal.style.display = "block";
});

const form = document.querySelector('.form_modal');
const telInput = document.querySelector('.modal-tel');

telInput.addEventListener('focus', () => {
    if (telInput.value === '') {
        telInput.value = '+998';
    }
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Forma yuborildi: ' + telInput.value);
});
let a=document.querySelector('body');
