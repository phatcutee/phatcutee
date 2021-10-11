module.exports.config = {
    name: "oantuxi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "PhatCutee",
    description: "oẳn tù xì với bot :>",
    commandCategory: "Game-mp",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
    if(!args[0]) {
        outMsg("Vui lòng chat búa hoặc kéo hoặc bao")
    }
    var turnbot = ["kéo","búa","bao"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          var userturn = args.join( " ")
          if (userturn == "kéo"||userturn == "búa"||userturn == "bao") {
            if (userturn == turnbot) {
              return outMsg(`hên cho moày đấy\nmày ra cái : ${userturn}\nTao ra cái : ${botturn} `)
            } else if (userturn == "kéo") {
              if (botturn == "búa") {
                return outMsg(`thằng ăn hại cút đi\nmày ra cái : ${userturn}\ntao ra cái : ${botturn} `)
              } else if (botturn == "bao") {
                return outMsg(`cút đi đồ ăn gian\nnmày ra cái : ${userturn}\nTao ra cái : ${botturn} `)
            }
          } else if (userturn == "búa") {
            if (botturn == "bao") {
              return outMsg(`djtmemay thua cả một con bot\nmày ra cái : ${userturn}\nTao ra cái : ${botturn} `)
            } else if (botturn == "kéo") {
              return outMsg(`hmmm dmm ra sau chơi lại đi\nmày ra cái : ${userturn}\nTao ra cái : ${botturn} `)
          }
        } else if (userturn == "bao") {
          if (botturn == "kéo") {
            return outMsg(`về quay tay một trăm lần rồi ra đây chơi tiếp\nmày ra cái : ${userturn}\ntao ra cái : ${botturn} `)
          } else if (botturn == "búa") {
            return outMsg(`ơ chơi mà ra sau à?\nmày ra cái : ${userturn}\nTao ra cái : ${botturn} `)
        }
      }
        } else {
          return outMsg("búa hoặc kéo hoặc bao tao chỉ biết thế thôi dcmm")
        }
}