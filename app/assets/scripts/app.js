var mainApp = new Vue({
  el: '#vue',
  data: {
    burgerIcon: true,
    openNav: false,
    potatoModal: false,
    contactModal: false,
    message: '',
    fname: '',
    address: ''
  },
  methods: {
    openMobileNav : function() {
      this.burgerIcon = false;
      this.openNav = true;
    },
    closeMobileNav : function() {
      this.burgerIcon = true;
      this.openNav = false;
    },
    messageSend : function() {
      this.message = 'message sent or not!';
    },
    buyButton : function() {
      alert('Oops out of stock!');
    },
    submitFreePotato : function() {
      if(this.fname.length >= 1 && this.address.length >= 1) {
      alert("Thank you "+ this.fname + ", your potato will be sent to " + this.address + ".");
      this.fname = '';
      this.address = '';
      this.potatoModal = false;
    }else {
      alert('Please complete the form.');
    }
    }
  }
});
var footer = new Vue({
  el: '#footer',
  data: {
    dribble: '#'
  },
  methods: {
    openPotatoModal : function() {
      mainApp.potatoModal = true;
    },
    openContactModal : function() {
      mainApp.contactModal = true;
    },
    copyright : function() {
      var potato = prompt('Type the word potato to see the reference link of this page.', '');
      if (potato === 'potato' || potato === 'Potato') {
        alert('https://dribbble.com/shots/2042501-Potato-landing-page');
      } else {
        alert("Don\'t know how to spell potato?");
        potato = prompt('One more time!', '');
        if (potato === 'potato' || potato === 'Potato') {
          alert('https://dribbble.com/shots/2042501-Potato-landing-page');
      } else {
        alert('I understand you don\'t like potato.');
      }
    }
  }
}
});
