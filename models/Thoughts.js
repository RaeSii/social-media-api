const { Schema, model, Types } = require('mongoose');
const moment = require("moment");
const ReactionSchema = require("./Reaction");

const dateFormat = (timestamp) => moment(timestamp).format("MMM Do YY");

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength:  250

    },

    username: {
        type: String,
        required: true,
    },

    reactions: [
        ReactionSchema
    ]
    ,
    createdAt:
    {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }

}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});
ThoughtSchema.virtual('reactionCount').get(function () {
    return reactions.length;
})
const Thought = model('User', ThoughtSchema);

module.exports = Thought;