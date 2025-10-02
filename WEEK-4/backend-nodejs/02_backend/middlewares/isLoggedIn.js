import jwt from "jsonwebtoken";
// isloggedin middleware
export const isLoggedIn = (req, res, next) => {
  const token = req.cookies?.token;
  console.log("Token from cookies:", token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: No token provided",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    console.log("User in middleware:", req.user);
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token",
    });
  }
};
