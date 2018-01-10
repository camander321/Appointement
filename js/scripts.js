$(document).ready(function() {
  $("#masterForm").submit(function(event) {
    alert("Your appointment has been confirmed!");

    var name = $("#FirstName").val() + " " + $("#LastName").val();
    $("#name").text(name);

    event.preventDefault();
  });
});
