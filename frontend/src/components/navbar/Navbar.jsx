import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbar_logo from "../../assets/navbar_logo.svg";
import "./Navbar.css";

const pages = [
  { name: "About Us", path: "/aboutus" },
  { name: "How to help", path: "/howtohelp" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isSmallScreen = useMediaQuery("(max-width:1100px)");
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contribution-section" } });
    } else {
      scrollTo("contribution-section");
    }
  };

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const isDonatePage = location.pathname === "/donate";

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255, 255, 255, 0.09)",
        borderBottom: isDonatePage
          ? "1px solid rgba(77, 77, 77, 1)"
          : "1px solid rgba(226, 226, 226, 1)",
        backdropFilter: "blur(27.4px)",
        paddingX: { xs: 2, md: 0 },
        zIndex: 5,
        height: "68px",
      }}
    >
      <Container disableGutters maxWidth="xl" sx={{ height: "68px" }}>
        <Toolbar
          disableGutters
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            alignItems: "center",
            height: "68px",
            ml: { md: 2, xs: 0 },
          }}
        >
          <img
            src={navbar_logo}
            alt="NGO Logo"
            onClick={handleGoHome}
            style={{
              display: "flex",
              height: "40px",
              cursor: "pointer",
            }}
          />

          <Typography
            variant="h6"
            noWrap
            onClick={handleGoHome}
            sx={{
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Sora",
              fontWeight: 700,
              letterSpacing: ".2rem",
              fontSize: "20px",
              cursor: "pointer",
              color: isDonatePage
                ? "rgba(0, 0, 0, 1)"
                : "rgba(226, 226, 226, 1)",
            }}
          >
            {isSmallScreen ? "WWC NGO" : "WARRIORSWITHOUTCAUSE NGO"}
          </Typography>

          <Typography
            variant="h5"
            noWrap
            onClick={handleGoHome}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Sora",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: ".3rem",
              cursor: "pointer",
              color: isDonatePage
                ? "rgba(0, 0, 0, 1)"
                : "rgba(226, 226, 226, 1)",
              ml: 1,
            }}
          >
            WWC NGO
          </Typography>

          {/* MOBILE NAV */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 0, color: isDonatePage ? "black" : "inherit" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                sx: {
                  background: "rgba(255, 255, 255, 0.09)",
                  borderBottom: "1px solid rgba(226, 226, 226, 1)",
                  backdropFilter: "blur(27.4px)",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: 0,
                  marginTop: 2.7,
                  pt: 2,
                  width: "100%",
                  left: "0px !important",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ py: 0, height: "10px" }}
                >
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textAlign: "center",
                      fontFamily: "Sora",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: isDonatePage
                        ? "rgba(0, 0, 0, 1)"
                        : "rgba(226, 226, 226, 1)",
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}

              <Box sx={{ display: { xs: "flex", md: "none" }, m: 2 }}>
                <Button
                  fullWidth
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/donate");
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  }}
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    px: 5,
                    py: 2,
                    borderRadius: 0,
                    textDecoration: "none",
                  }}
                  className="donation-button"
                >
                  <svg
                    className="heart-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    stroke="black"
                    fill="none"
                    strokeWidth="2"
                  >
                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                  </svg>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    Make a donation
                  </Typography>
                </Button>
              </Box>
            </Menu>
          </Box>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontFamily: "Sora",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: isDonatePage
                    ? "rgba(0, 0, 0, 1)"
                    : "rgba(226, 226, 226, 1)",
                  textTransform: "capitalize",
                  textDecoration: "none",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* DONATE BUTTON (DESKTOP) */}
          <Box
            sx={{
              flexGrow: 0,
              height: "100%",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/donate");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
              sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                gap: 1,
                px: 5,
                borderRadius: 0,
                alignItems: "center",
                height: "100%",
                textDecoration: "none",
                borderBottom: isDonatePage
                  ? "1px solid rgba(77, 77, 77, 1)"
                  : "none",
                borderLeft: isDonatePage
                  ? "1px solid rgba(77, 77, 77, 1)"
                  : "none",
              }}
              className="donation-button"
            >
              <svg
                className="heart-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                stroke="black"
                fill="none"
                strokeWidth="2"
              >
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
              </svg>
              <Typography
                className=".heart-icon"
                sx={{
                  fontFamily: "Sora",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                Make a donation
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
