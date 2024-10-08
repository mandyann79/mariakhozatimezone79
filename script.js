document.addEventListener("DOMContentLoaded", function () {
  const citySelect = document.getElementById("citySelect");
  const localTimeButton = document.getElementById("localTimeButton");
  const timeDisplay = document.getElementById("timeDisplay");

  citySelect.addEventListener("change", function () {
    const timezone = this.value;
    if (timezone) {
      const date = moment().tz(timezone).format("dddd, MMMM D, YYYY h:mm A");
      timeDisplay.innerText = `It is ${date} in ${timezone}`;
    } else {
      timeDisplay.innerText = "";
    }
  });

  localTimeButton.addEventListener("click", function () {
    const localTime = moment().format("dddd, MMMM D, YYYY h:mm A");
    alert(`Your local time is ${localTime}`);
  });
});
