import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import india_map from "../../assets/india_map.svg";
import india_map_phn from "../../assets/india_map_phn.svg";
import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_2 from "../../assets/our_drives_2.png";
import our_drives_3 from "../../assets/our_drives_3.png";
import our_drives_4 from "../../assets/our_drives_4.png";
import hyderabad from "../../assets/hyderabad.png";

const drivePhotos = [our_drives_1, our_drives_2, our_drives_3, our_drives_4, hyderabad];

const stats = [
  { target: 700, suffix: "K +", label: "Individuals empowered", gradient: "linear-gradient(135deg, #BF0449 0%, #BF3475 100%)" },
  { target: 3000, suffix: "+", label: "Volunteers engaged", gradient: "linear-gradient(135deg, #F28705 0%, #F2B705 100%)" },
  { target: 200, suffix: "K +", label: "In salaries provided to slum women", gradient: "linear-gradient(135deg, #BF3475 0%, #BF0449 100%)" },
  { target: 300, suffix: "+", label: "Collaborations done", gradient: "linear-gradient(135deg, #F2B705 0%, #F28705 100%)" },
  { target: 1000000, suffix: "+", label: "Total funds raised", gradient: "linear-gradient(135deg, #BF0449 0%, #F28705 100%)" },
];

const drives = [
  {
    head: "Beat the Heat Campaign",
    text: 'In severe heat waves across Delhi, WWC organised the Beat the Heat campaign to help vulnerable populations. More than <b>1,200 umbrellas, caps and slippers</b> were distributed to street sellers and daily-wage earners. The initiative hosted <b>20+ sharbat-distribution events</b> and installed water bowls for birds and stray animals — delivering relief, hydration and compassion in extreme summer.',
    img: our_drives_1,
    link: "/aboutus",
  },
  {
    head: "Project Vidyaksha",
    text: 'We teach over <b>500 students in 10+ slums</b> essential subjects and skills, and conduct workshops on financial literacy, self-defense, and human rights. Our aim is to make quality education a reality for every child — supporting schools, offering scholarships, and nurturing young minds to become future changemakers.',
    img: our_drives_2,
    link: "/aboutus",
  },
  {
    head: "Project Swasthya Raksha",
    text: 'WWC organised sensitisation campaigns on cervical cancer and menstrual health among underserved populations across Delhi, especially slums. At Menstrual Hygiene Day, sanitary products were distributed to <b>over 500 women</b>. With <b>over 10 lakh pads distributed</b> and <b>150+ drives</b> conducted, we are building healthier, more informed communities.',
    img: our_drives_3,
    link: "/aboutus",
  },
  {
    head: "Project Rozgar",
    text: 'Our initiative teaches artisanal skills — knitting, embroidery, crochet — to empower adults and youth, especially <b>women in slums</b>, with the skills for financial independence and sustainable income. Through SOCH, our social enterprise, these creations reach wider audiences, turning talent into livelihood.',
    img: our_drives_4,
    link: "/beherhero",
  },
];

const AnimatedNumber = ({ target, startAnimation }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const driftRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) return;

    const initial = animate(count, target, { duration: 1.4, ease: "easeOut" });

    const driftDelay = setTimeout(() => {
      const tick = () => {
        const cur = count.get();
        const bump = Math.max(1, Math.floor(target * 0.0003));
        animate(count, cur + bump, { duration: 2, ease: "linear" });
      };
      driftRef.current = setInterval(tick, 3000);
    }, 1600);

    return () => {
      initial.stop();
      clearTimeout(driftDelay);
      if (driftRef.current) clearInterval(driftRef.current);
    };
  }, [startAnimation, target, count]);

  return <motion.span>{rounded}</motion.span>;
};

function StatCard({ stat, startAnimation, hovered, featured, onEnter, onLeave }) {
  const lifted = hovered || featured;
  return (
    <Box
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      sx={{
        textAlign: "center",
        background: stat.gradient,
        borderRadius: "16px",
        p: { md: 3, xs: 1.5 },
        flex: 1,
        cursor: "default",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        transform: lifted ? "translateY(-6px) scale(1.05)" : "none",
        boxShadow: lifted
          ? "0 10px 30px rgba(0,0,0,0.22)"
          : "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: { md: "44px", xs: "28px" },
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.2,
        }}
      >
        <AnimatedNumber target={stat.target} startAnimation={startAnimation} />
        {stat.suffix}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: { md: "14px", xs: "12px" },
          fontWeight: 400,
          color: "rgba(255,255,255,0.9)",
          mt: 0.5,
        }}
      >
        {stat.label}
      </Typography>
    </Box>
  );
}

export default function Impact() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [startAnimation, setStartAnimation] = useState(false);
  const [inView, setInView] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [featuredStat, setFeaturedStat] = useState(0);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [drivesOpen, setDrivesOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setStartAnimation(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const iv = setInterval(() => {
      setPhotoIdx((prev) => (prev + 1) % drivePhotos.length);
    }, 2000);
    return () => clearInterval(iv);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const iv = setInterval(() => {
      setFeaturedStat((prev) => (prev + 1) % stats.length);
    }, 2500);
    return () => clearInterval(iv);
  }, [inView]);

  const openDrives = useCallback(() => setDrivesOpen(true), []);
  const closeDrives = useCallback(() => setDrivesOpen(false), []);
  const toggleDrives = useCallback(() => setDrivesOpen((p) => !p), []);

  return (
    <Box
      ref={sectionRef}
      sx={{ mb: 7, mt: 4, py: 5, px: { md: 6, xs: 2 } }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "48px", xs: "28px" },
          fontWeight: 700,
          color: "#373737",
          mb: 4,
        }}
      >
        Our impact in a glance
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          gap: { md: 6, xs: 3 },
        }}
      >
        {/* Left: Map */}
        <Box
          sx={{
            textAlign: "center",
            width: { md: "42%", xs: "100%" },
          }}
        >
          <img
            src={isMobile ? india_map_phn : india_map}
            alt="Warriors Without Cause impact map across India"
            style={{ width: "100%", maxHeight: 460, objectFit: "contain" }}
          />
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { md: "15px", xs: "13px" },
              color: "#555",
              mt: 2,
              lineHeight: 1.6,
            }}
          >
            With an army of over{" "}
            <strong style={{ color: "#BF0449" }}>
              <AnimatedNumber target={350} startAnimation={startAnimation} /> warriors operating in multiple hubs,
            </strong>{" "}
            we are breaking down barriers and leaving a legacy of compassion and impact.
          </Typography>
        </Box>

        {/* Right: Stats + Photo */}
        <Box sx={{ flex: 1, width: { xs: "100%" } }}>
          {/* Row 1: two stat cards */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
            {stats.slice(0, 2).map((s, i) => (
              <StatCard
                key={i}
                stat={s}
                startAnimation={startAnimation}
                hovered={hoveredStat === i}
                featured={hoveredStat === null && featuredStat === i}
                onEnter={() => setHoveredStat(i)}
                onLeave={() => setHoveredStat(null)}
              />
            ))}
          </Box>

          {/* Row 2: two stat cards + rotating photo */}
          <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, gap: 1.5, mb: 1.5 }}>
            <Box sx={{ display: "flex", flexDirection: { md: "column", xs: "row" }, gap: 1.5, flex: 1 }}>
              {stats.slice(2, 4).map((s, i) => (
                <StatCard
                  key={i + 2}
                  stat={s}
                  startAnimation={startAnimation}
                  hovered={hoveredStat === i + 2}
                  featured={hoveredStat === null && featuredStat === i + 2}
                  onEnter={() => setHoveredStat(i + 2)}
                  onLeave={() => setHoveredStat(null)}
                />
              ))}
            </Box>
            <Box
              sx={{
                flex: 1,
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                minHeight: { md: 240, xs: 200 },
              }}
            >
              {drivePhotos.map((src, i) => (
                <Box
                  key={i}
                  component="img"
                  src={src}
                  alt={`Drive photo ${i + 1}`}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: photoIdx === i ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Row 3: full-width stat */}
          <StatCard
            stat={stats[4]}
            startAnimation={startAnimation}
            hovered={hoveredStat === 4}
            featured={hoveredStat === null && featuredStat === 4}
            onEnter={() => setHoveredStat(4)}
            onLeave={() => setHoveredStat(null)}
          />
        </Box>
      </Box>

      {/* Our Drives in Action — opens on hover */}
      <Box
        onMouseEnter={isMobile ? undefined : openDrives}
        onMouseLeave={isMobile ? undefined : closeDrives}
        sx={{ mt: 5 }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={isMobile ? toggleDrives : undefined}
            sx={{
              background: "linear-gradient(135deg, #BF0449 0%, #F28705 100%)",
              color: "#fff",
              fontFamily: "Sora",
              fontSize: { md: "18px", xs: "15px" },
              fontWeight: 600,
              borderRadius: "37px",
              px: 5,
              py: 1.5,
              textTransform: "uppercase",
              letterSpacing: 1,
              boxShadow: "0 4px 16px rgba(191,4,73,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #9C0339 0%, #D47504 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(191,4,73,0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Our Drives in Action
          </Button>
        </Box>

        {/* Expandable Drives Panel */}
        <Box
          sx={{
            maxHeight: drivesOpen ? "3000px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.6s ease-in-out",
            mt: drivesOpen ? 4 : 0,
          }}
        >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {drives.map((drive, idx) => (
            <Box
              key={idx}
              sx={{
                background: stats[idx]?.gradient || "linear-gradient(135deg, #BF0449 0%, #BF3475 100%)",
                borderRadius: "20px",
                p: { md: 4, xs: 2.5 },
                display: "flex",
                flexDirection: { md: idx % 2 === 0 ? "row" : "row-reverse", xs: "column" },
                gap: { md: 4, xs: 2 },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderRadius: "16px",
                  overflow: "hidden",
                  minHeight: { md: 200, xs: 180 },
                  maxHeight: { md: 240, xs: 200 },
                }}
              >
                <Box
                  component="img"
                  src={drive.img}
                  alt={drive.head}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />
              </Box>
              <Box sx={{ flex: 1.3 }}>
                <Typography
                  onClick={() => { navigate(drive.link); window.scrollTo(0, 0); }}
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "22px", xs: "18px" },
                    fontWeight: 700,
                    color: "#fff",
                    mb: 1,
                    cursor: "pointer",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    textDecorationColor: "rgba(255,255,255,0.5)",
                    "&:hover": { textDecorationColor: "#fff" },
                  }}
                >
                  {drive.head}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "15px", xs: "14px" },
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.7,
                    "& b": { fontWeight: 700, color: "#fff" },
                  }}
                  dangerouslySetInnerHTML={{ __html: drive.text }}
                />
              </Box>
            </Box>
          ))}
        </Box>
        </Box>
      </Box>
    </Box>
  );
}
