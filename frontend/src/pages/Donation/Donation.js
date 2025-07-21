import { Alert, Box, Snackbar, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Donation() {
  const isPhoneView = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [notification, setNotification] = useState({ open: false, message: "", severity: "info" });
  const dmsContainerRef = useRef(null);

  const showNotification = (message, severity = "info") => {
    setNotification({ open: true, message, severity });
  };

  useEffect(() => {
    if (!window.Dms) {
      const script = document.createElement("script");
      script.id = "ketto-sdk-script";
      script.src = "https://www.ketto.org/media/sdk/dms-sdk.min.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const scriptTag = document.getElementById("ketto-sdk-script");
        if (scriptTag) scriptTag.remove();
      };
    }
  }, []);

  const handleDonateClick = () => {
    if (!window.Dms) {
      showNotification("Ketto SDK not loaded. Please try again.", "error");
      return;
    }
    const dms = window.Dms({
      apiKey: "14c25882746f32bc638b202d4b961115:c87577680f2cb7e631793d98ecf5e69e3a4bba70ac6bdefd534165955e10fdab:765002c2cc35f36e6f802154a4fe55d9",
      theme: {
        primaryColor: "#DE0089",
        secondaryColor: "#FF1FA3"
      },
      onInitialized: function () {},
      onError: function (error) {
        showNotification("Ketto widget failed to initialize.", "error");
      }
    });

    dms.on("dms:paymentStatus", function (data) {
      console.log("Payment status update:", data);
    });

    dms.acceptDonation({
      container: "#dms-container",
      widgetConfig: {
        widgetId: "WID687bb3571e598F05yX",
        hideNgoDetails: false
      }
    });
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <button
            id="donate-btn"
            style={{
              padding: "14px 0",
              background: "linear-gradient(90deg, #DE0089 0%, #FF1FA3 100%)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              marginBottom: "20px",
              width: "100%",
              fontWeight: 700,
              fontSize: "20px",
              boxShadow: "0px 2px 8px rgba(222,0,137,0.08)",
              transition: "background 0.3s"
            }}
            onClick={handleDonateClick}
          >
            Donate with Ketto
          </button>
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
        </Box>
      </motion.div>

      {/* The widget will appear here */}
      <div id="dms-container" ref={dmsContainerRef}></div>
    </Box>
  );
}
