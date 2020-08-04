const responseBuilder = require('aws-lambda-response-builder')
exports.handler = async (event) => {
  // TODO implement
  console.log(event)
  return responseBuilder.buildApiGatewayOkResponse({ event });
};