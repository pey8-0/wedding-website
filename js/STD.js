$(document).ready(function () {
var myCalendar = createCalendar({

  options: { class: "", id: "" },
  data: {
    title: "PLACEHOLDER: Peyton and Kieren's Post Elopement Celebration",
    start: new Date("Oct 01, 2028 17:00"),
    end: new Date("Oct 01, 2028 20:00"),
    address: "The Hills of RiverMakers",
    description: "Placeholder only. More details to come in a formal invite. ",
  },
});
$("#add-to-cal").html(myCalendar);
});
