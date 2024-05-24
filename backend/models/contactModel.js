import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
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
        note: {
            type: String,
            default: "N/A"
        }
    }, 
    {
        timestamps: true
    }
)

export const Contact = mongoose.model('Contact', contactSchema)