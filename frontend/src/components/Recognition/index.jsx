import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import wwcLogo from "../../assets/navbar_logo.svg";

/**
 * Logos: Simple Icons CDN; Google favicons; external logoUrl (same as ImpactAchievements
 * institution grid for Symbiosis / Amity); local asset for Soch by WWC.
 */
/** Matches `INSTITUTIONS` in ImpactAchievements.jsx (Academic & Institutional Engagements). */
const SYMBIOSIS_LOGO_URL =
  "https://th.bing.com/th/id/OIP.K3Fn9qS0WlZS6ZOf6i5MUgHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
const AMITY_LOGO_URL =
  "https://tse2.mm.bing.net/th/id/OIP.2UBT9g6Myf4n6Cn3e-0UfQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
const BIHAR_CHHATRA_SANSAD_LOGO_URL =
  "https://tse2.mm.bing.net/th/id/OIP._mB4nL8rbKjlDSQyHsflmQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
const CONSTITUTION_CLUB_OF_INDIA_LOGO_URL =
  "https://tse3.mm.bing.net/th/id/OIP.0OQgnurjb5x6EWZzOJMsAwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3";

/** Larger mark in the marquee for these university logos (favicon / external URL). */
const INSTITUTION_LOGO_SCALE = 1.55;

const recognitions = [
  {
    name: "NBC News",
    type: "Media Feature",
    color: "#BF0449",
    simpleIcon: { slug: "nbc", color: "E21E2C" },
  },
  {
    name: "BBC News",
    type: "Media Feature",
    color: "#B80000",
    simpleIcon: { slug: "bbc", color: "BB1919" },
  },
  {
    name: "TEDx VIPS",
    type: "TEDx & Podcast",
    color: "#F28705",
    simpleIcon: { slug: "ted", color: "E62B1E" },
  },
  {
    name: "FLAME University",
    type: "Institution Partner",
    color: "#F2B705",
    faviconDomain: "flame.edu.in",
    logoScale: INSTITUTION_LOGO_SCALE,
  },
  {
    name: "Bihar Chhatra Sansad",
    type: "Felicitation",
    color: "#BF3475",
    logoUrl: BIHAR_CHHATRA_SANSAD_LOGO_URL,
  },
  {
    name: "Colgate India",
    type: "Campaign Partner",
    color: "#F2B705",
    faviconDomain: "colgate.com",
  },
  {
    name: "Better India",
    type: "Campaign Partner",
    color: "#BF0449",
    faviconDomain: "thebetterindia.com",
  },
  {
    name: "Symbiosis Noida",
    type: "Internship Partner",
    color: "#F28705",
    logoUrl: SYMBIOSIS_LOGO_URL,
    logoScale: INSTITUTION_LOGO_SCALE,
  },
  {
    name: "VIPS",
    type: "Internship Partner",
    color: "#BF3475",
    faviconDomain: "vips.edu",
  },
  {
    name: "Amity University",
    type: "Internship Partner",
    color: "#BF0449",
    logoUrl: AMITY_LOGO_URL,
    logoScale: INSTITUTION_LOGO_SCALE,
  },
  {
    name: "Constitution Club of India",
    type: "Award Venue",
    color: "#F2B705",
    logoUrl: CONSTITUTION_CLUB_OF_INDIA_LOGO_URL,
  },
  {
    name: "Soch by WWC",
    type: "Social Enterprise",
    color: "#BF3475",
    logoSrc: wwcLogo,
  },
];

const CARD_WIDTH_MD = 220;
const CARD_WIDTH_XS = 170;
const GAP = 20;

function initialsFromName(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);
}

function RecognitionLogo({
  name,
  accentColor,
  simpleIcon,
  faviconDomain,
  logoSrc,
  logoUrl,
  logoScale = 1,
}) {
  const [failed, setFailed] = useState(false);
  const s = logoScale;
  const mdW = Math.round(140 * s);
  const xsW = Math.round(110 * s);
  const mdH = Math.round(56 * s);
  const xsH = Math.round(44 * s);
  const mdImg = Math.round(44 * s);
  const xsImg = Math.round(36 * s);
  const mdInitial = Math.round(56 * s);
  const xsInitial = Math.round(44 * s);

  const url = useMemo(() => {
    if (logoSrc) return logoSrc;
    if (logoUrl) return logoUrl;
    if (simpleIcon?.slug && simpleIcon?.color) {
      const hex = String(simpleIcon.color).replace(/^#/, "");
      return `https://cdn.simpleicons.org/${simpleIcon.slug}/${hex}`;
    }
    if (faviconDomain) {
      return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
        faviconDomain
      )}&sz=128`;
    }
    return null;
  }, [logoSrc, logoUrl, simpleIcon, faviconDomain]);

  useEffect(() => {
    setFailed(false);
  }, [url]);

  if (!url || failed) {
    return (
      <Box
        sx={{
          width: { md: mdInitial, xs: xsInitial },
          height: { md: mdInitial, xs: xsInitial },
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}88)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { md: `${Math.round(18 * s)}px`, xs: `${Math.round(14 * s)}px` },
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {initialsFromName(name)}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { md: mdW, xs: xsW },
        height: { md: mdH, xs: xsH },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={url}
        alt=""
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        sx={{
          maxHeight: { md: mdImg, xs: xsImg },
          maxWidth: "100%",
          width: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

export default function Recognition() {
  const doubled = [...recognitions, ...recognitions];

  return (
    <Box sx={{ py: { md: 7, xs: 4 }, px: { md: 6, xs: 2 }, overflow: "hidden" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "48px", xs: "24px" },
          fontWeight: 700,
          color: "#373737",
          mb: 1,
        }}
      >
        Recognition &{" "}
        <span
          style={{
            fontFamily: "DM Serif Display",
            fontStyle: "italic",
            color: "#BF0449",
          }}
        >
          Collaborations
        </span>
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "16px", xs: "12px" },
          color: "#777",
          mb: 4,
        }}
      >
        Partners, media features, and institutions that stand with us.
      </Typography>

      {/* Auto-scrolling logos/cards — CSS animation for cross-device reliability */}
      <Box
        sx={{
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            width: { md: 80, xs: 40 },
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
            background: "linear-gradient(to right, #FFF2FA, transparent)",
          },
          "&::after": {
            right: 0,
            background: "linear-gradient(to left, #FFF2FA, transparent)",
          },
        }}
      >
        <Box sx={{ overflow: "hidden", py: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: `${GAP}px`,
              width: "max-content",
              animation: {
                md: `marqueeScroll ${recognitions.length * 3}s linear infinite`,
                xs: `marqueeScrollMobile ${recognitions.length * 3}s linear infinite`,
              },
              "&:hover": {
                animationPlayState: "paused",
              },
              "@keyframes marqueeScroll": {
                "0%": { transform: "translateX(0)" },
                "100%": {
                  transform: `translateX(-${recognitions.length * (CARD_WIDTH_MD + GAP)}px)`,
                },
              },
              "@keyframes marqueeScrollMobile": {
                "0%": { transform: "translateX(0)" },
                "100%": {
                  transform: `translateX(-${recognitions.length * (CARD_WIDTH_XS + GAP)}px)`,
                },
              },
            }}
          >
            {doubled.map((item, i) => (
              <Box
                key={`${item.name}-${i}`}
                sx={{
                  flexShrink: 0,
                  width: { md: CARD_WIDTH_MD, xs: CARD_WIDTH_XS },
                  background: "#fff",
                  borderRadius: "16px",
                  p: { md: 3, xs: 2 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.04)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <RecognitionLogo
                  name={item.name}
                  accentColor={item.color}
                  simpleIcon={item.simpleIcon}
                  faviconDomain={item.faviconDomain}
                  logoSrc={item.logoSrc}
                  logoUrl={item.logoUrl}
                  logoScale={item.logoScale}
                />

                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "14px", xs: "12px" },
                    fontWeight: 700,
                    color: "#333",
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "11px", xs: "10px" },
                    fontWeight: 500,
                    color: item.color,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {item.type}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
