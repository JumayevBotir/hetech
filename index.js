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
        let mainBtn = document.querySelector('.main-bottom_btn');
        let modalImgs = document.querySelector('.modal-imgs');
        let form = document.querySelector('.form_modal');
        let telInput = document.querySelector('.modal-tel');
        let modalIsim=document.querySelector('.modal-isim')
        let modalFam=document.querySelector('.modal-familiya')
        navModal.style.display = "none";
        
        let tg = {
            token: "7494203155:AAG7EeoGIGtuUPk0H3dKjUKoD-kwleum3Gg",
            chat_id: "-1002085754742"
        };

        mainBtn.addEventListener('click', () => {
            navModal.style.display = "block";
        });

        modalImgs.addEventListener('click', () => {
            navModal.style.display = "none";
        });

        telInput.addEventListener('focus', () => {
            if (telInput.value === '') {
                telInput.value = '+998';
            }
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const telValue = telInput.value;
            sendMessage(`Forma yuborildi: 
                ${modalIsim.value} 
                ${modalFam.value}
                ${telValue}`);  
                
               
               
            alert('Forma yuborildi: ' + telValue);
            navModal.style.display = "none";
        });

        function sendMessage(text) {
            const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`;
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.error('Xato:', response.status, response.statusText);
                        throw new Error('Tarmoq javobi yaxshi emas');
                    }
                })
                .then(data => {
                    console.log('Xabar yuborildi:', data);
                })
                .catch(error => {
                    console.error('Fetch jarayonida muammo yuz berdi:', error);
                });
        }