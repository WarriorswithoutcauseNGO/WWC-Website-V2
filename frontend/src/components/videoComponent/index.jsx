import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import bgVideo from "../../assets/bg-video.mp4";
import our_drives_1_phn from "../../assets/our_drives_1_phn.png";
import our_drives_2_phn from "../../assets/our_drives_2_phn.png";
import our_drives_3_phn from "../../assets/our_drives_3_phn.png";
import our_drives_4_phn from "../../assets/our_drives_4_phn.png";
import bf_img_1_phn from "../../assets/bf_img_1_phn.png";
import "./VideoBackground.css";

const mobileBanners = [
  { img: our_drives_1_phn, label: "Our Drives", link: "/projects" },
  { img: bf_img_1_phn, label: "Education", link: "/howtohelp" },
  { img: our_drives_2_phn, label: "Health & Hygiene", link: "/donate" },
  { img: our_drives_3_phn, label: "Environment", link: "/projects" },
  { img: bf_img_1_phn, label: "Empower Women", link: "/beherhero" },
  { img: our_drives_4_phn, label: "Volunteer", link: "/howtohelp" },
];

/** Minimum horizontal distance (px) for a “slow” swipe */
const SWIPE_MIN_PX = 36;
/** Shorter distance allowed if the gesture is quick (flick) */
const SWIPE_FLICK_PX = 22;
const SWIPE_FLICK_MS = 280;
/** Autoplay pauses this long after a manual swipe / dot tap */
const AUTOPLAY_PAUSE_MS = 7000;

function VideoBackground() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slideIdx, setSlideIdx] = useState(0);
  const swipeRef = useRef({ x: 0, y: 0, t: 0, pointerId: null, active: false });
  const lastManualRef = useRef(0);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      if (Date.now() - lastManualRef.current < AUTOPLAY_PAUSE_MS) return;
      setSlideIdx((p) => (p + 1) % mobileBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const markManual = useCallback(() => {
    lastManualRef.current = Date.now();
  }, []);

  const goNextSlide = useCallback(() => {
    markManual();
    setSlideIdx((p) => (p + 1) % mobileBanners.length);
  }, [markManual]);

  const goPrevSlide = useCallback(() => {
    markManual();
    setSlideIdx((p) => (p - 1 + mobileBanners.length) % mobileBanners.length);
  }, [markManual]);

  const isSwipeIgnoredTarget = useCallback((target) => {
    if (!target || typeof target.closest !== "function") return true;
    return Boolean(
      target.closest(
        "a, button, [data-swipe-ignore], .mobile-dots, .scroll_lottie, .mobile-dot"
      )
    );
  }, []);

  const onPointerDown = useCallback(
    (e) => {
      if (isSwipeIgnoredTarget(e.target)) return;
      if (swipeRef.current.active) return;
      swipeRef.current = {
        x: e.clientX,
        y: e.clientY,
        t: Date.now(),
        pointerId: e.pointerId,
        active: true,
      };
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    },
    [isSwipeIgnoredTarget]
  );

  const onPointerUp = useCallback(
    (e) => {
      if (!swipeRef.current.active || e.pointerId !== swipeRef.current.pointerId) return;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      const { x, y, t } = swipeRef.current;
      swipeRef.current = { x: 0, y: 0, t: 0, pointerId: null, active: false };

      const dx = e.clientX - x;
      const dy = e.clientY - y;
      const dt = Math.max(1, Date.now() - t);
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (absDy > absDx * 1.15 && absDy > 55) return;
      const isFlick = dt < SWIPE_FLICK_MS && absDx >= SWIPE_FLICK_PX;
      const isDrag = absDx >= SWIPE_MIN_PX;
      if (!isFlick && !isDrag) return;
      if (absDx < absDy * 0.85 && absDy > 40) return;

      if (dx < 0) goNextSlide();
      else goPrevSlide();
    },
    [goNextSlide, goPrevSlide]
  );

  const onPointerCancel = useCallback((e) => {
    if (e.pointerId === swipeRef.current.pointerId) {
      swipeRef.current = { x: 0, y: 0, t: 0, pointerId: null, active: false };
    }
  }, []);

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

  const handleBannerTap = useCallback(() => {
    const banner = mobileBanners[slideIdx];
    navigate(banner.link);
    window.scrollTo(0, 0);
  }, [slideIdx, navigate]);

  if (isMobile) {
    return (
      <div
        className="video-container mobile-hero"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        role="region"
        aria-label="Featured stories — swipe to change slide"
      >
        {mobileBanners.map((banner, i) => (
          <img
            key={i}
            src={banner.img}
            alt={banner.label}
            className={`mobile-banner-img ${slideIdx === i ? "active" : ""}`}
          />
        ))}
        <div className="mobile-hero-overlay" />
        <button
          type="button"
          className="mobile-hero-nav mobile-hero-nav--prev"
          aria-label="Previous slide"
          onClick={goPrevSlide}
        >
          ‹
        </button>
        <button
          type="button"
          className="mobile-hero-nav mobile-hero-nav--next"
          aria-label="Next slide"
          onClick={goNextSlide}
        >
          ›
        </button>
        <div className="overlay-text mobile-overlay-text">
          <div className="overlay-text_div">
            <span className="nw n1">We </span>
            <span className="nw n2">Don&#x2019;t </span>
            <span className="nw n3 nw-need">Need </span>
            <span className="nw n4">a </span>
            <span className="nw n5">Cause </span>
            <span className="nw n4">to </span>
            <span className="nw n3">Make </span>
            <span className="nw n4">a </span>
            <span className="nw n6">Change</span>
          </div>
          <p className="mobile-tagline">
            Empowering communities through education, health &amp; compassion.
          </p>
          <div className="mobile-cta-row">
            <Link to="/howtohelp" className="grow-btn mobile-cta" data-swipe-ignore>
              Know More
            </Link>
            <span
              className="grow-btn mobile-cta mobile-cta-secondary"
              data-swipe-ignore
              onClick={handleBannerTap}
            >
              {mobileBanners[slideIdx].label} &rarr;
            </span>
          </div>
          {/* Dot indicators */}
          <div className="mobile-dots" data-swipe-ignore>
            {mobileBanners.map((_, i) => (
              <span
                key={i}
                className={`mobile-dot ${slideIdx === i ? "active" : ""}`}
                onClick={() => {
                  markManual();
                  setSlideIdx(i);
                }}
                role="tab"
                aria-selected={slideIdx === i}
                aria-label={`Slide ${i + 1} of ${mobileBanners.length}`}
              />
            ))}
          </div>
          <p className="mobile-swipe-hint">Swipe sideways to change slide</p>
        </div>
        <div className="scroll_lottie" data-swipe-ignore onClick={scrollToSection}>
          <svg
            className="scroll-arrow"
            width="18"
            height="26"
            viewBox="0 0 20 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0 L10 26 M2 20 L10 28 L18 20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="video-container">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="overlay-text">
        <div className="overlay-text_div">
          <span className="nw n1">We </span>
          <span className="nw n2">Don&#x2019;t </span>
          <span className="nw n3 nw-need">Need </span>
          <span className="nw n4">a </span>
          <span className="nw n5">Cause </span>
          <span className="nw n4">to </span>
          <span className="nw n3">Make </span>
          <span className="nw n4">a </span>
          <span className="nw n6">Change</span>
        </div>
        <p>
          Experience the journey of our volunteers as they empower communities
          through education, health initiatives, and economic opportunities.
        </p>
        <Link to="/howtohelp" className="grow-btn">
          Become a Warrior
        </Link>
      </div>
      <div className="scroll_lottie" onClick={scrollToSection}>
        <svg
          className="scroll-arrow"
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0 L10 26 M2 20 L10 28 L18 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>scroll to learn more</p>
      </div>
    </div>
  );
}

export default VideoBackground;
