const { createApp } = Vue;

createApp({
  data() {
    return {
      message: '',
      messages: [],
      socket: null,
    };
  },
  methods: {
    sendMessage() {
      if (this.message.trim()) {
        this.socket.emit('send_message', this.message);
        this.messages.push(this.message);
        this.message = '';
      }
    },
  },
  mounted() {
    this.socket = io('wss://ws.socketsbay.com/v1/echo');
    this.socket.on('send_message', (message) => {
      this.messages.push(message);
    });
  },
}).mount('#app');
