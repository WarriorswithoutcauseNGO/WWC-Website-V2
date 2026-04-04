import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import bgVideo from "../../assets/bg-video.mp4";
import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_4 from "../../assets/our_drives_4.png";
import sochVideo from "../../assets/sochVideo.mp4";

const VOLUNTEER_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdECsvUceeFUrPORFeOho8wdzTEdFNMBHCr1qsLYThzy8htGQ/viewform?usp=pp_url";

const experienceItems = [
  { text: "Grassroots social impact", Icon: ParkOutlinedIcon },
  { text: "Leadership development", Icon: LeaderboardOutlinedIcon },
  { text: "Emotional growth", Icon: PsychologyOutlinedIcon },
  { text: "Meaningful human connections", Icon: HandshakeOutlinedIcon },
  { text: "Purpose-driven action", Icon: TrackChangesOutlinedIcon },
];

const whyItems = [
  {
    title: "Purpose",
    body: "Discover meaning beyond routine life.",
    Icon: AutoAwesomeOutlinedIcon,
  },
  {
    title: "Community",
    body: "Join a tribe of passionate changemakers.",
    Icon: Diversity3OutlinedIcon,
  },
  {
    title: "Growth",
    body: "Build confidence, leadership, and empathy.",
    Icon: TrendingUpOutlinedIcon,
  },
  {
    title: "Impact",
    body: "See the difference you create with your own eyes.",
    Icon: FavoriteBorderOutlinedIcon,
  },
];

const testimonials = [
  {
    quote: "This experience changed how I see the world.",
    attribution: "Volunteer",
  },
  {
    quote: "I found confidence I never knew I had.",
    attribution: "Warrior",
  },
  {
    quote: "It's more than volunteering, it's family.",
    attribution: "Team Member",
  },
];

const reelItems = [
  { id: "r1", video: bgVideo, poster: our_drives_1, label: "On the ground" },
  { id: "r2", video: sochVideo, poster: our_drives_4, label: "Hands-on" },
  { id: "r3", image: our_drives_1, label: "Community" },
  { id: "r4", image: our_drives_4, label: "Together" },
];

const sectionRule = (
  <Box
    component="span"
    aria-hidden
    sx={{
      display: "block",
      textAlign: "center",
      color: "rgba(191, 4, 73, 0.35)",
      fontSize: { xs: "18px", md: "22px" },
      letterSpacing: "0.45em",
      my: { xs: 1, md: 1.5 },
    }}
  >
    ⸻
  </Box>
);

const HowToHelp = () => {
  const heroVideoRef = useRef(null);
  const ctaVideoRef = useRef(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const v = heroVideoRef.current;
    if (v) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, []);

  useEffect(() => {
    const v = ctaVideoRef.current;
    if (v) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <Box sx={{ bgcolor: "#FFFBFC", overflowX: "hidden" }}>
      {/* —— Hero: full-screen cinematic reel —— */}
      <Box
        component="section"
        aria-label="Become a Warrior hero"
        sx={{
          position: "relative",
          minHeight: { xs: "calc(100svh - 68px)", md: "calc(100vh - 68px)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          ref={heroVideoRef}
          src={bgVideo}
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
              "linear-gradient(180deg, rgba(8,6,7,0.4) 0%, rgba(8,6,7,0.65) 50%, rgba(8,6,7,0.88) 100%)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 10 }, px: 2 }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "34px", sm: "44px", md: "54px" },
              lineHeight: 1.1,
              color: "#fff",
              textAlign: "center",
              mb: 2,
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
            }}
          >
            Not Just Volunteering. A Transformation.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "17px", md: "20px" },
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.92)",
              textAlign: "center",
              maxWidth: 560,
              mx: "auto",
            }}
          >
            Step into the life of a Warrior and create change.
          </Typography>
        </Container>
      </Box>

      {/* —— About the experience —— */}
      <Box component="section" aria-labelledby="exp-heading" sx={{ px: 2, py: { xs: 6, md: 9 } }}>
        <Container maxWidth="md">
          <Typography
            id="exp-heading"
            sx={{
              fontFamily: "Sora",
              fontWeight: 600,
              fontSize: { xs: "16px", sm: "17px", md: "20px" },
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#BF0449",
              textAlign: "center",
              mb: 2.5,
            }}
          >
            About the experience
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "16px", md: "17px" },
              lineHeight: 1.85,
              color: "#333",
              textAlign: "center",
              mb: 2,
            }}
          >
            Being a Warrior isn&apos;t about helping from the sidelines — it&apos;s about stepping into real stories,
            real communities, and real change.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "16px", md: "17px" },
              lineHeight: 1.85,
              color: "#333",
              textAlign: "center",
              mb: 4,
            }}
          >
            At Warriors Without Cause, volunteers don&apos;t just participate — they lead, create, and transform
            lives, including their own.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontWeight: 600,
              fontSize: "15px",
              color: "#1a1a1a",
              mb: 2.5,
              textAlign: "center",
            }}
          >
            You will experience:
          </Typography>
          <Box
            component="ul"
            aria-label="What you will experience as a volunteer"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              maxWidth: 560,
              mx: "auto",
              borderRadius: "18px",
              border: "1px solid rgba(191, 4, 73, 0.14)",
              bgcolor: "rgba(255, 255, 255, 0.98)",
              boxShadow: "0 8px 36px rgba(191, 4, 73, 0.08)",
              px: { xs: 2, sm: 2.5 },
              py: { xs: 1.5, md: 2 },
            }}
          >
            {experienceItems.map(({ text, Icon }, idx) => (
              <Box
                component="li"
                key={text}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  py: { xs: 1.5, md: 1.75 },
                  px: { xs: 0.5, sm: 1 },
                  borderBottom:
                    idx < experienceItems.length - 1 ? "1px solid rgba(191, 4, 73, 0.08)" : "none",
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    flexShrink: 0,
                    width: { xs: 44, sm: 50 },
                    height: { xs: 44, sm: 50 },
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(145deg, rgba(191, 4, 73, 0.11) 0%, rgba(242, 183, 5, 0.08) 100%)",
                    border: "1px solid rgba(191, 4, 73, 0.16)",
                  }}
                >
                  <Icon sx={{ fontSize: { xs: 24, sm: 26 }, color: "#BF0449" }} />
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { xs: "15px", md: "16px" },
                    color: "#333",
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {sectionRule}

      {/* —— Reel carousel —— */}
      <Box component="section" aria-labelledby="reel-heading" sx={{ pb: { xs: 1, md: 2 } }}>
        <Container maxWidth="lg">
          <Typography
            id="reel-heading"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: { xs: "28px", md: "36px" },
              color: "#1a1a1a",
              textAlign: "center",
              mb: 1,
            }}
          >
            A Day in the Life of a Warrior
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: "14px",
              color: "#888",
              textAlign: "center",
              mb: 4,
            }}
          >
            Scroll sideways — vertical stories, real moments.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              pb: 2,
              mx: { xs: -2, sm: 0 },
              px: { xs: 2, sm: 0 },
              "&::-webkit-scrollbar": { height: 6 },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(191,4,73,0.25)",
                borderRadius: 3,
              },
            }}
          >
            {reelItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: 220, sm: 260, md: 280 },
                  aspectRatio: "9 / 16",
                  borderRadius: "20px",
                  overflow: "hidden",
                  scrollSnapAlign: "center",
                  position: "relative",
                  bgcolor: "#1a1a1a",
                  border: "1px solid rgba(191, 4, 73, 0.15)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                }}
              >
                {item.video ? (
                  <Box
                    component="video"
                    src={item.video}
                    poster={item.poster}
                    muted
                    playsInline
                    loop
                    autoPlay
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={item.image}
                    alt=""
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    py: 1.25,
                    px: 1.5,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
                  }}
                >
                  <Typography sx={{ fontFamily: "Sora", fontSize: "12px", fontWeight: 600, color: "#fff" }}>
                    {item.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {sectionRule}

      {/* —— Why become a Warrior —— */}
      <Box component="section" aria-labelledby="why-heading" sx={{ px: 2, pt: { xs: 1.5, md: 2 }, pb: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Typography
            id="why-heading"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontSize: { xs: "28px", md: "36px" },
              color: "#1a1a1a",
              textAlign: "center",
              mb: 3,
            }}
          >
            Why Become a Warrior?
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: 3,
            }}
          >
            {whyItems.map(({ title, body, Icon }) => (
              <Box
                key={title}
                sx={{
                  borderRadius: "18px",
                  p: 3,
                  bgcolor: "#fff",
                  border: "1px solid rgba(191, 4, 73, 0.12)",
                  boxShadow: "0 4px 24px rgba(191,4,73,0.06)",
                  textAlign: "center",
                }}
              >
                <Icon sx={{ fontSize: 40, color: "#BF0449", mb: 1.5 }} />
                <Typography sx={{ fontFamily: "Sora", fontWeight: 700, fontSize: "18px", color: "#1a1a1a", mb: 1 }}>
                  {title}
                </Typography>
                <Typography sx={{ fontFamily: "Sora", fontSize: "14px", lineHeight: 1.65, color: "#555" }}>{body}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {sectionRule}

      {/* —— Testimonials —— */}
      <Box component="section" aria-labelledby="test-heading" sx={{ px: 2, pt: { xs: 1.5, md: 2 }, pb: { xs: 3, md: 4 } }}>
        <Container maxWidth="sm">
          <Typography
            id="test-heading"
            sx={{
              fontFamily: "Sora",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#BF0449",
              textAlign: "center",
              mb: 2,
            }}
          >
            Voices from our community
          </Typography>
          <Box sx={{ position: "relative", minHeight: 140, textAlign: "center" }}>
            {testimonials.map((t, i) => (
              <Box
                key={t.quote}
                sx={{
                  position: i === testimonialIdx ? "relative" : "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  opacity: i === testimonialIdx ? 1 : 0,
                  visibility: i === testimonialIdx ? "visible" : "hidden",
                  transition: "opacity 0.6s ease",
                  pointerEvents: i === testimonialIdx ? "auto" : "none",
                }}
                aria-hidden={i !== testimonialIdx}
              >
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display, Georgia, serif",
                    fontSize: { xs: "22px", md: "26px" },
                    lineHeight: 1.45,
                    color: "#1a1a1a",
                    fontStyle: "italic",
                    mb: 2,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </Typography>
                <Typography sx={{ fontFamily: "Sora", fontSize: "14px", color: "#888" }}>
                  — {t.attribution}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
            {testimonials.map((_, i) => (
              <IconButton
                key={i}
                size="small"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setTestimonialIdx(i)}
                sx={{
                  width: 10,
                  height: 10,
                  p: 0,
                  minWidth: 0,
                  bgcolor: i === testimonialIdx ? "#BF0449" : "rgba(191,4,73,0.2)",
                  "&:hover": { bgcolor: i === testimonialIdx ? "#BF0449" : "rgba(191,4,73,0.35)" },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {sectionRule}

      {/* —— CTA: blurred video background —— */}
      <Box
        component="section"
        aria-labelledby="cta-heading"
        sx={{
          position: "relative",
          py: { xs: 8, md: 11 },
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          ref={ctaVideoRef}
          src={bgVideo}
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
            filter: "blur(9px) brightness(0.76)",
            transform: "scale(1.15)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(191,4,73,0.3) 0%, rgba(26,10,18,0.44) 100%)",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, px: 2, textAlign: "center" }}>
          <Typography
            id="cta-heading"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "28px", sm: "36px", md: "44px" },
              lineHeight: 1.2,
              color: "#fff",
              mb: 2,
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
          >
            The World Doesn&apos;t Change Alone.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { xs: "17px", md: "20px" },
              fontWeight: 500,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.95)",
              mb: 4,
              maxWidth: 520,
              mx: "auto",
            }}
          >
            It Changes When Someone Decides To Act.
          </Typography>
          <Button
            component="a"
            href={VOLUNTEER_FORM}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              fontFamily: "Sora",
              textTransform: "none",
              fontSize: "17px",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              bgcolor: "#F2B705",
              color: "#1a1a1a",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              "&:hover": { bgcolor: "#e0a904" },
            }}
          >
            Become a Warrior Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HowToHelp;
