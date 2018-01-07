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
  var $form = $('form#rsvp');
  var url = 'https://docs.google.com/forms/d/e/1FAIpQLSdt1x-dkJzq3qDA-hYSBtjgxrso4_P_8hY74Mj0bQdnwxxiOg/formResponse';
  var fields = ['name', 'attendance', 'email', 'food', 'partner', 'namePartner', 'foodPartner', 'transport', 'comments'];
  var google_fields = ['entry.2134669730', 'entry.787446130', 'entry.1027082432', 'entry.625021019', 'entry.1591295703', 'entry.1174150498', 'entry.1276663904', 'entry.247851954', 'entry.815667730'];
  var formJson = $form.serializeObject();
  var newJson = {}
  for (var i = 0; i < google_fields.length; i++) {
    newJson[google_fields[i]] = formJson[fields[i]]
  }

  var jqxhr = $.ajax(
    { 
      url: url
    , method: "POST"
    , dataType: "json"
    , data: newJson
    , xhrFields: { withCredentials: true }
    , crossDomain: true
    })
    .done(function(data) {
    console.log("Success! Data: " + data.statusText);
    //$(location).attr('href',redirectUrl);
    })
    .fail(function(data) {
      console.warn("Error! Data: " + data.statusText);
    })
    .complete(function(data) {
      window.location.replace(window.location.origin + '/#one')
    });
});
