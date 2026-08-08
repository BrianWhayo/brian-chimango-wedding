# Brian & Chimango Wedding Website — v2 polish pass

This pass keeps the approved Version 1.0 content and architecture intact while improving the guest-facing experience.

## Changes made

- Refined the hero layout for small screens so the names, Scripture, invitation and actions fit more comfortably.
- Adjusted hero image positioning and overlays for more reliable text contrast across phone and desktop widths.
- Added an accessible “Skip to content” link for keyboard users.
- Added current-section highlighting to desktop and mobile navigation.
- Increased the mobile menu button tap target.
- Corrected the gentlemen’s outfit palette tonal-selection bug (`Gentlemen` was previously compared with `For men`).
- Removed live-per-second screen-reader announcements from the countdown while retaining its accessible timer label.
- Added global scroll padding so fixed navigation does not cover anchored section headings.

## RSVP deadline update

The RSVP deadline has been updated to **Wednesday, 19 August 2026** across the live wedding content and FAQ copy.

## Verification limitation

A full dependency install/build could not be run in the provided execution environment because its npm package mirror returns 404 responses for transitive packages. Static source validation was therefore used instead. Run `npm install`, `npm run lint`, and `npm run build` in a normal development environment before deployment.
