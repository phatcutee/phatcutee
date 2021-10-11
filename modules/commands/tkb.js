module.exports.config = {
  name: "tkb",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Phatcutee",
  description: "Thời khóa biểu cho mấy thằng ngu",
  commandCategory: "Thời Khóa Biểu",
  usages: "/tkb",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": ""
  }
};


module.exports.handleReply = async function({ api, event, handleReply, client }) {
  const request = global.nodemodule["request"];
  const { createWriteStream, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
  var link = "";
  var msg = "";
  switch (handleReply.type) {
    case "12a4": {
      switch (event.body) {
        case "1":/*thu2*/ link = "https://i.imgur.com/WuIMdyI.png"; msg = "Thời khóa biểu của mày đây thằng nhóc 😏"; break;
        case "2":/*thu3*/ link = "https://i.imgur.com/6gU4DbW.png"; msg = "Thời khóa biểu của mày đây thằng nhóc 😏"; break;
        case "3":/*thu4*/ link = "https://i.imgur.com/Ah2ipN3.png"; msg = "Thời khóa biểu của mày đây thằng nhóc 😏"; break;
        case "4":/*thu5*/ link = "https://i.imgur.com/IemnsT5.png"; msg = "Thời khóa biểu của mày đây thằng nhóc 😏"; break;
        case "5":/*thu6*/ link = "https://i.imgur.com/euApPxh.png"; msg = "Thời khóa biểu của mày đây thằng nhóc 😏"; break;
        case "6":/*thu7*/ link = "https://i.imgur.com/lnZsWh0.png"; msg = "Thời khóa biểu của mày đây thằng nhóc 😏"; break;
        case "7":/*chunhat*/ link = "https://i.imgur.com/8aSfxhf.jpg"; msg = "Học học cc liên quân đi"; break;

        default: break;
      };


      const choose = parseInt(event.body);
      if (isNaN(event.body)) return api.sendMessage("Lựa chọn của bạn không phải là một con số!", event.threadID, event.messageID);
      if (choose > 8 || choose < 1) return api.sendMessage("Bạn mới hất cùn à ?", event.threadID, event.messageID);
      if (link == "" || msg == "") {
        link = "https://influencermarketinghub.com/wp-content/uploads/2019/05/Later_Logo_Colour_03.png"
        msg = "này sẽ được cập nhật sau!";
      };
      return request(encodeURI(link)).pipe(createWriteStream(__dirname + `/cache/tkb.jpg`)).on("close", () => api.sendMessage('Đang lấy dữ liệu...', event.threadID, event.messageID).then(api.sendMessage({ body: ` ${msg}`, attachment: createReadStream(__dirname + "/cache/tkb.jpg") }, event.threadID, () => unlinkSync(__dirname + "/cache/tkb.jpg"))));
    };

  }
}

module.exports.run = ({ event, api, args, client, utils }) => {

  return api.sendMessage(
    "=== Thời Khóa Biểu===" +
    "\n» Mời bạn nhập lựa chọn «" +
    "\n\n1. Thứ Hai" +
    "\n2. Thứ Ba." +
    "\n3. Thứ Tư" +
    "\n4. Thứ Năm" +
    "\n5. Thứ Sáu" +
    "\n6. Thứ Bảy" +
    "\n7. Chủ Nhật" +
    "\n\n» Hãy reply tin nhắn và chọn theo số «", event.threadID, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "12a4"
      });
    }, event.messageID);
}
