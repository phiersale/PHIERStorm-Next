import Link from 'next/link'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#060a14]">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/images/PHIERS_Logo.png" alt="PHIERS Logo" width={28} height={28} />
              <span className="text-lg font-bold tracking-wider">PHIERS</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">A 16-year solutions engine.<br />Managing America&apos;s decline — and making it better.</p>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="/petition" className="text-gray-400 hover:text-[#3ddc84] transition-colors">Petition</Link>
            <Link href="/solutions" className="text-gray-400 hover:text-[#3ddc84] transition-colors">Solutions</Link>
            <Link href="/about" className="text-gray-400 hover:text-[#3ddc84] transition-colors">About</Link>
            <a href="mailto:will@phiers.org" className="text-gray-400 hover:text-[#3ddc84] transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} PHIERS.org — Founded by Will Price
        </div>
      </div>
    </footer>
  )
}