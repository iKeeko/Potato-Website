const mainApp=new Vue({el:"#vue",data:{burgerIcon:!0,open:!1,potatoModal:!1,contactModal:!1,message:"",fname:"",address:""},methods:{openNav(){this.open=!0,this.burgerIcon=!1},closeNav(){this.open=!1,this.burgerIcon=!0},closePotatoModal(){this.potatoModal=!1,this.message=""},closeContactModal(){this.contactModal=!1,this.message=""},messageSend(){this.message="message sent or not!"},buyButton(){alert("Oops out of stock!")},submitFreePotato(){this.fname.length>=1&&this.address.length>=1?(alert(`Thank you ${this.fname}, your potato will be sent to ${this.address}.`),this.fname="",this.address=""):alert("Please complete the form.")}}}),footer=new Vue({el:"#footer",data:{dribble:"#"},methods:{openPotatoModal(){mainApp.potatoModal=!0},openContactModal(){mainApp.contactModal=!0},copyright(){let t=prompt("Type the word potato to see the reference link of this page.","");"potato"===t||"Potato"===t?alert("https://dribbble.com/shots/2042501-Potato-landing-page"):(alert("Don't know how to spell potato?"),"potato"===(t=prompt("One more time!",""))||"Potato"===t?alert("https://dribbble.com/shots/2042501-Potato-landing-page"):alert("I understand you don't like potato."))}}});