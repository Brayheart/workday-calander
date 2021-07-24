$( document ).ready(function() {
  var hour = moment().format("h");

  $('#date').text(moment().format("dddd, MMMM Do YYYY"))
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
  // var timeblock = property.slice(0, property.length - 2)
  // console.log(timeblock, hour)


  // console.log($(property))
  $(`#${property}`)[0].value = notes[property]
}

console.log($('.form-control'))

  $(".fa-save").click(function(event){
    var text = $(event.target).parent().parent().prev().children().val()
    var time = $(event.target).parent().parent().prev().prev().children().text()
    notes[time] = text
    localStorage.setItem('notes', JSON.stringify(notes))
    // console.log(notes)
  })

});