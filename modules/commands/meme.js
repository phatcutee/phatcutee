module.exports.config = {
	name: "meme",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "phatcutee",
	description: "Random ảnh chế nhưng của Việt Nam :))",
	commandCategory: "random-img",
	usages: "memevn",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get(' http://api.vangbanlanhat.tk/image?type=meme').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `ảnh meme như cứt của mày đấy :V`,
						attachment: fs.createReadStream(__dirname + `/cache/memevn.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/memevn.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/memevn.${ext}`)).on("close", callback);
			})
}