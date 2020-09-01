// Get the article we want to play with
var article = document.getElementsByTagName("article")[0];  

// Create a div to place everything
var div = document.createElement("div");
div.className += "md-sidebar__scrollwrap"

// Create the buttons
var listen_div = document.createElement("div");
listen_div.className += "md-sidebar__inner"
var listen_button = document.createElement("button");

var qr_div = document.createElement("div");
qr_div.className += "md-sidebar__inner"
var qr_button = document.createElement("button");

// Style the buttons
listen_button.innerHTML = '<label class="md-nav md-nav--secondary md-nav__title">Audio &#x23ef;</label>';
listen_button.style.marginTop = '5px'
qr_button.innerHTML = '<label class="md-nav md-nav--secondary md-nav__title">Display QR</label>';
qr_button.style.marginTop = '5px'

// Append buttons to the main div
listen_div.appendChild(listen_button);
qr_div.appendChild(qr_button);
div.appendChild(listen_div);
div.appendChild(qr_div);

//
// Add event handler for audio
//

var synth = window.speechSynthesis;
var msg = new SpeechSynthesisUtterance();
msg.lang = 'en-US';
msg.text = article.innerText;
// Make sure the queue is empty
synth.cancel();

listen_button.addEventListener ("click", function() {
  if (!synth.speaking){
    synth.speak(msg);
  } else if (synth.paused) {
    synth.resume();
  } else {
    synth.pause();
  }   
});

//
// Add event handler for QR code
//

// load the javascript that generates the QR
var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js';
head.appendChild(script);

// create the canvas
var qr_code_img = document.createElement("canvas");
qr_code_img.style.display = "none";
qr_code_img.id = "qrcode";

var qr = false;  

// add the canvas to our div
div.appendChild(qr_code_img);

// Make the listener create the image if needed and toggle it on and off
qr_button.addEventListener ("click", function() {
  if (!qr) {
    qr = new QRious({
      element: document.getElementById('qrcode'),
      // size: 200,
      value: window.location.href
    })
  }
  if (qr_code_img.style.display === "none") {
    qr_code_img.style.display = "block";
  } else {
    qr_code_img.style.display = "none";
  }
});

//
// Finally add the div
//
var sidebar = document.getElementsByClassName("md-sidebar--secondary");
sidebar[0].appendChild(div);
