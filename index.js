const wx = require('./lib/wxprocess')
const handler = async (event) => {
  // TODO implement
  console.log(event)
  // 解析发送过来的消息,然后分发
  const body = event.body
  const query = event.queryStringParameters
  // 在此处进行分发
  if (query.signature && body.includes('<xml>')) {
    return wx.handler(body)
  }
  return {
    statusCode: 200,
    body: 'not found process event hanlder'
  }
};

exports.handler = handler