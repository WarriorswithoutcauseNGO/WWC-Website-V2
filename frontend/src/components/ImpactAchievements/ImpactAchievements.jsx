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
      "https://w7.pngwing.com/pngs/327/169/png-transparent-india-news-television-channel-itv-network-india-television-logo-india.png" ,
  },
  {
    name: "Zee News",
    logoUrl:
      "https://th.bing.com/th/id/OIP.Zlcp6QebDgWD8x4b0yOxOQHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "The Times of India",
    logoUrl:
      "https://th.bing.com/th/id/OIP.3zYR_824ozf4i2-W-srPDAAAAA?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Hindustan Times",
    logoUrl:
      "https://th.bing.com/th/id/OIP.5_vmpVb0iLdaKg5VvZ5ztQHaA7?w=371&h=53&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "The Better India",
    logoUrl: "https://cdn.grabon.in/gograbon/images/merchant/1620886996063/the-better-india-logo.jpg",
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
      "https://th.bing.com/th/id/OIP.K3Fn9qS0WlZS6ZOf6i5MUgHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "IIT Delhi",
    logoUrl:
      "https://i0.wp.com/apuzz.com/wp-content/uploads/2020/03/IIT-Delhi-logo.png",
  },
  {
    name: "FLAME University",
    logoUrl: "https://th.bing.com/th/id/OIP.ByPgJYsk2OzUGd5e8EbLCAAAAA?w=190&h=141&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "University of Delhi",
    logoUrl:
      "https://th.bing.com/th/id/OIP.XP9O6AidfaTcao2u70zknQHaD4?w=315&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "O.P. Jindal Global University",
    logoUrl: "data:image/webp;base64,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",
  },
  {
    name: "Amity University",
    logoUrl: "https://tse2.mm.bing.net/th/id/OIP.2UBT9g6Myf4n6Cn3e-0UfQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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

/** Media logos we keep at normal scale (no zoom). */
const LOGO_NO_ZOOM = new Set(["NBC", "Hindustan Times"]);

/** Beyond max — The Better India only. */
const LOGO_ULTRA_ZOOM = new Set(["The Better India"]);
const LOGO_SCALE_ULTRA = 3.56;

/** Slightly stronger than extra — India News only. */
const LOGO_INDIA_NEWS_ZOOM = new Set(["India News"]);
const LOGO_SCALE_INDIA_NEWS = 2.32;

/** Medium-strong zoom — Zee News. */
const LOGO_EXTRA_ZOOM = new Set(["Zee News"]);
const LOGO_SCALE_DEFAULT = 1.82;
const LOGO_SCALE_EXTRA = 2.22;

/** Symbiosis — strongest institution zoom. */
const INSTITUTION_ZOOM_SYMBIOSIS = new Set(["Symbiosis International University"]);
const LOGO_SCALE_INSTITUTION_SYMBIOSIS = 3.18;

/** FLAME — high institution zoom. */
const INSTITUTION_ZOOM_HIGH = new Set(["FLAME University"]);
const LOGO_SCALE_INSTITUTION_ZOOM_HIGH = 2.78;

/** Amity — medium institution zoom. */
const INSTITUTION_ZOOM_IN = new Set(["Amity University"]);
const LOGO_SCALE_INSTITUTION_ZOOM = 2.32;

function LogoTile({ name, logoUrl, height = 44, zoomLogo = true, zoomScale = LOGO_SCALE_DEFAULT }) {
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
        sx={{
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
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
            transform: zoomLogo ? `scale(${zoomScale})` : "none",
            transformOrigin: "center center",
          }}
        />
      </Box>
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
          <LogoTile
            key={m.name}
            name={m.name}
            logoUrl={m.logoUrl}
            height={40}
            zoomLogo={!LOGO_NO_ZOOM.has(m.name)}
            zoomScale={
              LOGO_ULTRA_ZOOM.has(m.name)
                ? LOGO_SCALE_ULTRA
                : LOGO_INDIA_NEWS_ZOOM.has(m.name)
                  ? LOGO_SCALE_INDIA_NEWS
                  : LOGO_EXTRA_ZOOM.has(m.name)
                    ? LOGO_SCALE_EXTRA
                    : LOGO_SCALE_DEFAULT
            }
          />
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
            sx={{
              width: { xs: "100%", md: "48%" },
              minHeight: { xs: 220, md: 320 },
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={our_drives_1}
              alt="Award ceremony and community recognition"
              sx={{
                width: "100%",
                height: "100%",
                minHeight: { xs: 220, md: 320 },
                objectFit: "cover",
                transform: "scale(1.08)",
                transformOrigin: "center center",
              }}
            />
          </Box>
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
          <LogoTile
            key={i.name}
            name={i.name}
            logoUrl={i.logoUrl}
            height={36}
            zoomScale={
              INSTITUTION_ZOOM_SYMBIOSIS.has(i.name)
                ? LOGO_SCALE_INSTITUTION_SYMBIOSIS
                : INSTITUTION_ZOOM_HIGH.has(i.name)
                  ? LOGO_SCALE_INSTITUTION_ZOOM_HIGH
                  : INSTITUTION_ZOOM_IN.has(i.name)
                    ? LOGO_SCALE_INSTITUTION_ZOOM
                    : LOGO_SCALE_DEFAULT
            }
          />
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
                <Box sx={{ overflow: "hidden", height: { xs: 200, sm: 260 } }}>
                  <Box
                    component="img"
                    src={slide.image}
                    alt={slide.institution}
                    sx={{
                      width: "100%",
                      height: { xs: 200, sm: 260 },
                      objectFit: "cover",
                      transform: "scale(1.1)",
                      transformOrigin: "center center",
                    }}
                  />
                </Box>
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
