const Discord = require('discord.js');
const devs = ['462949947680096257'];
const db = require('quick.db');
const premium = ['462949947680096257']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '$';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['ahelp','Type ahelp'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
 console.log(` ???????????????????`);
 console.log(` ???????????????????`);
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`**
        ***__General orders__***
**
${prefix}allbots/shows all bots in the server
${prefix}server/shows you info about the server
${prefix}bot/shows you the info of this bot
${prefix}count/shows you member count with out bots
${prefix}invites/ shows your invites on the server 
${prefix}invinfo <invitelink here> / info for invitation code
 example : invinfo m82n8P
${prefix}invite-codes/It displays to you how many invite codes you have
${prefix}cal/calculator ._.
${prefix}trans <language> <any thing>/transulate to you anythink from language to another one
${prefix}short/shorts for you the link
${prefix}tag/Write you the word beautifully and great
${prefix}google/To search in Google by Discord
${prefix}perms/shows your permissons
${prefix}deco/Decorate a word or phrase
${prefix}rooms/It shows you all the rooms in the server with their number
${prefix}roles/It shows you all the ranks in the server beautifully
${prefix}emojilist/It shows you all the emoji in the server
${prefix}say/repeat any word you write it example $say hi the bot will say hi
${prefix}image/shows you the image of the server
${prefix}members/shows you the status of the server members and their counts
${prefix}id/informations about you 
${prefix}bans /shows you the ban list on the server
${prefix}avatar/gives you your avatar or avatar the person that you mention
${prefix}embed/repeat what you say but more butiful
${prefix}emoji <any things>/transulate any word you say in emoji example: ${prefix}emoji heart
${prefix}inv/bot link
${prefix}support/support server if you have anyp problems
${prefix}contact/to contact the bot owner you may also contact him in the support server
${prefix}tax / example : $tax 15% 1000000 = The result
${prefix}credits / to see how many money you have
${prefix}daily / to get daily credits
$(prefix)invitebot/ to get bot link 
$(prefix)cat/ to send a cat photo :upside_down:
$(prefix)emoji <ID> / to get the emoji with his ID 
$(prefix)avatar <ID>/to get the avatar of anyone with his ID 
${prefix}skin <username>/to get the your skin 
$(prefix)setorder/to send an order in a channel
$(prefix)hypixel/to see your skin and your Specifications in hypixel 
**
  `
,`
        ***__Administrative Orders__***
**
${prefix}move @user /  to move some one in your room
${prefix}role @user <rank> / to give some one a rank in your server
${prefix}roleremove @user <rank> / to remove a rank from someone
${prefix}give all <rank> / to give everyone a rank
${prefix}give humans <rank> / to give rank to humans only
${prefix}give bots <rank> / to give a rank to bots only
${prefix}hchannel / to hide the channel
${prefix}schannel / to show the channel
${prefix}clr <numbr> / to clear the chat with the amount of messages that you want
${prefix}clear / to clear the chat
${prefix}mute @user <time> / to mute someone 
${prefix}unmute @user / to unmute someone
${prefix}kick @user <reason> / to kick someone
${prefix}ban @user <reason> / to ban someone
${prefix}mutechannel / to mute the chat
${prefix}unmutechannel / to unmute the chat
${prefix}dc / to delete all the rooms
${prefix}dr / <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات
${prefix}ct <name> / انشاء شات
${prefix}cv <name> / انشاء رووم فويس
${prefix}temp / لانشاء روم مؤقت
${prefix}delet <name> / مسح الشات او الرووم فويس
${prefix}make <number> / ينشا لك الوان مع كم الوان تبي
${prefix}color <number> / لختيار لون
${prefix}deletecolors <number> / لحذف الالوان
${prefix}setwelcomer <text channel name> / for making a welcome room
$(prefix)params/ to config the room where the orders wi'll be send 
**
  `
,`
        ***__Games orders__***
 **       
under developpement
**
=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
The welcomer
G.setwelcomer <text channel name> for making a welcome room
${prefix}voiceonline / shows you voice online members in a voice channel
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('⏮').then( r => {
            msg.react('⏭')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 

const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});
const sql = require('sqlite');
const path = require('path');
sql.open(path.join(__dirname, 'credits.sql')) // read sql file
.then(() => { // then ?
    console.log('Opened') // if the sql opened
    sql.run(`CREATE TABLE IF NOT EXISTS creditSysteme (id VARCHAR(30), credits BIGINT, timeDaily BIGINT)`) // create new table if the table does'nt exosts
})
.catch(err => console.error(err)) // if the sql file does'nt exists
 
const ms = require('parse-ms'); // package time ?
client.on("message", async msg => { // event message
    if(!msg.channel.guild) return; // channel guild
    let men = msg.mentions.users.first() || msg.author; // the mention or the author
    let prize =  msg.content.split(" ").slice(2).join(" ") // prize
 
    if(msg.content.startsWith(prefix+"credits")) { // if the message content credits do
        if(!men || !men === undefined) return msg.channel.send("** :interrobang: | "+men.username+", I can't find "+men.username+"!**"); // undefind user
        if(!prize) {
        sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`).then(res => { // select user from table
            if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if the user does'nt exisit in table
            if(res) { // if user exsist
                    msg.channel.send("**"+men.username+" :credit_card: balance is ``"+res.credits+"$``.**") // reply
            }
        })
        }else{ // else ?
            if(isNaN(prize)) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // is nan :)
            if(parseFloat(prize) === NaN) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // if nan :))
            if(men === msg.author) return; // if the men = author
            let authorRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
            let userRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`) // select from sql
            if(!authorRes) sql.run(`INSERT INTO creditSysteme VALUES ('${msg.author.id}', 0, 0)`) // if !user create new col
            if(!userRes) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col
            let authorCredits = authorRes.credits; // credits before transfer
            let userCredits = userRes.credits; // credits before transfer
            if(parseFloat(prize) > authorCredits) return msg.channel.send("** :thinking: | "+msg.author.username+", Your balance is not enough for that!**"); // if the balance hight then prize
            sql.run(`UPDATE creditSysteme SET credits = ${authorCredits - parseInt(prize)} WHERE id = '${msg.author.id}'`); // uptade credits for the author
            sql.run(`UPDATE creditSysteme SET credits = ${userCredits + parseInt(prize)} WHERE id = '${men.id}'`); // update credits for the mentions user
            msg.channel.send("**:moneybag: | "+msg.author.username+", has transferred ``$"+prize+"`` to "+men.toString()+"**") // the message :)
        }
    } else if(msg.content.startsWith(prefix+"daily")) {  // if the message content daily do
        let daily = 86400000; // 24h
        let amount = Math.floor((Math.random() * 1000) + 1) // Money
    let res = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
        if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col
    let time = res.timeDaily; // select last daily
    let credits = res.credits; // credits before daily
    if(time != null && daily - (Date.now() - time) > 0) { // if already climed the daily in same day
 
            let fr8 = ms(daily - (Date.now() - time)); // the remining time
            msg.channel.send("**:stopwatch: | "+msg.author.username+", your daily :yen: credits refreshes in "+fr8.hours+" hours and "+fr8.seconds+" seconds. **") //reply
 
        }else{ // if does'nt clim her daily in 24h
            msg.channel.send("**:atm:  |  "+msg.author.username+", you received your :yen: "+amount+" daily credits!**"); // reply
            sql.run(`UPDATE creditSysteme SET credits = ${credits + amount}, timeDaily = ${Date.now()} WHERE id = '${msg.author.id}'`); // add amount to the credits before daily
        }
    }
})
client.on("message", msg=>{
if(!msg.content.startsWith(`${prefix}tax`)) return;
let tax = msg.content.split(" ")[1]
let Price = msg.content.split(" ")[2];
if($tax || $Price) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
tax = tax.replace(/%/g,"");
let resulting = Math.floor(Price-(Price*(tax/100)));
if(!resulting || resulting < 0 ||  isNaN(resulting)) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
msg.reply(`resulting is ${resulting}$`)
})

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**Showing Details Of** ${msg.guild.name}`)
      .addField('`Server Region`',`[${msg.guild.region}]`,true)
      .addField('`Roles Count`',`[${msg.guild.roles.size}]`,true)
      .addField('`Members Count`',`[${msg.guild.memberCount}]`,true)
      .addField('`Online Members`',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)
      .addField('`Text Channels`',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)
      .addField('`Voice Channels`',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`Server Owner`',`**${msg.guild.owner}**`,true)
      .addField('`Server Id`',`**${msg.guild.id}**`,true)
      .addField('`Server was created in`',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});
 client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Super bot©`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ ! ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | 3bker')
    })
}
});
 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='G.count')
	 
      message.reply(`**${message.guild.memberCount}**`);
    });
    client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
 client.on("message", async message => {
            if(!message.channel.guild) return;
             if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **Send all the invitation links that you have created in your dm**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)  .catch(console.error);

    }
};
});
client.on('message', message => {
    if (message.content.startsWith("G.trans")) {
      
    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`G.trans [text] to [language]\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'Super bot ©\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Super bot ©"
                }
            }}
            )
    })  .catch(console.error);

    }
});
client.on('message', message => { 
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
            
        });
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })

}
});
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});
client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

                  message.channel.send({embed:zPeRms});

    }
});
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "deco") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')

   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on('message', message => {
    if (message.content === "G.rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
        
    }
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content.startsWith(prefix + "roles")){
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});
client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
  
 

if (command == "embed") {
if(!message.channel.guild) return message.channel.send('**This is only for servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**Unfortunately you do not have permission** `MANAGE_MESSAGES`' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
    
  }


});
client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
    client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing...";
}
if (z.bot) {
var w = 'BOT';
}else {
var w = 'MEMBER';
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`**INFO** ${z.username}`)
.addField('`Your Name`',`**<@` + `${z.id}` + `>**`, true)
.addField('`ID`', "**"+ `${z.id}` +"**",true)
.addField('`Status`','**'+y+'**' , true)
.addField('`Acount Type`',"**"+ w + "**",true)    
.addField('`Your Tag`',"**#" +  `${z.discriminator}**`,true)
.addField('`Your account created in`' ,year + "-"+ month +"-"+ day)    
.addField("`Entered the server in`", message.member.joinedAt.toLocaleString())    
.addField("`Last Message`", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ? **')

}
});
client.on('message', message => {
    if (message.content.startsWith("G.bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`Number of banned persons **${bans.size}** `))
}
});
client.on('message', message => {
    if (message.content.startsWith("G.avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "emoji")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});


   client.on('message', message => {
     if (message.content === "support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/vnhVBH")
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");


client.users.get("462949947680096257").send(
    "\n" + "**" + "? server :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ? sender : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ? messege : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: The message was successfully sent to the bot owner')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : 3bker")
                                                

message.channel.send(embed);


}
    
});
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``To use the command, type this command : " +prefix+ "Pull [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`Have you dragged <@ $ {usermentioned}> into your voice room? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``Can not pull "+ message.mentions.members.first() +" `This member must be in the voice Room`")
}
} else {
 message.channel.send("**``You must be in an voice room to drag the member``**")
}
} else {
message.react("?")
 }}});
client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You do not have perm **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Place person's mention !!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("You must put the rank name").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });
    client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roleremove") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });
    client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'give')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});
client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});
client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react(':negative_squared_cross_mark:'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
client.login('NDgwNzM4NTIzNjk2MjAxNzI5.Dl9PIA.48CAMtPWvyvZawa9M-KqwtvVLlY');
client.on('message', message => {
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});
client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES")) return omar.reply("**You Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES")) return omar.reply("**I Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`تم حذف جميع الرتب بنجاح`")
}// omar jedol / Codes
});
client.on("message", (message) => {
let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "ct") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
     let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "cv") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('تم انشاء روم صوتى')
}
});
client.on("message", (message) => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "delete") {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  
client.on('message', bz => {
                        let args = bz.content.split(" ").slice(1).join(" ")
if(bz.content.startsWith(prefix + 'make')) {
    if(!args) return bz.channel.send('`Please Select Number!`');
             if (!bz.member.hasPermission('MANAGE_ROLES')) return bz.channel.sendMessage('`** `[MANAGE_ROLES]` !**'); 
              bz.channel.send(`**Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            bz.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'G.color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="a";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    }
    if ( message.content == prefix + 'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = speed[Math.floor(Math.random() * speed.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`? |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});
client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
  .setDescription(`**
  New Server Add 3bker Community © ?
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("474127377245667328").sendEmbed(embed)
});
client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
  .setDescription(`**
  Server Kicked SuperBot © :cry:
Server Name: ${guild.name}
Server Owner: ${guild.owner}**`);
client.channels.get("474127377245667328").sendEmbed(embed)
});
 client.on('message', async message => {
  if(message.content.startsWith(prefix + "temp")) {
    await message.channel.send("ارسل اسم الروم").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})
var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["??__60%__  **|**  ??__40%__","??__63%__  **|**  ??__37%__","??__89%__  **|**  ??__11%__","??__97%__  **|**  ??__3%__"]
client.on('message', message => {
 if (message.content.startsWith("G.عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('3bker Community ©' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});
client.on('message', message => {
    if(message.content.includes('discord.gg')){
if(!message.channel.guild) return 
if (message.author.bot) return;
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});
client.on('messageUpdate', (oldRebel, newRebel) => {
    console.log("عصو مآ يحآول التعديل.");
   if (newRebel.content.toUpperCase().match(/DISCORD.GG/i))
    {
        console.log(newRebel.author.name + " حاول النشر عبر تعديل الرسآلة - " + newRebel);
           newRebel.delete().catch(O_o=>{}); 
           newRebel.author.send("ممنوع روآبط الدسكورد. \n إذآ كنت تريد النشر توآصل من الإدآرة.");
    }
});
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

let sWlc = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))   
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
   fs.writeFile('./setWlc.json', JSON.stringify(sWlc), (err) => {
if (err) console.error(err);
})
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", `${sChannel}`);
     yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['./w1.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(400, 200),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 400, 200);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
                                ctx.fillText(member.user.username, 200, 150);
                              
                              //NAMEً
                              ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
      ctx.fillText(`Welcome To Server`, 260, 125);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126); 

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
                          
      })
      })
      
      }
      });
   client.on('message',async message => {
  if(message.content.startsWith(prefix + "voiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  message.channel.send(':white_check_mark:| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('G.users')){
 if(!message.author.id === '434263373077544961') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312) return;


if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

if (message.content.startsWith(prefix + 'streem')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'setname')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else

if (message.content.startsWith(prefix + 'setavatar')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
} else


if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}
});
client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invinfo")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});
client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Hello Dude' , `Welcome to the server **${member}**`)
        .addField('User Id :', "**[" + `${member.id}` + "]**" )
                .addField(' Member Number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' Server', `${member.guild.name}`,true)
.setFooter(member.user.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  

                                       
        .setTimestamp()
    
    member.createDM().then(function (channel) {
return channel.send(embed)
    }
    )});
client.on('message',   eyad =>{
    
    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content == 'G.sar7') {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
if(!men) return  eyad.channel.send(":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** ");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
     .setTimestamp() 
     .setFooter(`- By , message.author.name .`)
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('?').then(r=>{
 message.react('?').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**• السلام عليكم ** ', `<@${men.id}>` , true)
                    .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                    .addField('**• تاريخ المصارحة**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`تم الغاء الصراحة`")
eyad.delete();
})
})
}) 
})
}}
});
var EpicEdiTeD = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("الأسم :", message.author.tag)
    .addField("الليفل :", EpicEdiTeD[message.author.id].Level)
    .addField("الأكس بي :",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.25;
EpicEdiTeD[message.author.id].Money+= 0.25;
 
});
client.on("message", async message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'fastrandom')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {     
    message.channel.send('**هادا الامر لصاحب السيرفر فقط**' );
      return;
    }
    const array = [];
    message.guild.members.forEach((member) => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then((m) => {
      m.split('#');
      m.edit(array);
    });
      
    };
});
client.on('message' , async (message) => {
    if(message.content.startsWith("topinvite")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 30) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
const voice = JSON.parse(fs.readFileSync("./voicerank.json", "utf8"));
 var returned;
client.on('voiceStateUpdate', (user, member) => {
  if(member.selfDeaf || member.selfMute || member.serverDeaf || member.serverMute) {
    returned = false;
  }
  if(!member.selfDeaf || !member.selfMute ||!member.serverDeaf || !member.serverMute) {
    returned = true;
  }
  setInterval(() => {
    if(returned === true) {
      if(member.bot) return;
      if(!member.voiceChannel) returned = false;
      if(!voice[member.id]) voice[member.id] = {
        xp: 1,
        level: 1
      };
      voice[member.id] = {
        xp: voice[member.id].xp + Math.floor(Math.random() * 4) + 1,
        level: voice[member.id].level
      };
      var curXp = voice[member.id].xp;
      var curLvl = voice[member.id].level;
      if(curXp >= 300) {
        voice[member.id] = {
          xp: 1,
          level: curLvl + 1
        };
      }
      fs.writeFile('./voicerank.json', JSON.stringify(voice, null, 4), (e) => {
        if(e) console.log(e);
      });
    } else if(returned === false) {
      return null;
    }
  },5000);
});
client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + 'voicerank')) {
message.channel.send(`Your XP : ${voice[message.member.id].xp}
Your Level : ${voice[message.member.id].level}`);
        if(e) console.log(e);
      };
}});
 client.on('message', message => {
if(message.content.startsWith(prefix + "slots")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **خاصية البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**? عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});
 client.on('message', message => {
    if(message.content.startsWith (prefix  + 'user')) {
     moment.locale('ar-ly');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(':دخولك لديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField(':انضمامك لسيرفنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('عدد الدعوات', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});
 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `');
   
       
    }
})
 client.on('message', message => {
    if(message.content.startsWith(prefix + 'alljoin')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`ارسال الرساله .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});
client.on('message', message => {
if(message.content.includes("<@435392018693488641>")) {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
var json = JSON.parse(fs.readFileSync("json.json", "utf8"));

client.on("message", (message) => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.content.startsWith(prefix)) return;
    switch(command) {
        case "mut" : 
        
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : false,
                CONNECT : false
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : true};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Muted in the server!??**`);
        break;
        case "unmut" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(10000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : null,
                CONNECT : null
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : false};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Unmuted!??**`);
    }
})
client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("")
    }
    )});
	let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 999,
        chaDelLimit: 999,
        roleDelLimit: 999,
        kickLimits: 999,
        roleCrLimits: 999,
        time: 30
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
client.on("message", message => {  //iTzMurtaja
    if(message.content.startsWith(prefix + "emoji")) { //iTzMurtaja
        if(message.author.bot) return; //iTzMurtaja
        var emojiid =  message.content.split(" ").slice(1).join(" ") //iTzMurtaja
        console.log(emojiid) //iTzMurtaja
        if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage
${prefix}emoji <EmojiID>`); //iTzMurtaja
        else    //iTzMurtaja
        message.channel.send("This is the emoji that you requested:-",
          { //iTzMurtaja
            files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]
          }) //iTzMurtaja
        }  //iTzMurtaja
}) //iTzMurtaja
client.on("message", message => {
  if(message.content.startsWith(prefix + "invitebot")) {
    var mbot = message.mentions.members.first()
    message.channel.send(`bot link lol`)
  }
});
client.on('message', message => {
  if (message.content === prefix + 'cat') {
    message.react(`🐱`)
      message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "mystery-cat.png")
  }
});
client.on('guildCreate', guild => {
  const embed = new Discord.RichEmbed()///Codes
   .setColor("GREEN")
   .setTitle(`** Server Added اسم بوتك.**`)
   .setDescription(`**  
    __Server Name__ → ${guild.name}
    __Server Owner__ → ${guild.owner}
    __Server ID__ → ${guild.id}
    __Mebmers Count__ → ${guild.memberCount}
    __Server Count__ → ${client.guilds.size}**`);
client.channels.get("ايدي الروم الي تبيه يقولك الي دخل البوت").sendEmbed(embed)
});
client.on('guildDelete', guild => {
  const embed = new Discord.RichEmbed()
   .setColor("RED")
   .setTitle(` Server Kicked اسم بوتك.`)
   .setDescription(`**
     __Server Name__ → ${guild.name}
     __Server Owner__ → ${guild.owner}
     __Server ID__ → ${guild.id}
     __Mebmers Count__ → ${guild.memberCount}
     __Server Count__ → ${client.guilds.size}**`);
client.channels.get("ايدي الروم الي تبيه يقولك الي طرد البوت").sendEmbed(embed)
});///Zine , Pixel
﻿﻿client.on("message", message => {
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`PrimeBot.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
} // Julian
}); // Codes - Toxic Codes
client.on('message', message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`:x:  -  **${prefix}skin <name>**`);
    var ss = new Discord.RichEmbed()
    .setTitle(`${aa}'s Skin!`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(ss);
  }
});
const Discord = require('discord.js')
const db = require('quick.db') 
const bot = new Discord.Client()
const prefix = "$"
 
bot.on('message', msg => {
    let params = msg.content.slice(prefix.length).trim().split(/ +/g);
 
  if(msg.author.bot) return
  if(msg.content.toLowerCase().startsWith(prefix + 'setorder')) {
    if(!params[1]) return msg.channel.send(`منشن الروم او اكتب اسمه`)
    let channel = msg.mentions.channels.first() || msg.guild.channels.find(c => c.name.toLowerCase().startsWith(params[1].toLowerCase()));
    if(channel === undefined) return msg.channel.send(`**انا لم استطع العثور على هذا الروم ${params[1]}**`)
    db.set(`order.${msg.guild.id}.channel`, channel.id)
    msg.channel.send(`**تم اعداد روم الطلب ل روم ${channel}**`)
  }
})
 
bot.on('message', msg => {
    let params = msg.content.slice(prefix.length).trim().split(/ +/g);
 
  if(msg.author.bot) return
 
  if(msg.content.toLowerCase().startsWith(prefix + 'order')) {
    let args = params.slice(1).join(' ')
    let channelID = db.get(`order.${msg.guild.id}.channel`)
    if(channelID === null || channelID === undefined) return msg.channel.send(`قم بأعداد روم الطلب عن طريق الامر الآتي \n ${prefix}setOrder #channel`)
    let channel = msg.guild.channels.get(channelID)
    if(channel === undefined) return msg.channel.send(`قم بأعداد روم الطلب عن طريق الامر الآتي \n ${prefix}setOrder #channel`)
    if(!args) return msg.channel.send(`اكتب طلبك لو سمحت ^^`)
    let embed = new Discord.RichEmbed()
    .setTitle(`🔔New Order!!`)
    .setDescription(`\**▶sender** => <@${msg.author.id}> \n \n**🛒order =>** **\`${args}\`**`)
    .setFooter(`By Codes`)
    .setTimestamp(Date.now())
    channel.send(embed)
  }
})
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: false });
const fs = require('fs')
let client = bot;
bot.on(`ready`, () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setStatus("online")
});
client.on('error', console.error);
bot.on("message", async message => {
    let prefix = `$` //يمديك تغيره لو تبي
    let messageArray = message.content.split(" ");
    let msg = message;
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + "hypixel")) {
        const Hypixel = require('hypixel');
        const Client = new Hypixel({ key: 'ادخل هايبكسل سوي /api' });
        const moment = require("moment");
        Client.getPlayerByUsername(args, (err, player) => {
            // console.log(player)
            if (player === undefined || player === null) return message.channel.send("Player not found buddy")
            let rank = player.newPackageRank
            let mcver = player.mcVersionRp
            let lastLogout = player.lastLogout
            let firstLogin = player.firstLogin
            let karma = player.karma
            if (mcver === undefined) {
                mcver = `\`Non\``
            }
            message.channel.startTyping(true)
            if (!rank) rank = 'Non'
            let exp = player.networkExp
            var x = (Math.sqrt(exp + 15312.5) - 125 / Math.sqrt(2)) / (25 * Math.sqrt(2))
            x = x.toFixed(2)
            let hypixel = new Discord.RichEmbed()
            if (rank === 'MVP_PLUS' && player.monthlyPackageRank !== 'SUPERSTAR') {
                rank = 'MVP+'
                hypixel.setThumbnail('https://i.imgur.com/wvXzJMA.png')
            }
            if (player.mostRecentMonthlyPackageRank === 'SUPERSTAR' && player.monthlyPackageRank === 'SUPERSTAR') {
                rank = 'MVP++'
                hypixel.setThumbnail('https://i.imgur.com/w3l6hGY.png')
            }
            if (player.rank === 'HELPER') hypixel.setThumbnail('https://i.imgur.com/xTOmY9L.png')
            if (player.rank === 'MODERATOR') hypixel.setThumbnail('https://i.imgur.com/HQEZazI.png')
            if (player.rank === 'ADMIN') hypixel.setThumbnail('https://i.imgur.com/wIisMcZ.png')
            if (player.rank !== 'ADMIN' && player.monthlyPackageRank !== 'SUPERSTAR' && player.rank !== 'MODERATOR' && player.newPackageRank !== 'MVP_PLUS' && player.rank !== 'HELPER') {
                hypixel.setThumbnail('https://i.imgur.com/7aFEXPY.png')
            }
            Client.findGuildByPlayer(player.uuid)
                .then((guildId) => {
                    let hi = `https://api.hypixel.net/guild?key=الأي بي اي &id=${guildId}`
                    let image = `${`https://visage.surgeplay.com/full/250/${player.uuid}.png`}`
                    const fetch = require('node-fetch')
                    fetch(`${hi}`)
                        .then(res => res.json()
                            .then(json => {
                                hypixel.setTitle(`[${rank}]` + ` ${args}`)
                                hypixel.setURL(`https://hypixel.net/player/${args}`)
                                hypixel.addField('Rank', `\`${rank}\``, true)
                                hypixel.addField('Level', `\`${x}\``, true)
                                hypixel.addField('Minecraft Version', `\`${mcver}\``, true)
                                if (json.guild === undefined || !json.guild) {
                                    hypixel.addField('Guild', '\`Non\`', true)
                                } else if (json.guild.name !== undefined) {
                                    hypixel.addField('Guild', `[${json.guild.name}](https://hypixel.net/guilds/${json.guild.name.replace(" ", "%20")})`, true)
                                }
                                hypixel.addField('Karma', `\`${karma.toLocaleString('en')}\``, true)
                                hypixel.addField('First/Last login', `\`${moment(firstLogin).format("YYYY-MM-DD")} / ${moment(lastLogout).format("YYYY-MM-DD")}\`\n\`${moment(player.lastLogout).fromNow()}\``, true)
                                hypixel.setImage(image);
                                if (player.socialMedia !== undefined) {
                                    let that = message.guild.members.find(c => c.displayName === `${player.socialMedia.links["DISCORD"].slice(0, -5)}`);
                                    if (that !== null) {
                                        that = message.guild.members.find(c => c.displayName === `${player.socialMedia.links["DISCORD"].slice(0, -5)}`)
                                    } else if (that === null) {
                                        that = `${player.socialMedia.links["DISCORD"]}`
 
                                    }
                                    hypixel.addField("Discord", `${that}`, true)
                                    hypixel.addField('Forums', `[View Forums account.](https://hypixel.net/player/${args})`, true)
                                }
                                message.channel.stopTyping(true)
                                message.channel.send(hypixel)
 
                            }).catch((err) => {
                                message.channel.stopTyping(true)
                                if (err) throw err;
                                return message.channel.send('Uh oh ... there must be a problem!')
                            }));
                }).catch((err) => {
                    message.channel.stopTyping(true)
                    if (err) throw err;
                    return message.channel.send('Uh oh ... there must be a problem!')
                });
        })
    }
});
client.login(process.env.BOT_TOKEN)
