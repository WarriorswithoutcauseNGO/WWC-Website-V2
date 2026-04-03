import {
  Box,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const presetAmounts = [500, 1000, 2500, 4000];

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: "Sora",
    borderRadius: "10px",
    "& fieldset": { borderColor: "#ddd" },
    "&:hover fieldset": { borderColor: "#BF3475" },
    "&.Mui-focused fieldset": { borderColor: "#BF0449" },
  },
  "& .MuiInputLabel-root": { fontFamily: "Sora", fontSize: "14px" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#BF0449" },
};

export default function Donation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [tab, setTab] = useState("once");
  const [amount, setAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nationality, setNationality] = useState("indian");
  const [showPan, setShowPan] = useState(false);
  const [pan, setPan] = useState("");

  const displayAmount = isCustom ? Number(customAmount) || 0 : amount;

  const handlePreset = (val) => {
    setAmount(val);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setCustomAmount(val);
    setIsCustom(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: redirect to UPI link with amount
    const upiUrl = `upi://pay?pa=PLACEHOLDER@upi&pn=WarriorsWithoutCause&am=${displayAmount}&cu=INR&tn=Donation`;
    window.location.href = upiUrl;
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
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Sora",
            fontWeight: 700,
            fontSize: { xs: "32px", md: "48px" },
            color: "#BF0449",
            mb: 2,
            textAlign: "center",
          }}
        >
          Make a Donation
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
        <Typography
          sx={{
            fontFamily: "Sora",
            fontWeight: 400,
            fontSize: { xs: "15px", md: "18px" },
            color: "#4D4D4D",
            mb: 5,
            textAlign: "center",
            maxWidth: 580,
            lineHeight: 1.7,
          }}
        >
          Your donation helps Warriors Without Cause provide education, healthcare,
          and opportunities to underserved communities. Every contribution makes a
          real difference.
        </Typography>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ width: "100%", maxWidth: 520, display: "flex" }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            background: "#fff",
            borderRadius: "20px",
            p: { xs: 3, md: 4.5 },
            boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Sora",
              fontWeight: 700,
              fontSize: { xs: "18px", md: "20px" },
              color: "#373737",
              textAlign: "center",
              mb: 3,
            }}
          >
            Choose the amount you wish to Donate
          </Typography>

          {/* Once / Monthly toggle */}
          <Box
            sx={{
              display: "flex",
              background: "#F2F2F2",
              borderRadius: "37px",
              p: "4px",
              mb: 3,
            }}
          >
            {[
              { key: "once", label: "Contribute once" },
              { key: "monthly", label: "Contribute monthly" },
            ].map((t) => (
              <Box
                key={t.key}
                onClick={() => setTab(t.key)}
                sx={{
                  flex: 1,
                  textAlign: "center",
                  py: 1.2,
                  borderRadius: "37px",
                  fontFamily: "Sora",
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s",
                  background: tab === t.key ? "linear-gradient(135deg, #BF0449, #BF3475)" : "transparent",
                  color: tab === t.key ? "#fff" : "#666",
                }}
              >
                {t.label}
              </Box>
            ))}
          </Box>

          {/* Amount Presets */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 2, flexWrap: "wrap" }}>
            {presetAmounts.map((val) => (
              <Box
                key={val}
                onClick={() => handlePreset(val)}
                sx={{
                  flex: 1,
                  minWidth: isMobile ? "45%" : 0,
                  textAlign: "center",
                  py: 1.3,
                  borderRadius: "10px",
                  fontFamily: "Sora",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: !isCustom && amount === val ? "2px solid #BF0449" : "2px solid #ddd",
                  background: !isCustom && amount === val ? "linear-gradient(135deg, #BF0449, #BF3475)" : "#fff",
                  color: !isCustom && amount === val ? "#fff" : "#333",
                  transition: "all 0.2s",
                  "&:hover": {
                    borderColor: "#BF0449",
                  },
                }}
              >
                ₹{val.toLocaleString("en-IN")}
              </Box>
            ))}
          </Box>

          {/* Other Amount */}
          <TextField
            fullWidth
            placeholder="Other Amount"
            value={customAmount}
            onChange={handleCustomChange}
            onClick={() => setIsCustom(true)}
            sx={{ mb: 3, ...fieldSx }}
            InputProps={{
              startAdornment: (
                <Typography sx={{ fontFamily: "Sora", fontWeight: 600, color: "#999", mr: 0.5 }}>₹</Typography>
              ),
            }}
          />

          {/* Name */}
          <Typography sx={{ fontFamily: "Sora", fontSize: "13px", fontWeight: 600, color: "#333", mb: 0.5 }}>
            Enter Name <span style={{ color: "#BF0449" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2.5, ...fieldSx }}
          />

          {/* Email */}
          <Typography sx={{ fontFamily: "Sora", fontSize: "13px", fontWeight: 600, color: "#333", mb: 0.5 }}>
            Enter Email Address <span style={{ color: "#BF0449" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2.5, ...fieldSx }}
          />

          {/* Mobile */}
          <Typography sx={{ fontFamily: "Sora", fontSize: "13px", fontWeight: 600, color: "#333", mb: 0.5 }}>
            Mobile Number <span style={{ color: "#BF0449" }}>*</span>
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <TextField
              disabled
              value="+91"
              sx={{
                width: 70,
                ...fieldSx,
                "& .MuiOutlinedInput-root": {
                  ...fieldSx["& .MuiOutlinedInput-root"],
                  background: "#F2F2F2",
                },
              }}
            />
            <TextField
              fullWidth
              required
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
              sx={fieldSx}
            />
          </Box>
          <Typography sx={{ fontFamily: "Sora", fontSize: "11px", color: "#999", mb: 2.5 }}>
            All donation updates will be sent on this number
          </Typography>

          {/* Nationality */}
          <Typography sx={{ fontFamily: "Sora", fontSize: "13px", fontWeight: 600, color: "#333", mb: 0.5 }}>
            Nationality <span style={{ color: "#BF0449" }}>*</span>
          </Typography>
          <RadioGroup
            row={!isMobile}
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            sx={{ mb: 2.5 }}
          >
            <FormControlLabel
              value="indian"
              control={<Radio sx={{ color: "#BF0449", "&.Mui-checked": { color: "#BF0449" } }} />}
              label={<Typography sx={{ fontFamily: "Sora", fontSize: "14px" }}>I'm an Indian National</Typography>}
            />
            <FormControlLabel
              value="non-indian"
              control={<Radio sx={{ color: "#BF0449", "&.Mui-checked": { color: "#BF0449" } }} />}
              label={<Typography sx={{ fontFamily: "Sora", fontSize: "14px" }}>I'm not an Indian National</Typography>}
            />
          </RadioGroup>

          {/* PAN Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={showPan}
                onChange={(e) => setShowPan(e.target.checked)}
                sx={{ color: "#BF0449", "&.Mui-checked": { color: "#BF0449" } }}
              />
            }
            label={
              <Typography sx={{ fontFamily: "Sora", fontSize: "13px", color: "#555" }}>
                I want to provide PAN details for 80G tax benefit
              </Typography>
            }
            sx={{ mb: showPan ? 1 : 2.5 }}
          />

          {/* PAN Field (conditional) */}
          {showPan && (
            <>
              <Typography sx={{ fontFamily: "Sora", fontSize: "13px", fontWeight: 600, color: "#333", mb: 0.5 }}>
                Enter Pan Number <span style={{ color: "#BF0449" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                required={showPan}
                placeholder="Pan Number"
                value={pan}
                onChange={(e) => setPan(e.target.value.toUpperCase().slice(0, 10))}
                sx={{ mb: 2.5, ...fieldSx }}
              />
            </>
          )}

          {/* Submit */}
          <Button
            type="submit"
            fullWidth
            disabled={displayAmount <= 0}
            sx={{
              background: displayAmount > 0
                ? "linear-gradient(135deg, #BF0449, #BF3475)"
                : "#ccc",
              color: "#fff",
              fontFamily: "Sora",
              fontSize: "18px",
              fontWeight: 700,
              borderRadius: "10px",
              py: 1.8,
              textTransform: "none",
              letterSpacing: 0.5,
              boxShadow: displayAmount > 0 ? "0 4px 16px rgba(191,4,73,0.3)" : "none",
              "&:hover": {
                background: "linear-gradient(135deg, #9C0339, #BF0449)",
              },
              "&.Mui-disabled": {
                background: "#ccc",
                color: "#fff",
              },
            }}
          >
            Donate {displayAmount > 0 ? `₹${displayAmount.toLocaleString("en-IN")}` : ""}
          </Button>
        </Box>
      </motion.div>

      {/* Our Projects Button */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/aboutus");
          }}
          sx={{
            mt: 5,
            background: "linear-gradient(135deg, #F2B705, #F28705)",
            color: "#fff",
            fontFamily: "Sora",
            fontSize: { xs: "15px", md: "17px" },
            fontWeight: 600,
            borderRadius: "37px",
            px: 5,
            py: 1.5,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            boxShadow: "0 4px 16px rgba(242,183,5,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #D49A04, #D47504)",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(242,183,5,0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Our Projects
        </Button>
      </motion.div>
    </Box>
  );
}
