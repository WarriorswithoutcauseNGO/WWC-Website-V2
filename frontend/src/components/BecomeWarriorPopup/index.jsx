import React, { useState, useEffect, useCallback } from "react";
import "./BecomeWarriorPopup.css";

const slides = [
  {
    heading: "Become a Warrior",
    text: "Stand up for change — no cause needed, just courage.",
  },
  {
    heading: "Empower Communities",
    text: "Help us bring education, health, and hope to those in need.",
  },
  {
    heading: "Create Impact",
    text: "Every small act of kindness builds a bigger, better world.",
  },
];

const interestOptions = [
  "Education",
  "Healthcare",
  "Environment",
  "Community Development",
  "Fundraising",
  "Event Management",
  "Other",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  interest: "",
};

export default function BecomeWarriorPopup() {
  const [open, setOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("bw-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const iv = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(iv);
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    sessionStorage.setItem("bw-popup-dismissed", "1");
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer form submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      close();
      setForm(initialForm);
      setSubmitted(false);
    }, 2000);
  };

  if (!open) return null;

  const slide = slides[slideIdx];

  return (
    <div className="bw-popup-overlay" onClick={close}>
      <div className="bw-popup" onClick={(e) => e.stopPropagation()}>
        <div className="bw-popup-banner">
          <h2>{slide.heading}</h2>
          <p>{slide.text}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              marginTop: 12,
            }}
          >
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setSlideIdx(i)}
                style={{
                  width: i === slideIdx ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    i === slideIdx ? "#fff" : "rgba(255,255,255,0.45)",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="bw-popup-body" style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "Sora",
                fontSize: 18,
                fontWeight: 600,
                color: "#ff3ab3",
                margin: "24px 0",
              }}
            >
              Thank you for signing up!
            </p>
            <p style={{ fontFamily: "Sora", fontSize: 14, color: "#666" }}>
              We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form className="bw-popup-body" onSubmit={handleSubmit}>
            <div className="bw-popup-row">
              <div className="bw-popup-field">
                <label>
                  First Name <span className="req">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
              </div>
              <div className="bw-popup-field">
                <label>
                  Last Name <span className="req">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="bw-popup-field">
              <label>
                Email <span className="req">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="bw-popup-row">
              <div className="bw-popup-field">
                <label>
                  Phone Number <span className="req">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div className="bw-popup-field">
                <label>Your Interest</label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                >
                  <option value="">Select an interest</option>
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bw-popup-row">
              <div className="bw-popup-field">
                <label>State</label>
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </div>
              <div className="bw-popup-field">
                <label>City</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>
            </div>

            <div className="bw-popup-actions">
              <button type="submit" className="bw-popup-submit">
                Submit
              </button>
              <button type="button" className="bw-popup-close" onClick={close}>
                Maybe later
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
