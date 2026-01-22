import mongoose, { Schema, Document, Model } from "mongoose";

export interface INotice extends Document {
    title: string;
    date: string;
    link?: string;
    createdAt: Date;
}

const NoticeSchema: Schema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title for the notice."],
    },
    date: {
        type: String,
        required: [true, "Please provide a date for the notice."],
    },
    link: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Prevent model overwrite upon initial compile
const Notice: Model<INotice> = mongoose.models.Notice || mongoose.model<INotice>("Notice", NoticeSchema);

export default Notice;
