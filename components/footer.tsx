import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-center py-12 px-6 border-t border-[#3ddc84]/10 bg-[#0d1525]">
      <Image src="/images/PHIERS_Logo.png" alt="PHIERS.org" width={80} height={80} className="mx-auto mb-4 opacity-70" />
      
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-6">
        <Link href="/crisis" className="text-gray-500 text-sm hover:text-[#3ddc84]">Crisis</Link>
        <Link href="/homepage-teeth" className="text-gray-500 text-sm hover:text-[#3ddc84]">How It Works</Link>
        <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Solutions</Link>
        <Link href="/telecare" className="text-gray-500 text-sm hover:text-[#3ddc84]">TeleCARE</Link>
        <Link href="/no-war" className="text-gray-500 text-sm hover:text-[#3ddc84]">No War</Link>
        <Link href="/organizers" className="text-gray-500 text-sm hover:text-[#3ddc84]">Organizers</Link>
        <Link href="/veterans" className="text-gray-500 text-sm hover:text-[#3ddc84]">Veterans</Link>
        <Link href="/unions" className="text-gray-500 text-sm hover:text-[#3ddc84]">Unions</Link>
        <Link href="/real-stories" className="text-gray-500 text-sm hover:text-[#3ddc84]">Real Stories</Link>
        <Link href="/full-story" className="text-gray-500 text-sm hover:text-[#3ddc84]">Full Story</Link>
        <Link href="/simple-math" className="text-gray-500 text-sm hover:text-[#3ddc84]">Simple Math</Link>
        <Link href="/faq" className="text-gray-500 text-sm hover:text-[#3ddc84]">FAQ</Link>
        <Link href="/about" className="text-gray-500 text-sm hover:text-[#3ddc84]">About</Link>
        <Link href="/donate" className="text-gray-500 text-sm hover:text-[#3ddc84]">Donate</Link>
        <a href="mailto:info@phiers.org" className="text-gray-500 text-sm hover:text-[#3ddc84]">Contact</a>
      </div>
      
      <div className="text-xs text-gray-600">
        Not built for profit. Not built for power. Built for We the People — by people who refused to stop.<br />
        📧 <a href="mailto:info@phiers.org" className="text-[#3ddc84]">info@phiers.org</a> · 📞 (916) 306-8967<br />
        © PHIERS.org — Original Concept Since 2009. All Rights Reserved.<br />
        <span className="text-[0.7rem]">PHIERS™ · PHIERSale™ · PHIERWorks™ · PHIERPlace™ — Protected marks established 2009–2025.</span>
      </div>
    </footer>
  )
}
