TRFX - Trade Rise Forex

Welcome to TRFX, a platform designed to evaluate and fund forex traders. TRFX allows traders to complete challenges to demonstrate their skills and gain access to funded trading accounts with balances up to $200,000, keeping up to 80% of the profits without risking their own capital. This project features a React-based frontend with TypeScript and Tailwind CSS, built using Vite, alongside a Node.js backend with Express.

•	Current Date and Time: Sunday, May 18, 2025, 07:19 PM +04

•	License: MIT License

•	Version: 1.0.0

Table of Contents

•	Overview

•	Features

•	Project Structure

•	Prerequisites

•	Installation

•	Running the Project

•	Configuration

•	Usage

•	Contributing

•	License

•	Contact

Overview

TRFX is a full-stack web application that provides a seamless experience for traders and administrators. The frontend offers an intuitive dashboard, challenge selection, and account management, utilizing a rich set of reusable UI components. The backend handles authentication, challenge management, and data storage with PostgreSQL.

Features

•	Trader Dashboard: View account details, trade history, and challenge progress.

•	Trading Challenges: Select from various challenge types (e.g., Aggressive, Standard).

•	Admin Panel: Manage traders, view analytics, and oversee payouts.

•	Authentication: Secure login and signup functionality.

•	Responsive Design: Optimized for desktop and mobile with a dark navy theme.

•	Reusable UI Components: Custom components in the ui folder for consistent styling.

Project Structure

text

Copy

trfx/

├── .git/

├── attached_assets/

├── client/

│   ├── src/

│   │   ├── components/

│   │   │   ├── admin/

│   │   │   │   ├── activity-feed.tsx

│   │   │   │   ├── stats-card.tsx

│   │   │   │   └── traders-table.tsx

│   │   │   ├── challenges/

│   │   │   │   └── challenge-card.tsx

│   │   │   ├── dashboard/

│   │   │   │   ├── account-information.tsx

│   │   │   │   ├── account-status.tsx

│   │   │   │   ├── challenge-progress.tsx

│   │   │   │   ├── challenge-rules.tsx

│   │   │   │   ├── performance-chart.tsx

│   │   │   │   ├── recent-trades.tsx

│   │   │   │   ├── trade-distribution.tsx

│   │   │   │   └── trading-activity.tsx

│   │   │   ├── layout/

│   │   │   │   ├── admin-layout.tsx

│   │   │   │   ├── dashboard-layout.tsx

│   │   │   │   ├── header.tsx

│   │   │   │   └── sidebar.tsx

│   │   │   └── layouts/

│   │   │       └── admin-layout.tsx

│   │   ├── ui/

│   │   │   ├── accordion.tsx

│   │   │   ├── alert-dialog.tsx

│   │   │   ├── alert.tsx

│   │   │   ├── aspect-ratio.tsx

│   │   │   ├── avatar.tsx

│   │   │   ├── badge.tsx

│   │   │   ├── breadcrumb.tsx

│   │   │   ├── button.tsx

│   │   │   ├── calendar.tsx

│   │   │   ├── card.tsx

│   │   │   ├── carousel.tsx

│   │   │   ├── chart.tsx

│   │   │   ├── checkbox.tsx

│   │   │   ├── collapsible.tsx

│   │   │   ├── command.tsx

│   │   │   ├── context-menu.tsx

│   │   │   ├── dialog.tsx

│   │   │   ├── drawer.tsx

│   │   │   ├── dropdown-menu.tsx

│   │   │   ├── form.tsx

│   │   │   ├── hover-card.tsx

│   │   │   ├── input-otp.tsx

│   │   │   ├── input.tsx

│   │   │   ├── label.tsx

│   │   │   ├── menubar.tsx

│   │   │   ├── navigation-menu.tsx

│   │   │   ├── pagination.tsx

│   │   │   ├── popover.tsx

│   │   │   ├── progress.tsx

│   │   │   ├── radio-group.tsx

│   │   │   ├── resizable.tsx

│   │   │   ├── scroll-area.tsx

│   │   │   ├── select.tsx

│   │   │   ├── separator.tsx

│   │   │   ├── sheet.tsx

│   │   │   ├── sidebar.tsx

│   │   │   ├── skeleton.tsx

│   │   │   ├── slider.tsx

│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx

│   │   │   ├── tabs.tsx

│   │   │   ├── textarea.tsx

│   │   │   ├── toast.tsx

│   │   │   ├── toaster.tsx

│   │   │   ├── toggle-group.tsx

│   │   │   ├── toggle.tsx

│   │   │   └── tooltip.tsx

│   │   ├── hooks/

│   │   │   ├── use-auth.ts

│   │   │   ├── use-mobile.tsx

│   │   │   ├── use-toast.ts

│   │   │   ├── use-trading-accounts.ts

│   │   │   ├── useAuth.ts

│   │   │   └── useAuth.tsx

│   │   ├── lib/

│   │   │   ├── queryClient.ts

│   │   │   └── utils.ts

│   │   ├── pages/

│   │   │   ├── about/

│   │   │   │   └── team.tsx

│   │   │   ├── admin/

│   │   │   │   ├── accounts.tsx

│   │   │   │   ├── dashboard.tsx

│   │   │   │   ├── payouts.tsx

│   │   │   │   └── traders.tsx

│   │   │   ├── challenges/

│   │   │   │   ├── aggressive.tsx

│   │   │   │   ├── compare.tsx

│   │   │   │   ├── evaluation.tsx

│   │   │   │   └── standard.tsx

│   │   │   ├── dashboard/

│   │   │   │   └── index.tsx

│   │   │   ├── how-it-works/

│   │   │   │   ├── challenge-process.tsx

│   │   │   │   ├── evaluation-phase.tsx

│   │   │   │   └── funding-requirements.tsx

│   │   │   ├── trading/

│   │   │   │   ├── about.tsx

│   │   │   │   ├── analytics-new.tsx

│   │   │   │   ├── analytics.tsx

│   │   │   │   ├── challenges-new.tsx

│   │   │   │   ├── challenges.tsx

│   │   │   │   ├── checkout-new.tsx

│   │   │   │   ├── contact.tsx

│   │   │   │   ├── dashboard-new.tsx

│   │   │   │   ├── dashboard.tsx

│   │   │   │   ├── faq.tsx

│   │   │   │   ├── home.tsx

│   │   │   │   ├── how-it-works.tsx

│   │   │   │   ├── landing-new.tsx

│   │   │   │   ├── landing.tsx

│   │   │   │   ├── login.tsx

│   │   │   │   ├── not-found.tsx

│   │   │   │   ├── payouts-new.tsx

│   │   │   │   ├── payouts.tsx

│   │   │   │   ├── profile-new.tsx

│   │   │   │   ├── profile.tsx

│   │   │   │   ├── register.tsx

│   │   │   │   ├── signup.tsx

│   │   │   │   ├── trade-history-new.tsx

│   │   │   │   ├── trade-history.tsx

│   │   │   │   └── trading.tsx

│   │   │   ├── funding-requirements.tsx

│   │   │   ├── payout-structure.tsx

│   │   │   └── trading-rules.tsx

│   │   ├── providers/

│   │   │   └── AuthProvider.tsx

│   │   ├── types/

│   │   │   └── index.ts

│   │   ├── App-simple.tsx

│   │   ├── App.tsx

│   │   ├── index.css

│   │   ├── main.tsx

│   │   ├── index.html

│   │   ├── server/

│   │   │   ├── db.ts

│   │   │   ├── index.ts

│   │   │   ├── routes.ts

│   │   │   ├── storage.ts

│   │   │   └── vite.ts

│   │   └── vite.ts

│    ├── components.json

│    ├── drizzle.config.ts

│    ├── postcss.config.js

│   └── tailwind.config.ts

│   ├── .gitignore

│   ├── components.json

│   ├── tsconfig.config.js

│   ├── tsconfig.json

│   └── vite.config.ts

├── README.md             # This file

└── tsconfig.json

Prerequisites

•	Node.js: v18.x or later

•	npm: v9.x or later

•	Git: For version control

•	PostgreSQL: v15 or later (for backend database)

Installation

1.	Clone the Repository:
   
bash

Copy

git clone https://github.com/thelegendsvk007/trfx.git

cd trfx

2.	Install Dependencies:
   
bash

Copy

npm install

This command installs dependencies for both the client and server within the trfx/ directory.

Running the Project

1.	Start the Development Server:

bash

Copy

npx vite --port 4000

The frontend will run on http://localhost:4000. This command uses Vite to serve the React application.

2.	Start the Backend Server:
   
bash

Copy

cd server

node index.ts

The backend will run on http://localhost:5000 (adjust port in server/index.ts if needed). Ensure PostgreSQL is running and configured.

Configuration

•	Environment Variables: Create a .env file in the client/ directory with:

text

Copy

VITE_API_URL=http://localhost:5000

•	Database: Configure db.ts in the server/ directory with your PostgreSQL connection string.

•	Tailwind CSS: Customize colors and fonts in shared/tailwind.config.ts.

•	TypeScript: Configure settings in tsconfig.json or tsconfig.config.js as needed.

Usage

1.	Sign Up/Login:
   
o	Visit http://localhost:4000/login to sign up or log in.

2.	Trader Dashboard:
   
o	Navigate to /dashboard to view account details and trade history.

3.	Challenges:
   
o	Explore /challenges/aggressive, /challenges/standard, etc., to select a trading challenge.

4.	Admin Panel:
   
   
o	Access /admin for administrative tasks (role-based access required).

Contributing

We welcome contributions to improve TRFX! Please follow these steps:

1.	Fork the Repository:
   
o	Create your own fork on GitHub at https://github.com/thelegendsvk007/trfx.

2.	Create a Branch:
	
bash

Copy

git checkout -b feature/your-feature-name

3.	Make Changes:

o	Follow TypeScript and Tailwind CSS conventions.

4.	Commit Changes:

bash

Copy

git commit -m "Add your feature description"

5.	Push to GitHub:

bash

CollapseWrapRun

Copy

git push origin feature/your-feature-name

6.	Submit a Pull Request:
   
o	Open a PR against the main branch with a clear description.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

•	Project Maintainer: svk

•	GitHub Issues: https://github.com/thelegendsvk007/trfx/issues

For support, open an issue or contact the maintainer directly.

 
Notes

•	Backend: The server/ directory includes basic files (db.ts, index.ts, routes.ts, storage.ts, vite.ts). You may need to expand these with Express and Drizzle ORM setup for full functionality.

•	Assets: Ensure any required assets are placed in attached_assets/ or client/src/assets/ if added.

