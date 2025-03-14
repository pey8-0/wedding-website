$(document).ready(function () {
  const e = document.querySelectorAll(".accordion-button");
  console.log(e),
    e.forEach((e) => {
      e.addEventListener("click", function () {
        console.log("click!");
        const t = "true" === e.getAttribute("aria-expanded");
        e.setAttribute("aria-expanded", !t),
          e.classList.contains("collapsed")
            ? e.classList.remove("collapsed")
            : e.classList.add("collapsed");
        const n = document.querySelector(e.getAttribute("data-bs-target"));
        n.classList.contains("collapse")
          ? n.classList.remove("collapse")
          : n.classList.add("collapse");
      });
    });
  var t = createCalendar({
    options: { class: "", id: "" },
    data: {
      title: "Peyton and Kieren's Post Elopement Celebration",
      start: new Date("Oct 01, 2028 17:00"),
      end: new Date("Oct 01, 2028 20:00"),
      address: "TBA",
      description:
        "We can't wait to see you. For any queries or issues, please contact Peyton.",
    },
  });
  $("#add-to-cal").html(t), emailjs.init({ publicKey: "K1T0S3RYKNuuoWX07" });
  var n = document.getElementById("partyDetails"),
    o = document.getElementById("submitRSVP"),
    a = document.getElementById("getParty"),
    l = document.getElementById("rsvp-form"),
    s = document.getElementById("spinner");
  function i(e) {
    "getParty" === e
      ? (document.getElementById("findParty").className = "alert alert-danger")
      : "createRSVP" === e &&
        (document.getElementById("submitError").className =
          "alert alert-danger");
  }
  l.addEventListener("submit", (e) => {
    e.preventDefault(), (s.style.display = "block");
    var t =
      document.getElementById("first").value +
      " " +
      document.getElementById("last").value;
    const l = e.submitter.id;
    if (
      (console.log(l),
      l === a.id &&
        fetch(
          `https://sheetdb.io/api/v1/r02my58web324/search_or?person1=${t}&person2=${t}&person3=${t}&person4=${t}`
        )
          .then((e) => e.json())
          .then((e) => {
            console.log(e),
              0 != e.length
                ? ((s.style.display = "none"),
                  (function (e) {
                    (row = e[0]), (n.innerHTML = "");
                    for (var t = 1; t > 5; t++)
                      (document.getElementById("person" + t).value = ""),
                        console.log("emptied!");
                    let a = "<h4>Your Party:</h4><ul>";
                    for (const e in row)
                      if (row.hasOwnProperty(e)) {
                        const t = row[e];
                        "" !== t &&
                          (a += `<li class="guest"> <label for="attending${e}">Will ${t} be attending?</label><select id="attending${e}" name="attending${e}"><option value="yes">Yes</option><option value="no">No</option></select> </li>`);
                      }
                    (a +=
                      '<div class="family"><label for="diet">Any dietary restrictions?</label><p id="diet-instructions">Please list for each member of your party if there are any. E.g. Peyton - no dairy, Kieren - no peanuts, Charlie- allergic to dairy.</p> <input autocomplete="email" aria-describedby="diet-instructions"id="diet" name="diet" type="text"></div><div class="family"><label for="email">Enter your email address if you\'d like a copy of your RSVP:</label><p id="email-instructions">Please leave this field empty if you do not want an email.</p><input aria-describedby="email-instructions"id="email" name="email" type=text><div></ul>'),
                      n.insertAdjacentHTML("beforeend", a),
                      (o.className = "btn-fill rsvp-btn");
                  })(e))
                : ((s.style.display = "none"), i("getParty"));
          }),
      l === o.id)
    ) {
      var r = document.getElementById("rsvp-form"),
        d = document.querySelectorAll("select");
      let e = {};
      var c = 1;
      d.forEach((e) => {
        console.log(e.id);
        var t = document.querySelector(`label[for="${e.id}"]`);
        if (t) {
          console.log(t);
          var n = t.textContent
            .trim()
            .match(/Will\s+(.+?)\s+be attending/)[1]
            .trim();
          (document.getElementById("person" + c).value = n), c++;
        }
      });
      var m = new FormData(r);
      (e.sheet = "RSVPs"),
        (e.id = "INCREMENT"),
        (e.timestamp = "DATETIME"),
        m.forEach((t, n) => {
          e[n] = t;
        }),
        console.log(e),
        fetch("https://sheetdb.io/api/v1/r02my58web324", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(e),
        })
          .then((e) => e.json())
          .then(function (e) {
            "created: 1" != e && ((s.style.display = "none"), i("addRSVP"));
          }),
        emailjs.sendForm("service_awcc0yv", "rsvp_couple", r),
        "" != document.getElementById("email").value &&
          emailjs.sendForm("service_awcc0yv", "rsvp_guest", r),
        (s.style.display = "none"),
        $("#rsvp-modal").modal("show");
    }
  });
});
