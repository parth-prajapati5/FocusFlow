/**
 * Centralized Application & Website Configuration
 * Ensures product branding, release URLs, technical specifications,
 * and feature copy remain consistent, accurate, and easily maintained.
 */

export const SITE_CONFIG = {
  name: 'Clarity',
  shortTagline: 'Understand your digital life. Take control when you want to.',
  longTagline:
    'Clarity is a calm, local-first Windows desktop application that measures your application and website screen time—giving you objective perspective on your work without judgment.',
  downloadUrl:
    import.meta.env.VITE_DOWNLOAD_URL ||
    'https://github.com/parth-prajapati5/Clarity/releases/download/v0.1.0/Clarity_0.1.0_x64-setup.exe',
  githubUrl: 'https://github.com/parth-prajapati5/Clarity',
  version: '0.1.0',
  installerSize: '4.5 MB',
  platform: 'Windows 10 / 11 (64-bit)',
  architecture: 'Tauri 2 + Rust + SQLite (bundled)',
  dataStorage: '100% Local SQLite on your machine',
  license: 'Free & Open Core',
  status: 'Production Ready',

  navLinks: [
    { href: '#preview', label: 'Overview' },
    { href: '#features', label: 'Capabilities' },
    { href: '#privacy', label: 'Privacy & Architecture' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Tiers' },
    { href: '#faq', label: 'FAQ' },
  ],

  statsHighlights: [
    { label: 'Privacy Model', value: '100% Local', detail: 'Zero telemetry, no cloud required' },
    { label: 'Installer Footprint', value: '< 5 MB', detail: 'Native Rust binary, instant launch' },
    { label: 'Memory Footprint', value: '< 50 MB', detail: 'Lightweight background tracking' },
    { label: 'Platform Support', value: 'Windows 10 & 11', detail: 'Native Win32 & UI Automation' },
  ],

  features: [
    {
      id: 'app-tracking',
      title: 'Automated Application Tracking',
      tagline: 'Foreground window awareness without manual timers',
      description:
        'Clarity listens to active window events using native Windows Win32 APIs. It accurately records when each program is in focus down to the second, so you get an objective reflection of your day without having to start or stop a timer.',
      badge: 'Native Win32 Engine',
      category: 'Core Tracking',
      status: 'Available',
    },
    {
      id: 'website-tracking',
      title: 'Website & URL Visibility',
      tagline: 'See browser usage without invasive browser extensions',
      description:
        'Leverages Windows UI Automation (UIA) to inspect top-level browser address bars across modern browsers. Understand where your online research and web browsing time is spent.',
      badge: 'Windows UI Automation',
      category: 'Core Tracking',
      status: 'Active Feature',
    },
    {
      id: 'analytics',
      title: 'Daily & Weekly Analytics',
      tagline: 'Clear trends and distributions without judgmental labels',
      description:
        'Explore your screen time by hour, day, or week. Clarity never labels you as "lazy" or "distracted"—it presents clean, neutral data so you can draw your own conclusions.',
      badge: 'SQLite Aggregations',
      category: 'Insights',
      status: 'Available',
    },
    {
      id: 'focus-mode',
      title: 'Focus Sessions',
      tagline: 'Dedicated distraction-free intervals for deep work',
      description:
        'Structure your work into intentional, uninterrupted focus blocks. Set your session target, track your sustained focus flow, and review your historical focus discipline over time.',
      badge: 'Pro Tier',
      category: 'Flow & Focus',
      status: 'Pro Feature',
    },
    {
      id: 'blocking',
      title: 'Application & Website Blocking',
      tagline: 'Healthy boundaries configured on your own terms',
      description:
        'Establish rules to minimize impulsive multitasking during dedicated work windows. Soft boundaries and cooldown timers give you the space to stay on track without frustrating lockdowns.',
      badge: 'Pro Tier',
      category: 'Self-Regulation',
      status: 'Pro Feature',
    },
    {
      id: 'local-first',
      title: 'Local-First SQLite Storage',
      tagline: 'Your personal data never leaves your computer',
      description:
        'All tracking logs, session records, and configurations are stored in an embedded SQLite database in your local Windows AppData folder. No mandatory accounts, no cloud sync, and zero ad trackers.',
      badge: 'Zero Cloud Storage',
      category: 'Privacy',
      status: 'Built-in',
    },
  ],

  pricing: {
    free: {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Complete screen time intelligence and local tracking for individuals.',
      features: [
        'Automated application usage tracking',
        'Website usage tracking',
        'Daily screen time breakdown',
        '7-day historical weekly analytics',
        '100% Local SQLite storage on device',
        'Zero tracking, zero telemetry, no account required',
        'System tray background mode',
      ],
      cta: 'Download for Windows',
      highlight: false,
    },
    pro: {
      name: 'Pro',
      price: '$4.99',
      period: 'one-time or monthly support',
      description: 'Extended focus tools and active boundaries for dedicated deep workers.',
      features: [
        'Everything in Free',
        'Structured Focus Mode sessions',
        'Application blocking rules',
        'Website domain blocking',
        'Extended monthly & multi-week analytics',
        'Custom category tags & rules',
        'Priority feature roadmap updates',
      ],
      cta: 'Explore Pro Features',
      highlight: true,
      badge: 'For Deep Work',
    },
  },

  faqs: [
    {
      question: 'What is Clarity?',
      answer:
        'Clarity is a modern Windows desktop application designed to help you understand your digital habits. It tracks which desktop applications and websites are actively in focus, recording usage in high-resolution time blocks so you can see where your day goes.',
    },
    {
      question: 'Does Clarity run on my version of Windows?',
      answer:
        'Yes. Clarity is built for Windows 10 (64-bit) and Windows 11. It utilizes native Win32 APIs for window detection and Windows UI Automation for browser address bar visibility.',
    },
    {
      question: 'Is my usage data private? Does it upload to the cloud?',
      answer:
        'No data is uploaded to the cloud. Clarity is strictly local-first. All records are saved directly to an embedded SQLite database inside your local Windows AppData directory (%APPDATA%\\Clarity). We do not operate tracking servers or require an account.',
    },
    {
      question: 'Does Clarity impact system performance or slow down my PC?',
      answer:
        'Not at all. The background tracking daemon is written in Rust and compiled to native machine code. It uses lightweight OS event hooks and typically consumes under 50 MB of RAM and less than 0.5% CPU when idle.',
    },
    {
      question: 'Does Clarity judge or penalize me for certain applications?',
      answer:
        'Never. Clarity is built on the philosophy of objective self-awareness. It does not label software as "distraction" or "wasted time"—it simply shows honest, accurate durations so you can make your own decisions.',
    },
    {
      question: 'How do Focus Mode and Application Blocking work?',
      answer:
        'Focus Mode lets you define timed work intervals. Application and website blocking allow you to set boundaries during active focus sessions. These features are part of the Pro tier and are designed to encourage self-regulation rather than rigid restriction.',
    },
    {
      question: 'How do I install and run Clarity?',
      answer:
        'Download the official Windows installer (.exe) directly from our verified GitHub Releases. Run the installer, and Clarity will automatically launch into your Windows system tray, tracking usage seamlessly.',
    },
    {
      question: 'Is there a free version available?',
      answer:
        'Yes. The core tracking engine, daily metrics, and 7-day weekly analytics are completely free to use with no time limits and no credit card required.',
    },
  ],

  howItWorksSteps: [
    {
      step: '01',
      title: 'Download & Install',
      description:
        'Get the compact 4.5 MB Windows installer. Runs with zero bloated dependencies and sets up in less than 30 seconds.',
    },
    {
      step: '02',
      title: 'Runs Silently in the Background',
      description:
        'Clarity lives quietly in your system tray. Native Windows hooks observe the active window without slowing down your computer.',
    },
    {
      step: '03',
      title: 'Review Objective Insights',
      description:
        'Open the clean dashboard anytime to inspect your hourly distributions, top applications, and focus patterns.',
    },
  ],
}
