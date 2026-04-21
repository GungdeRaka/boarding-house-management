# Task: Create Memory Section (Replacing Gallery Section)

## Description
We need to replace the existing Gallery section with a new "Memory Section". This new section will feature two smoothly animated, auto-scrolling carousels designed to showcase our property visually and provide compelling social proof.

## Requirements

1. **Top Carousel (Image Gallery):**
   - Must contain at least 6 different high-quality images showcasing the property, rooms, or facilities.
   - Images must be rendered using the Next.js `<Image />` component for optimal performance, lazy loading, and proper sizing.
   - The carousel should feature a smooth, continuous, infinite auto-scroll animation.

2. **Bottom Carousel (Reviews / Social Proof):**
   - Must display past users' reviews or stories about their experience renting a room here.
   - **Optimize the review sentences:** Ensure the text is engaging, concise, and clearly highlights the positive aspects of their stay.
   - This carousel should also feature a smooth, continuous auto-scroll animation (consider scrolling in the opposite direction to the top carousel for visual interest).

3. **Component Architecture:**
   - Create this section as separated components like `MemorySection` to maintain a clean codebase.

## Technical Considerations
- **Animations:** Utilize CSS keyframes or a library like `framer-motion` to achieve the smooth, jank-free auto-scrolling effect.
- **Responsiveness:** Ensure the carousels and the overall section look great and function perfectly across all device sizes (mobile, tablet, desktop).
- **Image Optimization:** Always use the `<Image />` tag with appropriate `alt` texts and sizing attributes to prevent layout shifts. If image has "fill" props, make sure to add `sizes` attribute.
