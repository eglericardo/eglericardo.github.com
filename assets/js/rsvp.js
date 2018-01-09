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
