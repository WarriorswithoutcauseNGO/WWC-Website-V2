import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  appendCustomNewsItem,
  getCustomNewsById,
  updateCustomNews,
} from "./newsletterStorage";
import {
  isDataImageUrl,
  isUsableCoverImage,
  readImageFileAsDataUrl,
} from "../../utils/imageFileUpload";

import defaultNewsImg from "../../assets/our_drives_1.png";

function isHttpUrl(s) {
  try {
    const u = new URL(s);
    return ["http:", "https:"].includes(u.protocol);
  } catch {
    return false;
  }
}

export default function AddNews() {
  const navigate = useNavigate();
  const { id: editId } = useParams();
  const isEdit = Boolean(editId);
  const numericId = editId ? Number(editId) : null;

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loaded, setLoaded] = useState(null);
  const coverFileInputRef = useRef(null);

  useEffect(() => {
    if (!isEdit || numericId == null || Number.isNaN(numericId)) {
      setLoaded(null);
      return;
    }
    const n = getCustomNewsById(numericId);
    if (!n) {
      navigate("/newsletter", { replace: true });
      return;
    }
    setLoaded(n);
    setTitle(n.title || "");
    setSubtitle(n.subtitle || "");
    setDate(n.date || "");
    setSummary(n.summary || "");
    setContent(n.content || "");
    const img = n.image;
    if (typeof img === "string") {
      if (isHttpUrl(img)) {
        setImageUrl(img);
        setImageDataUrl("");
      } else if (isDataImageUrl(img)) {
        setImageDataUrl(img);
        setImageUrl("");
      } else {
        setImageUrl("");
        setImageDataUrl("");
      }
    } else {
      setImageUrl("");
      setImageDataUrl("");
    }
    setDownloadUrl(typeof n.downloadUrl === "string" && n.downloadUrl !== "#" ? n.downloadUrl : "");
  }, [isEdit, numericId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const t = title.trim();
    const sub = subtitle.trim();
    const d = date.trim();
    const s = summary.trim();
    const c = content.trim();
    if (!t || !sub || !d || !s || !c) {
      setError("Please fill in title, subtitle, date, summary, and full content.");
      return;
    }

    let image = imageDataUrl || imageUrl.trim();
    if (image && !isUsableCoverImage(image)) image = "";
    if (!image) {
      if (isEdit && loaded?.image) image = loaded.image;
      else image = defaultNewsImg;
    }

    let dl = downloadUrl.trim();
    if (dl && !isHttpUrl(dl)) dl = "";
    if (!dl) dl = "#";

    setSubmitting(true);
    const payload = {
      title: t,
      subtitle: sub,
      date: d,
      summary: s,
      content: c,
      image,
      downloadUrl: dl,
      isCustom: true,
    };

    if (isEdit && numericId != null) {
      updateCustomNews(numericId, payload);
    } else {
      appendCustomNewsItem({
        id: 200000 + Date.now(),
        ...payload,
      });
    }
    setSubmitting(false);
    navigate("/newsletter");
  };

  const handleCoverFileChange = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError("");
    try {
      const data = await readImageFileAsDataUrl(file);
      setImageDataUrl(data);
      setImageUrl("");
    } catch (err) {
      setError(err?.message || "Could not use that image.");
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        background: "#FFF2FA",
        pt: { xs: 3, md: 5 },
        pb: 8,
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 640, mx: "auto" }}>
        <Typography
          component={Link}
          to="/newsletter"
          sx={{
            fontFamily: "Sora",
            fontSize: 14,
            color: "#BF0449",
            textDecoration: "none",
            display: "inline-block",
            mb: 2,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          ← Back to newsletter
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: "Sora",
            fontSize: { xs: "26px", md: "32px" },
            fontWeight: 700,
            color: "#373737",
            mb: 1,
          }}
        >
          {isEdit ? (
            <>
              Edit{" "}
              <Box
                component="span"
                sx={{ color: "#BF0449", fontStyle: "italic", fontFamily: "DM Serif Display, serif" }}
              >
                news
              </Box>
            </>
          ) : (
            <>
              Add{" "}
              <Box
                component="span"
                sx={{ color: "#BF0449", fontStyle: "italic", fontFamily: "DM Serif Display, serif" }}
              >
                news
              </Box>
            </>
          )}
        </Typography>
        <Typography sx={{ fontFamily: "Sora", fontSize: 15, color: "#666", mb: 3 }}>
          {isEdit
            ? "Changes apply in this browser only."
            : "New items are saved in this browser only (same as custom blogs)."}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            required
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            required
            label="Subtitle (e.g. WWC Buzz — edition)"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            fullWidth
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            required
            label="Date line"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            placeholder="e.g. Jan – Jun 2026"
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            required
            label="Short summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            fullWidth
            multiline
            minRows={2}
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            required
            label="Full content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            minRows={12}
            placeholder="Write the full story. Line breaks are preserved."
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            label="Cover image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            placeholder="https://…"
            disabled={Boolean(imageDataUrl)}
            helperText={
              imageDataUrl
                ? "Remove the uploaded image below to use a URL instead."
                : isEdit && loaded?.image && !imageUrl
                  ? "Leave empty to keep your current image."
                  : "Leave empty to use a default WWC image."
            }
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <Box>
            <Typography sx={{ fontFamily: "Sora", fontSize: 14, color: "#666", mb: 1 }}>
              Or upload a cover image from your device (max ~2.5 MB).
            </Typography>
            <input
              ref={coverFileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleCoverFileChange}
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.5 }}>
              <Button
                type="button"
                variant="outlined"
                onClick={() => coverFileInputRef.current?.click()}
                sx={{ fontFamily: "Sora", textTransform: "none", borderColor: "#BF0449", color: "#BF0449" }}
              >
                Choose image file
              </Button>
              {imageDataUrl && (
                <Button type="button" onClick={() => setImageDataUrl("")} sx={{ fontFamily: "Sora", textTransform: "none" }}>
                  Remove uploaded image
                </Button>
              )}
            </Box>
            {imageDataUrl && (
              <Box
                component="img"
                src={imageDataUrl}
                alt=""
                sx={{ mt: 1.5, maxWidth: "100%", maxHeight: 220, borderRadius: 1, objectFit: "contain", border: "1px solid #eee" }}
              />
            )}
          </Box>
          <TextField
            label="Download link (optional)"
            value={downloadUrl}
            onChange={(e) => setDownloadUrl(e.target.value)}
            fullWidth
            placeholder="https://… PDF or file"
            helperText="Shown as “Download Newsletter” in the reader. Leave empty to hide or use placeholder."
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />

          {error && (
            <Typography sx={{ color: "#c62828", fontFamily: "Sora", fontSize: 14 }}>
              {error}
            </Typography>
          )}

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={submitting}
              sx={{
                fontFamily: "Sora",
                fontWeight: 600,
                textTransform: "none",
                px: 3,
                background: "linear-gradient(135deg, #BF0449, #BF3475)",
                "&:hover": { background: "linear-gradient(135deg, #a0033d, #a02d63)" },
              }}
            >
              {isEdit ? "Save changes" : "Save to this browser"}
            </Button>
            <Button component={Link} to="/newsletter" sx={{ fontFamily: "Sora", textTransform: "none" }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
