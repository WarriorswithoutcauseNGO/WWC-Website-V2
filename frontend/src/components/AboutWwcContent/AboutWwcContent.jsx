import { Box, Typography } from "@mui/material";
import ElectricalServices from "@mui/icons-material/ElectricalServices";
import Female from "@mui/icons-material/Female";
import FoodBank from "@mui/icons-material/FoodBank";
import HowToReg from "@mui/icons-material/HowToReg";
import LocalHospital from "@mui/icons-material/LocalHospital";
import School from "@mui/icons-material/School";
import WorkOutline from "@mui/icons-material/WorkOutline";
import React from "react";

const problems = [
  {
    title: "Inaccessibility of healthcare",
    body:
      "Communities living in slums often lack affordable medical infrastructure. Families are forced to choose between treatment and survival; preventable conditions go unaddressed. WWC’s medical camps provide treatment and referrals, education, and screening.",
    Icon: LocalHospital,
    accent: "linear-gradient(145deg, rgba(191,4,73,0.18) 0%, rgba(191,52,117,0.08) 100%)",
  },
  {
    title: "Educational deprivation",
    body:
      "Children lose access to quality education because of distance, cost, or family pressures. Without basic literacy, exploitative labour replaces opportunity. WWC’s education programmes bring knowledge, tools, and hope for different futures.",
    Icon: School,
    accent: "linear-gradient(145deg, rgba(242,183,5,0.2) 0%, rgba(191,4,73,0.08) 100%)",
  },
  {
    title: "Menstrual hygiene poverty",
    body:
      "Millions lack access to affordable menstrual products and resort to unsafe alternatives. Girls miss school and fall behind. WWC’s distribution and awareness workshops address both material needs and cultural taboos.",
    Icon: Female,
    accent: "linear-gradient(145deg, rgba(191,52,117,0.2) 0%, rgba(242,135,5,0.1) 100%)",
  },
  {
    title: "Infrastructure shortages",
    body:
      "Electricity gaps limit study hours and safety; poor sanitation spreads disease and disproportionately affects women and girls. WWC supports electrical and washroom initiatives and works with authorities toward lasting solutions.",
    Icon: ElectricalServices,
    accent: "linear-gradient(145deg, rgba(242,135,5,0.18) 0%, rgba(191,4,73,0.08) 100%)",
  },
  {
    title: "Food insecurity",
    body:
      "Families cannot afford adequate nutrition, affecting children’s development and adults’ productivity. WWC provides food relief and programmes that address root causes where possible.",
    Icon: FoodBank,
    accent: "linear-gradient(145deg, rgba(191,4,73,0.16) 0%, rgba(242,183,5,0.12) 100%)",
  },
  {
    title: "Unemployment & skill gaps",
    body:
      "Unskilled workers without networks remain vulnerable to exploitative labour. WWC’s capacity-building opens paths to economic independence.",
    Icon: WorkOutline,
    accent: "linear-gradient(145deg, rgba(191,52,117,0.16) 0%, rgba(242,135,5,0.1) 100%)",
  },
  {
    title: "Social exclusion",
    body:
      "Many in underserved settlements are unaware of government schemes and their rights. WWC helps people access entitlements so they can claim their citizenship with confidence.",
    Icon: HowToReg,
    accent: "linear-gradient(145deg, rgba(191,4,73,0.18) 0%, rgba(191,52,117,0.1) 100%)",
  },
];

const drives = [
  {
    title: "Educational drives",
    body:
      "Volunteers deliver interactive learning in English, mathematics, and science; distribute books and stationery; and nurture curiosity and habit.",
  },
  {
    title: "Medical camps",
    body:
      "WWC works with professionals to offer screenings, treatment, and health education. Mental health workshops, delivered through partnerships, help reduce stigma.",
  },
  {
    title: "Sanitary pad distribution",
    body:
      "Regular distributions meet urgent need alongside awareness that breaks taboos and equips women with health knowledge.",
  },
  {
    title: "Food & clothing distribution",
    body:
      "Bhandara-style community meals and clothing drives respond to need with dignity — including seasonal initiatives such as Beat the Heat.",
  },
  {
    title: "Infrastructure enhancement",
    body:
      "Electricity and washroom support makes daily life safer and easier, while engagement with authorities seeks durable fixes.",
  },
  {
    title: "Employment & skill development",
    body:
      "Training programmes build marketable skills and connect people to real employment opportunities.",
  },
  {
    title: "Soch by WWC brand initiative",
    body:
      "Soch turns purchases into social contribution and sustainable revenue for programmes. Branded merchandise grows a visible supporter movement — people as ambassadors for awareness. It is an entrepreneurial path to diversified, resilient funding.",
  },
  {
    title: "Shared motives & creative alliances",
    body:
      "Partners pool resources for joint action. Fundraising and events turn passive sympathy into active participation.",
  },
  {
    title: "Advocacy & awareness campaigns",
    body:
      "From Zero Discrimination Day to International Women’s Day, WWC promotes non-discrimination and celebrates resilience — pairing immediate relief with long-term engagement on root causes.",
  },
];

export default function AboutWwcContent() {
  return (
    <Box
      component="section"
      aria-label="About Warriors Without Cause"
      sx={{
        px: { xs: 2.5, md: 6 },
        py: { xs: 5, md: 8 },
        maxWidth: 900,
        mx: "auto",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: "Sora",
          fontSize: { xs: "26px", md: "34px" },
          fontWeight: 700,
          color: "#373737",
          mb: 1,
          textAlign: "center",
        }}
      >
        About{" "}
        <Box component="span" sx={{ color: "#BF0449" }}>
          WWC
        </Box>
      </Typography>
      <Box
        sx={{
          width: 64,
          height: 3,
          borderRadius: 1,
          background: "linear-gradient(90deg, #BF0449, #F2B705)",
          mx: "auto",
          mb: 4,
        }}
      />

      <BodyBlock>
        Warriors Without Cause (WWC) is a pan-Indian youth-led non-governmental organisation
        founded on a transformative philosophy: &ldquo;We do not need a cause to make a
        change.&rdquo; This motto treats compassion and action as part of ordinary life — not as
        exceptional behaviour reserved for a few.
      </BodyBlock>
      <BodyBlock>
        WWC functions through empowerment, not charity, mobilising more than{" "}
        <strong>300 volunteers</strong> across Delhi-NCR, Jammu, Punjab, Pune, Dehradun, Mumbai,
        Noida, and Chandigarh. In underserved slum communities, the organisation offers medical
        camps, education workshops, sanitary pad distribution, food and clothing drives,
        infrastructure support, and job assistance.
      </BodyBlock>
      <BodyBlock>
        In line with the UN Sustainable Development Goals, WWC publishes the tri-monthly
        newsletter <em>The WWC Buzz</em>, grounded in its <strong>SEWA</strong> philosophy —
        Society, Empowerment, With Affection. The organisation has built{" "}
        <strong>Soch by WWC</strong>, an initiative that generates sustainable revenue through
        products and cultivates a visible community of supporters. Cooperation with{" "}
        <strong>Smile Care Foundation</strong>, <strong>Girl Up Adira</strong>, and{" "}
        <strong>Fluoride Fellowship</strong> reflects a commitment to coalitions and a holistic
        approach to health.
      </BodyBlock>
      <BodyBlock>
        WWC believes in <strong>diversity, equality, and inclusion</strong> — changing communities
        and volunteers alike through service-based personal development.
      </BodyBlock>

      <Typography
        component="h3"
        sx={{
          fontFamily: "Sora",
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: 700,
          color: "#1a1a1a",
          mt: 6,
          mb: 2,
        }}
      >
        Problems Warriors Without Cause solves
      </Typography>
      <Typography sx={{ fontFamily: "Sora", fontSize: "15px", color: "#666", mb: 3 }}>
        Our work responds to systemic gaps that keep families in cycles of hardship.
      </Typography>

      {problems.map((p) => {
        const Icon = p.Icon;
        return (
          <Box
            key={p.title}
            sx={{
              mb: 2.5,
              display: "flex",
              gap: { xs: 2, md: 2.5 },
              alignItems: "flex-start",
              pl: { xs: 0, sm: 0 },
            }}
          >
            <Box
              aria-hidden
              sx={{
                flexShrink: 0,
                width: { xs: 52, sm: 58 },
                height: { xs: 52, sm: 58 },
                borderRadius: "14px",
                background: p.accent,
                border: "1px solid rgba(191, 4, 73, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 20px rgba(191, 4, 73, 0.1)",
              }}
            >
              <Icon
                sx={{
                  fontSize: { xs: 26, sm: 30 },
                  color: "#BF0449",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                borderLeft: {
                  xs: "2px solid rgba(191, 52, 117, 0.35)",
                  sm: "3px solid #BF3475",
                },
                pl: { xs: 1.75, sm: 2, md: 2.5 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontWeight: 700,
                  fontSize: { xs: "15px", md: "16px" },
                  color: "#BF0449",
                  mb: 0.75,
                }}
              >
                {p.title}
              </Typography>
              <Typography sx={{ fontFamily: "Sora", fontSize: "15px", lineHeight: 1.75, color: "#444" }}>
                {p.body}
              </Typography>
            </Box>
          </Box>
        );
      })}

      <Typography
        component="h3"
        sx={{
          fontFamily: "Sora",
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: 700,
          color: "#1a1a1a",
          mt: 6,
          mb: 2,
        }}
      >
        Drives in action
      </Typography>
      <Typography sx={{ fontFamily: "Sora", fontSize: "15px", color: "#666", mb: 3 }}>
        How we show up — week after week — on the ground.
      </Typography>

      {drives.map((d) => (
        <Box key={d.title} sx={{ mb: 2.25 }}>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontWeight: 700,
              fontSize: { xs: "15px", md: "16px" },
              color: "#373737",
              mb: 0.5,
            }}
          >
            {d.title}
          </Typography>
          <Typography sx={{ fontFamily: "Sora", fontSize: "15px", lineHeight: 1.75, color: "#444" }}>
            {d.body}
          </Typography>
        </Box>
      ))}

      <BodyBlock sx={{ mt: 4, fontStyle: "italic", color: "#555", borderTop: "1px solid rgba(191,4,73,0.15)", pt: 3 }}>
        Warriors Without Cause has shown up for communities through many motivations — proof
        that sustained, comprehensive engagement can open real pathways to dignity, opportunity,
        and justice.
      </BodyBlock>
    </Box>
  );
}

function BodyBlock({ children, sx = {} }) {
  return (
    <Typography
      sx={{
        fontFamily: "Sora",
        fontSize: { xs: "15px", md: "16px" },
        lineHeight: 1.8,
        color: "#333",
        mb: 2.5,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
