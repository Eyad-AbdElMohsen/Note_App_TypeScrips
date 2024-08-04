import mongoose , { Schema, Document } from 'mongoose';
interface par {
    paragraph: string;
}
const dbSchema: Schema<par> = new Schema({
    paragraph: { type: String, required: true },
});
const Paragraph = mongoose.model<par>('Paragraph', dbSchema);
export default Paragraph;