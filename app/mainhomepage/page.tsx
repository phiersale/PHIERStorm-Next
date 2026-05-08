// app/mainhomepage/page.tsx
// Direct access to the main homepage – no opening modal, no slides.

import MainHomePage from '@/components/MainHomePage'

export default function MainHomepageRoute() {
  // Render the main homepage component without any modal/slideshow wrapper.
  // Do NOT pass the onBackToEntry prop – that's only used when coming from an entry modal.
  return <MainHomePage />
}