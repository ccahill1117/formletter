$(document).ready(function() {
  $("#formOne").submit(function(event){
    // $(".person-name").text();
    // $(".person-number").text();

    var pname = $("input#person").val();
    var pnumber = $("input#number").val();

    $(".person-name").text(pname);
    $(".person-number").text(pnumber);

    $(".formletter").show();

    event.preventDefault();
  });
});
