# IB Coursework Evaluation Platform

## Tech Stack

- **Next.js 14**: Framework for building the application.
- **TailwindCSS**: For styling and responsive layouts.
- **Zustand**: State management for handling global states.
- **Shadcn UI**: Component library for user interface elements.

## Key Features

### File Upload

- Drag-and-drop support for PDF files.
- Manual file upload option.
- Display file size limit (e.g., "Limit 25 MB per file").
- Store uploaded files using browser local storage.

### Local Storage Implementation

- Save uploaded files and their metadata locally.
- Ensure data persistence across page reloads.
- Efficient retrieval of stored files and associated data.

### Coursework Details Form

- Dropdowns for selecting "Coursework Type" and "Subject".
- Text input for entering the essay title.
- Store form data locally and link it with the uploaded file.

### Evaluation Display

- Use of dummy data for all evaluation criteria.
- Overall score displayed with a circular progress indicator.
- Detailed breakdown of scores by criteria (A, B, C).
- Display evaluation date and allow local storage and retrieval of results.

### Coursework List

- List previously uploaded coursework with relevant details (title, subject, word count, etc.).
- Data is fetched from local storage.

### Explore Coursework Section

- Tabbed interface to switch between different coursework categories.
- Grid layout to display coursework examples visually.

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
