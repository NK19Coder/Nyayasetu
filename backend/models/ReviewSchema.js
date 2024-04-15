import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    lawyer: {
      type: mongoose.Types.ObjectId,
      ref: "Lawyer",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function(next){
  this.populate({
    path:'user',
    select: "name photo",
  });
  next();
});

export default mongoose.model("Review", reviewSchema);
