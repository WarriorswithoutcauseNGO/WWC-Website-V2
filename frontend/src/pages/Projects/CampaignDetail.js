import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";
import { getCampaignBySlug } from "../../data/driveProjects";

export default function CampaignDetail() {
  const { slug } = useParams();
  const campaign = slug ? getCampaignBySlug(slug) : null;

  if (!campaign) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Box sx={{ bgcolor: "#FFFBFC", minHeight: "100vh", pb: 8 }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: 280, sm: 380 },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={campaign.image}
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,10,12,0.45) 0%, rgba(15,10,12,0.75) 100%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            p: { xs: 2.5, md: 4 },
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          <Typography
            component="nav"
            sx={{
              fontFamily: "Sora",
              fontSize: "12px",
              color: "rgba(255,255,255,0.75)",
              mb: 1.5,
              "& a": { color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } },
            }}
          >
            <RouterLink to="/projects">Projects</RouterLink>
            {" / "}
            <span>{campaign.headline}</span>
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "32px", sm: "44px" },
              color: "#fff",
              lineHeight: 1.15,
              textShadow: "0 2px 16px rgba(0,0,0,0.35)",
            }}
          >
            {campaign.headline}
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="md" sx={{ pt: { xs: 4, md: 5 }, px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
            fontFamily: "Sora",
            fontSize: "14px",
            color: "#444",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", mb: 0.5 }}>
              Location
            </Typography>
            {campaign.location}
          </Box>
          <Box sx={{ width: "1px", bgcolor: "rgba(0,0,0,0.12)", alignSelf: "stretch", display: { xs: "none", sm: "block" } }} />
          <Box>
            <Typography sx={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", mb: 0.5 }}>
              Timeline
            </Typography>
            {campaign.dateLabel}
          </Box>
          <Box sx={{ width: "1px", bgcolor: "rgba(0,0,0,0.12)", alignSelf: "stretch", display: { xs: "none", sm: "block" } }} />
          <Box>
            <Typography sx={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", mb: 0.5 }}>
              Programme
            </Typography>
            {campaign.driveType}
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#BF0449",
            mb: 2,
          }}
        >
          Impact at a glance
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 2,
            mb: 5,
          }}
        >
          {campaign.impactMetrics.map((m) => (
            <Box
              key={m.label}
              sx={{
                borderRadius: "12px",
                border: "1px solid rgba(191, 4, 73, 0.15)",
                bgcolor: "#fff",
                p: 2,
                boxShadow: "0 4px 18px rgba(191,4,73,0.06)",
              }}
            >
              <Typography sx={{ fontFamily: "Sora", fontSize: "11px", color: "#888", mb: 0.75 }}>{m.label}</Typography>
              <Typography sx={{ fontFamily: "Sora", fontWeight: 700, fontSize: "15px", color: "#1a1a1a", lineHeight: 1.4 }}>
                {m.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: { xs: "26px", md: "30px" },
            color: "#1a1a1a",
            mb: 2,
          }}
        >
          About this campaign
        </Typography>
        {campaign.fullParagraphs.map((para, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: "Sora",
              fontSize: "16px",
              lineHeight: 1.85,
              color: "#333",
              mb: 2.5,
            }}
          >
            {para}
          </Typography>
        ))}

        <Typography
          sx={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: { xs: "22px", md: "26px" },
            color: "#1a1a1a",
            mt: 5,
            mb: 2,
          }}
        >
          Gallery
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 1.5,
          }}
        >
          {campaign.gallery.map((src, idx) => (
            <Box
              key={idx}
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                aspectRatio: "1",
                bgcolor: "rgba(191,4,73,0.06)",
                border: "1px solid rgba(191,4,73,0.1)",
              }}
            >
              <Box
                component="img"
                src={src}
                alt=""
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
          ))}
        </Box>

        <Button
          component={RouterLink}
          to="/projects"
          onClick={() => window.scrollTo(0, 0)}
          sx={{
            mt: 4,
            textTransform: "none",
            fontFamily: "Sora",
            fontWeight: 600,
            color: "#BF0449",
          }}
        >
          ← All projects
        </Button>
        <Button
          component={RouterLink}
          to="/donate"
          onClick={() => window.scrollTo(0, 0)}
          variant="contained"
          sx={{
            mt: 2,
            ml: { xs: 0, sm: 2 },
            display: { xs: "block", sm: "inline-flex" },
            textTransform: "none",
            fontFamily: "Sora",
            bgcolor: "#BF0449",
            "&:hover": { bgcolor: "#a0033d" },
          }}
        >
          Support this work
        </Button>
      </Container>
    </Box>
  );
}
