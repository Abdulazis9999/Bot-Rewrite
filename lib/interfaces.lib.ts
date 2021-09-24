import { Message } from "discord.js";
import { Bot } from "./client.lib";

interface command {
  name: string;
  description?: string;
  aliases?: string[];
  cooldown: number;
  runCommands(client: Bot, message: Message, args?: string[], cmd?: string): Promise<any> | any;
}

export { command };
