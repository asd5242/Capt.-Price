const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("COD 4 with my friends :/");
});

client.on('message', message => {
  if (message.content === '.ping') {
    message.reply('Pong!');
  };
});

client.on('message', message => {
  if (message.content === '.help') {
    message.channel.send('Capt. Prices commands are .help, .ping, .go kys and .mommy theres a clown');
  };
});

client.login('Mzc3NzkzODAyNTE1MTIwMTI5.DOSy5A.waFJ6f2D-XjwNsSRNV8J1F25WWw');



client.on('message', message => {
  if (message.content === '.go kys') {
    message.channel.send('IM SORRY R U TALKING TO URSELF!!!!!');
  };
});


client.on('message', message => {
  if (message.content === '.mommy theres a clown') {
    message.author.send('Do u want some Candy little boy?');
  };
});
