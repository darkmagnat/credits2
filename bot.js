const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "508240875072126997"; // ايدي السررفر
var channel = "508259559018594304";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('cazanova spam , ')
    },305);
})

client.login(process.env.BOT_TOKEN);
