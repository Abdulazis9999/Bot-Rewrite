import { Message, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { Bot } from "../../../lib/client.lib";
import { Colors } from "../../../lib/enums/color.enum";

export default {
  name: "ping",
  description: "Show Ping",
  aliases: ["sa"],
  runCommands(client: Bot, message: Message, args: string[], cmd: string): void {
    message.reply({ content: `${client.ws.ping} Pong` });
  },
};
