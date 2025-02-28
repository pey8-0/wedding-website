$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';

        // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/

    /********************** Set up for emails **********************/
    emailjs.init({
        publicKey: 'K1T0S3RYKNuuoWX07',
      });

    /********************** RSVP **********************/

    var partyDiv = document.getElementById("partyDetails");
    var submitButton = document.getElementById("submitRSVP");
    var getPartyButton = document.getElementById("getParty");
    var form = document.getElementById("rsvp-form");
    var spinner = document.getElementById("spinner");

    function showPartyDetails(family) {
        row = family[0];
        //empty everything that is programmatically updated.
        partyDiv.innerHTML = "";
        

        for (var num = 1;num>5;num++){
            var field = document.getElementById("person" + num);
            field.value = '';
            console.log("emptied!");
        }
    


        let rowHtml = `<h4>Your Party:</h4><ul>`;

        for (const key in row) {
            if (row.hasOwnProperty(key)) {
                const value = row[key];

                if (value !== '') {
                    rowHtml += `<li class="guest"> <label for="attending${key}">Will ${value} be attending?</label><select id="attending${key}" name="attending${key}"><option value="yes">Yes</option><option value="no">No</option></select> </li>`;
                }
            }
        }

        rowHtml += `<div class="family"><label for="diet">Any dietary restrictions?</label><p>Please list for each member of your party if there are any. E.g. Peyton - no dairy, Kieren - no peanuts, Charlie- allergic to dairy.</p> <input id="diet" name="diet" type="text"></div><div class="family"><label for="email">Enter your email address if you'd like a copy of your RSVP:</label><p>Please leave this field empty if you do not want an email.</p><input id="email" name="email" type=text><div></ul>`;
        partyDiv.insertAdjacentHTML("beforeend", rowHtml);
        submitButton.className = "btn-fill rsvp-btn"

    }

    function showError (where){
        if (where === 'getParty'){
            var findParty = document.getElementById("findParty");
            findParty.className = "alert alert-danger"
        }else if (where === 'createRSVP'){
            
            var submitError = document.getElementById("submitError");
            submitError.className = "alert alert-danger"
        }
        
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        spinner.style.display = 'block';

        var first = document.getElementById("first").value;
        var last = document.getElementById("last").value;
        var name = first + " " + last;
        const action = e.submitter.id;
        console.log(action);
        if (action === getPartyButton.id) {
            fetch(`https://sheetdb.io/api/v1/r02my58web324/search_or?person1=${name}&person2=${name}&person3=${name}&person4=${name}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (data.length != 0){
                        spinner.style.display = 'none';
                        showPartyDetails(data)
                    }
                    else{
                        spinner.style.display = 'none';
                        showError('getParty')
                    }
                    
                }

                );

        } if (action === submitButton.id) {
            var updatedForm = document.getElementById("rsvp-form");
            var attendingSelects = document.querySelectorAll('select');
            
            let data = {}
            var num = 1;

            attendingSelects.forEach(select => {
                console.log(select.id);

                var label = document.querySelector(`label[for="${select.id}"]`);
                if (label) {
                    console.log(label)
                    let labelText = label.textContent.trim();
                    var match = labelText.match(/Will\s+(.+?)\s+be attending/);
                    var personName = match[1].trim();
                    
                    //so we can add it to the email through the hidden fields.
                    var field = document.getElementById("person" + num);
                    field.value = personName;

                    num++
                }

            })

            var formInfo = new FormData(updatedForm);
            
            data['sheet'] = 'RSVPs';
            data['id'] = 'INCREMENT';

            data['timestamp'] = 'DATETIME';

            formInfo.forEach((value, key) => {
                data[key] = value;
            });
            console.log(data);
            fetch('https://sheetdb.io/api/v1/r02my58web324', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then( function (data){
                    if (data !='created: 1') {
                        spinner.style.display = 'none';
                        showError('addRSVP')
                    }

                } );

                //send email to me
                emailjs.sendForm('service_awcc0yv', 'rsvp_couple', updatedForm);
                
                //send email to person who RSVP'd
                var email = document.getElementById("email");
                if (email.value != ''){
                    emailjs.sendForm('service_awcc0yv', 'rsvp_guest', updatedForm);
                }
                spinner.style.display = 'none';
                //open modal
                $('#rsvp-modal').modal('show');


        }

    })

});

