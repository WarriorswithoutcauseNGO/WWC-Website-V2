import React, { useState, useEffect } from "react";
import { Box, Typography, Checkbox, TextField, Button } from "@mui/material";
import qrcodeImg from '../../assets/Qrcodeimg.png'

export default function DonationPageBox() {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [wantReceipt, setWantReceipt] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [panCardNumber, setPanCardNumber] = useState("");
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const [amount, setAmount] = useState(0);
  const [donationItem, setDonationItem] = useState("");

  useEffect(() => {
    const savedAmount = localStorage.getItem("amount");
    const savedLabel = localStorage.getItem("label");

    if (savedAmount) {
      setAmount(savedAmount);
    }

    if (savedLabel) {
      setDonationItem(savedLabel);
    }
  }, []);

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
    if (event.target.checked) {
      setWantReceipt(false);
    }
  };

  const handleReceiptChange = (event) => {
    setWantReceipt(event.target.checked);
    if (event.target.checked) {
      setIsAnonymous(false);
    }
  };

  const handleAcknowledgeChange = (event) => {
    setIsAcknowledged(event.target.checked);
  };

  return (
    <Box
      sx={{
        border: "none",
        borderRadius: "10px",
        maxWidth: { md: "522px", xs: "100%" },
        margin: { md: "50px auto", xs: "20px" },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(229, 229, 229, 1)",
          padding: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(77, 77, 77, 1)",
            width: { xs: "70%", md: "auto" },
          }}
        >
          Contributing for <b>{donationItem}</b>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(77, 77, 77, 1)",
          }}
        >
          <span
            style={{
              fontSize: "10px",
            }}
          >
            Total Amount:
          </span>{" "}
          <br />₹{amount}
        </Typography>
      </Box>

      <Box sx={{display:"flex",justifyContent:"center",alignItems:'center',width:"100%"}}>
        <img src={qrcodeImg} alt="" />
      </Box>

      <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: { xs: 1, md: 2 },
    backgroundColor: 'rgba(248, 248, 248, 0.7)',
    borderRadius: '8px',
    margin: { xs: '10px', md: '20px' },
    maxWidth: { xs: '100%', md: '500px' },
    mx: 'auto',
  }}
>
  <Typography
    sx={{
      fontFamily: "Sora",
      fontSize: { xs: '14px', md: '16px' },
      fontWeight: 400,
      color: "rgba(77, 77, 77, 1)",
      textAlign: 'center',
      lineHeight: 1.6,
      '& strong': {
        color: "rgba(222, 0, 137, 1)",
        fontWeight: 600,
      }
    }}
  >
    Bank Details for Donation:
    <br />
    <strong>Bank Account Number:</strong> 50200070839175
    <br />
    <strong>IFSC Code:</strong> HDFC0009629
    <br />
    <strong>Account Holder:</strong> Warriorswithoutcause
    <br />
    <strong>UPI ID:</strong> 9711883411@pthdfc
  </Typography>
</Box>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Checkbox
            color="primary"
            checked={isAnonymous}
            onChange={handleAnonymousChange}
            inputProps={{ "aria-label": "Anonymous contribution" }}
            sx={{
              color: "rgba(208, 208, 208, 1)",
              "&.Mui-checked": {
                color: "rgba(255, 58, 179, 1)",
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(77, 77, 77, 1)",
            }}
          >
            Anonymous
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Checkbox
            color="primary"
            checked={wantReceipt}
            onChange={handleReceiptChange}
            inputProps={{ "aria-label": "Receipt request" }}
            sx={{
              borderRadius: "50px",
              color: "rgba(208, 208, 208, 1)",
              "&.Mui-checked": {
                color: "rgba(255, 58, 179, 1)",
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(77, 77, 77, 1)",
            }}
          >
            I want a receipt
          </Typography>
        </Box>
      </Box>

      {wantReceipt && (
        <Box sx={{ padding: 2 }}>
          <TextField
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            sx={{
              marginTop: "1rem",
              width: "100%",
            }}
          />
          <TextField
            label="Email ID"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              marginTop: "1rem",
              width: "100%",
            }}
          />
          <TextField
            label="Contact Number"
            variant="outlined"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            sx={{
              marginTop: "1rem",
              width: "100%",
            }}
          />
          <TextField
            label="Pan Card Number"
            variant="outlined"
            value={panCardNumber}
            onChange={(e) => setPanCardNumber(e.target.value)}
            sx={{
              marginTop: "1rem",
              width: "100%",
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
          padding: 1,
        }}
      >
        <Checkbox
          color="primary"
          checked={isAcknowledged}
          onChange={handleAcknowledgeChange}
          inputProps={{ "aria-label": "Consent to data usage" }}
          sx={{
            color: "rgba(208, 208, 208, 1)",
            "&.Mui-checked": {
              color: "rgba(255, 58, 179, 1)",
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "12px",
            fontWeight: 400,
            color: "rgba(77, 77, 77, 1)",
          }}
        >
          I acknowledge that my donation to Warriorswithoutcause NGO is
          voluntary, and I consent to the use of my data in accordance with the
          organization's privacy policy. I trust that my contribution will be
          directed towards the betterment of society and those in need.
        </Typography>
      </Box>

      <Button
        variant="contained"
        disabled={!isAcknowledged || amount <= 0}
        fullWidth
        sx={{
          marginTop: "1rem",
          backgroundColor: "rgba(222, 0, 137, 1)",
          padding: "10px",
          borderRadius: "8px",
          fontFamily: "Sora",
          fontSize: "20px",
          fontWeight: 700,
          color: "rgba(255, 234, 246, 1)",
          m: 1,
          width: { md: "502px", xs: "95%" },
        }}
      >
        Make Payment
      </Button> */}
    </Box>
  );
}
