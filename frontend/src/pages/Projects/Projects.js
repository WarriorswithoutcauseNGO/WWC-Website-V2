import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImgText from "../../components/imgText/ImgText";
import { driveProjects } from "../../data/driveProjects";

export default function Projects() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <Box sx={{ bgcolor: "#FFF2FA", minHeight: "100vh", pb: 6 }}>
      <ImgText heading="Our Drives in Action" subHeading="Projects on the ground" />

      <Box sx={{ px: { xs: 2, md: 6 }, maxWidth: 1400, mx: "auto" }}>
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: 1.75,
            color: "#444",
            textAlign: "center",
            maxWidth: 720,
            mx: "auto",
            mb: 4,
          }}
        >
          Explore where we work — each card opens a short story of location, drive type,
          and impact. This is the same spirit that powers our organisational mission.
        </Typography>

        <Box
          sx={{
            columnCount: { xs: 1, sm: 2, lg: 3 },
            columnGap: "18px",
          }}
        >
          {driveProjects.map((item) => (
            <Box
              key={item.id}
              onClick={() => {
                setActive(item);
                setOpen(true);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActive(item);
                  setOpen(true);
                }
              }}
              sx={{
                breakInside: "avoid",
                mb: "18px",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                bgcolor: "#fff",
                boxShadow: "0 4px 20px rgba(191,4,73,0.08)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                "&:hover": {
                  transform: isMdUp ? "translateY(-4px)" : "none",
                  boxShadow: "0 16px 40px rgba(191,4,73,0.15)",
                  "& img": { transform: "scale(1.05)" },
                },
              }}
            >
              <Box sx={{ overflow: "hidden" }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.headline}
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.45s ease",
                  }}
                />
              </Box>
              <Box sx={{ p: 2.5 }}>
                <Typography sx={{ fontFamily: "Sora", fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}>
                  {item.headline}
                </Typography>
                <Typography sx={{ fontFamily: "Sora", fontSize: "13px", color: "#BF0449", mt: 0.5 }}>
                  {item.location}
                </Typography>
                <Typography sx={{ fontFamily: "Sora", fontSize: "14px", color: "#555", mt: 1, lineHeight: 1.55 }}>
                  {item.impact}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setActive(null);
        }}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px" } }}
      >
        {active && (
          <>
            <IconButton
              onClick={() => {
                setOpen(false);
                setActive(null);
              }}
              sx={{ position: "absolute", right: 8, top: 8, zIndex: 2, bgcolor: "#fff" }}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={active.image}
              alt={active.headline}
              sx={{ width: "100%", maxHeight: 300, objectFit: "cover" }}
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
                to="/donate"
                onClick={() => window.scrollTo(0, 0)}
                sx={{ mt: 2, textTransform: "none", fontFamily: "Sora" }}
              >
                Support this work →
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
