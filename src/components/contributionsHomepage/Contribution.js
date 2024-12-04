import React, { useState } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF3AB3",
    },
    background: {
      default: "#FFF5F8",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "16px",
          fontSize: "1rem",
        },
      },
    },
  },
});

const Contribution = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [selectedOption, setSelectedOption] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const navigate = useNavigate();

  const options = [
    { id: "sanitary", label: "100 sanitary pads", amount: 100 },
    { id: "blanket", label: "1 blanket", amount: 100 },
    { id: "ration", label: "1 ration kit to family", amount: 1000 },
    { id: "stationary", label: "1 stationary kit", amount: 200 },
    { id: "sponsor", label: "sponsor aid or meals", amount: 0 },
    { id: "other", label: "Other", amount: 0 },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    if (optionId !== "other") setCustomAmount("");
  };

  const handleContribute = () => {
    const selectedItem = options.find((opt) => opt.id === selectedOption);
    const amount = selectedOption === "other" ? parseInt(customAmount) || 0 : selectedItem.amount;

    localStorage.setItem("label", selectedItem.label);
    localStorage.setItem("amount", amount);


    navigate("/donate");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: isMobile ? 2 : 4,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              mb: 4,
              fontSize: isMobile ? "32px" : "60px",
              fontWeight: "700",
              lineHeight: isMobile ? "40px" : "75.6px",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Every contribution brings us one step closer to a future where
            everyone has the chance to thrive.
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #FFDEF2",
            backdropFilter: "15.5px",
            padding: "10px 11px 10px 11px",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%", minWidth: isMobile ? "100%" : "459px" }}>
            <FormControl component="fieldset">
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: isMobile || isTablet ? "1fr 1fr" : "1fr 1fr",
                  gap: 2,
                }}
              >
                {options.map((option) => (
                  <Box
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    sx={{
                      backgroundColor: selectedOption === option.id ? "#FFB7E5" : "#FFE9F6",
                      border: "1px solid #FFDEF2",
                      borderRadius: "10px",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      transform: selectedOption === option.id ? "scale(0.98)" : "scale(1)",
                      "&:hover": {
                        backgroundColor: selectedOption === option.id ? "#FFB7E5" : "#FFDEF2",
                      },
                      padding: "16px",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#7A7A7A",
                          fontWeight: selectedOption === option.id ? "600" : "400",
                          fontSize: "16px",
                          lineHeight: "20.16px",
                          fontFamily: "Sora, sans-serif",
                        }}
                      >
                        {option.label}
                      </Typography>
                      {option.amount > 0 && (
                        <Typography
                          variant="body2"
                          sx={{
                            textAlign: "center",
                            color: "#4D4D4D",
                            fontWeight: "700",
                            fontSize: "16px",
                            lineHeight: "20.16px",
                            fontFamily: "Sora, sans-serif",
                            mt: 1,
                          }}
                        >
                          ₹{option.amount}
                        </Typography>
                      )}
                    </Box>
                    {selectedOption === option.id && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.main,
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </FormControl>

            {selectedOption === "other" && (
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Enter amount (₹)"
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                  }}
                />
              </Box>
            )}

            <Button
              variant="contained"
              onClick={handleContribute}
              disabled={!selectedOption || (selectedOption === "other" && !customAmount)}
              sx={{
                mt: 4,
                py: 2,
                backgroundColor: "#DE0089",
                "&:hover": { backgroundColor: "#D81B60" },
                "&.Mui-disabled": { backgroundColor: "#E91E63", opacity: 0.5 },
                color: "#FFEAF6",
                fontFamily: 'Sora',
                fontSize: '20px',
                fontWeight: 700
              }}
            >
              Contribute to a brighter future
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Contribution;
