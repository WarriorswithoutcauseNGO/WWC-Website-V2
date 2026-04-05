import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AnushaAttree from "../../assets/AnushaAttree.jpeg";
import BhaviniSingh from "../../assets/BhaviniSingh.jpeg";
import KhushiSingh from "../../assets/KhushiSingh.jpeg";
import VanshikaMehta from "../../assets/VanshikaMehta.jpeg";
import SiyaSethi from "../../assets/SiyaSethi.jpeg";

/**
 * Headshots + roles; bio is first-person / testimonial-style for the modal.
 */
const founders = [
  {
    name: "Anusha Attree",
    image: AnushaAttree,
    role: "Founder Trustee",
    bio:
      "I believe change starts when empathy stops being optional. As a founder trustee at WWC, I get to turn ideas into action — building strategy that keeps us inclusive, accountable, and grounded in the communities we serve. The best part of this work is watching volunteers grow into leaders who care as fiercely as they show up.",
  },
  {
    name: "Bhavini Singh",
    image: BhaviniSingh,
    role: "Founder Trustee",
    bio:
      "What drew me to WWC was how programmes are co-created with people, not done to them. As a founder trustee, I help steer partnerships and programmes that bring different voices into one room — because lasting impact needs everyone at the table. My favourite moments are when a small pilot becomes something communities own and carry forward.",
  },
  {
    name: "Khushi Singh",
    image: KhushiSingh,
    role: "Founder Trustee",
    bio:
      "I’m here for the conversations — the ones that build trust block by block. As a founder trustee, I champion outreach so no one feels like an outsider in their own neighbourhood. WWC matters to me because we don’t rush dignity; we listen first, then act. That’s what keeps me coming back.",
  },
  {
    name: "Vanshika Mehta",
    image: VanshikaMehta,
    role: "Founder Trustee",
    bio:
      "Stories are how we honour the work — and invite more people in. As a founder trustee, I help shape how WWC speaks, shares, and shows up online and on the ground. The part I love most is when a simple message turns someone from a viewer into a volunteer who believes they belong here too.",
  },
];

const bodMembers = [
  {
    name: "Siya Sethi",
    image: SiyaSethi,
    role: "Board of Directors (BOD)",
    bio:
      "On the Board of Directors, I help safeguard governance, accountability, and the long-term health of WWC alongside fellow trustees and leadership. I’m here to ask the hard questions kindly — so our impact stays honest, sustainable, and true to the communities we serve. The best part is knowing the organisation I back is built on trust, not shortcuts.",
  },
];

const volunteerTestimonials = [
  {
    name: "Sakshi Chopra",
    role: "Senior HR Director",
    quote: `Joining WarriorsWithoutCause has been a truly transformative experience.

When I first became a part of this incredible community, I wanted to contribute in any way I could, to help, to give back, to make a difference. But what I found was something much greater, a sense of belonging, growth, and purpose that continues to inspire me every single day.

As Senior HR Director, I've learned that leadership is not just about guiding a team, but about understanding, empowering, and uplifting the people within it. WWC has taught me that compassion and empathy are the strongest pillars of any organization and when people feel valued and supported, they can move mountains together.

Every campaign, every outreach, and every shared smile has reaffirmed my belief that change begins with people who care. WWC is more than just an organization—it's a family united by kindness, hope, and the drive to create a better world.

I feel deeply grateful to walk this journey with such passionate changemakers, and proud to call WarriorsWithoutCause my home.`,
  },
  {
    name: "Palak",
    role: "Policy & Research Head",
    quote: `My journey with WarriorsWithoutCause began with a desire to contribute and gradually grew into something deeply meaningful. Over time, it became a space of learning and belonging, driven by empathy and shared purpose. I had the opportunity to grow alongside the organisation, eventually taking on the role of Research Head through trust and continuous support. This transition was organic and rooted in encouragement and learning. Leading research initiatives taught me the value of collaboration, respect for ideas, and collective responsibility.

The team's dedication and sincerity consistently inspire meaningful action and impact. Working with such committed individuals highlighted how shared efforts strengthen outcomes beyond individual contributions. This journey has shaped me not only as a leader but also as a person. Being part of WarriorsWithoutCause continues to motivate me to give my best towards creating lasting change.`,
  },
  {
    name: "Saanvi Goel",
    role: "PR Department, WarriorsWithoutCause",
    quote: `I've been volunteering with WWC for the past 3 months, and honestly, it's been one of the most fulfilling experiences I've ever had. From our menstrual hygiene kits distribution drive to the Diwali celebration where we distributed sarees, every drive has left me with beautiful memories and meaningful lessons. Seeing the happiness on people's faces and knowing that we could make even a small difference truly warms my heart.

Being a part of the PR Department has also been such an amazing journey. I love how every member here supports one another, and there's always this positive, encouraging energy that makes you feel seen and valued. Everyone at WWC is genuinely so sweet, kind, and passionate about what they do. It really feels like one big family working toward a common goal.

WWC has taught me what teamwork, empathy, and community truly mean. I've met some of the most inspiring people here, and each interaction motivates me to keep doing more for the world around us. I absolutely love being here. It's a place that makes me feel grounded, happy, and hopeful for a better tomorrow.`,
  },
  {
    name: "Sahil Udar",
    role: "Social Media Head, WarriorsWithoutCause",
    quote: `When I first joined WarriorsWithoutCause, I'll admit I was chasing the same thing I'd pursued in college societies: a certificate, a title for my resume. But everything changed the day I attended my first drive and met the children there. Teaching them, listening to their stories, seeing their faces light up with curiosity—that's when I discovered the real purpose behind all of this. In that moment, I realized how hollow most certificates really are, just checkboxes we ticked off without doing meaningful work.

Almost a year into this journey, I'm a different person. The metrics I once cared about feel insignificant now. What matters to me today is the actual impact we create, no matter how small. It's the real conversations, the genuine connections with the children and communities we interact with. This experience has taught me that the most valuable things we do are often the ones that never make it onto a resume, and I wouldn't trade that lesson for any certificate in the world.`,
  },
];

const sectionHeadingSx = {
  fontFamily: "Sora, sans-serif",
  fontWeight: 700,
  fontSize: { xs: "13px", md: "14px" },
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#BF0449",
  mb: 2.5,
  textAlign: "center",
};

const MeetTheTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selected, setSelected] = useState(null);

  const renderMemberCard = (member) => (
    <Box
      key={member.name}
      onClick={() => setSelected(member)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setSelected(member);
      }}
      role="button"
      tabIndex={0}
      aria-label={`${member.name}, ${member.role}. Open profile.`}
      sx={{
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "pointer",
        bgcolor: "rgba(191, 4, 73, 0.06)",
        border: "1px solid rgba(191, 4, 73, 0.12)",
        boxShadow: "0 4px 20px rgba(191, 4, 73, 0.06)",
        transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
        "&:hover": {
          boxShadow: "0 0 0 1px rgba(191,4,73,0.2), 0 8px 28px rgba(191, 52, 117, 0.15)",
          borderColor: "rgba(191, 4, 73, 0.28)",
          transform: "translateY(-4px)",
          "& .team-photo": {
            transform: "scale(1.08)",
          },
        },
        "&:focus-visible": {
          outline: "2px solid #BF0449",
          outlineOffset: 3,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "4 / 5",
          bgcolor: "rgba(191, 4, 73, 0.04)",
        }}
      >
        <Box
          component="img"
          className="team-photo"
          src={member.image}
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            objectFit: member.imageObjectFit ?? "cover",
            objectPosition: member.imageObjectPosition ?? "center top",
            display: "block",
            transition: "transform 0.45s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            px: 1.5,
            pb: 1.5,
            pt: 5,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(15, 10, 12, 0.55) 38%, rgba(15, 10, 12, 0.88) 100%)",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Sora",
              fontWeight: 700,
              fontSize: isMobile ? "13px" : "14px",
              color: "#FFFFFF",
              lineHeight: 1.25,
              textShadow: "0 1px 3px rgba(0,0,0,0.65)",
            }}
          >
            {member.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: isMobile ? "10px" : "11px",
              color: "rgba(255, 255, 255, 0.95)",
              mt: 0.5,
              fontWeight: 500,
              lineHeight: 1.35,
              textShadow: "0 1px 2px rgba(0,0,0,0.6)",
            }}
          >
            {member.role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      component="section"
      aria-labelledby="meet-the-team-heading"
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2.5, md: 6 },
        mb: 2,
        background:
          "linear-gradient(180deg, rgba(255, 242, 250, 0.95) 0%, #FFFFFF 40%, rgba(255, 242, 250, 0.5) 100%)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            id="meet-the-team-heading"
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "DM Serif Display, Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "36px", sm: "42px", md: "48px" },
              lineHeight: 1.15,
              color: "#1a1a1a",
              mb: 1.5,
            }}
          >
            Meet the{" "}
            <Box
              component="span"
              sx={{
                color: "#BF0449",
                background: "linear-gradient(120deg, #BF0449 0%, #BF3475 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Team
            </Box>
          </Typography>
          <Box
            sx={{
              width: 56,
              height: 3,
              borderRadius: 1,
              background: "linear-gradient(90deg, #BF0449, #F2B705)",
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography
            sx={{
              fontFamily: "Sora, sans-serif",
              fontSize: { xs: "15px", md: "17px" },
              fontWeight: 500,
              lineHeight: 1.6,
              color: "#4D4D4D",
              maxWidth: 560,
              mx: "auto",
            }}
          >
            The people who make the work possible.
          </Typography>
        </Box>

        {/* 1 — Founders */}
        <Box component="section" aria-labelledby="founders-heading" sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography id="founders-heading" component="h3" sx={sectionHeadingSx}>
            Founders
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 2, md: 2.5 },
              alignItems: "stretch",
            }}
          >
            {founders.map(renderMemberCard)}
          </Box>
        </Box>

        {/* 2 — Board of directors */}
        <Box component="section" aria-labelledby="bod-heading" sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography id="bod-heading" component="h3" sx={sectionHeadingSx}>
            Board of directors
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 320 }}>{bodMembers.map(renderMemberCard)}</Box>
          </Box>
        </Box>

        {/* 3 — Volunteer testimonials */}
        <Box component="section" aria-labelledby="volunteer-testimonials-heading">
          <Typography id="volunteer-testimonials-heading" component="h3" sx={sectionHeadingSx}>
            Volunteer testimonials
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {volunteerTestimonials.map((t, i) => (
              <Box
                key={t.name}
                sx={{
                  position: "relative",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "16px",
                  bgcolor: "rgba(191, 4, 73, 0.05)",
                  border: "1px solid rgba(191, 4, 73, 0.1)",
                  boxShadow: "0 4px 24px rgba(191, 4, 73, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 0,
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 14,
                    fontSize: 36,
                    color: "rgba(191, 4, 73, 0.2)",
                  }}
                  aria-hidden
                />
                <Typography
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: 1.75,
                    color: "#3a3a3a",
                    pl: 2,
                    pt: 1,
                    flex: 1,
                    whiteSpace: "pre-line",
                  }}
                >
                  {t.quote}
                </Typography>
                <Box sx={{ mt: 2, pl: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#BF0449",
                    }}
                  >
                    — {t.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "13px",
                      color: "#666",
                      mt: 0.5,
                    }}
                  >
                    {t.role}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="sm"
        fullWidth
        aria-labelledby="meet-team-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid rgba(191, 4, 73, 0.12)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          },
        }}
      >
        {selected && (
          <>
            <DialogTitle
              id="meet-team-dialog-title"
              sx={{
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0,
              }}
            >
              {selected.name}, {selected.role} at WWC
            </DialogTitle>
            <IconButton
              onClick={() => setSelected(null)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                zIndex: 2,
                bgcolor: "rgba(255,255,255,0.95)",
                "&:hover": { bgcolor: "#fff" },
              }}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                position: "relative",
                height: { xs: 340, sm: 420 },
                background:
                  "linear-gradient(120deg, rgba(191,4,73,0.08) 0%, rgba(242,183,5,0.06) 100%)",
              }}
            >
              <Box
                component="img"
                src={selected.image}
                alt=""
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center center",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  px: 2,
                  pb: 2,
                  pt: 6,
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(15, 10, 12, 0.55) 35%, rgba(15, 10, 12, 0.9) 100%)",
                  pointerEvents: "none",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display, Georgia, serif",
                    fontWeight: 400,
                    fontSize: { xs: "24px", sm: "28px" },
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                    textShadow: "0 1px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  {selected.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "rgba(255, 255, 255, 0.95)",
                    mt: 0.75,
                    textShadow: "0 1px 3px rgba(0,0,0,0.65)",
                  }}
                >
                  {selected.role} · WWC
                </Typography>
              </Box>
            </Box>
            <DialogContent sx={{ pt: 2.5, pb: 3 }}>
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "#444",
                }}
              >
                {selected.bio}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default MeetTheTeam;
