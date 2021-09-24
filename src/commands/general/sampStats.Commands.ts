import { Message, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { Bot } from "../../../lib/client.lib";
import samp from "samp-query";
import { Colors } from "../../../lib/enums/color.enum";

export default {
  name: "samp",
  description: "Samp Stats",
  EnableCommand: true,
  cooldown: 10,
  aliases: ["sa"],
  runCommands(client: Bot, message: Message, args: string[], cmd: string): void {
    var options = {
      host: process.env.ip,
      port: process.env.port,
    };
    samp(options, function (error, response) {
      if (error) {
        message.channel.send(`I Cant Connet To the server`);
        console.log(error);
      } else {
        const embed = new MessageEmbed()
          .setColor(Colors.Info)
          .setThumbnail("https://i.imgur.com/QYeGxrV.png")
          .setAuthor(response["hostname"])
          .addField("Gamemode", `${response["gamemode"]}`)
          .addField("Server Status", `<:online:881789246531334214> Online`)
          .addField("Mapname", `${response["mapname"]}`)
          .addField("Version", `${response["rules"].version}`)
          .addField("Players", `${response["online"]}/${response["maxplayers"]}`)
          .addField("Website", `${response["rules"].weburl}`)
          .addField("Time", `${response["rules"].worldtime}`)
          .addField("Map", `${response["rules"].mapname}`)
          .setTimestamp()
          .setFooter(`This command requested by ${message.author.username}#${message.author.discriminator}`);
        message.reply({ embeds: [embed] });
        return;
      }
    });
  },
};
