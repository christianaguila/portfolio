export interface Project {
  title: string;
  description: string;
  stack: string[];
  details: string;
  images: string[];
  loom?: string;
  github?: string;
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    title: "GoHighLevel CRM — Real Estate Full Customer Lifecycle Automation",
    description:
      "End-to-end CRM and marketing automation for a Metro Manila real estate brokerage — from first inquiry to closed deal, with zero manual follow-up required from the broker.",
    stack: ["GoHighLevel", "CRM & Pipeline", "Email Automation", "SMS Automation", "Calendar Automation", "Lead Segmentation"],
    details:
      "Built a complete 9-stage sales pipeline (New Inquiry → Closed Won / Long-Term Nurture) with 8 modular workflows covering: 7-day lead follow-up sequence with Wait-for-Reply branching, automatic hot/warm/cold/investor tagging on form submission, property viewing calendar with 4 automated SMS reminders, 12-month cold lead nurture loop with monthly market updates, and post-viewing review request sequences for both non-converting and closed-won leads. Every pipeline stage updates automatically based on lead behavior — no manual intervention. Broker has full visibility at all times; system scales from 1 lead to 1,000 without additional effort.",
    images: [
      "/projects/ghl-real-estate-pipeline-1.png",
      "/projects/ghl-real-estate-pipeline-2.png",
      "/projects/ghl-real-estate-workflows.png",
      "/projects/ghl-real-estate-funnel.png",
      "/projects/ghl-lead-inquiry-workflow.png",
    ],
    flagship: true,
  },
  {
    title: "Dental Clinic AI Automation System",
    description:
      "Full AI receptionist for Heavenly Smile Dental Clinic Manila — 3-module system handling bookings, reminders, and patient reactivation via Facebook Messenger.",
    stack: ["n8n", "Claude API", "Facebook Messenger", "Google Calendar", "Google Sheets"],
    details:
      "AI Chat Agent books/reschedules/cancels appointments via Messenger, checks Google Calendar availability, and logs to CRM. Pre-appointment reminders run daily at 9AM. Follow-up module sends thank-you messages and monthly reactivation campaigns for patients 60+ days inactive.",
    images: [
      "/projects/dental-clinic-module-1.png",
      "/projects/dental-clinic-module-2.png",
      "/projects/dental-clinic-module-3.png",
    ],
    flagship: true,
  },
  {
  title: "AI YouTube Content Package Generator",
  description:
    "Drop a video in Google Drive, get a complete publish-ready content package in under 5 minutes — title, description, chapters, Shorts candidates, and rendered thumbnail.",
  stack: ["n8n", "AssemblyAI", "Claude API", "APITemplate.io", "Google Drive", "Google Docs"],
  details:
    "End-to-end automation for YouTube creators. AssemblyAI transcribes the video with speaker labels and auto-generated chapters, Claude generates SEO-optimized titles, first-person descriptions, ranked Shorts candidates with hooks and captions, and thumbnail concepts. APITemplate.io renders a branded thumbnail dynamically. Everything saves to a dated, organized Google Drive folder per video. Built-in word-level timestamp grounding prevents AI hallucination of chapter times. Cost per video: $0.06 talking head, $0.33 long-form podcast.",
  images: ["/projects/youtube-content-package.png"],
  flagship: true,
  },
  {
    title: "AI Social Media Content Calendar Generator",
    description:
      "Client fills a form, Claude generates a full monthly content calendar, Google Slides API builds the deck, Gmail delivers it — under 60 seconds.",
    stack: ["n8n", "Claude API", "Google Slides API", "Google Forms", "Gmail"],
    details:
      "End-to-end automated content planning. Form submission triggers Claude to generate a structured monthly calendar in JSON, which is then transformed into a polished Google Slides presentation and emailed to the client.",
    images: ["/projects/social-media-calendar.png"],
    loom: "https://www.loom.com/share/e9cf179aab3e4e43b6f448a6f07ac5dc",
    github: "https://github.com/christianaguila/ai-powered-social-media-content-calendar-generator",
  },
  {
    title: "Automated Client Assessment Pipeline",
    description:
      "Stripe payment triggers form delivery, Claude generates a personalized business report as PDF, emailed automatically — zero human involvement.",
    stack: ["n8n", "Stripe", "Typeform", "Claude API", "Gmail", "PDF"],
    details:
      "Complete paid assessment flow: Stripe payment confirmation sends form link, client submission triggers Claude analysis, generates personalized business report, converts to PDF via pdfmunk, and delivers via email.",
    images: [
      "/projects/assessment-payment.png",
      "/projects/assessment-report.png",
    ],
    loom: "https://www.loom.com/share/d132de7da9a6424f9c8d6940885c8764",
  },
  {
    title: "AI Customer Support Bot",
    description:
      "Monitors inbox, Claude classifies emails by category, sentiment, and priority, then creates personalized Gmail drafts for one-click review.",
    stack: ["n8n", "Gmail API", "Claude API"],
    details:
      "Automated email triage: monitors inbox, Claude classifies into 5 categories with sentiment analysis and priority scoring. Creates pre-written Gmail drafts with personalized greetings extracted from sender headers.",
    images: ["/projects/customer-support-bot.png"],
    loom: "https://www.loom.com/share/baf79ee055a3400dbc6f3dedb380a577",
  },
  {
    title: "YouTube Comment Bot",
    description:
      "Fetches new comments every 15 minutes, deduplicates against log, Claude generates reply suggestions, notifies via Slack.",
    stack: ["n8n", "YouTube Data API", "Claude API", "Slack", "Google Sheets"],
    details:
      "Automated community management: polls YouTube every 15 minutes for new comments, deduplicates against Sheets log, Claude generates contextual reply suggestions, sends Slack notifications for review.",
    images: ["/projects/youtube-comment-bot.png"],
  },
  {
    title: "AI Job Matching System",
    description:
      "Daily RSS fetch from remote job boards, Claude scores each job 1-10 for relevance, delivers a morning digest with top opportunities.",
    stack: ["n8n", "RSS", "Claude API", "Google Sheets", "Gmail"],
    details:
      "Automated job hunting: daily fetch from We Work Remotely via RSS, Claude evaluates and scores each position 1-10 for relevance, compiles morning digest email with top opportunities and reasoning.",
    images: ["/projects/job-matching.png"],
    loom: "https://www.loom.com/share/4eda50a045264b3aa3f0ecfde8bd2af1",
  },
  {
    title: "AI Sales Reporting Engine",
    description:
      "Daily schedule reads sales data from Sheets, Claude generates executive HTML reports with observations and recommendations.",
    stack: ["n8n", "Google Sheets", "Claude API", "Gmail"],
    details:
      "Automated executive reporting: daily scheduled workflow reads sales data from Google Sheets, Claude generates comprehensive HTML reports with trend observations, actionable recommendations, and KPI highlights, delivered via Gmail.",
    images: ["/projects/sales-reporting.png"],
  },
];
