import React from "react";
import joinWWC from "../../assets/joinWWC.png";
import joinWWC_phn from "../../assets/joinWWC_phn.png";
import { Box, Typography, Button } from "@mui/material";

export default function BecomeWarrior() {
  return (
    <Box
      sx={{
        background: "#232323",
        display: "flex",
        gap: 2,
        padding: { md: "64px 10px 64px 64px", xs: 3 },
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fonfatmily: "Sora",
            fontSize: { md: "48px", xs: "32px" },
            fontWeight: 700,
            lineHeight: "60.48px",
            color: "white",
            pt: 6,
          }}
        >
          Become a volunteer
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: { md: "20px", xs: "16px" },
            fontWeight: 400,
            lineHeight: { md: "27.24px", xs: "21.79px" },
            color: "#B5B5B5",
            maxWidth: { md: "88%", xs: "100%" },
          }}
        >
          Joining Warriorswithoutcause NGO offers personal and professional
          growth, allowing you to expand your horizons, contribute to societal
          change, and build valuable networks. You'll gain experience by
          impacting lives and develop a deeper sense of gratitude and purpose
          while connecting with like-minded individuals.
        </Typography>
        <Box sx={{ display: { md: "flex", xs: "none" }, gap: 2 }}>
          <Button
            sx={{
              backgroundColor: "white",
              color: "rgba(0, 0, 0, 1)",
              padding: "10px 20px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20.16px",
              textAlign: "left",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              boxShadow: "0px 0px 1.9px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "37px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                boxShadow: "0px 0px 1.9px 0px #00000040",
              },
            }}
          >
            READ MORE
          </Button>

          <Button
            sx={{
              backgroundColor: "transparent",
              color: "white",
              padding: "10px 20px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20.16px",
              textAlign: "left",
              border: "1px solid white",
              cursor: "pointer",
              marginTop: "10px",
              boxShadow: "0px 0px 1.9px 0px #00000040",
              borderRadius: "37px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 1)",
                border: "none",
                boxShadow: "0px 0px 1.9px 0px rgba(0, 0, 0, 0.25)",
              },
            }}
          >
            BECOME A WARRIOR
          </Button>
        </Box>
      </Box>

      <Box
        component="img"
        src={joinWWC}
        alt="Join WWC"
        sx={{
          display: { xs: "none", md: "block" },
          maxWidth: "100%",
          height: "auto",
        }}
      />

      <Box
        component="img"
        src={joinWWC_phn}
        alt="Join WWC Mobile"
        sx={{
          display: { xs: "block", md: "none" },
          maxWidth: "100%",
          height: "auto",
        }}
      />

      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            backgroundColor: "white",
            color: "rgba(0, 0, 0, 1)",
            padding: "8px 16px",
            fontFamily: "Sora",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20.16px",
            textAlign: "left",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
            boxShadow: "0px 0px 1.9px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "37px",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              boxShadow: "0px 0px 1.9px 0px #00000040",
            },
          }}
        >
          READ MORE
        </Button>

        <Button
          sx={{
            backgroundColor: "transparent",
            color: "white",
            padding: "8px 16px",
            fontFamily: "Sora",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20.16px",
            textAlign: "left",
            border: "1px solid white",
            cursor: "pointer",
            marginTop: "10px",
            boxShadow: "0px 0px 1.9px 0px #00000040",
            borderRadius: "37px",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "white",
              color: "rgba(0, 0, 0, 1)",
              border: "none",
              boxShadow: "0px 0px 1.9px 0px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          BECOME A WARRIOR
        </Button>
      </Box>
    </Box>
  );
}
