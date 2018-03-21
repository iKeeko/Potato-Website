const mainApp = new Vue({
  el: '#vue',
  data: {
    burgerIcon: true,
    open: false,
    potatoModal: false,
    contactModal: false,
    message: '',
    fname: '',
    address: ''
  },
  methods: {
    openNav() {
      this.open = true;
      this.burgerIcon = false;
    },
    closeNav() {
      this.open = false;
      this.burgerIcon = true;
    },
    closePotatoModal() {
      this.potatoModal = false;
      this.message = '';
    },
    closeContactModal() {
      this.contactModal = false;
      this.message = '';
    },
    messageSend() {
      this.message = 'message sent or not!';
    },
    buyButton() {
      alert('Oops out of stock!');
    },
    submitFreePotato() {
      if(this.fname.length >= 1 && this.address.length >= 1) {
      alert(`Thank you ${this.fname}, your potato will be sent to ${this.address}.`);
      this.fname = '';
      this.address = '';
    }else {
      alert('Please complete the form.');
    }
    }
  }
});
const footer = new Vue({
  el: '#footer',
  data: {
    dribble: '#'
  },
  methods: {
    openPotatoModal() {
      mainApp.potatoModal = true;
    },
    openContactModal() {
      mainApp.contactModal = true;
    },
    copyright() {
      let potato = prompt('Type the word potato to see the reference link of this page', '');
      if (potato === 'potato' || potato === 'Potato') {
        alert('https://dribbble.com/shots/2042501-Potato-landing-page.');
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
