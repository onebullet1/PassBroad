const Discord = require('discord.js')
const { REST } = require('@discordjs/rest');

const { Routes } = require('discord-api-types/v9');
const db = require("pro.db")
const client = new Discord.Client({intents: new Discord.Intents(32767), partials: ['MESSAGE', 'CHANNEL', 'REACTION']})
require('express')().listen()
///
let teamname = "ONEBULLET"
let servername = "RealHero"
let time = 2000;
let gg = ["1197882392241770679"]
let ping = client.ws.ping
require("events").setMaxListeners(999999999999)
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const { request } = require('http');
client.on("ready", async () => {
const { AutoKill } = require('autokill')
AutoKill({Client: client, Time: 5000}) // Time Must be in Milliseconds And More Than 5 Seconds!
  

let status = [`Developed by : ${teamname}`,`${servername} Up`]
client.guilds.cache.forEach(Guild => {
    
    if (Guild.id !== gg){
    if (gg.includes(Guild.id)) return;
     
      
        Guild.leave().then(
          console.log(`leaved ${Guild.name}`)
        )
    } 
    })
  
setInterval(()=>{
   
    client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
   },5000)
  client.user.setStatus("dnd")
  console.log(`logged in as ${client.user.tag}`)
  console.log(`[ ${client.guilds.cache.map(g => g.name).join(', \n ')} ]`);
client.on("guildCreate", async () => {
  client.guilds.cache.forEach(Guild => {
    
    if (Guild.id !== gg){
    if (gg.includes(Guild.id)) return;
     
      
        Guild.leave()
    } 
    })
}
         )

   process.on("unhandledRejection", error => {
  return;
}); 
process.on("uncaughtException" , err => {
return;
})

process.on("unhandledRejection" , err => {
return;
})

process.on("rejectionHandled", error => {
return;
});
 
  const c = [{
    name: "bc",
    description: "To send the broadcast message to everyone",
   options:[{
     name: "message",
    description: "Pls type tye broadcast message",
     type: 3,
     required: true,
   }] 
  },{
    name: "obc",
    description: "To send the broadcast message to online members",
       options:[{
     name: "message",
    description: "Pls type tye broadcast message",
     type: 3,
     required: true,
   }] 
  },{
    name: "rbc",
    description: "To semd the broadcast message to specific role",
    options: [{
      name: "role",
      description: "Pls choose the role you want to send",
      type: 8,
      required: true,
    }, {
     name: "message",
    description: "Pls type tye broadcast message",
     type: 3,
     required: true,
   }]
  },{
    name: "set-name",
    description: "To change the bot name",
    options: [{
      name: "name",
      description: "Pls type the new bot name",
      type: 3,
      required: true,
    }]
  },{
    name: "set-avatar",
    description: "To change the bot avatar",
    options: [{
      name: "link",
      description: "Pls type the new bot avatar link",
      type: 3,
      required: true,
    }]
  },{
name: "set-color",
    description: "To change the bot embed color",
    options: [{
      name: "color",
      description: "Pls type the bot embed color",
      type: 3,
      required: true,
  }]
  },{
name: "set-line",
    description: "To change the bot line",
    options: [{
      name: "line",
      description: "Pls type the new bot line",
      type: 3,
      required: true,
  }]
  },{
    name: "ping",
    description: "To see the bot ping",
  },{
    name: "help",
    description: "To see the bot help menu",
    

    
  },{
    name: "set-status",
    description: "To change the bot status ex: dnd , idle",
    options:[{
      name: "type",
      description: "Pls choose the status type",
      type: 3,
      required: true,
      choices:[{
        name: "dnd",
        value: "dnd"
      },{
        name: "idle",
        value: "idle"
      },{
        name: "online",
        value: "online"
      }]
    }]
  }]
    const rest = new REST({ version: '9' }).setToken(process.env.Original);
    
    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: c },
            );
            console.log("Done Run ApplicationCommands");
        } catch (error) {
            console.error(error);
        }
    })();
})
client.on("interactionCreate", async interaction => {
  if(interaction.commandName == "bc"){
    let c = 0
    let manga_a7a = db.get(`${client.user.id}`)
let manga_a7ten = db.get(`UwU_${client.user.id}`)
    let args = interaction.options.getString("message")
  if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
        let members = interaction.guild.members.cache.filter(e => !e.user.bot).map(e => e)
        let timeout = time
        for (let i = 0; i < members.length; i++) {
            let memb = members[i]
            setTimeout(() => {
                memb.send({content: `${args}\n${memb}`})
        })
          let a7a = new MessageEmbed()
          .setDescription(`𝗗𝗼𝗻𝗲 𝘀𝗲𝗻𝗱 𝘁𝗵𝗲 𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 **${interaction.guild.memberCount}** 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 <a:AS_prove:1043635199583465522>`)
          .setColor(manga_a7a)
          .setImage(manga_a7ten)
          interaction.reply({embeds: [a7a]})
   }
  }  else if(interaction.commandName == "obc"){
    let manga_a7a = db.get(`${client.user.id}`)
let manga_a7ten = db.get(`UwU_${client.user.id}`)
    let args = interaction.options.getString("message")
    if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
          let members = interaction.guild.members.cache.filter(e => !e.user.bot && e.presence?.status).map(e => e)
        let timeout = time
        for (let i = 0; i < members.length; i++) {
            let memb = members[i]
            setTimeout(() => {
                memb.send({content: `${args}\n${memb}`}).then(() => {
            }, timeout)
            timeout += time
        }, time)
          let a7a = new MessageEmbed()
          .setDescription(`𝗗𝗼𝗻𝗲 𝘀𝗲𝗻𝗱 𝘁𝗵𝗲 𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 𝗼𝗻𝗹𝗶𝗻𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 <a:AS_prove:1043635199583465522>`)
                    .setColor(manga_a7a)
          .setImage(manga_a7ten)
          interaction.reply({embeds: [a7a]})
   }
  }
   else if(interaction.commandName == "rbc"){
     let manga_a7a = db.get(`${client.user.id}`)
let manga_a7ten = db.get(`UwU_${client.user.id}`)
    let args = interaction.options.getString("message")
let role = interaction.options.getRole("role")
     if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
        let members = interaction.guild.members.cache.filter(e => !e.user.bot && e.roles.cache.some(e => e.id == role.id)).map(e => e)
        let timeout = time
        for (let i = 0; i < members.length; i++) {
            let memb = members[i]
            setTimeout(() => {
                memb.send({content: `${args}\n${memb}`})
            }, time)
            timeout += time
        }
          let a7a = new MessageEmbed()
          .setDescription(`𝗗𝗼𝗻𝗲 𝘀𝗲𝗻𝗱 𝘁𝗵𝗲 𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 𝗮𝗹𝗹 𝘁𝗵𝗲 𝗺𝗲𝗺𝗯𝗲𝗿 𝘄𝗵𝗼 𝗵𝗮𝘃𝗲 𝘁𝗵𝗶𝘀 𝗿𝗼𝗹𝗲 ${role} <a:AS_prove:1043635199583465522>`)
               .setColor(manga_a7a)
          .setImage(manga_a7ten)
          interaction.reply({embeds: [a7a]})
   }
  else if(interaction.commandName == "set-name"){
   let a7a = interaction.options.getString("name")
     if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
    client.user.setUsername(a7a)
    interaction.reply({
      content: `𝗗𝗼𝗻𝗲 𝘀𝗲𝘁 𝗯𝗼𝘁 𝗻𝗮𝗺𝗲 𝘁𝗼 ${a7a} <a:AS_prove:1043635199583465522>`
    })
  }
    else if(interaction.commandName == "set-avatar"){
   let a7a = interaction.options.getString("link")
     if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
    client.user.setAvatar(a7a).catch( async () => {return interaction.reply({
        content: `𝗣𝗹𝘀 𝗽𝘂𝘁 𝗮 𝘃𝗮𝗶𝗹𝗱 𝗮𝘃𝗮𝘁𝗮𝗿 𝗨𝗥𝗟`
      })})
      
    interaction.reply({
      content: `𝗗𝗼𝗻𝗲 𝘀𝗲𝘁 𝗯𝗼𝘁 𝗮𝘃𝗮𝘁𝗮𝗿 𝘁𝗼 ${a7a} <a:AS_prove:1043635199583465522>`
    })
  }
  else if(interaction.commandName == "set-color"){
 let cc = interaction.options.getString("color")  
if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
    db.set(`${client.user.id}`, cc)
    interaction.reply({
      content: `𝗗𝗼𝗻𝗲 𝘀𝗲𝘁 𝗲𝗺𝗯𝗲𝗱 𝗰𝗼𝗹𝗼𝗿 𝘁𝗼 ${cc}`
    })
  }
  else if(interaction.commandName == "set-line"){
 let cc = interaction.options.getString("line")  
if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
    db.set(`UwU_${client.user.id}`, cc)
    interaction.reply({
      content: `𝗗𝗼𝗻𝗲 𝘀𝗲𝘁 𝗲𝗺𝗯𝗲𝗱 𝗹𝗶𝗻𝗲 𝘁𝗼 ${cc} <a:AS_prove:1043635199583465522>`
    })
  } 
else if(interaction.commandName == "ping"){

  var states = "<a:AS_prove:1043635199583465522> Excellent";
        var states2 = "<a:AS_prove:1043635199583465522> Excellent";
        var msg = `${Date.now() - interaction.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (Number(msg) > 70) states = "<a:AS_prove:1043635199583465522> 𝗡𝗶𝗰𝗲";
        if (Number(msg) > 170) states = "<a:AS_prove:1043635199583465522> 𝗡𝗼𝘁 𝗕𝗮𝗱";
        if (Number(msg) > 350) states = "<a:AS_prove:1043635199583465522> 𝗦𝗼𝗼 𝗕𝗮𝗱";
        if (Number(api) > 70) states2 = "<a:AS_prove:1043635199583465522> 𝗡𝗶𝗰𝗲";
        if (Number(api) > 170) states2 = "<a:AS_prove:1043635199583465522> 𝗡𝗼𝘁 𝗕𝗮𝗱";
        if (Number(api) > 350) states2 = "<a:AS_prove:1043635199583465522> 𝗦𝗼𝗼 𝗕𝗮𝗱";

        let manga_a7a = db.get(`${client.user.id}`)
let manga_a7ten = db.get(`UwU_${client.user.id}`)
  let botping = new MessageEmbed()
    .setDescription(`> ** 𝗠𝘆 𝗽𝗶𝗻𝗴 𝗶𝘀 ${api} = ${states2} **`)
            .setColor(manga_a7a)
          .setImage(manga_a7ten)
  interaction.reply({embeds: [botping]})
  }
  else if(interaction.commandName == "help"){
    let manga_a7a = db.get(`${client.user.id}`)
let manga_a7ten = db.get(`UwU_${client.user.id}`)
   let wait = new MessageEmbed()
    .setDescription(`> ** Hey ${interaction.user.username}** 

> ** I am ${client.user.username}  ** 

> ** I Work For ${servername} **

> **My prefix is** / ||SlashCommands|| 

> **My Developers Are : ${teamname}** `)
              .setColor(manga_a7a)
          .setImage(manga_a7ten)
const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('𝗣𝗹𝘀 𝘀𝗲𝗹𝗲𝗰𝘁 𝗮𝗻𝘆 𝗼𝗽𝘁𝗶𝗼𝗻 𝗳𝗿𝗼𝗺 𝗵𝗲𝗿𝗲')
					.addOptions([
						{
							label: '𝗣𝘂𝗯𝗹𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀',
							description: '𝗧𝗵𝗲 𝗽𝘂𝗯𝗹𝗶𝗰 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗺𝗲𝗻𝘂',
							value: 'first_option',
              emoji: "<a:emoji_71:1024005664709824615>",
						},
						{
							label: '𝗔𝗱𝗺𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀',
							description: '𝗧𝗵𝗲 𝗮𝗱𝗺𝗶𝗻 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗺𝗲𝗻𝘂',
							value: 'second_option',
              emoji: "<a:w7bluecrown:1026237593060388864>",
						},
					]),
			);
    await interaction.reply({ embeds: [wait], components: [row] })
    
  }
    
  })
client.on("interactionCreate", async interaction => {
  if(interaction.values == "first_option") {
    let manga_a7a = db.get(`${client.user.id}`)
let manga_a7ten = db.get(`UwU_${client.user.id}`)
    let pp = new MessageEmbed()
    .setDescription(`>  **/ping** 

>  **/help** `)

              .setColor(manga_a7a)
          .setImage(manga_a7ten)

    interaction.reply({embeds: [pp], ephemeral: true})
  }
})
client.on("interactionCreate", async interaction => {
  if(interaction.values == "second_option") {
    let manga_a7a = db.get(`${client.user.id}`)
let manga_a7ten = db.get(`UwU_${client.user.id}`)
    let pp = new MessageEmbed()
    .setDescription(`>  **/bc ||To Send Broadcast To All Members||** 
    
>  **/obc ||To send broadcast to online||** 

>  **/rbc || To send broadcast to a specific role||** 

>  **/set-status**

>  **/set-name** 

>  **/set-avatar** 

>  **/set-color** 

>  **/set-line** `)
          .setColor(manga_a7a)
          .setImage(manga_a7ten)
    interaction.reply({embeds: [pp], ephemeral: true})
  } 
  
  /*  else if(interaction.commandName == "set-activit"){
    let i = interaction.options.getString("type") 
      let hos = interaction.options.getString("name")
      let a7a = 
[`𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗕𝘆: Original Team`,`${hos}`]
    let sks = setInterval(() => {
a7a[Math.floor(Math.random()*a7a.length)]}, 5000)
   
   
      if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
  if(i == "playing") {
    setInterval(()=>{
   
    client.user.setActivity(a7a[Math.floor(Math.random()*status.a7a)]);
  },5000)
    
    interaction.reply(`Done`)
  }
      if(i == "watching"){
            setInterval(()=>{
   

        client.user.setActivity({
          
            name: a7a[Math.floor(Math.random()*status.a7a)],
            type: "WATCHING"
          })
            }, 5000)
   
      if(i == "listening"){
        setInterval(() => {
        client.user.setActivity({
          
            name: a7a[Math.floor(Math.random()*a7a.length)],
            type: "LISTENING"
          
        })
        },5000)
       
        interaction.reply(`Done`)
      }
      if(i == "streaming"){
              setInterval(() => {
        client.user.setActivity({
          
            name: a7a[Math.floor(Math.random()*a7a.length)],
            type: "STREAMING",
          url: "https://twitch.tv/help"
          
        })
        },5000)
       interaction.reply(`Done`)
      }
  }
    } */
  else if(interaction.commandName == "set-status"){
  let i = interaction.options.getString("type") 
    if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
if( i == "dnd"){
  client.user.setStatus("dnd")
          interaction.reply(`Done`)
}
    if(i == "idle"){
      client.user.setStatus("idle")
              interaction.reply(`Done`)
    }
    if(i == "online"){
     client.user.setStatus("online") 
              interaction.reply(`Done`)
    }
  }
    })
client.on("messageCreate", async message => {
if(message.content.startsWith("serverlink")) {
if (message.author.bot) return; 
//if(!owner.includes(message.author.id)) return;

 client.guilds.cache.forEach(g => {
      let l = g.id;
g.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(g.me).has('SEND_MESSAGES')).createInvite({
          maxUses: 100,
          maxAge: 86400
        }).then(i => 
message.channel.send({content: `${g.name}, ${g.id}\nhttps://discord.gg/${i.code}`})
                );
    });
  }
});  

  


client.login(process.env.token)