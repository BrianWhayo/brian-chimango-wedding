# Brian & Chimango Wedding Website — Final Build Notes

## Implemented

- Removed the `Our Story` section from the live page and navigation.
- Rebuilt the hero around the approved concise invitation copy.
- Added Ecclesiastes 3:1 to the hero and Ecclesiastes 4:12 to the closing footer.
- Updated the ceremony to guest arrival at 11:00 and ceremony start at 12:00.
- Updated the countdown target to the 12:00 ceremony start.
- Replaced the detailed programme with the approved concise `Our Day` schedule.
- Refined Wedding Details, Gallery and Dress Inspiration copy.
- Added a dedicated FAQ section.
- Kept the existing RSVP API integration and RSVP coordinators.
- Separated `Leave Us Your Wishes` into its own section.
- Added the approved closing message and a Back to Top control.
- Updated page metadata to reflect the final wedding theme.

## Verification

- Static TypeScript/TSX syntax validation: passed for all source files.
- Referenced local image assets: verified present.
- Removed `OurStory` imports/anchors: verified.

A full `npm install` / `next build` could not be completed in the ChatGPT build environment because its internal npm package mirror returned HTTP 404 for transitive packages (`zod-validation-error@4.0.2` and `tslib@2.8.1`). This is an environment/package-registry limitation rather than a reported source-code error.

On a normal development machine, run:

```bash
npm install
npm run lint
npm run build
npm run dev
```
