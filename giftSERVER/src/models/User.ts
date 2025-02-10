// Path: src/models/User.ts
// This is our model for the users

import mongoose, { Schema, Document} from "mongoose";

export interface IUser extends Document {
    _id: string; // this will be received from the telegram initdata.
    username?: string;
    first_name: string;
    last_name?: string;
    is_premium: boolean;
    profile_picture_url: string;
    gift_points: number;
    ref_id: string;
    referrals: string[];
}

const userSchema: Schema<IUser> = new Schema({
    _id: {type: String, required: true},
    username: {type: String, unique: true},
    first_name: {type: String, required: true},
    last_name: {type: String},
    is_premium: {type: Boolean, default: false},
    profile_picture_url: {type: String, required: true},
    gift_points: {type: Number, default: 0},
    ref_id: {type: String, required: true},
    referrals: {type: [String], default: []}
});

userSchema.index({ ref_id: 1});
const User = mongoose.model<IUser>("User", userSchema);
export default User;