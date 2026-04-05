import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  appendCustomBlog,
  getCustomBlogById,
  updateCustomBlog,
} from "./blogsStorage";

import defaultBlogImg from "../../assets/our_drives_1.png";

export const GRADIENT_PRESETS = [
  { label: "Pink — rose", value: "linear-gradient(135deg, #BF0449, #BF3475)" },
  { label: "Pink — amber", value: "linear-gradient(135deg, #BF0449, #F28705)" },
  { label: "Rose — gold", value: "linear-gradient(135deg, #BF3475, #F2B705)" },
  { label: "Pink — yellow", value: "linear-gradient(135deg, #BF0449, #F2B705)" },
  { label: "Magenta — orange", value: "linear-gradient(135deg, #BF3475, #F28705)" },
];

function isHttpUrl(s) {
  try {
    const u = new URL(s);
    return ["http:", "https:"].includes(u.protocol);
  } catch {
    return false;
  }
}

export default function AddBlog() {
  const navigate = useNavigate();
  const { id: editId } = useParams();
  const isEdit = Boolean(editId);
  const numericId = editId ? Number(editId) : null;

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Community");
  const [tagsRaw, setTagsRaw] = useState("");
  const [readTime, setReadTime] = useState("5");
  const [imageUrl, setImageUrl] = useState("");
  const [gradient, setGradient] = useState(GRADIENT_PRESETS[0].value);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  /** Snapshot of stored post when editing (for preserving img if URL left blank). */
  const [loadedBlog, setLoadedBlog] = useState(null);

  useEffect(() => {
    if (!isEdit || numericId == null || Number.isNaN(numericId)) {
      setLoadedBlog(null);
      return;
    }
    const b = getCustomBlogById(numericId);
    if (!b) {
      navigate("/blogs", { replace: true });
      return;
    }
    setLoadedBlog(b);
    setTitle(b.title);
    setSummary(b.summary);
    setContent(b.content);
    setCategory(b.category || "Community");
    setTagsRaw(Array.isArray(b.tags) ? b.tags.join(", ") : "");
    setReadTime(String(b.readTime ?? 5));
    const img = b.img;
    if (typeof img === "string" && isHttpUrl(img)) setImageUrl(img);
    else setImageUrl("");
    const g = b.gradient || GRADIENT_PRESETS[0].value;
    const presetMatch = GRADIENT_PRESETS.some((p) => p.value === g);
    setGradient(presetMatch ? g : GRADIENT_PRESETS[0].value);
  }, [isEdit, numericId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const t = title.trim();
    const s = summary.trim();
    const c = content.trim();
    if (!t || !s || !c) {
      setError("Please fill in title, summary, and full content.");
      return;
    }
    const rt = Math.max(1, parseInt(readTime, 10) || 5);
    const parsedTags = tagsRaw
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
    const tags = parsedTags.length > 0 ? parsedTags : ["WWC"];

    let img = imageUrl.trim();
    if (img && !isHttpUrl(img)) img = "";
    if (!img) {
      if (isEdit && loadedBlog?.img) img = loadedBlog.img;
      else img = defaultBlogImg;
    }

    setSubmitting(true);
    const payload = {
      title: t,
      summary: s,
      content: c,
      img,
      category: category.trim() || "Community",
      tags,
      readTime: rt,
      gradient,
      isCustom: true,
    };

    if (isEdit && numericId != null) {
      updateCustomBlog(numericId, payload);
    } else {
      appendCustomBlog({
        id: 100000 + Date.now(),
        ...payload,
      });
    }
    setSubmitting(false);
    navigate("/blogs");
  };

  return (
    <Box
      component="main"
      className="add-blog-page"
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
          to="/blogs"
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
          ← Back to blogs
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
              Edit <Box component="span" sx={{ color: "#BF0449", fontStyle: "italic", fontFamily: "DM Serif Display, serif" }}>blog</Box>
            </>
          ) : (
            <>
              Add a <Box component="span" sx={{ color: "#BF0449", fontStyle: "italic", fontFamily: "DM Serif Display, serif" }}>blog</Box>
            </>
          )}
        </Typography>
        <Typography sx={{ fontFamily: "Sora", fontSize: 15, color: "#666", mb: 3 }}>
          {isEdit
            ? "Changes apply in this browser only."
            : "New posts are saved in this browser only. Share the link or copy content elsewhere if you need them on another device."}
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
            placeholder="Write the full article. Line breaks are preserved."
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            label="Tags (comma-separated)"
            value={tagsRaw}
            onChange={(e) => setTagsRaw(e.target.value)}
            fullWidth
            placeholder="e.g. Volunteering, Delhi, Education"
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            label="Read time (minutes)"
            type="number"
            inputProps={{ min: 1 }}
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            sx={{ maxWidth: 200, "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            label="Cover image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            placeholder="https://…"
            helperText={
              isEdit && loadedBlog?.img && !imageUrl
                ? "Leave empty to keep your current image."
                : "Leave empty to use a default WWC image."
            }
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          />
          <TextField
            select
            label="Card gradient"
            value={gradient}
            onChange={(e) => setGradient(e.target.value)}
            fullWidth
            sx={{ "& .MuiInputBase-root": { fontFamily: "Sora" } }}
          >
            {GRADIENT_PRESETS.map((g) => (
              <MenuItem key={g.value} value={g.value}>
                {g.label}
              </MenuItem>
            ))}
          </TextField>

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
              {isEdit ? "Save changes" : "Publish to this browser"}
            </Button>
            <Button component={Link} to="/blogs" sx={{ fontFamily: "Sora", textTransform: "none" }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
