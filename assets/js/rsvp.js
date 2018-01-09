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


$('#submit-form').on('click', function(e) {
  const $form = $('form#rsvp');
  const url = 'https://script.google.com/macros/s/AKfycbzzd1U9PiI74oBN8MC-_FyRqg7BaGMTsDRqeXlpU8y308EYvQo/exec';

  var formJson = $form.serializeObject();
  var jqxhr = $.ajax(
    { 
      url: url
    , method: "POST"
    , dataType: "json"
    , data: formJson
    })
    .done(function(data) {
      console.log("Success! Data: " + data.statusText);
    //$(location).attr('href',redirectUrl);
    })
    .fail(function(data) {
      console.warn("Error! Data: " + data.statusText);
    })
    .complete(function(data) {
      window.location.replace(window.location.origin + '/')
    });
});

//const scriptURL = 'https://script.google.com/macros/s/AKfycbwtvYt0_RQCCoKoD3JVlipD-OEevqWwRkMR8_jRreg/exec';
//const form = document.forms['rsvp']
//
//form.addEventListener('submit', e => {
//  e.preventDefault();
//  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//    .then(response => console.log('Success!', response))
//    .catch(error => console.error('Error!', error.message));
//});
