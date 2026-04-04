import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";

/** Hide scrollbars while keeping overflow scroll (wheel / touch still works). */
const scrollbarHiddenSx = {
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": { display: "none" },
};

function getMaxScrolls(cols) {
  return cols.map((c) => Math.max(0, c.scrollHeight - c.clientHeight));
}

/**
 * Per-column curves f(p) map shared progress p∈[0,1] to scroll fraction; all satisfy f(0)=0, f(1)=1
 * so columns finish together but move asymmetrically (different “speed” through the range).
 */
function getAsymmetryCurves(colCount) {
  if (colCount <= 1) return [(p) => p];
  if (colCount === 2) {
    return [(p) => Math.pow(p, 0.48), (p) => Math.pow(p, 2.05)];
  }
  return [(p) => Math.pow(p, 0.48), (p) => Math.pow(p, 2.05), (p) => p];
}

/**
 * Shared wheel progress p drives all columns; each column uses a different curve so motion is asymmetric
 * while still ending at the same moment (all curves reach 1 when p=1).
 */
export default function AboutUsVerticalGallery({ photos, onSelect }) {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const wheelCaptureRef = useRef(null);
  const columnRefs = useRef([]);
  const scrollProgressRef = useRef(0);

  const colCount = isMdUp ? 3 : isSmUp ? 2 : 1;

  const columns = useMemo(() => {
    const cols = Array.from({ length: colCount }, () => []);
    photos.forEach((p, i) => {
      cols[i % colCount].push(p);
    });
    return cols;
  }, [photos, colCount]);

  const applyProgress = useCallback((cols, p) => {
    const maxScrolls = getMaxScrolls(cols);
    const clamped = Math.max(0, Math.min(1, p));
    const curves = getAsymmetryCurves(cols.length);
    cols.forEach((c, i) => {
      const m = maxScrolls[i];
      const frac = (curves[i] ?? curves[0])(clamped);
      c.scrollTop = frac * m;
    });
    scrollProgressRef.current = clamped;
  }, []);

  useLayoutEffect(() => {
    const cols = columnRefs.current.filter(Boolean);
    if (cols.length === 0) return;
    applyProgress(cols, scrollProgressRef.current);
  }, [columns, colCount, photos, applyProgress]);

  useEffect(() => {
    const root = wheelCaptureRef.current;
    if (!root) return;

    const onWheel = (e) => {
      if (!root.contains(e.target)) return;

      const cols = columnRefs.current.filter(Boolean);
      if (cols.length === 0) return;

      const maxScrolls = getMaxScrolls(cols);
      if (maxScrolls.every((m) => m <= 0)) return;

      const dy = e.deltaY;
      const p = scrollProgressRef.current;
      const maxScrollTotal = Math.max(...maxScrolls);

      const deltaP =
        (dy / Math.max(400, maxScrollTotal * 0.85 + 200)) * 1.1;

      if (dy > 0) {
        /* At end of gallery: do not preventDefault so the page can scroll down */
        if (p >= 1 - 1e-4) return;
        e.preventDefault();
        applyProgress(cols, Math.min(1, p + deltaP));
        return;
      }
      if (dy < 0) {
        if (p <= 1e-4) return;
        e.preventDefault();
        applyProgress(cols, Math.max(0, p + deltaP));
      }
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, [applyProgress]);

  useEffect(() => {
    const onResize = () => {
      const cols = columnRefs.current.filter(Boolean);
      if (cols.length) applyProgress(cols, scrollProgressRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyProgress]);

  useEffect(() => {
    const root = wheelCaptureRef.current;
    if (!root || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      const cols = columnRefs.current.filter(Boolean);
      if (cols.length) applyProgress(cols, scrollProgressRef.current);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [applyProgress]);

  if (!photos?.length) return null;

  const wallHeight = { xs: "calc(100vh - 6rem)", sm: "calc(100vh - 5.5rem)", md: "calc(100vh - 5rem)" };

  return (
    <Box sx={{ width: "100%", py: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#888",
          mb: 1.5,
          px: { xs: 0.5, md: 0 },
        }}
      >
        
      </Typography>

      <Box
        sx={{
          borderRadius: "10px",
          p: { xs: 1, md: 1.25 },
          bgcolor: "rgba(250, 250, 250, 1)",
          boxShadow:
            "inset 0 0 0 1px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <Box
          ref={wheelCaptureRef}
          tabIndex={0}
          role="region"
          aria-label="Drive photos — scroll to see all, then continue down the page"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 1.25, md: 1.5 },
            alignItems: "stretch",
            width: "100%",
            outline: "none",
            /* Allow wheel to chain to the page once columns are at max scroll */
            overscrollBehavior: "auto",
            "&:focus-visible": {
              boxShadow: "0 0 0 2px rgba(191,4,73,0.35)",
              borderRadius: 1,
            },
          }}
        >
          {columns.map((col, colIdx) => (
            <Box
              key={`col-${colIdx}`}
              ref={(el) => {
                columnRefs.current[colIdx] = el;
              }}
              aria-label={`Column ${colIdx + 1}`}
              sx={{
                flex: 1,
                minWidth: 0,
                minHeight: 0,
                maxHeight: wallHeight,
                overflowY: "auto",
                overscrollBehaviorY: "auto",
                WebkitOverflowScrolling: "touch",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                pr: 0.25,
                ...scrollbarHiddenSx,
              }}
            >
              {col.map((item) => (
                <Box
                  key={item.id}
                  component="button"
                  type="button"
                  onClick={() => onSelect?.(item)}
                  sx={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    p: 0,
                    m: 0,
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    bgcolor: "#f3f4f6",
                    borderRadius: "8px",
                    overflow: "hidden",
                    aspectRatio: "305 / 400",
                    flexShrink: 0,
                    "&:focus-visible": {
                      outline: "2px solid #BF0449",
                      outlineOffset: 2,
                    },
                    "@media (hover: hover)": {
                      "&:hover .art-caption": { opacity: 1 },
                      "&:hover .art-img": { transform: "scale(1.06)" },
                    },
                    "@media (hover: none)": {
                      "& .art-caption": {
                        opacity: 1,
                        background:
                          "linear-gradient(180deg, transparent 35%, rgba(35,34,39,0.88) 100%)",
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    className="art-img"
                    src={item.image}
                    alt=""
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      transition: "transform 0.45s ease",
                    }}
                  />
                  <Box
                    className="art-caption"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: { xs: 1.5, sm: 2 },
                      bgcolor: "rgba(35, 34, 39, 0.85)",
                      color: "#fff",
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                      pointerEvents: "none",
                    }}
                  >
                    <Box />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Sora",
                          fontWeight: 600,
                          fontSize: { xs: "clamp(13px, 3.5vw, 16px)", md: "15px" },
                          lineHeight: 1.25,
                          color: "#fff",
                        }}
                      >
                        {item.headline}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Sora",
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.65)",
                          mt: 1,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.location}
                        <br />
                        {item.driveType}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
