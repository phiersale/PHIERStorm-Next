import Link from 'next/link'
import Image from 'next/image'
import ValidatedBy from './validated-by'

const footerLinks = [
  { href: '/simple-math', label: 'Simple Math' },
  { href: '/veterans', label: 'Veterans' },
  { href: '/no-war', label: 'No War' },
  { href: '/unions', label: 'Unions' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/telecare', label: 'TeleCARE' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#060a14]">
      <div className="max-w-[1200px] mx-auto px-4 py-12 space-y-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={28} height={28} />
              <span className="text-lg font-bold tracking-wider">PHIERS</span>
            </div>
            <p className="text-sm text-gray-400">
              Power Held In Every Representative&apos;s Seat.
              <br />
              Built for the hard years. Ready right now.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-3">Footer Navigation</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-[#3ddc84] transition-colors">
                  {link.label}
                </Link>
              ))}
              <a href="mailto:info@phiers.org" className="text-gray-400 hover:text-[#3ddc84] transition-colors">Contact</a>
            </div>
          </div>
        </div>

       <ValidatedBy defaultExpanded={false} />
        
        <div className="pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} PHIERS.org — Prior Art since 2009
        </div>
      </div>
    </footer>
  )
}
