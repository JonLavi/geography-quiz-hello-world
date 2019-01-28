const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
    // console.log(`Published on channel: ${channel}, with payload: ${payload}`);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
    // console.log(`Subscribed on channel: ${channel}`)
  }
};

module.exports = PubSub;
