import { Alert, Box, Button, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createOrder, verifyPayment } from "../../services/api";

export default function Donation() {
  const isPhoneView = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: "", severity: "info" });

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const showNotification = (message, severity = "info") => {
    setNotification({ open: true, message, severity });
  };

  // Handler to open Razorpay checkout
  const handleRazorpay = async () => {
    try {
      if (!amount || isNaN(amount) || Number(amount) < 1) {
        showNotification("Please enter a valid amount (minimum ₹1)", "error");
        return;
      }

      setLoading(true);

      // Create order on backend
      const orderData = await createOrder(amount);
      
      if (!orderData.success) {
        throw new Error(orderData.message || 'Failed to create order');
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: Number(amount) * 100,
        currency: "INR",
        name: "Warriors Without Cause",
        description: "Donation",
        image: "/navbar_logo.svg",
        order_id: orderData.orderId,
        handler: async function (response) {
          try {
            // Verify payment on backend
            const verificationData = await verifyPayment({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });

            if (verificationData.success) {
              showNotification("Payment successful! Thank you for your donation.", "success");
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            showNotification("Payment verification failed. Please contact support.", "error");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#DE0089",
        },
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (resp) {
        showNotification(resp.error.description || "Payment failed", "error");
      });

      rzp.open();
    } catch (error) {
      showNotification(error.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FFF2FA 0%, #FFE9F6 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { md: 12, xs: 8 },
        pb: 8,
        px: { xs: 2, md: 4 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "32px", md: "48px" },
            color: "#DE0089",
            mb: 3,
            textAlign: "center",
            lineHeight: { xs: "40.32px", md: "60.48px" },
          }}
        >
          Make a Donation
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "20px" },
            color: "#4D4D4D",
            mb: 6,
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: { xs: "24px", md: "30px" },
          }}
        >
          Your donation helps Warriorswithoutcause (WWC) provide education, healthcare, and opportunities to underserved communities. Every contribution makes a real difference—whether it's empowering women with skills, offering healthcare, or supporting a child's education.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "20px",
            p: { xs: 3, md: 4 },
            boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(10px)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <TextField
            label="Enter Amount (INR)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{
              width: "100%",
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "&:hover fieldset": {
                  borderColor: "#DE0089",
                },
              },
            }}
            inputProps={{ min: 1 }}
          />
          <>
            <Snackbar
              open={notification.open}
              autoHideDuration={6000}
              onClose={() => setNotification({ ...notification, open: false })}
            >
              <Alert 
                onClose={() => setNotification({ ...notification, open: false })}
                severity={notification.severity}
                sx={{ width: '100%' }}
              >
                {notification.message}
              </Alert>
            </Snackbar>

            <Button
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                backgroundColor: "#DE0089",
                color: "#fff",
                fontFamily: "Sora",
                fontWeight: 700,
                fontSize: "18px",
                borderRadius: "37px",
                py: 1.5,
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#FF1FA3",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 6px 20px rgba(222, 0, 137, 0.25)",
                },
              }}
              onClick={handleRazorpay}
            >
              {loading ? "Processing..." : "Donate Now with Razorpay"}
            </Button>
          </>
        </Box>
      </motion.div>
    </Box>
  );
}
