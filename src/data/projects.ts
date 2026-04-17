export interface Project {
  title: string;
  description: string;
  stack: string[];
  details: string;
  image?: string;
  loom?: string;
  github?: string;
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    title: "Dental Clinic AI Automation System",
    description:
      "Full AI receptionist for Heavenly Smile Dental Clinic Manila — 3-module system handling bookings, reminders, and patient reactivation via Facebook Messenger.",
    stack: ["n8n", "Claude API", "Facebook Messenger", "Google Calendar", "Google Sheets"],
    details:
      "AI Chat Agent books/reschedules/cancels appointments via Messenger, checks Google Calendar availability, and logs to CRM. Pre-appointment reminders run daily at 9AM. Follow-up module sends thank-you messages and monthly reactivation campaigns for patients 60+ days inactive.",
    image: "/projects/dental-clinic-module-1.png",
    flagship: true,
  },
  {
    title: "AI Social Media Content Calendar Generator",
    description:
      "Client fills a form, Claude generates a full monthly content calendar, Google Slides API builds the deck, Gmail delivers it — under 60 seconds.",
    stack: ["n8n", "Claude API", "Google Slides API", "Google Forms", "Gmail"],
    details:
      "End-to-end automated content planning. Form submission triggers Claude to generate a structured monthly calendar in JSON, which is then transformed into a polished Google Slides presentation and emailed to the client.",
    image: "/projects/social-media-calendar.png",
    loom: "https://www.loom.com/share/e9cf179aab3e4e43b6f448a6f07ac5dc",
    github: "https://github.com/christianaguila/ai-powered-social-media-content-calendar-generator",
  },
  {
    title: "Automated Client Assessment Pipeline",
    description:
      "Stripe payment triggers form delivery, Claude generates a personalized business report as PDF, emailed automatically — zero human involvement.",
    stack: ["n8n", "Stripe", "Google Forms", "Claude API", "Gmail", "PDF"],
    details:
      "Complete paid assessment flow: Stripe payment confirmation sends form link, client submission triggers Claude analysis, generates personalized business report, converts to PDF via pdfmunk, and delivers via email.",
    loom: "https://www.loom.com/share/d132de7da9a6424f9c8d6940885c8764",
  },
  {
    title: "AI Customer Support Bot",
    description:
      "Monitors inbox, Claude classifies emails by category, sentiment, and priority, then creates personalized Gmail drafts for one-click review.",
    stack: ["n8n", "Gmail API", "Claude API"],
    details:
      "Automated email triage: monitors inbox, Claude classifies into 5 categories with sentiment analysis and priority scoring. Creates pre-written Gmail drafts with personalized greetings extracted from sender headers.",
    image: "/projects/customer-support-bot.png",
    loom: "https://www.loom.com/share/baf79ee055a3400dbc6f3dedb380a577",
  },
  {
    title: "AI Lead Capture & Follow-up",
    description:
      "Form submission triggers AI qualification — urgency scoring, lead quality assessment, personalized email + SMS, all logged automatically.",
    stack: ["n8n", "Google Forms", "Claude API", "Gmail", "Twilio", "Google Sheets"],
    details:
      "Automated lead pipeline: form submission triggers Claude to qualify leads with urgency scoring, lead quality assessment, and recommended actions. Sends personalized email and SMS follow-ups, logs everything to Sheets.",
  },
  {
    title: "YouTube Comment Bot",
    description:
      "Fetches new comments every 15 minutes, deduplicates against log, Claude generates reply suggestions, notifies via Slack.",
    stack: ["n8n", "YouTube Data API", "Claude API", "Slack", "Google Sheets"],
    details:
      "Automated community management: polls YouTube every 15 minutes for new comments, deduplicates against Sheets log, Claude generates contextual reply suggestions, sends Slack notifications for review.",
    image: "/projects/youtube-comment-bot.png",
  },
  {
    title: "AI Job Matching System",
    description:
      "Daily RSS fetch from remote job boards, Claude scores each job 1-10 for relevance, delivers a morning digest with top opportunities.",
    stack: ["n8n", "RSS", "Claude API", "Google Sheets", "Gmail"],
    details:
      "Automated job hunting: daily fetch from We Work Remotely via RSS, Claude evaluates and scores each position 1-10 for relevance, compiles morning digest email with top opportunities and reasoning.",
    loom: "https://www.loom.com/share/4eda50a045264b3aa3f0ecfde8bd2af1",
  },
  {
    title: "AI Sales Reporting Engine",
    description:
      "Daily schedule reads sales data from Sheets, Claude generates executive HTML reports with observations and recommendations.",
    stack: ["n8n", "Google Sheets", "Claude API", "Gmail"],
    details:
      "Automated executive reporting: daily scheduled workflow reads sales data from Google Sheets, Claude generates comprehensive HTML reports with trend observations, actionable recommendations, and KPI highlights, delivered via Gmail.",
  },
];
