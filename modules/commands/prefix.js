const fs = require("fs");
module.exports.config = {
name: "prefix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Prefix")==0 || (event.body.indexOf("prefix")==0)) {
		var msg = {
				body: "Hiện tại prefix của tao là: /\nCó vậy cũng éo biết 😼",
				attachment: fs.createReadStream(__dirname + `/noprefix/dark.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}