// FILE: app/petition/page.tsx
// VERSION: 2.0.0 – Redirect local petition route to unified Abacus petition

import { redirect } from 'next/navigation'

export default function PetitionRedirectPage() {
  redirect('https://phiers.abacusai.app/petition/fifteen-hundred')
}

// FILE: app/petition/page.tsx
// VERSION: 2.0.0