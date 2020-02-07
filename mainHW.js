document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  const reqFields = document.querySelectorAll('.js-required');
  const radios = document.querySelectorAll('.gender');
  const textarea = document.querySelector('.yourMsg');
  

  for(let i = 0; i < reqFields.length; i++) {
    const field = reqFields[i];

    if(field.value === "") {
      field.style.border = '1px solid #c00';

      field.addEventListener(
        'change', 
        () => {
          removeErrorState(field);
        }, 
        { once: true }
      );
      e.preventDefault();
    }
  } 


  if(!radios[0].checked && !radios[1].checked) {
    const parent = radios[0].parentElement.parentElement;
    parent.style.border = '1px solid #c00';   
    
    radios[0].addEventListener('change', () => {
      removeErrorState(parent);
    });      
    radios[1].addEventListener('change', () => {
      removeErrorState(parent);
    });
    e.preventDefault();
  }
  console.log(reqFields);
}


function removeErrorState(elem) {
    elem.style.border = '1px solid #afafaf'
}
      

function hideSuccessMessage(messageRef) {
  messageRef.remove();
}


function showSuccessMessage() {
    if(document.location.search === '') {
        return;
    }  

    const p = document.createElement('p');
    p.classList.add('success-message');

    p.innerHTML = ('  Thank you for contacting us, ' + user);

    const i = document.createElement('i');
    i.classList.add('fas','fa-check-circle');

    const j = document.createElement('j');
    j.classList.add('fas','fa-times');
    
    const main = document.querySelector('main');
    p.prepend(i);
    p.append(j);
    main.prepend(p);
      
  setTimeout(hideSuccessMessage, 7000);
}


function hideSuccessMessage() {
  document.querySelector('.success-message').classList.add('fade-out');
}


const pairs = window.location.search.split('&');
let user = '';
for(let i = 0; i < pairs.length; i++) {
  const pair = pairs[i];
  const fields = pair.split('=');
  if(pair.includes('first+name=')) {
    user = fields[1];
  }
  console.log(fields[0], '=', fields[1]);
}

if(fields[0].includes('?')) {
  fields.remove('?');
}


window.addEventListener('DOMContentLoaded', showSuccessMessage);
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

window.addEventListener('load', () => console.log('Load'))