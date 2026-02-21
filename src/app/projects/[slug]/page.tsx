import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = false;

export const projectDetails: Record<
  string,
  {
    title: string;
    metaDescription: string;
    project: Parameters<typeof ProjectTemplate>[0]['project'];
  }
> = {
  'connect-5': {
    title: 'Connect 5 Game | Zisis Kostakakis',
    metaDescription: 'Java Game with Graphical User Interface and AI Implementation.',
    project: {
      id: 'connect-5',
      href: '/projects/connect-5',
      title: 'Connect 5 Java Game',
      description: 'Java Game with Graphical User Interface and AI Implementation.',
      longDescription: `Connect-Five is a strategic two-player board game similar to tic-tac-toe, featuring an 8-column by 7-row vertical board. Players take turns placing colored pieces (typically black and red) with the goal of being the first to align five pieces horizontally, vertically, or diagonally.

The game implements a sophisticated AI opponent using the minimax algorithm with alpha-beta pruning optimization, providing challenging gameplay at multiple difficulty levels. The vertical board design adds a unique twist where pieces drop to the lowest available position in each column, creating strategic depth and requiring players to think several moves ahead.

Built with Java and Swing, the game features a polished graphical user interface that makes gameplay intuitive and enjoyable. The AI implementation showcases advanced game theory concepts and provides an excellent demonstration of algorithmic problem-solving in game development.`,
      githubUrl: 'https://github.com/ZisisKostakakis/Connect-5-game',
      technologies: [
        'Java',
        'Swing',
        'AI/ML',
        'Minimax Algorithm',
        'Alpha-Beta Pruning',
        'Game Theory',
      ],
      category: 'Game Development',
      date: '2023',
      features: [
        'Custom graphical user interface using Java Swing',
        'Intelligent AI opponent with minimax algorithm',
        'Alpha-beta pruning for optimal move calculation',
        'Multiple difficulty levels',
        'Two-player mode support',
        'Win detection for horizontal, vertical, and diagonal alignments',
        'Smooth piece dropping animations',
        'Strategic gameplay with depth and complexity',
      ],
      screenshots: [
        {
          src: '/images/Connect-5-one.png',
          alt: 'Connect 5 Game - Main Gameplay',
          caption: 'Active Game Session',
        },
        {
          src: '/images/Connect-5-two.png',
          alt: 'Connect 5 Game - AI Move',
          caption: 'AI Opponent in Action',
        },
      ],
    },
  },
  'camera-ocr': {
    title: 'Camera OCR | Zisis Kostakakis',
    metaDescription: 'iOS App that uses OCR to detect text from camera and ML Emotion Detection.',
    project: {
      id: 'camera-ocr',
      href: '/projects/camera-ocr',
      title: 'Camera OCR',
      description: 'iOS App that uses OCR to detect text from camera and ML Emotion Detection.',
      longDescription: `Camera OCR is an innovative iOS application that leverages Optical Character Recognition to convert pictures into editable text.

The app offers multiple practical features including text-to-speech conversion, automatic email address detection with Mail app integration, and to-do list creation capabilities. It also includes local scheduling notifications for enhanced productivity.

This dissertation project uniquely combines OCR technology with machine learning to detect emotional sentiment in text, making it particularly valuable for healthcare communication. For instance, less tech-savvy individuals can write a letter to their doctor, take a photo, and send it as an email with detected emotion metadata. This helps healthcare providers understand patients' emotional states and prioritize care accordingly, bridging the digital divide in healthcare communication.`,
      githubUrl: 'https://github.com/ZisisKostakakis/CameraOCR',
      technologies: [
        'Swift',
        'Vision Framework',
        'CoreML',
        'Machine Learning',
        'Natural Language Processing',
        'iOS Development',
      ],
      category: 'Mobile Development',
      date: '2023',
      features: [
        'Optical Character Recognition for image-to-text conversion',
        'Machine Learning-based emotion detection',
        'Text-to-speech functionality',
        'Automatic email address detection and Mail app integration',
        'To-do list creation from captured text',
        'Local scheduling notifications',
        'Designed for accessibility and ease of use',
        'Healthcare communication enhancement',
      ],
      screenshots: [
        {
          src: '/images/Camera-OCR.png',
          alt: 'Camera OCR App',
          caption: 'OCR Text Detection',
        },
      ],
      demoVideos: [
        { title: 'OCR & Text-to-Speech Demo', src: '/videos/CameraOCR-one.mp4' },
        { title: 'Emotion Detection Demo', src: '/videos/CameraOCR-two.mp4' },
      ],
    },
  },
  'transport-info': {
    title: 'Transport Info | Zisis Kostakakis',
    metaDescription:
      'Full Stack Web App on AWS that uses public transport data to provide information to users.',
    project: {
      id: 'transport-info',
      href: '/projects/transport-info',
      title: 'Transport Info',
      description:
        'Full Stack Web App on AWS that uses public transport data to provide information to users.',
      longDescription: `Transport-Info is a Full Stack project utilizing both frontend and backend technologies.

The backend is served by an AWS EC2 server running Flask with Gunicorn and Nginx as web servers. The frontend is served by Vercel using Next.js 13 and TypeScript.

APIs are handled by AWS API Gateway with authentication keys. Data is stored on S3 and DynamoDB and fetched by the backend server upon request from the frontend.

This architecture provides a scalable, secure, and efficient solution for delivering real-time public transport information to users.`,
      githubUrl: 'https://github.com/ZisisKostakakis/Transport-Info',
      liveUrl: 'https://www.transports-info.com/',
      technologies: [
        'Python',
        'Flask',
        'Next.js 13',
        'TypeScript',
        'AWS EC2',
        'AWS Lambda',
        'AWS S3',
        'DynamoDB',
        'API Gateway',
        'Gunicorn',
        'Nginx',
        'Terraform',
      ],
      category: 'Full Stack',
      date: '2023',
      features: [
        'Real-time public transport data integration',
        'Serverless architecture with AWS Lambda',
        'RESTful API with AWS API Gateway',
        'Secure API authentication',
        'Scalable data storage with S3 and DynamoDB',
        'Infrastructure as Code with Terraform',
        'Modern responsive frontend with Next.js 13',
        'Production-ready deployment on Vercel and AWS',
      ],
      additionalRepos: [
        { label: 'Backend Repository', url: 'https://github.com/ZisisKostakakis/Web-app-python' },
      ],
      screenshots: [
        {
          src: '/images/Transport-Info.png',
          alt: 'Transport Info Website Screenshot',
          caption: 'Live Application',
        },
      ],
    },
  },
  'date-calculator': {
    title: 'Date Calculator | Zisis Kostakakis',
    metaDescription:
      'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
    project: {
      id: 'date-calculator',
      href: '/projects/date-calculator',
      title: 'Date Calculator',
      description:
        'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
      longDescription: `Date Calculator is a full-stack web application designed for calculating and tracking days across custom date ranges with configurable anchor periods. This tool is perfect for tracking travel days, residency requirements, or any time-based calculations that need to be measured against custom yearly periods.

The frontend is built with Next.js 15 and React 19, featuring an intuitive interface that allows users to add multiple date ranges using a modern date picker, configure custom anchor dates (e.g., September 17 to September 16), and automatically merge overlapping ranges for accurate calculations. The built-in visual heatmap provides a clear visualization of which days fall within each period.

The backend is a RESTful API built with Flask (Python) and deployed as a serverless AWS Lambda function using container images. The API handles complex date calculations, overlap merging, heatmap generation, and session management.`,
      githubUrl: 'https://github.com/ZisisKostakakis/date-calculator',
      liveUrl: 'https://date-calc.zisiskostakakis.com',
      technologies: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'Flask',
        'Python',
        'AWS Lambda',
        'AWS API Gateway',
        'Docker',
        'Docker Compose',
        'Vercel',
        'Flatpickr',
      ],
      category: 'Full Stack',
      date: '2025',
      features: [
        'Flexible date range management with intuitive range picker interface',
        'Custom anchor periods - configure any anchor date (month/day) to define custom yearly periods',
        'Smart overlap merging - automatically merge overlapping date ranges for accurate calculations',
        'Visual heatmap - see exactly which days fall within each period with an interactive heatmap',
        'Threshold validation - set minimum day requirements per period and get pass/fail indicators',
        'Quick presets - fast selection of common ranges (today, last 7/30 days, current/last period)',
        'Persistent storage - save and load calculation sessions using localStorage',
        'Modern dark UI - beautiful, responsive dark theme built with Tailwind CSS',
        'Edge case handling - robust handling of leap years, Feb 29, and invalid dates',
        'Period boundary calculations - accurate calculations across year transitions',
      ],
      additionalRepos: [
        {
          label: 'Backend Repository',
          url: 'https://github.com/ZisisKostakakis/date-calculator-backend-app',
        },
      ],
      screenshots: [
        {
          src: '/images/Date-Calculator.png',
          alt: 'Date Calculator Results',
          caption: 'Results View with Heatmap',
        },
      ],
      architectureSections: [
        {
          title: 'System Architecture',
          description:
            'The application is split into a statically-deployed Next.js frontend on Vercel and a serverless Flask API on AWS Lambda. The frontend calls the API via API Gateway; Lambda runs the Python calculation engine packaged as a Docker container image.',
          mermaid: `graph TB
    subgraph CLIENT["🌐 Client (Browser)"]
        UI["Next.js 15 / React 19\n(Vercel CDN)"]
    end

    subgraph AWS["☁️ AWS"]
        AG["API Gateway\n(REST)"]
        LM["Lambda Function\n(Flask + Python)"]
    end

    UI -->|"HTTPS REST calls"| AG
    AG -->|"invoke"| LM
    LM -->|"JSON response"| AG
    AG -->|"JSON"| UI`,
        },
        {
          title: 'Date Calculation Pipeline',
          description:
            'Each calculation request flows through overlap merging, period boundary splitting, and heatmap generation before results are returned to the client.',
          mermaid: `sequenceDiagram
    actor User
    participant FE as Next.js Frontend
    participant API as Flask Lambda API

    User->>FE: Add date ranges + set anchor date + threshold
    User->>FE: Click "Calculate Total"
    FE->>API: POST /calculate { ranges, anchor, threshold }
    API->>API: Merge overlapping ranges
    API->>API: Split ranges across period boundaries
    API->>API: Sum days per custom period
    API->>API: Build heatmap grid
    API->>API: Evaluate pass/fail thresholds
    API-->>FE: { periods, heatmap, totals, pass_fail }
    FE->>User: Render results + heatmap + indicators`,
        },
        {
          title: 'Frontend State Management',
          description:
            'All UI state is managed with React hooks and persisted to localStorage so sessions survive page reloads. No external state library is used.',
          mermaid: `graph LR
    subgraph HOOKS["React Hooks"]
        UR["useRanges\n(add / remove / edit)"]
        US["useSettings\n(anchor, threshold, flags)"]
        UC["useCalculation\n(results, loading, error)"]
    end

    subgraph STORAGE["localStorage"]
        SR["Saved ranges"]
        SS["Saved settings"]
    end

    subgraph API["AWS Lambda API"]
        EP["/calculate endpoint"]
    end

    UR <-->|"persist / restore"| SR
    US <-->|"persist / restore"| SS
    UC -->|"POST request"| EP
    EP -->|"results"| UC`,
        },
      ],
    },
  },
  'student-loan-checker': {
    title: 'Student Loan Checker | Zisis Kostakakis',
    metaDescription:
      'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
    project: {
      id: 'student-loan-checker',
      href: '/projects/student-loan-checker',
      title: 'Student Loan Checker',
      description:
        'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
      longDescription: `Student Loan Checker is an automated Python bot built with Playwright that securely logs into the Student Loans Company (SLC) portal to retrieve comprehensive loan information. This tool automates the tedious process of manually checking loan balances and provides programmatic access to loan data.

The bot handles the complete authentication flow including email/password login, cookie consent management, and two-factor authentication using secret codes. It navigates through the SLC portal, extracts detailed loan information including current balance, salary repayments, direct repayments, interest added, and current interest rates.

Built with Python 3.11+ and Playwright, the bot features robust error handling, automatic cookie consent management, and support for both headless and visible browser modes.`,
      githubUrl: 'https://github.com/ZisisKostakakis/student-loan-checker',
      technologies: [
        'Python',
        'Playwright',
        'Web Scraping',
        'Browser Automation',
        'Environment Variables',
        'python-dotenv',
      ],
      category: 'Automation',
      date: '2025',
      features: [
        'Automated login with email and password authentication',
        'Two-factor authentication (2FA) / secret code support',
        'Comprehensive data scraping - extracts balance, salary repayments, direct repayments, interest added, and interest rates',
        'Secure credential management via environment variables (.env file)',
        'Robust error handling with detailed error messages',
        'Automatic cookie consent management',
        'Headless and visible browser modes for flexibility',
        'Programmatic API - can be imported and used as a module',
        'Clean class-based architecture for easy extension',
        'Comprehensive documentation and setup instructions',
      ],
      screenshots: [
        {
          src: '/images/Student-Loan-Checker.png',
          alt: 'Student Loan Checker Bot Output',
          caption: 'Bot Execution and Loan Data Output',
        },
      ],
      architectureSections: [
        {
          title: 'Bot Architecture',
          description:
            'The SLCBot class encapsulates the entire Playwright browser session. Credentials are loaded from environment variables via python-dotenv. The bot can be run as a standalone script or imported as a module for programmatic use.',
          mermaid: `graph TB
    subgraph ENV[".env File"]
        CR["SLC_EMAIL\nSLC_PASSWORD\nSLC_SECRET_CODE"]
    end

    subgraph BOT["SLCBot Class (slc_bot.py)"]
        INIT["__init__\n(load credentials, configure headless)"]
        RUN["run()\n(orchestrate full session)"]
        LOGIN["_login()\n(email + password)"]
        TFA["_enter_secret_code()\n(2FA / secret code)"]
        BAL["_get_balance()\n(scrape loan data)"]
    end

    subgraph BROWSER["Playwright Chromium"]
        PAGE["Browser Page\n(logon.slc.co.uk)"]
    end

    CR -->|"python-dotenv"| INIT
    INIT --> RUN
    RUN --> LOGIN --> TFA --> BAL
    LOGIN & TFA & BAL <-->|"navigate / click / fill / extract"| PAGE`,
        },
        {
          title: 'Authentication Flow',
          description:
            'The bot handles the full multi-step SLC authentication sequence, including automatic cookie consent dismissal and optional 2FA via secret code.',
          mermaid: `sequenceDiagram
    participant Bot as SLCBot
    participant Browser as Chromium (Playwright)
    participant SLC as logon.slc.co.uk

    Bot->>Browser: Launch (headless or visible)
    Browser->>SLC: Navigate to login page
    SLC-->>Browser: Login form

    alt Cookie consent banner present
        Bot->>Browser: Click "Accept cookies"
    end

    Bot->>Browser: Fill email field
    Bot->>Browser: Fill password field
    Bot->>Browser: Click "Sign in"
    Browser->>SLC: POST credentials
    SLC-->>Browser: Secret code prompt

    alt 2FA / secret code required
        Bot->>Browser: Fill secret code field
        Bot->>Browser: Click "Continue"
        Browser->>SLC: POST secret code
    end

    SLC-->>Browser: Authenticated session
    Browser->>SLC: Navigate to balance page
    SLC-->>Browser: Loan details HTML
    Bot->>Browser: Extract balance, repayments, interest
    Bot-->>Bot: Return structured loan data`,
        },
      ],
    },
  },
  'homelab-media': {
    title: 'Homelab Media Stack | Zisis Kostakakis',
    metaDescription:
      'Fully automated, self-healing Docker media stack with WireGuard VPN kill switch, cascade restart recovery, and zero-touch container updates.',
    project: {
      id: 'homelab-media',
      href: '/projects/homelab-media',
      title: 'Homelab Media Stack',
      description:
        'Fully automated, self-healing Docker media stack with VPN kill switch, cascade restart recovery, and zero-touch container updates.',
      longDescription: `A fully automated, self-healing homelab media stack built on Docker Compose. Handles everything from media requests to downloading, extracting, renaming, subtitle fetching, quality management, and streaming — with zero manual intervention after initial setup.

All download traffic routes through a WireGuard VPN with a firewall kill switch. A custom cascade-restart monitor automatically recovers all dependent services when the VPN restarts. Container image updates are detected daily and applied automatically with push notifications at each step.

The stack is split into three independent Docker Compose projects sharing a common bridge network. This allows each stack to be updated, restarted, or debugged in isolation. Twenty-plus services are orchestrated across three network zones: the Gluetun VPN namespace, a shared bridge network, and the host network for Plex.`,
      githubUrl: 'https://github.com/ZisisKostakakis/homelab-media',
      technologies: [
        'Docker Compose',
        'Bash',
        'Python',
        'WireGuard / Gluetun',
        'Plex',
        'Sonarr / Radarr',
        'Prowlarr',
        'qBittorrent',
        'Bazarr',
        'Recyclarr',
        'cross-seed',
        'Autoheal',
        "What's Up Docker",
        'ntfy.sh',
        'Linux',
      ],
      category: 'Infrastructure',
      date: '2026',
      features: [
        'All download traffic routed through ProtonVPN WireGuard with firewall kill switch — no leaks if VPN drops',
        'gluetun-monitor cascade restart: detects Gluetun namespace changes, waits for healthy status, stops and recreates all 9 VPN-dependent services with exponential backoff retries',
        'Rate limiting on cascade restarts (max 5/hr) with loop detection and 1-hour pause',
        "Daily container image updates via What's Up Docker + Python webhook server — zero manual intervention",
        'Push notifications via ntfy.sh at every automation stage (updates, restarts, failures)',
        'Hardlink-based media import — file exists in two paths, occupies disk space once, seeding continues uninterrupted',
        'Recyclarr syncs TRaSH Guides quality profiles and custom formats to Sonarr/Radarr on a schedule',
        'cross-seed daemon matches completed downloads against other indexers for zero-bandwidth ratio boosting',
        'Three self-healing layers: Docker healthchecks → Autoheal watchdog → gluetun-monitor cascade restart',
        'Maintainerr rules automatically remove stale media from Plex based on watch history thresholds',
        'SuggestArr sends AI-powered media recommendations back into Seerr automatically',
        'VPN port forwarding auto-updates qBittorrent listening port on each VPN session via Gluetun API commands',
        'stack-manage.sh wraps all docker compose operations per stack with a clean CLI interface',
        'Timestamped config backups excluding media files for fast disaster recovery',
      ],
      architectureSections: [
        {
          title: 'Three-Stack Architecture',
          description:
            'The system is split into three independent Docker Compose projects sharing a common bridge network (homelab_media_network). Each stack can be updated or restarted without affecting the others.',
          mermaid: `graph TB
    subgraph TORRENT["📦 Torrent Stack"]
        GL["Gluetun (VPN)"]
        QB["qBittorrent"]
        ARR["Sonarr · Radarr · Bazarr\nProwlarr · FlareSolverr\nUnpackerr · Recyclarr · cross-seed"]
        GL --- QB & ARR
    end

    subgraph PLEX["📺 Plex Stack"]
        PX["Plex (host network)"]
        PS["SuggestArr · Kitana · Tautulli"]
    end

    subgraph SERVICES["⚙️ Services Stack"]
        SR["Seerr · Maintainerr\nFilebrowser"]
        SH["Autoheal · gluetun-monitor\nWUD · wud-webhook"]
        OPS["Portainer · Beszel"]
    end

    SR -->|"requests"| ARR
    PX -->|"library"| QB
    SH -->|"monitors + heals"| TORRENT`,
        },
        {
          title: 'Network Topology',
          description:
            'Three distinct network zones enforce traffic isolation. All torrent services share the Gluetun VPN namespace and communicate via localhost. No traffic leaves without passing through WireGuard.',
          mermaid: `graph LR
    subgraph VPN_NS["🔒 Gluetun VPN Namespace"]
        direction TB
        GL["Gluetun\n(WireGuard tun0)"]
        QB2["qBittorrent\n@localhost:8080"]
        SN["Sonarr\n@localhost:8989"]
        RD["Radarr\n@localhost:7878"]
        PW["Prowlarr\n@localhost:9696"]
        BZ["Bazarr\n@localhost:6767"]
        FS["FlareSolverr\n@localhost:8191"]
        CS["cross-seed\n@localhost:2468"]
        GL --- QB2 & SN & RD & PW & BZ & FS & CS
    end

    subgraph BRIDGE["🌐 homelab_media_network (bridge 172.19.0.0/16)"]
        direction TB
        SEERR2["Seerr :5055"]
        MAINT["Maintainerr :6246"]
        GM["gluetun-monitor"]
        WUD2["What's Up Docker :3000"]
        PORT["Portainer :9443"]
        BSZ["Beszel :8090"]
    end

    subgraph HOST["🖥️ Host Network"]
        PLEX_HOST["Plex :32400"]
    end

    VPN_NS <-->|"ports via Gluetun"| BRIDGE
    BRIDGE <-->|"bridge NAT"| LAN["Local Network\n192.168.1.0/24"]
    HOST <-->|"direct"| LAN`,
        },
        {
          title: 'VPN Auto-Healing Flow',
          description:
            'When Gluetun restarts it creates a new network namespace, orphaning all dependent containers. gluetun-monitor detects this via SandboxKey comparison, waits up to 300s for Gluetun to become healthy, then stops and recreates all 9 VPN-dependent services with retry logic and rate limiting.',
          mermaid: `sequenceDiagram
    participant Docker as Docker Engine
    participant Monitor as gluetun-monitor
    participant Gluetun as Gluetun (VPN)
    participant Services as VPN Services (qBit, Sonarr, etc.)
    participant Ntfy as ntfy.sh

    Note over Gluetun: Gluetun restarts
    Docker->>Monitor: Emit "container start" event

    Monitor->>Monitor: Check debounce (30s) + rate limit (5/hr)
    Monitor->>Monitor: Compare SandboxKey — confirm real restart

    Monitor->>Gluetun: Poll health every 5s
    loop Wait for healthy (up to 300s)
        Gluetun-->>Monitor: status = starting
    end
    Gluetun-->>Monitor: status = healthy ✅

    Monitor->>Services: docker stop + docker rm
    Monitor->>Docker: docker compose up -d (up to 3 retries)
    Docker->>Services: Recreate in new VPN namespace

    Monitor->>Services: Verify healthchecks

    alt All healthy
        Monitor->>Ntfy: ✅ Cascade restart successful
    else Some unhealthy
        Monitor->>Ntfy: ⚠️ Some services unhealthy
    end`,
        },
        {
          title: 'Media Request Pipeline',
          description:
            'End-to-end flow from a user request to media appearing in Plex, fully automated across seven services.',
          mermaid: `sequenceDiagram
    actor User
    participant Seerr as Seerr (:5055)
    participant Sonarr as Sonarr / Radarr
    participant Prowlarr as Prowlarr (:9696)
    participant FlareSolverr as FlareSolverr
    participant qBit as qBittorrent (:8080)
    participant Unpackerr as Unpackerr
    participant Bazarr as Bazarr (:6767)
    participant Plex as Plex (:32400)

    User->>Seerr: Request TV show / movie
    Seerr->>Sonarr: Send media request via API
    Sonarr->>Prowlarr: Search all indexers
    alt Cloudflare-protected indexer
        Prowlarr->>FlareSolverr: Relay for CAPTCHA bypass
        FlareSolverr-->>Prowlarr: Return solved response
    end
    Prowlarr-->>Sonarr: Return ranked torrent results
    Sonarr->>Sonarr: Apply quality profile scoring
    Sonarr->>qBit: Send best torrent
    Note over qBit: All traffic via Gluetun VPN
    qBit->>qBit: Download torrent
    qBit-->>Sonarr: Notify on completion
    alt RAR archive
        Unpackerr->>Unpackerr: Extract RAR to video files
    end
    Sonarr->>Sonarr: Rename + hardlink to /data/tv
    Sonarr->>Bazarr: Trigger subtitle search
    Bazarr->>Bazarr: Download subtitles
    Sonarr-->>Plex: Refresh library
    Plex-->>User: Media available for playback`,
        },
        {
          title: 'Container Auto-Update Pipeline',
          description:
            "What's Up Docker checks all image tags daily at 06:00. Updates trigger a webhook to a Python server which pulls the new image and recreates the container. Success and failure are reported via push notification.",
          mermaid: `sequenceDiagram
    participant Registry as Container Registry
    participant WUD as What's Up Docker (:3000)
    participant Ntfy as ntfy.sh
    participant Webhook as wud-webhook (:8182)
    participant Handler as wud-update-handler.sh
    participant StackManage as stack-manage.sh
    participant Docker as Docker Engine

    Note over WUD: Daily cron at 06:00
    WUD->>Registry: Check all watched image tags
    Registry-->>WUD: Return latest digests

    alt Update available
        WUD->>Ntfy: Batch notification: N updates available
        loop For each updated container
            WUD->>Webhook: POST with container name + new tag
            Webhook->>Handler: Pipe JSON payload
            Handler->>StackManage: stack-manage.sh stack update service
            StackManage->>Docker: docker compose pull
            StackManage->>Docker: docker compose up -d --force-recreate
            alt Success
                Handler->>Ntfy: ✅ Successfully updated container
            else Failure
                Handler->>Ntfy: ❌ Failed to update — check logs
            end
        end
    end`,
        },
      ],
    },
  },
  'property-pal-scraper': {
    title: 'PropertyPal Investment Analyzer | Zisis Kostakakis',
    metaDescription:
      'Scrapy-based web scraper for extracting property listings with AI-powered investment ratings and geocoding analysis.',
    project: {
      id: 'property-pal-scraper',
      href: '/projects/property-pal-scraper',
      title: 'PropertyPal Investment Analyzer',
      description:
        'Scrapy-based web scraper for extracting property listings with AI-powered investment ratings and geocoding analysis.',
      longDescription: `PropertyPal Investment Analyzer is a production-grade web scraper built with Scrapy that extracts property listings from PropertyPal.com and provides AI-powered investment analysis. This tool automates the process of researching property investments by combining web scraping, AI analysis, and geocoding to provide comprehensive property insights.

The scraper features an interactive CLI with multi-select search functionality, allowing users to configure and run multiple property searches simultaneously. Each property is analyzed using Perplexity's Housing Agent API to provide investment ratings out of 10, along with detailed pros, cons, and market outlook.

Built with Scrapy for robust web scraping, the application implements ethical scraping practices including rate limiting, robots.txt compliance, and respectful user-agent identification. Data is validated using Pydantic models and exported to both JSON and CSV formats through custom pipelines.`,
      githubUrl: 'https://github.com/ZisisKostakakis/property-pal-scraper',
      technologies: [
        'Python',
        'Scrapy',
        'Perplexity API',
        'Pydantic',
        'Web Scraping',
        'Data Pipelines',
        'Geocoding',
        'OpenStreetMap',
      ],
      category: 'Automation',
      date: '2026',
      features: [
        'Automated property data extraction with pagination support',
        'AI-powered investment ratings via Perplexity Housing Agent',
        'Geocoding with distance calculations from custom destinations',
        'Interactive CLI with multi-select search functionality',
        'Automated mortgage payment calculations (configurable parameters)',
        'CSV/JSON export pipelines with Pydantic validation',
        'Ethical scraping with rate limiting and robots.txt compliance',
        'Comprehensive error handling and retry mechanisms',
        'Structured data extraction (descriptions, features, room details)',
        'Makefile for convenient command execution',
      ],
      screenshots: [
        {
          src: '/images/Property-Pal-Scraper.png',
          alt: 'PropertyPal Investment Analyzer',
          caption: 'Best Value Properties Dashboard',
        },
      ],
      architectureSections: [
        {
          title: 'Scrapy Pipeline Architecture',
          description:
            'The spider crawls PropertyPal.com with pagination, yielding raw items through a pipeline chain: Pydantic validation → geocoding + mortgage calculation → optional Perplexity AI rating → JSON and CSV export.',
          mermaid: `graph TB
    subgraph CLI["Interactive CLI (run_scraper.py)"]
        MENU["Multi-select search menu\n(questionary)"]
        CFG["AI ratings toggle\n+ URL selection"]
    end

    subgraph SCRAPY["Scrapy Engine"]
        SP["property_spider.py\n(crawl + paginate)"]
        IT["items.py\n(Pydantic PropertyItem)"]
    end

    subgraph PIPELINES["Pipeline Chain"]
        VAL["1. Pydantic Validation"]
        GEO["2. Geocoding + Distance\n(Nominatim / OSM)"]
        MORT["3. Mortgage Calculator\n(£15K dep, 4%, 40yr)"]
        PERP["4. Perplexity AI Rating\n(Housing Agent API)"]
        EXP["5. JSON + CSV Export"]
    end

    subgraph OUTPUT["data/ Directory"]
        RAW["raw/properties_{ts}.json"]
        CSV["processed/properties_{ts}.csv"]
        RAT["ratings/perplexity_{ts}.json"]
    end

    MENU --> CFG --> SP
    SP -->|"yield item"| IT --> VAL --> GEO --> MORT --> PERP --> EXP
    EXP --> RAW & CSV & RAT`,
        },
        {
          title: 'Scraping & Data Extraction Flow',
          description:
            'The spider follows search result pages, extracts property card links, then visits each detail page to extract structured fields using CSS selectors.',
          mermaid: `sequenceDiagram
    participant CLI as run_scraper.py
    participant Spider as property_spider
    participant PPal as propertypal.com
    participant Pipeline as Item Pipeline

    CLI->>Spider: Start with search URL(s)
    Spider->>PPal: GET search page
    PPal-->>Spider: HTML (property list)
    Spider->>Spider: Extract property detail URLs
    Spider->>Spider: Follow pagination links

    loop For each property URL
        Spider->>PPal: GET property detail page
        PPal-->>Spider: HTML (property details)
        Spider->>Spider: Extract price, location, type, rooms
        Spider->>Spider: Extract description, features, directions
        Spider->>Pipeline: yield PropertyItem
        Pipeline->>Pipeline: Validate with Pydantic
        Pipeline->>Pipeline: Geocode address → lat/lng → distance
        Pipeline->>Pipeline: Calculate monthly mortgage payment
        alt AI ratings enabled
            Pipeline->>Pipeline: POST to Perplexity Housing Agent
            Pipeline->>Pipeline: Parse rating + pros/cons
        end
        Pipeline->>Pipeline: Write to JSON + CSV
    end`,
        },
      ],
    },
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails[slug];
  if (!detail) return { title: 'Project Not Found' };
  return { title: detail.title, description: detail.metaDescription };
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = projectDetails[slug];
  if (!detail) notFound();
  return <ProjectTemplate project={detail.project} />;
}
