$( document ).ready(function() {
  var hour = moment().format("H");
  hour = parseInt(hour)

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

Array.from($('textarea')).forEach(el => {
  var timeblock = el.getAttribute('data-time')
  timeblock = parseInt(timeblock)

  // console.log(el)
  if(timeblock < hour){
    $(`#${el.getAttribute('id')}`)[0].removeAttribute("class")
    $(`#${el.getAttribute('id')}`)[0].setAttribute('class','form-control past')
  } else if(timeblock === hour){
    $(`#${el.getAttribute('id')}`)[0].removeAttribute("class")
    $(`#${el.getAttribute('id')}`)[0].setAttribute('class','form-control present')
  } else {
    $(`#${el.getAttribute('id')}`)[0].removeAttribute("class")
    $(`#${el.getAttribute('id')}`)[0].setAttribute('class','form-control future')
  }

})



  $(".fa-save").click(function(event){
    var text = $(event.target).parent().parent().prev().children().val()
    var time = $(event.target).parent().parent().prev().prev().children().text()
    notes[time] = text
    localStorage.setItem('notes', JSON.stringify(notes))
    // console.log(notes)
  })

});