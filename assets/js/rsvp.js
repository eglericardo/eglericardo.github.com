$(document).ready(function (){
  $("#partnerInfo").hide();
  $("#presenceInfo").hide();
});


$("input[name='attendance']")
  .change(function() {
    if ($(this).val() == "presence") {
      $("#presenceInfo").show();
    }
    else {
      $("#presenceInfo").hide();
    }
});


$("input[name='partner']")
  .change(function() {
    if ($(this).val() == "partner") {
      $("#partnerInfo").show();
    }
    else {
      $("#partnerInfo").hide();
    }
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwtvYt0_RQCCoKoD3JVlipD-OEevqWwRkMR8_jRreg/exec';
const form = document.forms['rsvp']

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
