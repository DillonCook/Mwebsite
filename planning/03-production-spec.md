# Wesley Chapel AC Production Spec

## Build-Ready SEO Requirements

### URL rules
+ Clean lowercase URLs.
+ One canonical URL per page.
+ No tag, category, author, or search-result index pages.

### Metadata rules
+ Unique title and meta description per page.
+ One H1 per page.
+ Descriptive OG title, description, and image.
+ Indexable HTML without client-side rendering dependency.

### On-page SEO rules
+ Include `Wesley Chapel` in the title, H1, intro paragraph, and supporting copy where natural.
+ Use service-intent phrasing, not generic "HVAC services" filler.
+ Keep paragraphs short and answer-led.
+ Build FAQ sections for human clarity and answer-engine extraction, even if rich results do not show.

## Schema Plan

### Global schema
+ `Organization`
+ `LocalBusiness` or `HVACBusiness`
+ `WebSite`

### Page schema
+ `BreadcrumbList` on all pages.
+ `Service` on repair, maintenance, and replacement pages.
+ `FAQPage` only if the content format remains valid and useful, with the understanding that rich results are limited.

### Business data rules
+ Use phone number.
+ Use service area as Wesley Chapel, Florida.
+ Do not publish the home address in visible content or schema.
+ Include license in visible content, not as invented schema fields.

## Performance Rules

### Required
+ Static HTML prerender.
+ No heavy slider libraries.
+ No third-party chat widget at launch.
+ Minimal or no webfont payload.
+ Responsive images with modern formats.
+ Lazy-load below-the-fold images only.

### Target outcomes
+ Fast mobile first contentful paint.
+ Stable layout with predefined image sizing.
+ Minimal script execution.

## Asset Production Checklist

### Logo
+ Redraw primary logo and wordmark as SVG.
+ Prepare dark, light, and compact variants.

### Photography
+ Review existing Mike/field images for recency and quality.
+ Crop for hero, card, and portrait uses.
+ Export responsive sizes and modern formats.

### Images to avoid
+ Stock technician handshakes
+ Fake office team photos
+ Old slider graphics with embedded text
+ Maps that imply a broad service radius

## Reviews Data Structure

### Static launch format
Store reviews as structured content so the page can become dynamic later with minimal refactor.

Suggested fields:
+ `id`
+ `quote`
+ `name`
+ `location_label`
+ `source`
+ `date`
+ `theme_tags`
+ `featured`

### Editorial rules
+ Prefer quotes about honesty, repair-first guidance, and responsiveness.
+ Do not over-edit voice.
+ Keep names privacy-safe.

## Copywriting Rules

### Keep repeating
+ Honest
+ Repair-first
+ Local
+ Straightforward
+ Licensed
+ Wesley Chapel homeowners

### Avoid repeating
+ "Best"
+ "Top-rated"
+ "Guaranteed lowest price"
+ Broad Tampa Bay service language
+ Harsh attack language about competitors

## Content Inventory To Migrate

### Keep and rewrite
+ Owner story from current About page.
+ Repair-first philosophy from current Repair and Replacement pages.
+ Filter-first maintenance guidance from current Maintenance page.
+ Selected testimonial excerpts from current About page.

### Discard
+ Commercial positioning.
+ Demo page content.
+ Placeholder testimonials with generic avatars.
+ Any copied or mismatched service copy.
+ Broad regional city list.

## Build Phase Deliverables

### Before development starts
1. Approve page architecture and wireframes.
2. Confirm business-name formatting, hours, and emergency wording.
3. Confirm review set and photo set.
4. Approve copy direction.

### During development
1. Build reusable page sections.
2. Create structured review data source.
3. Implement metadata and schema.
4. Set redirects and retire junk URLs.

### Before launch
1. Test mobile call CTA behavior.
2. Verify forms and thank-you flow.
3. Check redirect coverage.
4. Validate schema.
5. Review page titles and descriptions.
6. Run page speed and accessibility checks.

## Remaining Owner Inputs

### Essential
+ Confirm official business naming style.
+ Confirm current hours and after-hours wording.
+ Confirm current phone number.
+ Confirm whether financing language should appear at all.
+ Confirm whether commercial work should be omitted entirely on the public site.

### Strongly recommended
+ Provide 6-10 approved reviews with sources.
+ Approve a short new photo set if existing imagery feels dated.
