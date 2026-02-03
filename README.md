# Rani Health Care

**Rani Health Care** is a full-stack healthcare web application built with **Next.js**, **Typescript**, and **PostgreSQL**.  
It provides an easy-to-use interface for managing healthcare services, patient data, and appointments.

---

## Live Link

[https://rani-health-care-center-client.vercel.app](https://rani-health-care-center-client.vercel.app)

## Features

- Role-based dashboard (Admin, Doctor, Patient)
- Authentication & Authorization
- Protected routes with middleware
- Form validation using Zod
- Responsive and modern UI built with **Next.js**
- Developed an AI-powered doctor search feature, enabling users to find the right doctor
  effortlessly.
- Manage healthcare services, categories, and patient information
- Easy environment configuration using `.env` files
- Implemented intelligent search algorithms that provide fast, accurate, and personalized doctor
  recommendations based on user needs
- Improved healthcare accessibility through AI-driven solutions, making it easier for users to
  connect with trusted medical specialists

---

## Tech Stack

- **Frontend:** Next.js, Typescript, Tailwind CSS
- **Backend:** Node.js, Prisma, PostgreSQL
- **Database ORM:** Prisma
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL installed and running
- pnpm / npm / yarn

### Frontend Setup

1. Clone the repository:

````bash
git clone https://github.com/neelarani/rani-health-care-center-client.git
cd rani-health-care-center-client

Install dependencies:

npm install
# or
yarn install
# or
pnpm install


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```graphql
src/
├─ app/
│  ├─ commonlayout/
│  │  ├─ auth/
│  │  ├─ about/
│  │  ├─ consultation/
│  │  ├─ contact/
│  │  ├─ diagnostics/
│  │  ├─ faq/
│  │  ├─ health-plans/
│  │  ├─ medicine/
│  │  └─ ngos/
│  │
│  ├─ dashboardlayout/
│  │  ├─ componprotectedlayout/
│  │  ├─ patientdashboardlayout/
│  │  ├─ admin/
│  │  └─ doctor/
│  │
│  └─ page.tsx
│
├─ assets/        # Images, fonts, icons, etc.
├─ components/    # Reusable React components
├─ hooks/         # Custom React hooks
├─ services/      # API calls, server services
├─ types/         # TypeScript types
├─ zod/           # Zod schemas for validation
└─ proxy/         # API proxy or server-side helpers

```

## Author

**Neela Rani**
