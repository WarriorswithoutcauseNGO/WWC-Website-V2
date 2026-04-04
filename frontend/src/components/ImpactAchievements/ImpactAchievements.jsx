import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_2 from "../../assets/our_drives_2.png";
import our_drives_3 from "../../assets/our_drives_3.png";
import bf_img_1 from "../../assets/bf_img_1.png";
import hyderabad from "../../assets/hyderabad.png";

/**
 * Media & institution logos loaded from public CDNs (Wikimedia / official SVG hosts).
 * If a URL fails, LogoTile shows the outlet name.
 */
/* Logos via Wikimedia Commons / Wikipedia (stable CDN). Missing / blocked URLs fall back to name tile. */
const MEDIA_OUTLETS = [
  {
    name: "India News",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/India_TV_logo.png",
  },
  {
    name: "Zee News",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Zee_News_logo.png",
  },
  {
    name: "The Times of India",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Times_of_India_Logo.svg",
  },
  {
    name: "Hindustan Times",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Hindustan_Times_logo.svg",
  },
  {
    name: "The Better India",
    logoUrl: null,
  },
  {
    name: "NBC",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/NBC_logo.svg",
  },
];

const INSTITUTIONS = [
  {
    name: "Symbiosis International University",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/31/Symbiosis_International_University_logo.png",
  },
  {
    name: "IIT Delhi",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/12/IIT_Delhi_logo.svg",
  },
  {
    name: "FLAME University",
    logoUrl: null,
  },
  {
    name: "University of Delhi",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/University_of_Delhi_logo.svg",
  },
  {
    name: "O.P. Jindal Global University",
    logoUrl: null,
  },
  {
    name: "Amity University",
    logoUrl: null,
  },
];

const ACADEMIC_SLIDES = [
  {
    image: our_drives_2,
    institution: "Symbiosis International University",
    quote:
      "Interning with WWC showed me how classroom ideas turn into real community impact. The mentorship changed how I think about leadership.",
    student: "Student intern, Symbiosis Noida",
  },
  {
    image: bf_img_1,
    institution: "IIT Delhi",
    quote:
      "Their session on social responsibility resonated with so many of us — it was honest, practical, and deeply motivating.",
    student: "Student representative",
  },
  {
    image: our_drives_3,
    institution: "University of Delhi",
    quote:
      "WWC’s workshops made us question what ‘helping’ really means — with empathy first, always. We left wanting to volunteer.",
    student: "DU student participant",
  },
  {
    image: hyderabad,
    institution: "Amity University",
    quote:
      "Collaborating on drives and awareness campaigns helped me build confidence and friendships rooted in service.",
    student: "Amity volunteer",
  },
];

function LogoTile({ name, logoUrl, height = 44 }) {
  const [broken, setBroken] = useState(false);
  if (!logoUrl || broken) {
    return (
      <Box
        sx={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          borderRadius: 2,
          bgcolor: "rgba(191,4,73,0.06)",
          border: "1px solid rgba(191,4,73,0.15)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { xs: "12px", sm: "13px" },
            fontWeight: 600,
            color: "#373737",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {name}
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        borderRadius: 2,
        bgcolor: "#fff",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      <Box
        component="img"
        src={logoUrl}
        alt={name}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setBroken(true)}
        sx={{
          maxHeight: height,
          maxWidth: "100%",
          width: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

export default function ImpactAchievements() {
  return (
    <Box
      id="impact-achievements"
      component="section"
      aria-label="Our impact and achievements"
      sx={{
        py: { md: 8, xs: 5 },
        px: { md: 6, xs: 2 },
        background: "linear-gradient(180deg, #FFF2FA 0%, #FFE9F1 100%)",
      }}
    >
      {/* Hero headline */}
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "40px", xs: "24px" },
          fontWeight: 700,
          color: "#373737",
          lineHeight: 1.25,
          mb: 1,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        Recognised voices.{" "}
        <Box component="span" sx={{ color: "#BF0449" }}>
          Trusted impact.
        </Box>{" "}
        Inspiring change.
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "18px", xs: "14px" },
          color: "#666",
          mb: { md: 6, xs: 4 },
        }}
      >
        Our Impact and Achievements
      </Typography>

      {/* Media Presence */}
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: { md: "28px", xs: "20px" },
          fontWeight: 700,
          color: "#373737",
          textAlign: "center",
          mb: 0.5,
        }}
      >
        Media Presence
      </Typography>
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: { md: "15px", xs: "13px" },
          color: "#777",
          textAlign: "center",
          mb: 3,
        }}
      >
        Stories and features that amplified our mission.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
          },
          gap: 2,
          maxWidth: 1100,
          mx: "auto",
          mb: { md: 7, xs: 5 },
        }}
      >
        {MEDIA_OUTLETS.map((m) => (
          <LogoTile key={m.name} name={m.name} logoUrl={m.logoUrl} height={40} />
        ))}
      </Box>

      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          height: 1,
          bgcolor: "rgba(191,4,73,0.2)",
          mb: { md: 7, xs: 5 },
        }}
      />

      {/* Awards & Honours */}
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: { md: "28px", xs: "20px" },
          fontWeight: 700,
          color: "#373737",
          textAlign: "center",
          mb: 3,
        }}
      >
        Awards &amp; Honours
      </Typography>
      <Card
        elevation={0}
        sx={{
          maxWidth: 920,
          mx: "auto",
          borderRadius: "20px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #BF0449 0%, #BF3475 45%, #F28705 100%)",
          boxShadow: "0 16px 48px rgba(191,4,73,0.25)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
          }}
        >
          <Box
            component="img"
            src={our_drives_1}
            alt="Award ceremony and community recognition"
            sx={{
              width: { xs: "100%", md: "48%" },
              minHeight: { xs: 220, md: 320 },
              objectFit: "cover",
            }}
          />
          <CardContent
            sx={{
              flex: 1,
              py: { xs: 3, md: 4 },
              px: { xs: 3, md: 4 },
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { xs: "11px", sm: "12px" },
                fontWeight: 600,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                opacity: 0.9,
                mb: 1,
              }}
            >
              Awarded by
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { xs: "22px", md: "28px" },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Bihar Sansad Parishad
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box>
                <Typography sx={{ fontSize: 12, opacity: 0.85, fontFamily: "Sora" }}>
                  Year
                </Typography>
                <Typography sx={{ fontFamily: "Sora", fontSize: 16, fontWeight: 600 }}>
                  2024
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, opacity: 0.85, fontFamily: "Sora" }}>
                  Location
                </Typography>
                <Typography sx={{ fontFamily: "Sora", fontSize: 16, fontWeight: 600 }}>
                  Constitution Club of India, New Delhi
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { xs: "13px", md: "14px" },
                lineHeight: 1.65,
                mt: 2,
                opacity: 0.95,
              }}
            >
              Recognised at Bihar Utsav for WWC&apos;s contribution to society — a moment
              that honours our volunteers and the communities we serve.
            </Typography>
          </CardContent>
        </Box>
      </Card>

      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          height: 1,
          bgcolor: "rgba(191,4,73,0.2)",
          my: { md: 7, xs: 5 },
        }}
      />

      {/* Academic & Institutional Engagements */}
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: { md: "28px", xs: "20px" },
          fontWeight: 700,
          color: "#373737",
          textAlign: "center",
          mb: 0.5,
        }}
      >
        Academic &amp; Institutional Engagements
      </Typography>
      <Typography
        sx={{
          fontFamily: "DM Serif Display",
          fontStyle: "italic",
          fontSize: { md: "22px", xs: "17px" },
          color: "#BF0449",
          textAlign: "center",
          mb: 3,
        }}
      >
        Inspiring the Leaders of Tomorrow
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
          gap: 2,
          maxWidth: 1100,
          mx: "auto",
          mb: 4,
        }}
      >
        {INSTITUTIONS.map((i) => (
          <LogoTile key={i.name} name={i.name} logoUrl={i.logoUrl} height={36} />
        ))}
      </Box>

      <Box sx={{ position: "relative", maxWidth: 900, mx: "auto" }}>
        <IconButton
          className="impact-swiper-prev"
          aria-label="Previous slide"
          sx={{
            position: "absolute",
            left: { xs: -8, md: -48 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "#fff",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          className="impact-swiper-next"
          aria-label="Next slide"
          sx={{
            position: "absolute",
            right: { xs: -8, md: -48 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "#fff",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          <ChevronRight />
        </IconButton>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".impact-swiper-prev",
            nextEl: ".impact-swiper-next",
          }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          style={{ paddingBottom: 40 }}
        >
          {ACADEMIC_SLIDES.map((slide) => (
            <SwiperSlide key={slide.institution}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(191,4,73,0.12)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.institution}
                  sx={{
                    width: "100%",
                    height: { xs: 200, sm: 260 },
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ py: 3, px: { xs: 2.5, md: 4 } }}>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#BF0449",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      mb: 1,
                    }}
                  >
                    {slide.institution}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: { xs: "15px", md: "17px" },
                      fontStyle: "italic",
                      color: "#444",
                      lineHeight: 1.65,
                      mb: 2,
                    }}
                  >
                    &ldquo;{slide.quote}&rdquo;
                  </Typography>
                  <Typography sx={{ fontFamily: "Sora", fontSize: 13, color: "#888" }}>
                    — {slide.student}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
