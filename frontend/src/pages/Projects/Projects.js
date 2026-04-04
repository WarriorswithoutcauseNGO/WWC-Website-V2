import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { campaignProjects } from "../../data/driveProjects";

/** Rhombus “stage” marker (Audemars-style room nav). */
function StageIcon({ active }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 48 28"
      aria-hidden
      sx={{
        width: 28,
        height: 16,
        flexShrink: 0,
        color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.38)",
        transition: "color 0.5s ease, transform 0.5s ease",
      }}
    >
      <path
        fill="currentColor"
        d="M47.996 14L23.998 28 0 14 23.998 0zM1.728 14l22.27 12.993L46.268 14 23.999 1.008z"
      />
    </Box>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const n = campaignProjects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = campaignProjects[activeIndex];

  const go = useCallback(
    (delta) => {
      setActiveIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const openCampaign = useCallback(() => {
    navigate(`/projects/${active.slug}`);
    window.scrollTo(0, 0);
  }, [active.slug, navigate]);

  return (
    <Box
      component="section"
      aria-roledescription="carousel"
      sx={{
        position: "relative",
        minHeight: { xs: "calc(100vh - 68px)", md: "calc(100vh - 68px)" },
        overflow: "hidden",
        bgcolor: "#0a0909",
        userSelect: "none",
        "&:hover .projects-bg-active": {
          transform: "scale(1.06)",
        },
      }}
    >
      {campaignProjects.map((item, i) => (
        <Box
          key={item.id}
          component="img"
          src={item.image}
          alt=""
          className={i === activeIndex ? "projects-bg-active" : undefined}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            opacity: i === activeIndex ? 1 : 0,
            pointerEvents: "none",
            transform: i === activeIndex ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.85s ease, transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(5,4,6,0.75) 0%, rgba(5,4,6,0.35) 38%, rgba(5,4,6,0.55) 100%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 32%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top — title + tagline */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 28 },
          left: 0,
          right: 0,
          zIndex: 2,
          textAlign: "center",
          px: 2,
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { xs: "10px", md: "11px" },
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: { xs: "13px", md: "15px" },
            fontStyle: "italic",
            color: "rgba(242, 183, 5, 0.9)",
            mt: 0.75,
            maxWidth: 520,
            mx: "auto",
            lineHeight: 1.4,
          }}
        >
          Care that reaches where it&apos;s needed most
        </Typography>
      </Box>

      {/* Left rail — room markers (md+) */}
      {isMdUp && (
        <Box
          component="nav"
          aria-label="Campaign rooms"
          sx={{
            position: "absolute",
            left: { md: 24, lg: 40 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2.5,
          }}
        >
          {campaignProjects.map((item, i) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                "&:hover .room-nav-label": { opacity: 1 },
              }}
            >
              <IconButton
                onClick={() => setActiveIndex(i)}
                aria-label={`Show ${item.headline}`}
                aria-current={i === activeIndex ? "true" : undefined}
                sx={{
                  p: 0.5,
                  color: "inherit",
                  opacity: i === activeIndex ? 1 : 0.45,
                  transition: "opacity 0.5s ease",
                  "&:hover": {
                    opacity: 1,
                    bgcolor: "transparent",
                  },
                  "&:focus-visible": { outline: "2px solid #F2B705", outlineOffset: 4 },
                }}
              >
                <StageIcon active={i === activeIndex} />
              </IconButton>
              <Box
                className="room-nav-label"
                sx={{
                  position: "absolute",
                  left: "calc(100% + 12px)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  opacity: i === activeIndex ? 1 : 0,
                  transition: "opacity 0.45s ease",
                  pointerEvents: "none",
                  whiteSpace: "pre-line",
                  maxWidth: 220,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontWeight: 300,
                    fontSize: "11px",
                    lineHeight: 1.25,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  {item.roomTitle.line1}
                  {"\n"}
                  <Box component="span" sx={{ fontStyle: "italic", fontWeight: 400, color: "#F2B705" }}>
                    {item.roomTitle.line2}
                  </Box>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* Mobile dots */}
      {!isMdUp && (
        <Box
          sx={{
            position: "absolute",
            bottom: 120,
            left: 0,
            right: 0,
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {campaignProjects.map((item, i) => (
            <Box
              key={item.id}
              component="button"
              type="button"
              aria-label={`Show ${item.headline}`}
              aria-current={i === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(i)}
              sx={{
                width: i === activeIndex ? 22 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                bgcolor: i === activeIndex ? "rgba(242,183,5,0.95)" : "rgba(255,255,255,0.25)",
                cursor: "pointer",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </Box>
      )}

      {/* Bottom — prev / title / next */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: { xs: 24, md: 36 },
          zIndex: 2,
          px: { xs: 1.5, sm: 3, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { md: 6 },
        }}
      >
        <IconButton
          onClick={() => go(-1)}
          aria-label="Previous campaign"
          sx={{
            flexShrink: 0,
            width: 48,
            height: 48,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            bgcolor: "rgba(0,0,0,0.25)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
          }}
        >
          <ChevronLeft sx={{ fontSize: 28 }} />
        </IconButton>

        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            minWidth: 0,
            px: 1,
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "Sora",
              fontWeight: 200,
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              lineHeight: 1.15,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              whiteSpace: "pre-line",
            }}
          >
            {active.roomTitle.line1}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "22px", sm: "28px", md: "34px" },
              fontStyle: "italic",
              color: "#F2B705",
              display: "block",
              mt: 0.5,
            }}
          >
            {active.roomTitle.line2}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "12px", md: "13px" },
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 440,
              mx: "auto",
              mt: 2,
              fontWeight: 400,
              userSelect: "text",
            }}
          >
            {active.cardSummary}
          </Typography>
          <Typography
            component="button"
            type="button"
            onClick={openCampaign}
            sx={{
              mt: 2.5,
              fontFamily: "Sora",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(242, 183, 5, 0.95)",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: 4,
              "&:hover": { color: "#fff" },
            }}
          >
            Open campaign
          </Typography>
        </Box>

        <IconButton
          onClick={() => go(1)}
          aria-label="Next campaign"
          sx={{
            flexShrink: 0,
            width: 48,
            height: 48,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            bgcolor: "rgba(0,0,0,0.25)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
          }}
        >
          <ChevronRight sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>

      {/* Clickable hit area — optional full-screen advance on right half could conflict; skip */}
    </Box>
  );
}
