import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import sochLogo from "../../assets/sochLogo.png";
import sochVideo from "../../assets/sochVideo.mp4";

/** Soch / WWC social — update handle if Soch gets a dedicated profile. */
const SOCH_INSTAGRAM = "https://www.instagram.com/warriorswithoutcausengo";
const COLLABORATE_MAIL =
  "mailto:Contact@warriorswithoutcause.org?subject=Collaborate%20with%20Soch%20%2F%20Be%20Her%20Hero";

const sectionRule = (
  <Box
    component="span"
    aria-hidden
    sx={{
      display: "block",
      textAlign: "center",
      color: "rgba(191, 4, 73, 0.35)",
      fontSize: { xs: "18px", md: "22px" },
      letterSpacing: "0.5em",
      my: { xs: 5, md: 7 },
    }}
  >
    ⸻
  </Box>
);

const BeHerHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  }, []);

  return (
    <Box sx={{ bgcolor: "#FFFBFC", overflowX: "hidden" }}>
      {/* —— Hero: full-screen reel —— */}
      <Box
        component="section"
        aria-label="Be Her Hero introduction"
        sx={{
          position: "relative",
          minHeight: { xs: "calc(100svh - 68px)", md: "calc(100vh - 68px)" },
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          ref={videoRef}
          src={sochVideo}
          autoPlay
          muted
          playsInline
          loop
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,8,9,0.35) 0%, rgba(10,8,9,0.55) 45%, rgba(10,8,9,0.82) 100%)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 900,
            px: { xs: 2.5, md: 4 },
            pb: { xs: 5, md: 8 },
            pt: { xs: 10, md: 12 },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "40px", sm: "52px", md: "64px" },
              lineHeight: 1.05,
              color: "#fff",
              mb: 2,
              textShadow: "0 4px 32px rgba(0,0,0,0.45)",
            }}
          >
            Be Her Hero
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "16px", md: "19px" },
              fontWeight: 400,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.92)",
              maxWidth: 520,
              mx: "auto",
              mb: 3,
            }}
          >
            Not all heroes wear capes. Some simply show up.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: "13px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(242, 183, 5, 0.95)",
            }}
          >
            Coming Soon
          </Typography>
        </Box>
      </Box>

      {/* —— Coming soon block —— */}
      <Box
        component="section"
        aria-labelledby="soch-coming-heading"
        sx={{ py: { xs: 6, md: 10 }, px: 2 }}
      >
        <Container maxWidth="md">
          <Typography
            id="soch-coming-heading"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              lineHeight: 1.2,
              color: "#1a1a1a",
              textAlign: "center",
              mb: 2,
            }}
          >
            Something good is coming soon.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: 1.7,
              color: "#555",
              textAlign: "center",
              maxWidth: 480,
              mx: "auto",
              mb: 3,
            }}
          >
            We&apos;re building something meaningful. Stay connected.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
            <IconButton
              component="a"
              href={SOCH_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soch on Instagram"
              sx={{
                width: 56,
                height: 56,
                color: "#BF0449",
                border: "1px solid rgba(191, 4, 73, 0.25)",
                bgcolor: "#fff",
                boxShadow: "0 4px 20px rgba(191,4,73,0.08)",
                "&:hover": { bgcolor: "rgba(191, 4, 73, 0.06)" },
              }}
            >
              <InstagramIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Typography sx={{ fontFamily: "Sora", fontSize: "13px", color: "#888" }}>
              Follow Soch for updates
            </Typography>
          </Box>
        </Container>
      </Box>

      {sectionRule}

      {/* —— Our Vision —— */}
      <Box component="section" aria-labelledby="soch-vision-heading" sx={{ px: 2, pb: { xs: 2, md: 4 } }}>
        <Container maxWidth="md">
          <Typography
            id="soch-vision-heading"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: { xs: "28px", md: "36px" },
              color: "#1a1a1a",
              mb: 3,
              textAlign: "center",
            }}
          >
            Our Vision
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "16px", md: "17px" },
              lineHeight: 1.85,
              color: "#444",
              textAlign: "center",
              mb: 2,
            }}
          >
            We believe every woman deserves dignity, opportunity, and the chance to thrive.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "16px", md: "17px" },
              lineHeight: 1.85,
              color: "#444",
              textAlign: "center",
            }}
          >
            Through our initiatives, we aim to create spaces where empowerment becomes reality.
          </Typography>
        </Container>
      </Box>

      {sectionRule}

      {/* —— Be Part of the Change —— */}
      <Box
        component="section"
        aria-labelledby="soch-cta-heading"
        sx={{
          px: 2,
          pb: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="md">
          <Typography
            id="soch-cta-heading"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: { xs: "28px", md: "36px" },
              color: "#1a1a1a",
              mb: 2,
              textAlign: "center",
            }}
          >
            Be Part of the Change
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: 1.75,
              color: "#666",
              textAlign: "center",
              maxWidth: 440,
              mx: "auto",
              mb: 4,
            }}
          >
            Sometimes support is all someone needs to rise.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button
              component="a"
              href={SOCH_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                fontFamily: "Sora",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: 600,
                px: 3,
                py: 1.25,
                borderRadius: "999px",
                borderColor: "rgba(191, 4, 73, 0.45)",
                color: "#BF0449",
                "&:hover": { borderColor: "#BF0449", bgcolor: "rgba(191, 4, 73, 0.04)" },
              }}
            >
              Follow Our Journey
            </Button>
            <Button
              component="a"
              href={COLLABORATE_MAIL}
              variant="contained"
              sx={{
                fontFamily: "Sora",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: 600,
                px: 3,
                py: 1.25,
                borderRadius: "999px",
                bgcolor: "#BF0449",
                boxShadow: "none",
                "&:hover": { bgcolor: "#a0033d", boxShadow: "none" },
              }}
            >
              Collaborate With Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* —— Soch page footer (stories & connection — not a shop) —— */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid rgba(191, 4, 73, 0.12)",
          bgcolor: "#FFF2FA",
          py: { xs: 4, md: 5 },
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 3, md: 5 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              component="img"
              src={sochLogo}
              alt="Soch by WWC"
              sx={{ height: { xs: 44, md: 52 }, width: "auto", objectFit: "contain" }}
            />
            <IconButton
              component="a"
              href={SOCH_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soch on Instagram"
              size="small"
              sx={{ color: "#BF0449" }}
            >
              <InstagramIcon />
            </IconButton>
            <Box
              component="address"
              sx={{
                fontStyle: "normal",
                fontFamily: "Sora",
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.7,
              }}
            >
              <a href="mailto:Contact@warriorswithoutcause.org" style={{ color: "#BF0449", textDecoration: "none" }}>
                Contact@warriorswithoutcause.org
              </a>
              <br />
              <a href="tel:+919711883411" style={{ color: "#444", textDecoration: "none" }}>
                +91 9711883411
              </a>
              <Typography sx={{ fontSize: "12px", color: "#999", mt: 1.5, maxWidth: 360, mx: { xs: "auto", md: 0 } }}>
                This space is for Soch stories and future initiatives like it — not for product sales.
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ textAlign: "center", mt: 4 }}>
            <RouterLink
              to="/"
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "13px",
                color: "#BF0449",
                textDecoration: "none",
              }}
            >
              ← Back to Warriors Without Cause
            </RouterLink>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default BeHerHero;
