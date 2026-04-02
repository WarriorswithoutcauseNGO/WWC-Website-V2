import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import india_map from "../../assets/india_map.svg";
import india_map_phn from "../../assets/india_map_phn.svg";
import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_2 from "../../assets/our_drives_2.png";
import our_drives_3 from "../../assets/our_drives_3.png";
import our_drives_4 from "../../assets/our_drives_4.png";
import hyderabad from "../../assets/hyderabad.png";

const drivePhotos = [our_drives_1, our_drives_2, our_drives_3, our_drives_4, hyderabad];

const stats = [
  { target: 700, suffix: "K +", label: "Individuals empowered", gradient: "linear-gradient(135deg, #43A047 0%, #66BB6A 100%)" },
  { target: 3000, suffix: "+", label: "Volunteers engaged", gradient: "linear-gradient(135deg, #00897B 0%, #26A69A 100%)" },
  { target: 200, suffix: "K +", label: "In salaries provided to slum women", gradient: "linear-gradient(135deg, #E91E63 0%, #F06292 100%)" },
  { target: 300, suffix: "+", label: "Collaborations done", gradient: "linear-gradient(135deg, #FF6F00 0%, #FFA726 100%)" },
  { target: 1000000, suffix: "+", label: "Total funds raised", gradient: "linear-gradient(135deg, #5C6BC0 0%, #7986CB 100%)" },
];

const drives = [
  {
    head: "Beat the heat campaign",
    text: 'We distributed <b>1200 umbrellas</b> in the extreme climate all over India collaborating with Colgate India and Better India.',
  },
  {
    head: "Project Vidyaksha",
    text: 'We teach over <b>500 students in 10+ slums</b> essential subjects and skills, and conduct workshops on financial literacy, self-defense, and human rights.',
  },
  {
    head: "Project Swasthya Raksha",
    text: 'We enhance health by providing healthcare access, sanitary pads, biodegradable washrooms, and menstrual health advocacy, with <b>over 10 lakh pads distributed</b> and <b>150+ drives</b> conducted.',
  },
  {
    head: "Project Rozgar",
    text: 'Our initiative teaches artisanal skills like knitting and embroidery to empower adults and youth, especially women in slums, with the <b>skills for financial independence</b> and <b>sustainable income.</b>',
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

function StatCard({ stat, startAnimation, hovered, onEnter, onLeave }) {
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
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-6px) scale(1.03)" : "none",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.18)"
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
  const [startAnimation, setStartAnimation] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [drivesOpen, setDrivesOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setPhotoIdx((prev) => (prev + 1) % drivePhotos.length);
    }, 3500);
    return () => clearInterval(iv);
  }, []);

  const scrollToDrives = useCallback(() => {
    setDrivesOpen((prev) => !prev);
  }, []);

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
          flexDirection: { md: "row", xs: "column-reverse" },
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
            <strong style={{ color: "#43A047" }}>
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
                onEnter={() => setHoveredStat(i)}
                onLeave={() => setHoveredStat(null)}
              />
            ))}
          </Box>

          {/* Row 2: two stat cards + rotating photo */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, flex: 1 }}>
              {stats.slice(2, 4).map((s, i) => (
                <StatCard
                  key={i + 2}
                  stat={s}
                  startAnimation={startAnimation}
                  hovered={hoveredStat === i + 2}
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
                minHeight: { md: 240, xs: 180 },
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
            onEnter={() => setHoveredStat(4)}
            onLeave={() => setHoveredStat(null)}
          />
        </Box>
      </Box>

      {/* Our Drives in Action button */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button
          onClick={scrollToDrives}
          sx={{
            background: "linear-gradient(135deg, #E91E63 0%, #FF6F00 100%)",
            color: "#fff",
            fontFamily: "Sora",
            fontSize: { md: "18px", xs: "15px" },
            fontWeight: 600,
            borderRadius: "37px",
            px: 5,
            py: 1.5,
            textTransform: "uppercase",
            letterSpacing: 1,
            boxShadow: "0 4px 16px rgba(233,30,99,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #C2185B 0%, #E65100 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(233,30,99,0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {drivesOpen ? "Hide Drives" : "Our Drives in Action"}
        </Button>
      </Box>

      {/* Expandable Drives Panel */}
      <Box
        sx={{
          maxHeight: drivesOpen ? "800px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.6s ease-in-out",
          mt: drivesOpen ? 4 : 0,
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, #E91E63 0%, #F06292 50%, #FF6F00 100%)",
            borderRadius: "20px",
            p: { md: 5, xs: 3 },
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: { md: 5, xs: 3 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            {drives.map((drive, idx) => (
              <Box
                key={idx}
                sx={{
                  mb: idx < drives.length - 1 ? 3 : 0,
                  pb: idx < drives.length - 1 ? 3 : 0,
                  borderBottom:
                    idx < drives.length - 1
                      ? "1px solid rgba(255,255,255,0.3)"
                      : "none",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "20px", xs: "17px" },
                    fontWeight: 700,
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  {drive.head}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "15px", xs: "13px" },
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.6,
                    "& b": { fontWeight: 700, color: "#fff" },
                  }}
                  dangerouslySetInnerHTML={{ __html: drive.text }}
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "16px",
              overflow: "hidden",
              maxHeight: { md: 400, xs: 250 },
            }}
          >
            <Box
              component="img"
              src={drivePhotos[photoIdx]}
              alt="Drive in action"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
