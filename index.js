$( document ).ready(function() {
  $(".fa-save").click(function(event){
    console.log($(event.target).parent().parent().prev().children().val())
  })
});