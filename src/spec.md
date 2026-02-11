# Specification

## Summary
**Goal:** Use the user-uploaded photo on the “Yes” success screen image slot.

**Planned changes:**
- Add the uploaded image `Snapchat-1579100041.jpg` to `frontend/public/assets/generated` with a stable filename that includes a `.dim_WxH` suffix.
- Update the success screen (shown after clicking “Yes”) to render the new `/assets/generated/...` image instead of `/assets/generated/heart-couple-portrait.dim_1024x1024.png`, keeping all existing text and animations unchanged.
- Update the image alt text (English) to match the new displayed photo.

**User-visible outcome:** After clicking “Yes”, the success screen shows the uploaded photo instead of the previous default couple image.
