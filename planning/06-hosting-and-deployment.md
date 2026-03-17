# Hosting And Deployment Plan

## Recommendation

Build the site as a static-first project and deploy it in a way that keeps hosting simple.

Recommended approach:
+ Use a static site framework such as Astro.
+ Output fully static HTML, CSS, JS, images, sitemap, and redirects.
+ Keep forms on a lightweight external or serverless handler.
+ Avoid any runtime dependency unless there is a clear need.

This gives the best balance of speed, maintainability, SEO, and cheap hosting.

## Can It Be Hosted On Hostinger?

Yes.

There are two sensible deployment paths for Hostinger:

### Option 1: Plain static deploy
Best if you want the simplest and cheapest setup.

How it works:
+ Build the site locally.
+ Generate a static output directory.
+ Upload the built files to Hostinger with File Manager or FTP into the website's `public_html`.

Why this is a good fit:
+ No Node runtime needed in production.
+ Fast and simple.
+ Easy to back up and move later.
+ Works well for a brochure-style HVAC site.

### Option 2: Hostinger web app deployment
Best if you want Git-based deployments through Hostinger's build system.

How it works:
+ Keep the source site in Git.
+ Connect the repo to Hostinger's web app hosting.
+ Let Hostinger run the build and publish the result.

Why you might choose it:
+ Easier redeploy flow from GitHub.
+ More convenient if you want a modern front-end pipeline managed on Hostinger.

## Recommended Path For This Project

Use Option 1 unless you already know you want Git-based app deployment inside Hostinger.

Reason:
+ The website is intentionally static.
+ Static output is easier to host anywhere.
+ It avoids coupling the site to a particular hosting workflow.
+ If you leave Hostinger later, moving the site is trivial.

## Proposed Deployment Workflow

### During development
+ Build locally in a proper source project.
+ Keep content and reviews in structured local data files.
+ Generate optimized images, sitemap, robots, and redirect rules during build.

### Pre-launch
+ Run production build.
+ Review the final `dist` output locally.
+ Validate forms, metadata, structured data, redirects, and mobile UX.

### Launch
+ Add the production domain in Hostinger.
+ Upload the built files to the website root or deploy through Hostinger's web app flow.
+ Point DNS if the domain is managed elsewhere.
+ Enable SSL.
+ Submit sitemap to Google Search Console.

## Form Handling Options

Because the site is static, forms need one of these:

### Recommended
+ A simple external form backend such as Formspree, Basin, or a small custom endpoint.

### Alternative
+ Use Hostinger's app hosting path and add a lightweight form endpoint if needed.

For a small local service website, external form handling is usually the cleanest option.

## Redirect Strategy At Deployment

The deployment needs permanent redirects for:
+ `/home/` -> `/`
+ `/homepage/` -> `/`
+ `/services/` -> `/`
+ `/maintenance/ac-cleaning/` -> `/maintenance/`
+ `/maintenance/ac-repair/` -> `/repair/`

If Hostinger hosting does not make `410` responses convenient, redirect the junk URLs to the closest relevant page instead of leaving them live.

## What The Deliverable Should Look Like

When the site is ready to deploy, you should have:
+ A source project folder
+ A production build folder such as `dist/`
+ Optimized image assets
+ Redirect rules
+ A form integration configured
+ A short deployment checklist

## Hostinger Notes

As of March 17, 2026, Hostinger's official documentation indicates:
+ Node.js web apps are supported on Business and Cloud hosting plans.
+ Static or custom HTML websites can also be uploaded through File Manager or FTP workflows.

That means you are not locked into one deployment style. We can keep the project static and still deploy cleanly on Hostinger.

## Recommendation Summary

For this project, the cleanest plan is:
1. Build a static site.
2. Export a static production bundle.
3. Deploy the bundle to Hostinger.
4. Use a lightweight external form handler.

That keeps the website fast, portable, and easy to maintain.
