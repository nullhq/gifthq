// Path: src/models/Gift.ts
// This is our model for the gifts

import mongoose, { Schema, Document} from "mongoose";

export interface IGift extends Document {
    name?: string;
    price: number;
    total_in_stock: number;
    quantity_purchased: number;
    image_url: string;
    lottie_url: string;
}

const giftSchema: Schema<IGift> = new Schema({
    name: {type: String, unique: true},
    price: {type: Number, required: true},
    total_in_stock: {type: Number, required: true},
    quantity_purchased: {type: Number, default: 0},
    image_url: {type: String, required: true},
    lottie_url: {type: String, required: true}
});

giftSchema.index({ name: 1});

const Gift = mongoose.model<IGift>("Gift", giftSchema);
export default Gift;