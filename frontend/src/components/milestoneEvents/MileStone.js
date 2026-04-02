import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Right from "@mui/icons-material/East";
import Left from "@mui/icons-material/West";
import CloseIcon from "@mui/icons-material/Close";

import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_2 from "../../assets/our_drives_2.png";
import our_drives_3 from "../../assets/our_drives_3.png";
import our_drives_4 from "../../assets/our_drives_4.png";
import bf_img_1 from "../../assets/bf_img_1.png";
import bf_img_2 from "../../assets/bf_img_2.png";
import bf_img_3 from "../../assets/bf_img_3.png";
import bf_img_4 from "../../assets/bf_img_4.png";
import bf_img_5 from "../../assets/bf_img_5.png";
import hyderabad from "../../assets/hyderabad.png";
import carasol1 from "../../assets/carasol1.jpg";

const milestones = [
  {
    id: 1,
    title: "BEAT THE HEAT CAMPAIGN",
    summary: "Distributed 1,000+ umbrellas, caps & slippers during Delhi heatwaves.",
    blog: "In severe heat waves in Delhi, WWC organized the Beat the Heat campaign to help needy populations. More than 1,000 umbrellas, caps, and slippers were distributed to street sellers and daily wage earners. The event involved hosting 20+ sharbat distribution events and installing water bowls for birds and stray animals to provide relief, hydration, and compassion in extreme summer.",
    img: our_drives_1,
    gradient: "linear-gradient(135deg, #43A047, #66BB6A)",
  },
  {
    id: 2,
    title: "POSH AWARENESS SESSIONS",
    summary: "Inclusive workplace safety training across organizations.",
    blog: "WWC has created inclusive awareness programs on POSH (Prevention of Sexual Harassment) in various organizations. These sessions focused on informing employees about workplace safety, their legal rights, and means to communicate grievances. Through spreading awareness and personal responsibility, WWC helped construct a safer, more open, and morally upright professional space among persons in all fields.",
    img: bf_img_2,
    gradient: "linear-gradient(135deg, #E91E63, #F06292)",
  },
  {
    id: 3,
    title: "CLEANLINESS DRIVES",
    summary: "Restored public spaces at Sunder Vans, Yamuna Ghat & Dwarka Forest.",
    blog: "WWC organized powerful cleanliness campaigns at Sunder Vans, Yamuna Ghat, and Dwarka Forest. These programs aimed at waste collection, environmental conservation, and community participation. Volunteers worked proactively on restoring public spaces, incorporating sustainable practices, and creating awareness of civic responsibility, enhancing the need for a clean and green environment.",
    img: our_drives_3,
    gradient: "linear-gradient(135deg, #FF6F00, #FFA726)",
  },
  {
    id: 4,
    title: "GLOBAL RECOGNITION",
    summary: "Featured on NBC News and TEDx VIPS podcast.",
    blog: "WWC achieved international fame through coverage on NBC News, spreading its mission to the international market. The organization also shared its motivational experience in an Indraprastha University TEDx VIPS podcast. Through these channels, WWC's social impact efforts were brought into the limelight, increasing credibility and reaching beyond national borders.",
    img: bf_img_4,
    gradient: "linear-gradient(135deg, #5C6BC0, #7986CB)",
  },
  {
    id: 5,
    title: "CERVICAL CANCER AWARENESS",
    summary: "Empowered women in Delhi slums with health knowledge.",
    blog: "WWC organized sensitization campaigns on cervical cancer among underserved populations in Delhi, especially in slums. The program aimed at enlightening women on early detection, prevention, and the need for regular screening. This provided women with necessary health information, leading to higher awareness and access to timely medical help and long-term health benefits.",
    img: our_drives_2,
    gradient: "linear-gradient(135deg, #00897B, #26A69A)",
  },
  {
    id: 6,
    title: "MENSTRUAL HYGIENE DAY INITIATIVES",
    summary: "Distributed sanitary products to 500+ underprivileged women.",
    blog: "On Menstrual Hygiene Day, WWC handed out sanitary products to more than 500 underprivileged women and held educational programs on menstrual health and hygiene. The program was meant to eliminate taboos, enhance dignity, and improve availability of basic hygiene facilities. WWC helped build healthier, more educated communities through awareness and distribution programs.",
    img: bf_img_3,
    gradient: "linear-gradient(135deg, #EC407A, #F48FB1)",
  },
  {
    id: 7,
    title: "DOG DRIVES",
    summary: "Dewormed & treated 100+ stray dogs in local communities.",
    blog: "WWC held special Dog Drives to assist stray animals in local communities. More than 100 stray dogs were given necessary treatment, deworming, and medical examinations. The program was based on principles of compassion, community health, and responsible animal care, ensuring that people and animals can coexist in better, safer conditions.",
    img: bf_img_5,
    gradient: "linear-gradient(135deg, #8D6E63, #A1887F)",
  },
  {
    id: 8,
    title: "FELICITATION BY BIHAR CHHATRA SANSAD",
    summary: "Honoured at Constitution Club of India, March 2024.",
    blog: "On March 22, 2024, WWC was recognized at the Bihar Utsav held at the Constitution Club of India by Bihar Chhatra Sansad, as an appreciation of its accomplishments and contributions to society. This felicitation marked a proud milestone in WWC's journey of social impact.",
    img: hyderabad,
    gradient: "linear-gradient(135deg, #7B1FA2, #AB47BC)",
  },
  {
    id: 9,
    title: "INTERNSHIP PROGRAMS",
    summary: "Collaborated with Symbiosis, VIPS & Amity for student internships.",
    blog: "WWC organized internships with various institutions such as Symbiosis Noida, VIPS, and Amity, where students acquired significant learning and were groomed to become the next generation of social changemakers. These programs provided hands-on experience in community development and social entrepreneurship.",
    img: bf_img_1,
    gradient: "linear-gradient(135deg, #455A64, #78909C)",
  },
  {
    id: 10,
    title: "WINTER RELIEF EFFORTS",
    summary: "Distributed 300+ mufflers and socks to the needy.",
    blog: "Winter was a time when WWC distributed more than 300 mufflers and socks, keeping the needy warm and comfortable, caring for them during the harshest time of the year. This initiative brought warmth and hope to the most vulnerable communities during freezing conditions.",
    img: carasol1,
    gradient: "linear-gradient(135deg, #1565C0, #42A5F5)",
  },
  {
    id: 11,
    title: "SELF-DEFENSE WORKSHOPS",
    summary: "Trained 300+ individuals in adopted slums.",
    blog: "Within its adopted slums, WWC conducted self-defence training, empowering more than 300 individuals with the skills to protect themselves in hazardous conditions. These workshops instilled confidence and the ability to defend oneself in the face of threat, creating safer communities.",
    img: our_drives_4,
    gradient: "linear-gradient(135deg, #C62828, #EF5350)",
  },
];

const MileStone = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIdx, setActiveIdx] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const timelineRef = useRef(null);

  const handlePrev = () =>
    setActiveIdx((p) => (p - 1 + milestones.length) % milestones.length);
  const handleNext = () =>
    setActiveIdx((p) => (p + 1) % milestones.length);

  useEffect(() => {
    if (!timelineRef.current || isMobile) return;
    const dot = timelineRef.current.querySelector(`[data-idx="${activeIdx}"]`);
    if (dot) dot.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeIdx, isMobile]);

  const active = milestones[activeIdx];

  return (
    <Box sx={{ py: { md: 8, xs: 5 }, px: { md: 6, xs: 2 } }}>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "48px", xs: "26px" },
          fontWeight: 700,
          color: "#373737",
          mb: 1,
        }}
      >
        Milestone Events &{" "}
        <span
          style={{
            fontFamily: "DM Serif Display",
            fontStyle: "italic",
            color: "#E91E63",
          }}
        >
          Impactful Moments
        </span>
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "16px", xs: "13px" },
          color: "#777",
          mb: 4,
        }}
      >
        11 milestones that define our journey of compassion and change.
      </Typography>

      {/* Interactive Timeline Bar */}
      <Box
        ref={timelineRef}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          overflowX: "auto",
          pb: 2,
          mb: 4,
          position: "relative",
          "::-webkit-scrollbar": { height: 4 },
          "::-webkit-scrollbar-thumb": { background: "#ddd", borderRadius: 2 },
        }}
      >
        {milestones.map((ms, i) => (
          <Box
            key={ms.id}
            data-idx={i}
            onClick={() => { setActiveIdx(i); setExpanded(null); }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: { md: 120, xs: 90 },
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* Connector line */}
            {i > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: 14,
                  right: "50%",
                  width: "100%",
                  height: 3,
                  background: i <= activeIdx
                    ? "linear-gradient(90deg, #E91E63, #FF6F00)"
                    : "#ddd",
                  zIndex: 0,
                }}
              />
            )}
            {/* Dot */}
            <Box
              sx={{
                width: i === activeIdx ? 28 : 18,
                height: i === activeIdx ? 28 : 18,
                borderRadius: "50%",
                background: i === activeIdx ? active.gradient : i < activeIdx ? "#E91E63" : "#ddd",
                border: i === activeIdx ? "3px solid #fff" : "none",
                boxShadow: i === activeIdx ? "0 0 0 3px #E91E63" : "none",
                transition: "all 0.3s ease",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i === activeIdx && (
                <Typography sx={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>
                  {ms.id}
                </Typography>
              )}
            </Box>
            {/* Label */}
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { md: "10px", xs: "8px" },
                fontWeight: i === activeIdx ? 700 : 400,
                color: i === activeIdx ? "#E91E63" : "#999",
                mt: 1,
                textAlign: "center",
                lineHeight: 1.2,
                maxWidth: 100,
                transition: "color 0.3s",
              }}
            >
              {ms.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Active Milestone Card */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          background: active.gradient,
          borderRadius: "20px",
          overflow: "hidden",
          minHeight: { md: 320, xs: "auto" },
          transition: "background 0.4s ease",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            flex: { md: "0 0 40%" },
            minHeight: { xs: 220, md: 320 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={active.img}
            alt={active.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Milestone number overlay */}
          <Typography
            sx={{
              position: "absolute",
              top: 16,
              left: 20,
              fontFamily: "Sora",
              fontSize: "64px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.25)",
              lineHeight: 1,
            }}
          >
            {active.id}
          </Typography>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            p: { md: 5, xs: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { md: "28px", xs: "20px" },
              fontWeight: 700,
              color: "#fff",
              mb: 2,
            }}
          >
            {active.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { md: "15px", xs: "13px" },
              fontWeight: 400,
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            {expanded === activeIdx ? active.blog : active.summary}
          </Typography>
          <Typography
            onClick={() =>
              setExpanded(expanded === activeIdx ? null : activeIdx)
            }
            sx={{
              fontFamily: "Sora",
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: 3,
              width: "fit-content",
              "&:hover": { opacity: 0.8 },
            }}
          >
            {expanded === activeIdx ? "Show less" : "Read full story"}
          </Typography>
        </Box>
      </Box>

      {/* Navigation Arrows */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 3,
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "27px",
            px: 2.5,
            "&:hover": { background: "#f5f5f5" },
          }}
        >
          <Left sx={{ fontSize: 20, color: "#555" }} />
        </IconButton>
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "14px",
            color: "#999",
            display: "flex",
            alignItems: "center",
          }}
        >
          {activeIdx + 1} / {milestones.length}
        </Typography>
        <IconButton
          onClick={handleNext}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "27px",
            px: 2.5,
            "&:hover": { background: "#f5f5f5" },
          }}
        >
          <Right sx={{ fontSize: 20, color: "#555" }} />
        </IconButton>
      </Box>

      {/* Expanded Blog Modal Overlay */}
      {expanded !== null && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 1400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
          onClick={() => setExpanded(null)}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              background: "#fff",
              borderRadius: "20px",
              maxWidth: 700,
              width: "100%",
              maxHeight: "85vh",
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { md: 280, xs: 180 },
                overflow: "hidden",
                borderRadius: "20px 20px 0 0",
              }}
            >
              <Box
                component="img"
                src={milestones[expanded].img}
                alt={milestones[expanded].title}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(transparent 40%, rgba(0,0,0,0.6))",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 24,
                  fontFamily: "Sora",
                  fontSize: { md: "28px", xs: "20px" },
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {milestones[expanded].title}
              </Typography>
              <IconButton
                onClick={() => setExpanded(null)}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "rgba(255,255,255,0.9)",
                  "&:hover": { background: "#fff" },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ p: { md: 4, xs: 3 } }}>
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { md: "16px", xs: "14px" },
                  lineHeight: 1.8,
                  color: "#444",
                }}
              >
                {milestones[expanded].blog}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MileStone;
