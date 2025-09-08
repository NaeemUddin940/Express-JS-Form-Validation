import express from "express";
const app = express();
import cors from "cors";
import { body, validationResult } from "express-validator";

app.use(cors());
app.use(express.urlencoded({ extended: false }));

const validationRule = [
  body("name").isEmpty().withMessage("Username is Required"),
  body("email").isEmail().withMessage("Please Enter a valide Email Address"),
  body("password")
    .isLength({ min: 5, max: 10 })
    .withMessage("Password must be 5 to 10 Digits."),
  body("city")
    .isEmpty()
    .isInt(["Dhaka", "Rajshahi", "Khulna", "Chottogram"])
    .withMessage("City is Required"),
];

app.post("/", validationRule, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  } else {
    res.status(200).json({
      message: "Form Submitted Successful",
      data: req.body,
    });
  }
});

// Server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
