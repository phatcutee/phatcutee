module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100071169304123") {
    var aid = ["100049667310128"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Đĩ mẹ mày thích tag Admin tao không con chó 😏 tag  làm con cặc gì ib trực tiếp mà hỏi😺https://www.facebook.com/profile.php?id=100049667310128"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }