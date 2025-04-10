import { Schema, model } from "mongoose";

let collection = "comments";

let schema = new Schema(
    {
        user: { type: String, required: true },
        userPhoto: { type: String, required: true },
        text: { type: String, required: true },
        itinerary: { type: Schema.Types.ObjectId, ref: "itineraries", required: true },
    },
    {
        timestamps: true,
    }
);

let Comment = model(collection, schema);

export default Comment;