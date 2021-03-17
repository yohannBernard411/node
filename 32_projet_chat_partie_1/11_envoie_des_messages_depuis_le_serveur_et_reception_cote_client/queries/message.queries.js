const { Message } = require('../database/models');

exports.findMessagesPerRoomId = (roomId) => {
  return Message.find({ room: roomId }).sort({ createdAt: 1 }).exec();
}
