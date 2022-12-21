//  template_t2bycvm
// service_b5ignxc
//  Fn4QBvozUTlPQG-hA



function contact(event){
    event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"
   emailjs
   .sendForm(
    'service_g1e3ina',
    'template_t2bycvm',
    event.target,
    'kr7KHiLv3KZaC7Mn9'
   ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert( "Our email service is temporarily unavailable, please use the contact number or contact us directly.")
   })
}
let isModalOpen = false;
function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal__open");
    }
    isModalOpen = true;
    document.body.classList += ' modal__open'
}