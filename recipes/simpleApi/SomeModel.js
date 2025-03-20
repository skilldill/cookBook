import mongoose from "mongoose";

const SomeSchema = new mongoose.Schema({
    userKey: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        maxlength: 255,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => {
            ret.id = ret._id;
            ret.createdAt = ret.createdAt.toISOString().split('T')[0];
            ret.updatedAt = ret.updatedAt.toISOString().split('T')[0];
            delete ret._id;
            delete ret.__v;
            delete ret.userKey;
            return ret;
        }
    } 
});

export const SomeModel = mongoose.model("SomeData", SomeSchema);
