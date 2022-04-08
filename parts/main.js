const $form = document.querySelector('#form')
const $buttonMailTo = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    //este evento evita que se recargue la pagina
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailTo.setAttribute('href', `mailto:manachoyaso@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailTo.click()
};
//funciona para enviar correos
//https://www.emailjs.com/
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_uqko4c8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});