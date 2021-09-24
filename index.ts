import { Client } from "discord.js";
import Discord from "discord.js";
import { Bot } from "./lib/client.lib";
import Logger, { logger } from "./lib/logger.lib";
const client = new Bot();
import ch from "./src/handlers/command_handler";
import eh from "./src/handlers/event_handler";
ch(client, Discord);
eh(client, Discord);
import dotenv from "dotenv";
dotenv.config();
client.login(process.env.token).catch(() => {
  logger.error("Invalid token from discord dev portal");
  return process.exit();
});
