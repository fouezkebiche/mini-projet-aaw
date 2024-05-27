import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    biography: String,
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);

export default Author;
