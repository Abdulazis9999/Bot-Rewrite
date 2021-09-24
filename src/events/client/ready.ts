import { Bot } from "../../../lib/client.lib";
import { logger } from "../../../lib/logger.lib";
export default (Discord, client: Bot, __) => {
  logger.success(`${client.user.username} is online!`);
};
