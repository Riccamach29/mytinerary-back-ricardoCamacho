import { Schema, model } from "mongoose";

let collection = "cities";

let schema = new Schema(
    {
        name: { type: String, required: true },
        photo: { type: String, required: true },
        country: { type: String, required: true },
        continent: { type: String, required: true },
        description: { type: String, required: true },
        currency: { type: [String], required: true }, 
        language: { type: String, required: true },
        timezone: { type: String, required: true },
        landmarks: [
            {
                name: { type: String, required: true },
                description: { type: String, required: true },
                photo: { type: String, required: true },
            }
        ],
    },
    {
        timestamps: true,
    }
);

let City = model(collection, schema);

export default City;
