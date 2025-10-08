import asyncHandler from "../utils/async-handler";
const validate = (schema) =>
  asyncHandler(async (req, res, next) => {
    schema.parse({
      body: req.body,
      //   query: req.query,
    });
    next();
  });
export default validate;
