import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, useNavigate } from "react-router-dom";
import FooterFlower from "../../assets/footerFlower.svg";

const linkStyle = {
  color: "rgba(255,255,255,0.75)",
  textDecoration: "none",
  fontFamily: "Sora, sans-serif",
  fontSize: "14px",
  lineHeight: 2.2,
  transition: "color 0.2s",
};

const headingStyle = {
  fontFamily: "Sora",
  fontWeight: 700,
  fontSize: "15px",
  color: "#fff",
  mb: 1.5,
  textTransform: "uppercase",
  letterSpacing: 0.5,
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #BF0449 0%, #9C0339 50%, #7A0230 100%)",
        color: "white",
        borderRadius: { md: "32px", xs: "20px" },
        mx: { md: 3, xs: 1.5 },
        mt: 4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          p: { md: "48px 56px", xs: "32px 20px" },
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          gap: { md: 6, xs: 4 },
          flexWrap: { md: "nowrap", xs: "wrap" },
        }}
      >
        {/* Column 1: About + CTA buttons */}
        <Box sx={{ flex: { md: 1.3 }, minWidth: 0, width: { xs: "100%", md: "auto" } }}>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { md: "24px", xs: "20px" },
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            Warriors Without Cause
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: "14px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              mb: 3,
              maxWidth: 340,
            }}
          >
            We don't need a cause to make a change. Join our 350+ warriors
            creating real impact across India.
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 3 }}>
            <Button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/donate");
              }}
              sx={{
                background: "linear-gradient(135deg, #F2B705, #F28705)",
                color: "#fff",
                fontFamily: "Sora",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "37px",
                px: 3,
                py: 1,
                textTransform: "uppercase",
                "&:hover": {
                  background: "linear-gradient(135deg, #D49A04, #D47504)",
                },
              }}
            >
              Donate Now
            </Button>
            <Button
              component="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdECsvUceeFUrPORFeOho8wdzTEdFNMBHCr1qsLYThzy8htGQ/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: "linear-gradient(135deg, #BF3475, #BF0449)",
                color: "#fff",
                fontFamily: "Sora",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "37px",
                px: 3,
                py: 1,
                textTransform: "uppercase",
                "&:hover": {
                  background: "linear-gradient(135deg, #9C0339, #BF0449)",
                },
              }}
            >
              Become a Volunteer
            </Button>
          </Box>

          {/* Socials */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {[
              { icon: <InstagramIcon fontSize="small" />, url: "https://www.instagram.com/warriorswithoutcausengo", label: "Instagram" },
              { icon: <YouTubeIcon fontSize="small" />, url: "https://youtube.com/@warriorswithoutcausengo", label: "YouTube" },
              { icon: <LinkedInIcon fontSize="small" />, url: "https://www.linkedin.com/company/warriorswithoutcausengo/", label: "LinkedIn" },
              { icon: <TwitterIcon fontSize="small" />, url: "https://x.com/wwcngo", label: "X" },
              { icon: <FacebookIcon fontSize="small" />, url: "https://m.facebook.com/100088849480693/", label: "Facebook" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    width: 36,
                    height: 36,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  {s.icon}
                </IconButton>
              </a>
            ))}
          </Box>
        </Box>

        {/* Column 2: About WWC links */}
        <Box sx={{ minWidth: 0, width: { xs: "calc(50% - 16px)", md: "auto" } }}>
          <Typography sx={headingStyle}>About</Typography>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li><Link to="/aboutus" style={linkStyle}>About Us</Link></li>
            <li><Link to="/aboutus" style={linkStyle}>Our Vision & Mission</Link></li>
            <li><Link to="/aboutus" style={linkStyle}>Our Values</Link></li>
            <li><Link to="/aboutus" style={linkStyle}>Meet the Team</Link></li>
          </ul>
        </Box>

        {/* Column 3: What We Do */}
        <Box sx={{ minWidth: 0, width: { xs: "calc(50% - 16px)", md: "auto" } }}>
          <Typography sx={headingStyle}>What We Do</Typography>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li><Link to="/projects" style={linkStyle}>Our Drives in Action</Link></li>
            <li><Link to="/beherhero" style={linkStyle}>Be Her Hero</Link></li>
            <li><Link to="/howtohelp" style={linkStyle}>Gallery</Link></li>
            <li><Link to="/howtohelp" style={linkStyle}>Events</Link></li>
            <li><Link to="/blogs" style={linkStyle}>Blogs</Link></li>
            <li><Link to="/newsletter" style={linkStyle}>Newsletter</Link></li>
          </ul>
        </Box>

        {/* Column 4: Get Involved */}
        <Box sx={{ minWidth: 0, width: { xs: "calc(50% - 16px)", md: "auto" } }}>
          <Typography sx={headingStyle}>Get Involved</Typography>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li><Link to="/howtohelp" style={linkStyle}>Volunteer</Link></li>
            <li><Link to="/donate" style={linkStyle}>Donate</Link></li>
            <li><Link to="/howtohelp" style={linkStyle}>Careers</Link></li>
            <li><Link to="/howtohelp" style={linkStyle}>Collaborate</Link></li>
          </ul>
        </Box>

        {/* Column 5: Support */}
        <Box sx={{ minWidth: 0, width: { xs: "calc(50% - 16px)", md: "auto" } }}>
          <Typography sx={headingStyle}>Support</Typography>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li><Link to="/aboutus" style={linkStyle}>FAQs</Link></li>
            <li><Link to="/aboutus" style={linkStyle}>Contact Us</Link></li>
            <li><Link to="/aboutus" style={linkStyle}>Privacy Policy</Link></li>
            <li><Link to="/aboutus" style={linkStyle}>Terms of Use</Link></li>
          </ul>
        </Box>

        {/* Column 6: Contact (no map) */}
        <Box component="address" sx={{ fontStyle: "normal", minWidth: 0, width: { xs: "100%", md: "auto" } }}>
          <Typography sx={headingStyle}>Contact</Typography>
          <Typography sx={{ ...linkStyle, display: "block" }}>
            <a href="tel:+919711883411" style={linkStyle}>+91 9711883411</a>
          </Typography>
          <Typography sx={{ ...linkStyle, display: "block" }}>
            <a href="mailto:info.warriorswithoutcause.com" style={linkStyle}>info.warriorswithoutcause.com</a>
          </Typography>
          <Typography sx={{ ...linkStyle, display: "block" }}>
            <a href="mailto:Contact@warriorswithoutcause.org" style={linkStyle}>Contact@warriorswithoutcause.org</a>
          </Typography>
        </Box>
      </Box>

      {/* Bottom divider + copyright */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          px: { md: "56px", xs: "24px" },
          py: 2,
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "12px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          &copy; {new Date().getFullYear()} Warriors Without Cause &mdash; All
          rights reserved
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "12px",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <img src={FooterFlower} alt="" style={{ width: 14, height: 14 }} />
          Created by{" "}
          <a
            href="https://www.linkedin.com/company/quatro-web-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
          >
            Quatro
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export const CopyrightSection = () => null;

export default Footer;
