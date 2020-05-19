// const orderButton = document.querySelector('.order-button');
// const formSubmitButton = document.querySelector('.formBtn')

// const sendToBackend = () => {
//     console.log('send to backend: ')

// }

// orderButton.addEventListener('click', (e) => {
//     // e.preventDefault();

//     sendToBackend();
//     // const items = document.querySelectorAll('.itemRow');
//     // const list = [...items];
//     // const activeOrder = list.map(el => el.innerText.split(/\t/).filter(Boolean))
//     // console.log('click order: ', activeOrder);  


// })

// formSubmitButton.addEventListener('click', (e) => {

//     // e.preventDefault();
//     console.log('form button: ');
// })
$('#contact_form').on('submit', (e) => {
    e.preventDefault();

    const firstName = $("#first_name")
    .val()
    .trim();
  const lastName = $("#last_name")
    .val()
    .trim();

  const data = {
    firstName,
    lastName
  };
  
  $.post('/email', data, function() {
      console.log('Server received our data');
  })
  
});