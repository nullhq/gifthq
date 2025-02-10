// Path: src/models/Transaction.ts
// This is our model for the transactions

import mongoose, { Schema, Document} from "mongoose";

export interface ITransaction extends Document {
    type: string;
    from: string;
    to?: string;
    gift_id: mongoose.Schema.Types.ObjectId;
    amount: number;
    invoice_id: string;
    status?: string;
}

const transactionSchema: Schema<ITransaction> = new Schema({
    type: {type: String, enum: ["purchase", "send"], required: true},
    from: {type: String, ref: "User", required: true},
    to: {type: String, ref: "User"},
    gift_id: {type: mongoose.Schema.Types.ObjectId, ref: "Gift", required: true},
    amount: {type: Number, required: true},
    invoice_id: {type: String, required: true},
    status: {type: String, enum: ["pending", "success", "failed"], default: "pending"}
}, {timestamps: true});

transactionSchema.index({ from: 1, to: 1, gift_id: 1});
const Transaction = mongoose.model<ITransaction>("Transaction", transactionSchema);
export default Transaction;