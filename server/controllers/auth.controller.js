import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";
import { handleError } from "../helpers/handleError.js";
export const Register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check for existing user
    const checkuser = await User.findOne({ email });
    if (checkuser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered",
      });
    }

    // Optional: validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }
    // Hash password and create user
    const hashedPassword = bcryptjs.hashSync(password);
    const user = await User.create({ name, email, password: hashedPassword });

    if (user) {
      return res.status(201).json({
        success: true,
        message: "Registration successful",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Registration failed",
      });
    }
  } catch (error) {
    next(handleError(500, error.message));
  }
};


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    // ✅ Create JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d", // optional
    });

    // ✅ Set Cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// export const GoogleLogin = async (req, res, next) => {
//   try {
//       const { name, email, avatar } = req.body
//       let user
//       user = await User.findOne({ email })
//       if (!user) {
//           //  create new user
//           const password = Math.random().toString()
//           const hashedPassword = bcryptjs.hashSync(password)
//           const newUser = new User({
//               name, email, password: hashedPassword, avatar
//           })
//           user = await newUser.save()
//       }
//       const token = jwt.sign({
//           _id: user._id,
//           name: user.name,
//           email: user.email,
//           avatar: user.avatar,
//           role:user.role,
//       }, process.env.JWT_SECRET)

//       res.cookie('access_token', token, {
//           httpOnly: true,
//           secure: process.env.NODE_ENV === 'production',
//           sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
//           path: '/'
//       })

//       const newUser = user.toObject({ getters: true })
//       delete newUser.password
//       res.status(200).json({
//           success: true,
//           user: newUser,
//           message: 'Login successful.'
//       })

//   } catch (error) {
//       next(handleError(500, error.message))
//   }
// }

export const Logout = async (req, res, next) => {
    try {
        res.clearCookie('access_token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'
        })
        res.status(200).json({
            success: true,
            message: 'Logout successful.'
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });

    }
}
