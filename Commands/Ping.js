module.exports = ({
  name: 'ping',
  description: 'This Is A Ping Command!',
  execute (message) {
    message.channel.send('Pong!');
  }
});
