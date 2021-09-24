import { Message } from "discord.js";
import { Bot } from "../../../util/client";
import samp from "samp-query";
export default {
  name: "test",
  description: "a test",
  cooldown: 10,
  aliases: ["t"],
  runCommands(client: Bot, message: Message, args: string[], cmd: string): void {
    message.channel.send(`${cmd} Test work!`);
    return;
  },
};
