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
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            alt="Warriors Without Cause logo"
            onClick={handleGoHome}
            style={{
              display: "flex",
              height: "40px",
              cursor: "pointer",
            }}
          />

          {/* Screen-reader only nav for SEO/sitelinks */}
          <Box component="nav" className="sr-only" aria-label="Quick links">
            <Link to="/aboutus">About Us</Link>
            <Link to="/donate">Donate Now</Link>
          </Box>

          {/* pushes actions (Donate + hamburger) to far right */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }} />

          {/* Right actions cluster: Donate (desktop) + hamburger (all sizes) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              ml: "auto",
              pr: { xs: 0, md: 0 },
              gap: { xs: 0, md: 2 },
              flexShrink: 0,
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
                display: { xs: "none", md: "flex" },
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

            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              aria-label="Open menu"
              sx={{ p: 0, color: isDonatePage ? "black" : "inherit" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Shared menu (opens from the hamburger icon) */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                background: "rgba(255, 255, 255, 0.09)",
                borderBottom: "1px solid rgba(226, 226, 226, 1)",
                backdropFilter: "blur(27.4px)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: 0,
                mt: 1,
                pt: 1,
                width: "min(320px, calc(100vw - 24px))",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ py: 1.25 }}
              >
                <Typography
                  component={Link}
                  to={page.path}
                  sx={{
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
