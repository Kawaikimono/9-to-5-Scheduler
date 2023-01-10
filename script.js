var save = $('.saveBtn')

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function (event) {
  save.on('click', saveMessage);
  
  function saveMessage(event) {
    event.preventDefault;
    var text = this.previousElementSibling.value
    localStorage.setItem(this.parentElement.id, text)
  }
  
  var today = dayjs()
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
  var nowHour = today.hour()
  console.log(nowHour)
  var timeBlocks = $(".time-block")

  for(var i = 0; i<timeBlocks.length; i++)
  {
    var timeBlock = timeBlocks[i]
    var hour = parseInt(timeBlock.id.split("-")[1])
    // var getInfo = localStorage.getItem(text)
    // this.previousElementSibling.textContent = getInfo
    if (hour===nowHour) {
      timeBlock.classList.add("present")
      } else if (hour <= nowHour) {
      timeBlock.classList.add("past")
        } else {timeBlock.classList.add("future")}
  }
  
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // //
  
  
});
