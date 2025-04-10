import { Schema, model } from "mongoose";

let collection = "activities";

let schema = new Schema(
    {
        name: { type: String, required: true },
        photo: { type: String, required: true },
        description: { type: String, required: true },
        itinerary: { type: Schema.Types.ObjectId, ref: "itineraries", required: true },
    },
    {
        timestamps: true,
    }
);

let Activity = model(collection, schema);

export default Activity;