import { useState } from "react";

const scripts = [
  {
    tag: "Standard Reply",
    color: "#2D6A4F",
    note: "Use for most general listings",
    text: `Hi [Name],

We may be able to help. We're Harbour & Hills Care, an Adelaide-based agency that places experienced nannies, babysitters, and mother's helps with families.

All of our carers are police-checked and reference-verified before we place them with anyone, and we try to match based on your schedule and what your family actually needs — not just whoever's available.

If you could share a bit more about what you're looking for (ages of the children, days and hours, whether it's a one-off or something ongoing), we'd be happy to see who we have available.

Feel free to DM us directly and we can go from there.`
  },
  {
    tag: "Urgent / ASAP Request",
    color: "#C9501C",
    note: "When the post mentions urgency or a tight timeframe",
    text: `Hi [Name],

We understand you're working to short notice — we do have carers available and can often turn things around within 24 to 48 hours depending on your requirements.

We're Harbour & Hills Care, an Adelaide childcare agency. Everyone we place is police-checked and comes with verified references, so there's no compromise on that side even when things are urgent.

If you DM us the dates, times, and ages of the children, we'll check availability straight away and come back to you as quickly as we can.`
  },
  {
    tag: "Regular / Ongoing Nanny",
    color: "#1B4F8A",
    note: "For families seeking a consistent, ongoing placement",
    text: `Hi [Name],

Finding the right ongoing nanny is really about fit as much as it is qualifications — and that's something we take seriously. We're Harbour & Hills Care, an Adelaide nanny agency that focuses on longer-term placements.

When we're matching for a regular role, we take the time to understand your family's routine, what the kids respond well to, and what matters most to you before we introduce anyone. All carers are police-checked, first-aid certified, and fully referenced.

If you'd like to have a conversation about what you're looking for, feel free to DM us. Happy to answer any questions first if that's easier.`
  },
  {
    tag: "Price Enquiry",
    color: "#5C3D99",
    note: "When cost is mentioned or the post seems budget-sensitive",
    text: `Hi [Name],

Rates vary depending on the type of carer, the hours involved, and whether it's a casual or ongoing arrangement — so rather than give you a number that may not be relevant to your situation, it's usually worth a quick conversation first.

We're Harbour & Hills Care, an Adelaide childcare agency. We're transparent about costs and there's no obligation in having a chat — we'd rather you have the right information upfront than be surprised later.

Feel free to DM us with what you're looking for and we can give you a clearer picture.`
  },
  {
    tag: "Sydney Families",
    color: "#0A7B8A",
    note: "For listings in Sydney groups",
    text: `Hi [Name],

We may be able to assist. We're Harbour & Hills Care, a childcare agency operating across both Adelaide and Sydney, placing experienced nannies, babysitters, and mother's helps with families.

All of our carers are police-checked and reference-verified, and we match based on your family's schedule and specific needs rather than just filling a spot.

If you DM us the details — ages of the children, hours needed, and whether it's a regular or one-off arrangement — we'll let you know what we have available.`
  },
  {
    tag: "Mother's Help / Newborn",
    color: "#B5462B",
    note: "For posts about newborns, postnatal support, or mother's help",
    text: `Hi [Name],

The newborn stage is genuinely demanding, and having the right person around makes a real difference — especially someone who understands what that period actually looks like day to day.

We're Harbour & Hills Care, and we place experienced mother's helps and newborn carers with families in Adelaide and Sydney. The carers we work with in this space are comfortable with sleep routines, feeding support, light household tasks, and helping with older siblings where needed. Everyone is police-checked and personally referenced.

Every family's situation is a bit different, so it's worth a quick conversation to work out what would actually be useful for you. DM us whenever suits and we can take it from there.`
  }
];

export default function FBScripts() {
  const [copied, setCopied] = useState(null);
  const [active, setActive] = useState(0);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      minHeight: "100vh",
      background: "#F7F4EF",
      padding: "0 0 60px"
    }}>
      {/* Header */}
      <div style={{
        background: "#1A1A2E",
        padding: "28px 24px 22px",
        borderBottom: "4px solid #E8C547"
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "#E8C547", textTransform: "uppercase", marginBottom: 6, fontFamily: "monospace" }}>
            Harbour & Hills Care
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
            Facebook Group Reply Scripts
          </div>
          <div style={{ fontSize: 13, color: "#aaa", marginTop: 6 }}>
            Select a scenario, copy the script, personalise the name, and post.
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 16px" }}>

        {/* Tab Selector */}
        <div style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          paddingBottom: 4,
          marginTop: 24,
          marginBottom: 20,
          scrollbarWidth: "none"
        }}>
          {scripts.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0,
                padding: "7px 14px",
                borderRadius: 40,
                border: `2px solid ${active === i ? s.color : "#ddd"}`,
                background: active === i ? s.color : "#fff",
                color: active === i ? "#fff" : "#444",
                fontFamily: "inherit",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
                whiteSpace: "nowrap"
              }}
            >
              {s.tag}
            </button>
          ))}
        </div>

        {/* Active Card */}
        {scripts.map((s, i) => i === active && (
          <div key={i} style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid #e8e8e8",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)"
          }}>
            {/* Card Header */}
            <div style={{
              background: s.color,
              padding: "16px 20px",
            }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{s.tag}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>{s.note}</div>
            </div>

            {/* Script Body */}
            <div style={{ padding: "20px 20px 0" }}>
              <div style={{
                background: "#FAFAF8",
                border: "1px solid #EEE",
                borderRadius: 10,
                padding: "16px 18px",
                fontSize: 14,
                lineHeight: 1.75,
                color: "#333",
                whiteSpace: "pre-wrap",
                fontFamily: "'Georgia', serif"
              }}>
                {s.text}
              </div>
            </div>

            {/* Copy Button */}
            <div style={{ padding: "16px 20px 20px", display: "flex", gap: 10 }}>
              <button
                onClick={() => handleCopy(s.text, i)}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: copied === i ? "#2D6A4F" : s.color,
                  color: "#fff",
                  fontFamily: "inherit",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background 0.2s",
                  letterSpacing: 0.3
                }}
              >
                {copied === i ? "Copied" : "Copy Script"}
              </button>
            </div>

            {/* Tip */}
            <div style={{
              background: "#FFF9EC",
              borderTop: "1px solid #F0E8D0",
              padding: "12px 20px",
              fontSize: 12,
              color: "#7A6030",
              lineHeight: 1.5
            }}>
              <strong>Tip:</strong> Replace <strong>[Name]</strong> with the poster's first name before sending. A personalised reply will always outperform a generic one.
            </div>
          </div>
        ))}

        {/* Best Practices */}
        <div style={{
          marginTop: 28,
          background: "#1A1A2E",
          borderRadius: 14,
          padding: "20px",
          color: "#ccc",
          fontSize: 13,
          lineHeight: 1.7
        }}>
          <div style={{ color: "#E8C547", fontWeight: 700, fontSize: 14, marginBottom: 10, letterSpacing: 0.5 }}>
            General Best Practices
          </div>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Reply within <strong style={{ color: "#fff" }}>30–60 minutes</strong> of a post going up — speed signals reliability</li>
            <li>Always <strong style={{ color: "#fff" }}>personalise the name</strong> — never send "[Name]" literally</li>
            <li>Follow up with a <strong style={{ color: "#fff" }}>DM</strong> after commenting — move the conversation off the group</li>
            <li>Keep a <strong style={{ color: "#fff" }}>short DM opener</strong> ready to send immediately after your comment</li>
            <li>If a post is <strong style={{ color: "#fff" }}>older than 48 hours</strong>, check if it's still active before replying</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
