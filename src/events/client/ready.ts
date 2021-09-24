import { Bot } from "../../../lib/client";

export default (Discord, client: Bot, __) => {
	console.log(`${client.user.username} is online!`);
};
