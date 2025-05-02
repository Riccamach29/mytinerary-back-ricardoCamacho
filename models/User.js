import { Schema, model } from "mongoose";

let collection = "users";

let schema = new Schema(
    {
        name: { type: String, required: true, index: true },
        email: { type: String, required: true, index: true },
        password: { type: String, required: true },
        photo: { type: String, required: true },
        country: { type: String, required: true, index: true },
        role: { type: Number, required: true, default: 0, index: true }, // 0 = user, 1 = admin
    },
    {
        timestamps: true,
    }
);

let User = model(collection, schema);

export default User;