# Chase Norvell Engineering Portfolio

A static-first Next.js portfolio for mechanical design, thermal analysis,
electronics packaging, manufacturing, autonomous systems, and robotics work.
The site is intentionally content-driven: projects, experience, education,
contact information, and media approvals live outside the page components.

## Before publishing

Open `src/config/site.ts` and add the approved public contact details:

- `email`
- `linkedIn`
- `resumePath`
- `NEXT_PUBLIC_SITE_URL` in the hosting environment

The current build intentionally does not guess at missing email, LinkedIn, or
resume information.

## Run locally

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

The page refreshes automatically when a file changes.

## Add a new project

1. Copy one file in `src/content/projects/`, such as
   `locking-mecanum.ts`.
2. Change the text and metadata. Give the project a unique `slug`.
3. Add the new project to `src/content/projects/index.ts`. This is the content
   registry; no React component needs to change.
4. Add approved media under `public/projects/<project-slug>/`.
5. List each approved file in the project's `media` array.

The standard case-study page, metadata, next-project navigation, sitemap entry,
and project card are generated from that content.

## Change homepage featured projects

In each project content file:

- set `featured: true` to include it;
- set `featured: false` to remove it;
- change `order` to control its position.

The homepage shows the first four public featured projects.

## Add or change an image

1. Put the file in `public/projects/<project-slug>/`.
2. Open that project's content file.
3. Add an item to `media`:

```ts
{
  src: "/projects/thermal-analysis/approved-result.webp",
  alt: "Public ANSYS temperature result comparing two packaging concepts",
  caption: "Steady-state comparison used to select the next packaging direction.",
  public: true,
}
```

The first public media item automatically becomes the project-card image and
case-study hero. Additional public items appear in the project gallery.

Use WebP or AVIF where practical. Write alt text that explains what the image
shows. Captions should describe the engineering purpose, not just the subject.

## NDA and export-control safeguards

Projects and media each have a `public` field.

- `public: true` allows the item to render.
- `public: false` keeps it out of the site.

The gallery filters out non-public media. Still, do not store uncertain,
restricted, customer-identifying, export-controlled, or proprietary assets in
this repository. Keep professional files in separate `definitely-public`,
`unsure`, and `do-not-publish` locations before selecting anything for the site.

To hide a whole project, set its top-level `public` field to `false`. It will be
removed from cards, the Work archive, static routes, project navigation, and the sitemap.

## Change the resume PDF

1. Add the approved PDF under `public/resume/`.
2. Set `resumePath` in `src/config/site.ts`, for example:

```ts
resumePath: "/resume/chase-norvell-resume.pdf",
```

The Resume page will automatically show the download button.

## Add a certification

Add a verified entry to `src/content/certifications.ts`:

```ts
{
  name: "Certified SOLIDWORKS Professional",
  issuer: "Dassault Systèmes",
  date: "Month Year",
  credentialUrl: "https://…",
  status: "completed",
  public: true,
}
```

Do not add a credential until it is completed and verified. In-progress or
private entries are not intended for public display.

## Change contact information

Edit only `src/config/site.ts`. The resume, contact page, SEO defaults, and
footer use this central configuration.

## Quality checks

Before publishing, run:

```text
npm run lint
npm run build
```

Both commands should finish without errors.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js settings.
5. Add `NEXT_PUBLIC_SITE_URL` with the final `https://…` site address.
6. Deploy.

Vercel will rebuild the site whenever the selected branch is updated.

## Connect a custom domain

1. Open the project in Vercel.
2. Go to **Settings → Domains**.
3. Add the domain you own.
4. Follow Vercel's DNS instructions at the domain registrar.
5. Update `NEXT_PUBLIC_SITE_URL` to the custom `https://…` address and redeploy.

## Update dependencies

Run `npm outdated` to review available updates. For routine, compatible updates,
run `npm update`, then run the lint and build checks. Major Next.js upgrades can
change APIs; read the versioned guidance in `node_modules/next/dist/docs/`
before changing code.

## Content map

```text
src/config/site.ts            Contact, navigation, SEO defaults
src/content/projects/         One structured file per project
src/content/experience.ts     Experience timeline
src/content/education.ts      School and coursework
src/content/certifications.ts Verified credentials
public/projects/              Approved public project media
public/resume/                Approved public resume PDF
```
