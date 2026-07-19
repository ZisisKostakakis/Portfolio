import { ProjectDetail } from '@/lib/types';

export const projectDetails: Record<
  string,
  {
    title: string;
    metaDescription: string;
    project: ProjectDetail;
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

The AI opponent uses the minimax algorithm with alpha-beta pruning and plays at multiple difficulty levels. Pieces drop to the lowest available position in each column, so players have to think several moves ahead.

The game is built with Java and Swing, with a custom GUI for board rendering and piece animations.`,
      image: '/images/Connect-5-one.png',
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
        'AI opponent with minimax algorithm',
        'Alpha-beta pruning for optimal move calculation',
        'Multiple difficulty levels',
        'Two-player mode support',
        'Win detection for horizontal, vertical, and diagonal alignments',
        'Piece dropping animations',
      ],
      screenshots: [
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
      longDescription: `Camera OCR is an iOS application that uses Optical Character Recognition to convert pictures into editable text.

The app includes text-to-speech conversion, automatic email address detection with Mail app integration, to-do list creation, and local scheduled notifications.

This dissertation project combines OCR with machine learning to detect emotional sentiment in text, aimed at healthcare communication. A patient can write a letter to their doctor, take a photo, and send it as an email with detected emotion metadata, which helps healthcare providers understand a patient's emotional state and prioritise care.`,
      image: '/images/Camera-OCR.png',
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
      ],
      screenshots: [],
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
      longDescription: `Transport-Info is a full-stack project for real-time public transport information.

The backend is served by an AWS EC2 server running Flask with Gunicorn and Nginx as web servers. The frontend is served by Vercel using Next.js 13 and TypeScript.

APIs are handled by AWS API Gateway with authentication keys. Data is stored on S3 and DynamoDB and fetched by the backend server upon request from the frontend.`,
      image: '/images/Transport-Info.png',
      githubUrl: 'https://github.com/ZisisKostakakis/Transport-Info',
      liveUrl: 'https://transportinfo.zisiskostakakis.com',
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
        'Responsive frontend with Next.js 13',
        'Deployed on Vercel and AWS',
      ],
      additionalRepos: [
        { label: 'Backend Repository', url: 'https://github.com/ZisisKostakakis/Web-app-python' },
      ],
      screenshots: [],
    },
  },
  'date-calculator': {
    title: 'Date Calculator | Zisis Kostakakis',
    metaDescription:
      'Web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
    project: {
      id: 'date-calculator',
      href: '/projects/date-calculator',
      title: 'Date Calculator',
      description:
        'Web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
      longDescription: `Date Calculator is a full-stack web application for calculating and tracking days across custom date ranges with configurable anchor periods. It was built for tracking travel days, residency requirements, and other counts measured against custom yearly periods.

The frontend is built with Next.js 15 and React 19. Users add date ranges with a calendar picker, configure custom anchor dates (e.g., September 17 to September 16), and overlapping ranges are merged automatically. A heatmap shows which days fall within each period.

The backend is a RESTful API built with Flask (Python) and deployed as a serverless AWS Lambda function using container images. The API handles complex date calculations, overlap merging, heatmap generation, and session management.`,
      image: '/images/Date-Calculator.png',
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
        'Date range management with a calendar range picker',
        'Custom anchor periods - configure any anchor date (month/day) to define custom yearly periods',
        'Overlap merging - overlapping date ranges are merged before counting',
        'Interactive heatmap showing which days fall within each period',
        'Threshold validation - set minimum day requirements per period and get pass/fail indicators',
        'Quick presets - today, last 7/30 days, current/last period',
        'Persistent storage - save and load calculation sessions using localStorage',
        'Responsive dark theme built with Tailwind CSS',
        'Handles leap years, Feb 29, and invalid dates',
        'Accurate period boundary calculations across year transitions',
      ],
      additionalRepos: [
        {
          label: 'Backend Repository',
          url: 'https://github.com/ZisisKostakakis/date-calculator-backend-app',
        },
      ],
      screenshots: [],
      architectureSections: [
        {
          title: 'System Architecture',
          description:
            'The application is split into a statically-deployed Next.js frontend on Vercel and a serverless Flask API on AWS Lambda. The frontend calls the API via API Gateway; Lambda runs the Python calculation engine packaged as a Docker container image.',
          mermaid: `graph TB
    subgraph CLIENT["Client (Browser)"]
        UI["Next.js 15 / React 19\n(Vercel CDN)"]
    end

    subgraph AWS["AWS"]
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
      longDescription: `Student Loan Checker is a Python bot built with Playwright that logs into the Student Loans Company (SLC) portal and retrieves loan information, replacing the manual process of checking balances and giving programmatic access to the data.

The bot handles the full authentication flow: email/password login, cookie consent, and two-factor authentication using secret codes. It then navigates the SLC portal and extracts current balance, salary repayments, direct repayments, interest added, and current interest rates.

It runs on Python 3.11+ and supports both headless and visible browser modes.`,
      image: '/images/Student-Loan-Checker.png',
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
        'Extracts balance, salary repayments, direct repayments, interest added, and interest rates',
        'Credential management via environment variables (.env file)',
        'Error handling with detailed error messages',
        'Automatic cookie consent management',
        'Headless and visible browser modes',
        'Programmatic API - can be imported and used as a module',
        'Class-based architecture for easy extension',
        'Documented setup instructions',
      ],
      screenshots: [],
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
      longDescription: `A fully automated, self-healing homelab media stack built on Docker Compose. It covers the full pipeline: media requests, downloading, extracting, renaming, subtitle fetching, quality management, and streaming, with no manual intervention after initial setup.

All download traffic routes through a WireGuard VPN with a firewall kill switch. A custom cascade-restart monitor automatically recovers all dependent services when the VPN restarts. Container image updates are detected daily and applied automatically with push notifications at each step.

The stack is split into three independent Docker Compose projects sharing a common bridge network. This allows each stack to be updated, restarted, or debugged in isolation. Twenty-plus services are orchestrated across three network zones: the Gluetun VPN namespace, a shared bridge network, and the host network for Plex.`,
      image: '/images/Homelab-Media-banner.png',
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
        'All download traffic routed through ProtonVPN WireGuard with firewall kill switch: no leaks if VPN drops',
        'gluetun-monitor cascade restart: detects Gluetun namespace changes, waits for healthy status, stops and recreates all 9 VPN-dependent services with exponential backoff retries',
        'Rate limiting on cascade restarts (max 5/hr) with loop detection and 1-hour pause',
        "Daily container image updates via What's Up Docker and a Python webhook server, with no manual intervention",
        'Push notifications via ntfy.sh at every automation stage (updates, restarts, failures)',
        'Hardlink-based media import: file exists in two paths, occupies disk space once, seeding continues uninterrupted',
        'Recyclarr syncs TRaSH Guides quality profiles and custom formats to Sonarr/Radarr on a schedule',
        'cross-seed daemon matches completed downloads against other indexers for zero-bandwidth ratio boosting',
        'Three self-healing layers: Docker healthchecks, Autoheal watchdog, gluetun-monitor cascade restart',
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
    subgraph TORRENT["Torrent Stack"]
        GL["Gluetun (VPN)"]
        QB["qBittorrent"]
        ARR["Sonarr · Radarr · Bazarr\nProwlarr · FlareSolverr\nUnpackerr · Recyclarr · cross-seed"]
        GL --- QB & ARR
    end

    subgraph PLEX["Plex Stack"]
        PX["Plex (host network)"]
        PS["SuggestArr · Kitana · Tautulli"]
    end

    subgraph SERVICES["Services Stack"]
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
    subgraph VPN_NS["Gluetun VPN Namespace"]
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

    subgraph BRIDGE["homelab_media_network (bridge 172.19.0.0/16)"]
        direction TB
        SEERR2["Seerr :5055"]
        MAINT["Maintainerr :6246"]
        GM["gluetun-monitor"]
        WUD2["What's Up Docker :3000"]
        PORT["Portainer :9443"]
        BSZ["Beszel :8090"]
    end

    subgraph HOST["Host Network"]
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
    Monitor->>Monitor: Compare SandboxKey to confirm real restart

    Monitor->>Gluetun: Poll health every 5s
    loop Wait for healthy (up to 300s)
        Gluetun-->>Monitor: status = starting
    end
    Gluetun-->>Monitor: status = healthy

    Monitor->>Services: docker stop + docker rm
    Monitor->>Docker: docker compose up -d (up to 3 retries)
    Docker->>Services: Recreate in new VPN namespace

    Monitor->>Services: Verify healthchecks

    alt All healthy
        Monitor->>Ntfy: Cascade restart successful
    else Some unhealthy
        Monitor->>Ntfy: Some services unhealthy
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
                Handler->>Ntfy: Successfully updated container
            else Failure
                Handler->>Ntfy: Failed to update, check logs
            end
        end
    end`,
        },
      ],
    },
  },
  kanbanminator: {
    title: 'Kanbanminator | Zisis Kostakakis',
    metaDescription: 'Kanban board for managing PR review comments with AI-assisted code changes.',
    project: {
      id: 'kanbanminator',
      href: '/projects/kanbanminator',
      title: 'Kanbanminator',
      description: 'Kanban board for managing PR review comments with AI-assisted code changes.',
      longDescription: `Kanbanminator turns pull request review comments into a kanban workflow. It syncs unresolved Bitbucket PR comments onto a board (Comments → Todo → In Progress → Review → Done) so review feedback becomes trackable tasks instead of a scattered comment thread.

Accepting a task triggers an AI agent (Cursor Agent) that drafts a code fix in an isolated per-task git workspace; rejecting one drafts a reply instead. The human stays in the loop throughout: every diff is reviewed on the board before commit, push, and resolving the comment. The board supports drag-and-drop, undo/redo, real-time updates, and PR rebase/squash management with conflict detection.

The backend is a FastAPI (Python 3.11) service with SQLAlchemy on SQLite, deployed as a container-image AWS Lambda behind API Gateway and provisioned with Terraform. The React 19 / Vite frontend is deployed on Vercel. Because Lambda cannot hold WebSocket connections open, the hosted deployment uses an event buffer with an HTTP polling fallback: the client polls GET /api/events with a sequence cursor that detects Lambda cold starts and triggers a full refetch, while local/self-hosted mode keeps native WebSockets.

The hosted demo runs in demo mode: Bitbucket, OAuth, and the AI agent are mocked server-side, so the full workflow is explorable without any login or secrets. Seeded data resets automatically after 5 minutes of inactivity. Self-hosted mode supports multiple users with Google OAuth and per-user encrypted Bitbucket OAuth tokens.`,
      image: '/images/Kanbanminator-banner.png',
      githubUrl: 'https://github.com/ZisisKostakakis/kanbanminator',
      liveUrl: 'https://kanbanminator.zisiskostakakis.com',
      technologies: [
        'FastAPI',
        'Python 3.11',
        'SQLAlchemy',
        'SQLite',
        'React 19',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'AWS Lambda',
        'API Gateway',
        'AWS ECR',
        'Terraform',
        'Docker',
        'Vercel',
      ],
      category: 'Full Stack',
      date: '2026',
      features: [
        'Syncs unresolved Bitbucket PR comments into a kanban workflow (Comments → Todo → In Progress → Review → Done)',
        'Accept triggers an AI agent (Cursor Agent) that drafts a code fix; reject drafts a reply instead',
        'Isolated per-task git workspaces keep AI changes sandboxed until approved',
        'Human-in-the-loop: every diff is reviewed before commit, push, and comment resolution',
        'Real-time board updates: native WebSockets locally, event-buffer + HTTP polling fallback on Lambda',
        'Drag-and-drop board with undo/redo',
        'PR rebase/squash management with conflict detection',
        'Multi-user with Google OAuth and per-user encrypted Bitbucket OAuth tokens',
        'Hosted demo mode: Bitbucket, OAuth, and the AI agent mocked server-side, seeded data, auto-reset after 5 minutes of inactivity',
        'Infrastructure as Code with Terraform (Lambda, API Gateway, ECR)',
      ],
      screenshots: [],
      architectureSections: [
        {
          title: 'System Architecture',
          description:
            'The React/Vite frontend is deployed on Vercel. The FastAPI backend runs as a container-image AWS Lambda behind API Gateway, with the image stored in ECR and all resources provisioned with Terraform. In the hosted demo, Bitbucket, OAuth, and the AI agent are mocked server-side.',
          mermaid: `graph TB
    subgraph CLIENT["Client (Browser)"]
        UI["React 19 / Vite\n(Vercel)"]
    end

    subgraph AWS["AWS (Terraform-provisioned)"]
        AG["API Gateway\n(REST)"]
        LM["Lambda Function\n(FastAPI · container image)"]
        ECR["ECR\n(Lambda container image)"]
        DB["SQLite\n(SQLAlchemy)"]
    end

    subgraph EXT["External (mocked in demo mode)"]
        BB["Bitbucket API"]
        OAUTH["Google OAuth"]
        AI["Cursor Agent"]
    end

    UI -->|"HTTPS REST + event polling"| AG
    AG -->|"invoke"| LM
    LM --> DB
    ECR -->|"image"| LM
    LM -.->|"PR comments · push · resolve"| BB
    LM -.->|"auth"| OAUTH
    LM -.->|"draft fixes / replies"| AI`,
        },
        {
          title: 'Real-Time Updates Without WebSockets',
          description:
            'Lambda cannot hold WebSocket connections open, so the hosted deployment buffers board events server-side and the client polls GET /api/events with a sequence cursor. A cursor mismatch signals a Lambda cold start (empty buffer), triggering a full board refetch. Local/self-hosted mode keeps native WebSockets.',
          mermaid: `sequenceDiagram
    participant FE as React Frontend
    participant API as FastAPI (Lambda)
    participant BUF as Event Buffer

    Note over API,BUF: Board change (move, AI result, sync)
    API->>BUF: Append event with sequence number

    loop Poll interval
        FE->>API: GET /api/events?cursor=N
        alt Cursor valid
            BUF-->>FE: Events N+1..latest
            FE->>FE: Apply incremental updates
        else Cold start detected (cursor ahead of buffer)
            API-->>FE: Cursor mismatch
            FE->>API: GET full board state
            FE->>FE: Rebuild board + reset cursor
        end
    end

    Note over FE,API: Local / self-hosted mode uses<br/>native WebSockets instead`,
        },
        {
          title: 'AI Task Workflow',
          description:
            'Each accepted task gets an isolated git workspace where the AI agent drafts a fix. Nothing reaches the PR without human approval: the diff is reviewed on the board before commit, push, and resolving the original comment.',
          mermaid: `sequenceDiagram
    actor User
    participant Board as Kanban Board
    participant API as FastAPI Backend
    participant WS as Per-Task Git Workspace
    participant Agent as AI Agent (Cursor)
    participant BB as Bitbucket

    BB-->>API: Sync unresolved PR comments
    API-->>Board: Cards in "Comments" column

    User->>Board: Accept task
    Board->>API: Trigger AI fix
    API->>WS: Create isolated workspace (branch checkout)
    API->>Agent: Run with comment context
    Agent->>WS: Draft code changes
    API-->>Board: Card → "Review" with diff

    User->>Board: Review diff
    alt Approve
        Board->>API: Commit + push
        API->>BB: Push fix + resolve comment
        API-->>Board: Card → "Done"
    else Request changes / reject
        Board->>API: Discard workspace or re-run agent
    end`,
        },
      ],
    },
  },
  stackfordev: {
    title: 'StackForDev | Zisis Kostakakis',
    metaDescription:
      'CLI tool and web app that generates tailored Dockerfiles so developers only need Docker, with no language runtimes to install locally.',
    project: {
      id: 'stackfordev',
      href: '/projects/stackfordev',
      title: 'StackForDev',
      description:
        'CLI tool and web app that generates tailored Dockerfiles so developers only need Docker, with no language runtimes to install locally.',
      longDescription: `StackForDev solves the "works on my machine" problem by replacing dozens of language and framework installations with a single prerequisite: Docker.

You tell StackForDev your language, stack, and version. It generates a Dockerfile that turns any directory into a fully configured development container. Your project files are volume-mounted inside, so there is nothing to install locally beyond Docker itself.

The backend is a Python service running on AWS Lambda, distributed as a container image via ECR. AWS API Gateway sits in front with per-IP rate limiting and a monthly quota to keep costs predictable. Generated Dockerfiles are stored in S3 with content-based deduplication so identical requests return a cached file instantly.

The CLI is published on PyPI as \`stackfordev\`. It supports interactive prompts for discoverability and non-interactive flags for scripting. A \`--local\` flag generates Dockerfiles offline without any API calls.

The web UI is built with SvelteKit and offers the same language / stack / version picker in the browser, with a live Dockerfile preview and copy-to-clipboard. An Info page lists every supported language, version, and stack combination.

The entire infrastructure (Lambda, API Gateway, S3, ECR, CloudWatch alarms, and IAM roles) is managed with Terraform Cloud backed by GitHub.`,
      image: '/images/StackForDev-banner.png',
      githubUrl: 'https://github.com/ZisisKostakakis/StackForDev',
      liveUrl: 'https://stackfordev.zisiskostakakis.com',
      pypiUrl: 'https://pypi.org/project/stackfordev/',
      technologies: [
        'Python',
        'AWS Lambda',
        'AWS API Gateway',
        'AWS S3',
        'AWS ECR',
        'Terraform',
        'SvelteKit',
        'Docker',
        'PyPI',
        'Click',
        'Pydantic',
        'CloudWatch',
      ],
      category: 'Full Stack',
      date: '2025',
      features: [
        'Generates Dockerfiles for Python, JavaScript, Go, Rust, and Java with 20+ stack variants',
        'CLI published on PyPI (`pip install stackfordev`) with interactive and non-interactive modes',
        '`--local` flag for fully offline generation without an API call',
        'S3-backed deduplication: identical configs return a cached Dockerfile instantly',
        'SvelteKit web UI with language / stack / version picker and live Dockerfile preview',
        'Serverless backend on AWS Lambda with API Gateway rate limiting (1 req/s, 10k/month quota)',
        'Infrastructure as Code with Terraform Cloud, including IAM roles, ECR, CloudWatch alarms',
        'Structured JSON logging and CloudWatch alarms for error rate and throttle monitoring',
      ],
      screenshots: [
        {
          src: '/images/StackForDev.png',
          alt: 'StackForDev Web UI',
          caption: 'Dockerfile Generator Web Interface',
        },
      ],
      additionalRepos: [
        {
          label: 'Frontend Repository',
          url: 'https://github.com/ZisisKostakakis/StackForDev-FrontEnd',
        },
      ],
      architectureSections: [
        {
          title: 'System Architecture',
          description:
            'The SvelteKit frontend is deployed as a static site. The CLI and browser both hit the same AWS API Gateway endpoint, which invokes a containerised Lambda function. Generated Dockerfiles are stored in S3 with SHA-256 content deduplication.',
          mermaid: `graph TB
    subgraph CLIENT["Clients"]
        WEB["SvelteKit Web UI\n(Static Site)"]
        CLI["stackfordev CLI\n(PyPI package)"]
    end

    subgraph AWS["AWS"]
        AG["API Gateway\n(rate limit: 1 req/s · 10k/mo)"]
        LM["Lambda Function\n(Python 3.11 · Docker image)"]
        S3["S3 Bucket\n(Dockerfile store + dedup)"]
        ECR["ECR\n(Lambda container image)"]
    end

    WEB -->|"HTTPS POST /generate"| AG
    CLI -->|"HTTPS POST /generate"| AG
    AG -->|"invoke"| LM
    LM -->|"check / store"| S3
    LM -->|"JSON {dockerfile, key}"| AG
    AG -->|"response"| WEB & CLI
    ECR -->|"image"| LM`,
        },
        {
          title: 'Dockerfile Generation Flow',
          description:
            'Each request is validated by Pydantic, checked for injection patterns, resolved to a language template, then stored in S3 with a content-based key before the Dockerfile is returned.',
          mermaid: `sequenceDiagram
    actor User
    participant Client as CLI / Web UI
    participant AG as API Gateway
    participant LM as Lambda (Python)
    participant S3 as S3 Bucket

    User->>Client: Select language, stack, version, extras
    Client->>AG: POST /generate {language, stack, version, extras}
    AG->>LM: Invoke with validated payload
    LM->>LM: Pydantic schema validation
    LM->>LM: Injection pattern check
    LM->>LM: Resolve template (language + stack)
    LM->>LM: Substitute version + extra deps
    LM->>S3: Check SHA-256 key (dedup)
    alt Already exists
        S3-->>LM: Return existing key
    else New Dockerfile
        LM->>S3: Upload Dockerfile
    end
    LM-->>AG: {dockerfile, key, message}
    AG-->>Client: JSON response
    Client->>User: Display Dockerfile`,
        },
        {
          title: 'Infrastructure as Code',
          description:
            'All AWS resources are provisioned with Terraform Cloud. GitHub pushes trigger plan/apply runs. Reserved Lambda concurrency caps cost; lifecycle policies on S3 and ECR manage storage.',
          mermaid: `graph LR
    subgraph TF["Terraform Cloud"]
        PLAN["terraform plan"]
        APPLY["terraform apply"]
    end

    subgraph GITHUB["GitHub"]
        PR["Pull Request"]
        MAIN["main branch push"]
    end

    subgraph RESOURCES["AWS Resources"]
        ECR2["ECR repo"]
        LM2["Lambda\n(reserved concurrency 10)"]
        AG2["API Gateway\n+ usage plan"]
        S3B["S3 bucket\n(lifecycle policy)"]
        CW["CloudWatch alarms\n(error rate · throttles)"]
        IAM["IAM roles + policies"]
    end

    PR -->|"trigger"| PLAN
    MAIN -->|"trigger"| APPLY
    APPLY --> ECR2 & LM2 & AG2 & S3B & CW & IAM`,
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
      longDescription: `PropertyPal Investment Analyzer is a web scraper built with Scrapy that extracts property listings from PropertyPal.com and rates them as investments. It automates property research by combining scraping, AI analysis, and geocoding.

An interactive CLI with multi-select search lets users configure and run multiple property searches at once. Each property is analysed with Perplexity's Housing Agent API, which returns an investment rating out of 10 with pros, cons, and market outlook.

The scraper follows ethical scraping practices: rate limiting, robots.txt compliance, and honest user-agent identification. Data is validated with Pydantic models and exported to JSON and CSV through custom pipelines.`,
      image: '/images/Property-Pal-Scraper.png',
      githubUrl: 'https://github.com/ZisisKostakakis/property-pal-scraper',
      liveUrl: 'https://property-pal-analyser.zisiskostakakis.com/',
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
        'Error handling and retry mechanisms',
        'Structured data extraction (descriptions, features, room details)',
        'Makefile for convenient command execution',
      ],
      screenshots: [],
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

export const projectSlugs = Object.keys(projectDetails);

/** Ordered slugs matching the homepage project order, for prev/next navigation. */
export const orderedSlugs = [
  'homelab-media',
  'kanbanminator',
  'stackfordev',
  'property-pal-scraper',
  'student-loan-checker',
  'date-calculator',
  'transport-info',
  'camera-ocr',
  'connect-5',
];
