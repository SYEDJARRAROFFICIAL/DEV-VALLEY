import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
// Hash password before saving (for registration)
userSchema.pre("save", async function (next) {
  // Only hash if password is modified and not already hashed
  if (!this.isModified("password")) return next();

  // Don't hash if it's already hashed (starts with $2b$ for bcrypt)
  if (this.password.startsWith("$2b$")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});
// userSchema.pre("save", function (next) {
//   // Hash the password before saving it to the database
//   if (this.isModified("password")) {
//     this.password = bcrypt.hashSync(this.password, 10);
//   }
//   next();
// });
const User = mongoose.model("User", userSchema);
export default User;
