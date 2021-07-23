$( document ).ready(function() {
  var notes = JSON.parse(localStorage.getItem('notes')) || {
    "9AM": '',
    "10AM": '',
    "11AM": '',
    "12PM": '',
    "1PM": '',
    "2PM": '',
    "3PM": '',
    "4PM": '',
    "5PM": '',
  } 

for (const property in notes) {
  console.log(`${property}: ${notes[property]}`);
  $(`#${property}`)[0].value = notes[property]
}

  $(".fa-save").click(function(event){
    var text = $(event.target).parent().parent().prev().children().val()
    var time = $(event.target).parent().parent().prev().prev().children().text()
    notes[time] = text
    localStorage.setItem('notes', JSON.stringify(notes))
    console.log(notes)
  })

});