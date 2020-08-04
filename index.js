const wechat = require('./lib/wechat')
const handler = async (event) => {
  // TODO implement
  console.log(event)
  // 解析发送过来的消息
  const message = await wechat.message(event.body)
  switch (message.MsgType) {
    default:
      return {
        statusCode: 200,
        body: wechat.reply(`您发送了：${message.Content}`, message)
      }
  }
};

exports.handler = handler