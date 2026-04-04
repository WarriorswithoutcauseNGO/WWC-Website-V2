const path = require("path");
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");

dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const razorpay =
  process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_SECRET
    ? new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      })
    : null;

app.get("/", (req, res) => {
  res.send("WWC backend is running.");
});

app.post("/api/create-order", async (req, res) => {
  try {
    if (!razorpay) {
      return res.status(503).json({
        success: false,
        message: "Payments are not configured (missing Razorpay keys).",
      });
    }
    const { amount } = req.body;
    const amountNum = Number(amount);
    if (!Number.isFinite(amountNum) || amountNum < 100) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount (minimum ₹1).",
      });
    }
    const order = await razorpay.orders.create({
      amount: Math.round(amountNum),
      currency: "INR",
      receipt: "donation_rcpt_" + Date.now(),
    });
    res.json({ success: true, orderId: order.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Order creation failed" });
  }
});

app.post("/api/verify-payment", (req, res) => {
  const secret = process.env.RAZORPAY_SECRET;
  if (!secret) {
    return res.status(503).json({ success: false, message: "Payments are not configured." });
  }
  const { orderId, paymentId, signature } = req.body;
  if (!orderId || !paymentId || !signature) {
    return res.status(400).json({ success: false, message: "Missing payment fields" });
  }
  const generatedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  if (generatedSignature === signature) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: "Signature mismatch" });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
