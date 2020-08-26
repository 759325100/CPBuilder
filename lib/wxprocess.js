const wechat = require('./wechat')
const handler = async (body) => {
  // TODO implement
  console.log('INTO Wechat Process Event')
  // 解析发送过来的消息,然后分发
  const message = await wechat.message(body)
  switch (message.MsgType) {
    case 'event':
    default:
      return {
        statusCode: 200,
        body: wechat.reply(`您发送了：${message.Content}`, message)
      }
  }
};

exports.wx = { handler }