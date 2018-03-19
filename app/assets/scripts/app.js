const mainApp = new Vue({
  el: '#vue',
  data: {
    burgerIcon: true,
    open: false,
    potatoModal: false,
    contactModal: false,
    message: ''
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
    }
  }
});

const footer = new Vue({
  el: '#footer',
  data: {

  },
  methods: {
    openPotatoModal() {
      mainApp.potatoModal = true;
    },
    openContactModal() {
      mainApp.contactModal = true;
    }
  }
});
