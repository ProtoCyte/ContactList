import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        organization: {
            type: String,
            default: "N/A"
        },
        title: {
            type: String,
            default: "N/A"
        },
        phoneNumber: {
            type: String,
            default: "N/A"
        },
        address: {
            type: String,
            default: "N/A"
        },
        email: {
            type: String,
            default: "N/A"
        },
        notes: {
            type: String,
            default: "N/A"
        }
    }
)

export const Contact = mongoose.model('Contact', contactSchema)