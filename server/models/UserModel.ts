import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
	type: String,
	required: 'Enter email'
    },
    username: {
        type: String,
        required: 'Enter username'
    },
    password: {
        type: String,
        required: 'Enter password'
    },
    role: {
	type: String,
	default: 'user'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

let User = module.exports = mongoose.model('User', UserSchema);
