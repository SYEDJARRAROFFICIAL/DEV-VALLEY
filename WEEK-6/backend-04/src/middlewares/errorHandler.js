import ApiError from "../utils/api-error";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: null,
      error: err.error,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    data: null,
    error: err,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
