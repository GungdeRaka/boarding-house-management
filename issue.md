# Task: Redesign Location Section

## Description
Redesign the existing Location section to provide a more interactive and visually appealing experience. The section should be split into two main parts and include a scroll-triggered animation.

## Requirements

1. **Layout (Split View):**
   - **Left Side:** Embed a Google Maps view or a high-quality map placeholder showing the exact location: `55FQ+7V Kutuh, Badung Regency, Bali`.
   - **Right Side:** A concise and engaging description of Kuda Putih House's strategic location, highlighting its proximity to local attractions, beaches, and essential amenities.

2. **Animation (Scroll-Triggered):**
   - Add a playful "moving car" animation below the description.
   - The car should move from **right to left** as the user scrolls down through the section.
   - Use `framer-motion` for smooth, performance-optimized animation tied to the scroll progress.

3. **Component Architecture:**
   - Implement this as a standalone component: `src/app/ui/LocationSection.tsx`.
   - Ensure the component is responsive, stacking the map and description on mobile devices.

## Technical Considerations
- **Map Integration:** Use an `<iframe>` for the Google Maps embed or a specialized library if preferred. Ensure it is responsive.
- **Scroll Animation:** Leverage `useScroll` and `useTransform` from `framer-motion` to map the scroll progress to the car's horizontal position.
- **Styling:** Maintain consistency with the brand's aesthetic (emerald/zinc color palette, refined typography).
