import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { aboutUsCylinderPhotos } from "../../data/driveProjects";
import AboutUsVerticalGallery from "../AboutUsCylinderGallery/AboutUsCylinderGallery";

export default function AboutUsSplit() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openDrive = (item) => {
    setActive(item);
    setOpen(true);
  };

  const closeDrive = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <Box
      sx={{
        minHeight: { md: "85vh", xs: "auto" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#FFFBFC",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left column — Larson-style */}
      <Box
        sx={{
          flex: { md: "0 0 34%", xs: "1" },
          px: { xs: 3, md: 5, lg: 7 },
          py: { xs: 5, md: 8 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: { md: "1px solid rgba(191,4,73,0.08)" },
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            right: { md: "-10%", xs: "-20%" },
            top: "8%",
            fontFamily: "DM Serif Display, serif",
            fontSize: { md: "180px", xs: "120px" },
            fontWeight: 700,
            color: "rgba(191, 4, 73, 0.04)",
            lineHeight: 0.85,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          WWC
        </Box>

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: { xs: "36px", sm: "44px", md: "52px" },
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            About Us
          </Typography>

          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "11px", md: "12px" },
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#666",
              mb: 3,
            }}
          >
            We work with communities to create real and lasting change.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "14px", md: "15px" },
              lineHeight: 1.75,
              color: "#444",
              mb: 4,
              maxWidth: 420,
            }}
          >
            Warriors Without Cause is a youth-led NGO built on empathy — from education
            and health to livelihoods and disaster relief. Our story is written in the
            streets and classrooms where volunteers show up, listen, and stay.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0 }}>
            <Button
              component={Link}
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
              sx={{
                fontFamily: "DM Serif Display, Georgia, serif",
                fontSize: { xs: "22px", md: "26px" },
                fontWeight: 400,
                color: "#1a1a1a",
                textTransform: "none",
                p: 0,
                minWidth: 0,
                justifyContent: "flex-start",
                borderBottom: "1px solid rgba(26,26,26,0.35)",
                borderRadius: 0,
                mb: 2.5,
                "&:hover": {
                  bgcolor: "transparent",
                  borderBottomColor: "#BF0449",
                  color: "#BF0449",
                },
              }}
            >
              Our Drives in Action
            </Button>
          </Box>
        </Box>

        <Box sx={{ position: "relative", zIndex: 1, mt: { xs: 4, md: 0 } }}>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: "13px",
              color: "#777",
              lineHeight: 1.9,
              mb: 2,
            }}
          >
            <Link to="/blogs" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
              Blogs
            </Link>
            {", "}
            <Link to="/newsletter" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
              Newsletter
            </Link>
            {", "}
            <Link to="/donate" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
              Donate
            </Link>
            {", "}
            <Link to="/howtohelp" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
              Contact
            </Link>
          </Typography>
          <Typography sx={{ fontFamily: "Sora", fontSize: "11px", color: "#aaa" }}>
            © {new Date().getFullYear()} Warriors Without Cause
          </Typography>
        </Box>
      </Box>

      {/* Right — scrollable art-wall columns */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          px: { xs: 2, md: 3 },
          py: { xs: 2, md: 4 },
          pb: { xs: 5, md: 6 },
        }}
      >
        <AboutUsVerticalGallery photos={aboutUsCylinderPhotos} onSelect={openDrive} />
      </Box>

      <Dialog
        open={open}
        onClose={closeDrive}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px" } }}
      >
        {active && (
          <>
            <IconButton
              onClick={closeDrive}
              sx={{ position: "absolute", right: 8, top: 8, zIndex: 2, bgcolor: "#fff" }}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={active.image}
              alt={active.headline}
              sx={{ width: "100%", maxHeight: 280, objectFit: "cover" }}
            />
            <DialogContent>
              <Typography sx={{ fontFamily: "Sora", fontWeight: 700, fontSize: "22px", mb: 1 }}>
                {active.headline}
              </Typography>
              <Typography sx={{ fontFamily: "Sora", fontSize: "13px", color: "#BF0449", mb: 1 }}>
                {active.location}
              </Typography>
              <Typography sx={{ fontFamily: "Sora", fontSize: "13px", color: "#666", mb: 2 }}>
                <strong>{active.driveType}</strong>
                {" · "}
                {active.impact}
              </Typography>
              <Typography sx={{ fontFamily: "Sora", fontSize: "15px", lineHeight: 1.75, color: "#333" }}>
                {active.writeUp}
              </Typography>
              <Button
                component={Link}
                to="/projects"
                onClick={closeDrive}
                sx={{ mt: 2, textTransform: "none", fontFamily: "Sora" }}
              >
                View all projects →
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
