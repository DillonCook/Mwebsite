# Wesley Chapel AC Rebuild Blueprint

## Project Positioning

### Core promise
+ Honest, repair-first HVAC help for Wesley Chapel homeowners.
+ Family-owned, licensed, neighborly, and straightforward.
+ No gimmicks, no pressure, no inflated replacement sales.

### Audience
+ Homeowners in Wesley Chapel, Florida.
+ Primary mindset: "My AC is struggling or out, and I want someone honest."
+ Secondary mindset: "I want to avoid being sold something I do not need."

### Business constraints
+ Static site only at launch.
+ Reviews remain on-site and may become dynamic later.
+ Public website must not show the owner's home address.
+ Service area should be Wesley Chapel only.
+ Florida license should remain visible where trust matters.

## Sitewide UX Strategy

### Primary conversion goal
+ Phone call.

### Secondary conversion goal
+ Contact form submission.

### CTA hierarchy
1. `Call Now`
2. `Request Service`
3. `Read Reviews`

### Header behavior
+ Top bar on desktop with phone, hours summary, and license.
+ Main header with compact logo, core navigation, and a high-contrast `Call Now` button.
+ Sticky mobile footer bar with `Call` and `Request Service`.

### Footer behavior
+ Repeat phone number, hours, license, and Wesley Chapel-only service statement.
+ Link to all core pages, privacy policy, and sitemap.
+ No physical address.

## Navigation

### Primary nav
+ Home
+ AC Repair
+ AC Maintenance
+ AC Replacement
+ About
+ Reviews
+ FAQ
+ Contact

### Utility links
+ Call now
+ License number

## Recommended Page Roles

### `/`
Conversion hub. Establish trust quickly, frame the repair-first difference, and route visitors into the right service path.

### `/repair/`
Highest-intent service page. Built for "AC not cooling" and urgent repair searches.

### `/maintenance/`
Reframes maintenance away from gimmicky service contracts and toward practical care.

### `/ac-replacement/`
Supports homeowners who may need replacement while keeping the honest, non-pushy stance.

### `/about-us/`
Human trust page. Owner story, local roots, values, license, and why the company works the way it does.

### `/reviews/`
Social proof hub with homeowner feedback and trust reinforcement.

### `/faq/`
AEO page for direct-answer content, internal links, and common objections.

### `/contact/`
Low-friction phone-first contact page with short form and service area clarity.

## Sitewide Component System

### Core reusable sections
+ Hero
+ Trust strip
+ Service cards
+ Owner intro block
+ Review highlight grid
+ FAQ accordion or stacked Q&A list
+ "What to expect" process block
+ Final CTA band

### Section rules
+ Every page needs a visible CTA above the fold.
+ Every service page gets one direct-answer intro paragraph under the hero.
+ Every service page gets one trust block before the final CTA.
+ Every page should end with one phone CTA and one form CTA.

## Content Tone Rules

### Keep
+ Neighborly
+ Plainspoken
+ Calm confidence
+ Repair-first honesty
+ Quiet faith-informed values

### Avoid
+ Corporate claims
+ Coupon language
+ Fake urgency
+ "Best HVAC company" style hype
+ Aggressive financing pushes
+ Overuse of Bible verses in sales content

## Visual Direction

### Overall feel
+ Clean, bright, and local rather than glossy or corporate.
+ Real field photography over stock imagery.
+ Strong spacing and typography, minimal decoration.

### Palette
+ Deep service blue for trust and structure.
+ Lighter sky blue for highlights.
+ Warm off-white or sand neutral for background warmth.
+ A restrained accent color for CTA emphasis only.

### Typography direction
+ Friendly, readable serif or humanist display face for headings.
+ Clean sans-serif for body and UI.
+ Use the existing identity as inspiration, not as a strict visual template.

## Mobile-First Priorities

### Must-have behaviors
+ Tap-to-call visible without scrolling.
+ First viewport should explain what the company does, where it serves, and why it is trusted.
+ Forms should stay short.
+ Review cards and FAQs should stack cleanly.
+ No carousels or auto-rotating sliders.

## Internal Linking Model

### Homepage links out to
+ Repair
+ Maintenance
+ Replacement
+ About
+ Reviews
+ FAQ
+ Contact

### Service pages link to
+ The other two service pages
+ Reviews
+ FAQ
+ Contact
+ About

### About page links to
+ Reviews
+ Repair
+ Contact

### FAQ links to
+ Repair
+ Maintenance
+ Replacement
+ Contact

## Redirect Framework

### Keep
+ `/`
+ `/repair/`
+ `/maintenance/`
+ `/ac-replacement/`
+ `/about-us/`
+ `/contact/`

### Redirect
+ `/home/` -> `/`
+ `/homepage/` -> `/`
+ `/services/` -> `/`
+ `/maintenance/ac-cleaning/` -> `/maintenance/`
+ `/maintenance/ac-repair/` -> `/repair/`

### Retire with `410` if hosting permits
+ `/shortcodes/testimonials/`
+ `/shortcodes/contact-forms/`
+ `/mikes-content-page/`
+ `/mikes-test-page/`
+ `/2675-2/`

## Asset Guidance

### Reuse after cleanup
+ Real photos of Mike and on-site work if still current.
+ Existing phone number and license.
+ Strong testimonial excerpts after verification.

### Redraw or refresh
+ Logo and wordmark as SVG assets.
+ Cropped photo treatments and responsive variants.

### Replace
+ Slider banners
+ Broad regional service-area map
+ Placeholder avatars
+ Demo graphics
+ Template leftovers and copied content

## Content Production Priorities

### First-pass copy to write before design lock
1. Homepage hero, trust strip, and three service summaries.
2. Full repair page.
3. About page.
4. Maintenance and replacement pages.
5. FAQ and reviews page.
6. Contact page microcopy.

### Owner approvals needed before launch
+ Final business name formatting.
+ Current hours.
+ Emergency service wording.
+ Replacement warranty language.
+ Which reviews may be quoted on-site.
