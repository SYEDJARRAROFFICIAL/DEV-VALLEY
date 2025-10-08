function asyncHandler(reqHandler) {
  return function (req, res, next) {
    Promise.resolve(reqHandler(req, res, next)).catch(function (err) {
      next(err);
    });
  };
}

export default asyncHandler;
