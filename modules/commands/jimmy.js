module.exports.config = {
	name: "jimmy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ảnh jimmy",
	commandCategory: "Hình Ảnh",
	usages: "jimmy",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.vangbanlanhat.tk/image?type=jimmy').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Ảnh jimmy 🥳🥳`,
						attachment: fs.createReadStream(__dirname + `/cache/jimmy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/jimmy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/jimmy.${ext}`)).on("close", callback);
			})
}