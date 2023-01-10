var save = $(".saveBtn");

$(function (event) {
  save.on("click", saveMessage);

  function saveMessage(event) {
    event.preventDefault;
    var text = this.previousElementSibling.value;
    localStorage.setItem(this.parentElement.id, text);
  }
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
  var nowHour = today.hour();
  console.log(nowHour);
  var timeBlocks = $(".time-block");

  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var hour = parseInt(timeBlock.id.split("-")[1]);
    var getInfo = localStorage.getItem(timeBlock.id);
    timeBlock.querySelector(".description").value = getInfo;
    if (hour === nowHour) {
      timeBlock.classList.add("present");
    } else if (hour <= nowHour) {
      timeBlock.classList.add("past");
    } else {
      timeBlock.classList.add("future");
    }
  }
});
