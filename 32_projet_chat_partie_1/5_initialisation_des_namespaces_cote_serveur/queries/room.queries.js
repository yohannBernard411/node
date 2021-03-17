const { Room } = require('../database/models/room.model');

exports.findRoomPerNamespaceId = (namespaceId) => {
  return Room.find({ namespace: namespaceId }).exec();
}