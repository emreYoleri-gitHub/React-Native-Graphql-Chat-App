const { model, Schema } = require("mongoose");

const messageSchema = new Schema({
  text: String,
  createdBy: Schema.Types.ObjectId,
  contextID: Schema.Types.ObjectId,
  timestamps: Number,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Message", messageSchema);
