const { Schema, model, Types } = require('mongoose');
const moment = require("moment");
const { time } = require('console');

const dateFormat = (timestamp) => moment(timestamp).format("MMM Do YY"); 

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()

    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },

    createdAt:
    {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }
   
}, {
    toJSON: {
        getters: true
    },
    id: false
});





module.exports = ReactionSchema;