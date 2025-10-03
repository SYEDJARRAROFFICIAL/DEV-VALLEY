// Enhanced isAdmin middleware that works with your isLoggedIn
export const isAdmin = async (req, res, next) => {
  try {
    // 1. Check if user exists in request (should be set by isLoggedIn middleware)
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Please login first",
        code: "NOT_LOGGED_IN",
      });
    }

    // 2. Check if user role is admin
    if (req.user.role !== "admin") {
      // Log unauthorized access attempt
      console.warn(
        `🚫 Admin access denied for user: ${req.user.id || "unknown"} - Role: ${
          req.user.role
        }`
      );

      return res.status(403).json({
        success: false,
        message: "Forbidden: Admin privileges required to access this resource",
        code: "INSUFFICIENT_PRIVILEGES",
        userRole: req.user.role,
        requiredRole: "admin",
      });
    }

    // 3. Log successful admin access
    console.log(
      `✅ Admin access granted - ${req.method} ${req.originalUrl} - User: ${req.user.id}`
    );

    // 4. Continue to next middleware/controller
    next();
  } catch (error) {
    console.error("❌ isAdmin middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error in admin authorization",
      code: "ADMIN_MIDDLEWARE_ERROR",
    });
  }
};
