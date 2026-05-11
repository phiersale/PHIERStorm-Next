// FILE: app/Prophecy/unbreakable/page.tsx
// VERSION: 2.0.0
// The Response – Greenwood, 761st, Sonia Weitz, Tuskegee, video

'use client';

import ImageThumbnail from '@/components/Prophecy/ImageThumbnail';
import Accordion from '@/components/Prophecy/Accordion';
import PullQuote from '@/components/Prophecy/PullQuote';
import CTASection from '@/components/Prophecy/CTASection';
import Link from 'next/link';

export default function UnbreakablePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Intro – always expanded */}
        <div className="bg-black text-white p-8 rounded-lg mb-12 text-center">
          <p className="text-xl leading-relaxed">What was done to us did not break us.</p>
          <p className="text-gray-300 mt-2">This page is the record.</p>
        </div>

        {/* SECTION 1 – GREENWOOD */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/greenwood.jpg"
            alt="Greenwood District, Tulsa, Oklahoma – before 1921"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              They built an entire world from nothing.<br />
              Then the mobs came — and the government watched.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                There have been many Black Wall Streets. Greenwood, Oklahoma. Rosewood, Florida. Jackson Ward in Richmond. Durham's Hayti District.
              </p>
              <p className="mt-2">
                Black communities built banking districts, hospitals, newspapers, law offices, and schools. From nothing. After everything had been stripped away. Without asking permission.
              </p>
              <p className="mt-2">
                Then the mobs came. Incendiary devices were dropped from airplanes onto American citizens in Tulsa. City governments looked the other way. The federal government did nothing.
              </p>
              <p className="mt-2">
                Most of those communities never recovered. The land was taken. The wealth was gone. The history was buried in school curricula for generations.
              </p>
              <p className="mt-2">
                But the knowledge of how to build — that survived.
              </p>
            </Accordion>
          </div>
        </div>

        {/* SECTION 2 – THE 761st */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/761st.jpg"
            alt="761st Tank Battalion – The Original Black Panthers, World War II"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              183 days at the front. Six countries.<br />
              The hole they punched through the Siegfried Line<br />
              is the hole Patton drove through into Germany.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                The 761st Tank Battalion. The original Black Panthers. The first all‑Black armored unit to see combat in World War II.
              </p>
              <p className="mt-2">
                They trained for two years while white units deployed after weeks — because the Army doubted them. Then they fought through France, Belgium, Luxembourg, the Netherlands, Germany, and Austria. Six countries. 183 consecutive days at the front. White units rotated after one or two weeks.
              </p>
              <p className="mt-2">
                They breached the Siegfried Line — Hitler's fortified western wall — and punched the gap that Patton's 4th Armored Division drove through into Germany.
              </p>
              <p className="mt-2">
                One of their members was Jackie Robinson. Before he broke the color line in baseball, he was court‑martialed for refusing to move to the back of a military bus. The charges were dropped. He never backed down.
              </p>
              <p className="mt-2">
                They came home to a country that still wouldn't let them vote in the states they'd bled for. Some were beaten in their uniforms on American soil.
              </p>
              <p className="mt-2">They didn't break.</p>
            </Accordion>
          </div>
        </div>

        {/* SECTION 3 – SONIA WEITZ / GUNSKIRCHEN */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/gunskirchen.jpg"
            alt="Liberation of Gunskirchen concentration camp, May 1945"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              A 17‑year‑old Holocaust survivor looked at her liberator<br />
              and wrote a poem.<br />
              She called him "The Black Messiah."
            </p>
            <Accordion triggerLabel="▼ The Black Messiah — Sonia Weitz">
              <p>
                In May 1945, the 761st helped liberate Gunskirchen — a subcamp of Mauthausen concentration camp in Austria. They found 15,000 Hungarian Jews near death from starvation. Black men opened those gates. Black faces were the first free faces those survivors ever saw. Some of them went on to help build the modern state of Israel.
              </p>
              <p className="mt-2">
                A 17‑year‑old girl named Sonia Schreiber Weitz was among them. She had survived Auschwitz, Bergen‑Belsen, and Mauthausen. She looked up and saw a Black soldier standing at the door of her liberation.
              </p>
              <p className="mt-2">
                She wrote a poem about him. She called it "The Black Messiah."
              </p>
              <div className="mt-4 p-4 bg-gray-100 italic border-l-4 border-yellow-600 text-gray-800">
                <p className="whitespace-pre-line">A Black GI stood by the door<br />(I never saw a Black before)<br />He'll set me free before I die,<br />I thought, he must be the Messiah.</p>
                <p className="text-sm text-gray-600 mt-2">— Sonia Schreiber Weitz<br />Liberated from Mauthausen, May 1945</p>
              </div>
            </Accordion>
          </div>
        </div>

        {/* SECTION 4 – TUSKEGEE AIRMEN */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail
            src="/images/trilogy/tuskegee.jpg"
            alt="Tuskegee Airmen – 332nd Fighter Group, The Red Tails, World War II"
            className="md:w-1/3"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              Bomber crews requested them by name.<br />
              They destroyed the factories that built Hitler's tanks.<br />
              Then came home to segregation.
            </p>
            <Accordion triggerLabel="▼ The full story">
              <p>
                The Tuskegee Airmen. The 332nd Fighter Group. The Red Tails. Nearly a thousand Black pilots. Over 15,000 combat missions over Nazi‑controlled Europe. An Air Force that almost didn't let them fly.
              </p>
              <p className="mt-2">
                They shot down more than 100 enemy aircraft. They destroyed the Daimler‑Benz factories that manufactured Hitler's tanks and the oil refineries that fueled his armies. When Germany could no longer manufacture armor and fuel fast enough — the tide turned. The Red Tails were part of why.
              </p>
              <p className="mt-2">
                Bomber crews specifically requested them as escorts. Because the Red Tails stayed with the bombers. Other escort groups peeled off chasing individual glory kills. The Red Tails protected the mission.
              </p>
              <p className="mt-2">
                All of this for a country that called them inferior. For an Air Force that questioned their humanity until their record made that position indefensible.
              </p>
              <p className="mt-2">
                They came home to Jim Crow anyway. They didn't break.
              </p>
            </Accordion>
          </div>
        </div>

        {/* CLOSING – always expanded */}
        <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
          <p className="text-xl leading-relaxed">Neither did you.</p>
          <p className="text-gray-300 mt-4">
            You come from men who built entire cities from scratch — and rebuilt after arson.<br />
            Who liberated the persecuted while still carrying oppression themselves.<br />
            Who flew the most dangerous missions of the war for a country that wouldn't let them sit at a lunch counter when they landed.<br />
            Who carried systems that refused to carry them back.
          </p>
          <p className="text-white font-bold text-2xl mt-6">That is not ancient history. That is your inheritance.</p>
          <PullQuote>
            That strength is not behind you.<br />
            It is in you. Right now.<br />
            It never left.
          </PullQuote>
        </div>

        {/* VIDEO EMBED */}
        <div className="my-12 text-center">
          <p className="text-gray-600 mb-4">400 years of contribution. Watch before you continue.</p>
          <div className="aspect-video max-w-2xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
            {/* Replace with actual video embed code (YouTube/Vimeo iframe or <video> tag) */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              [ Video Embed Placeholder – add your video here ]
            </div>
          </div>
        </div>

        <CTASection href="/Prophecy/unstoppable" label="→ UNSTOPPABLE" />

        {/* Footer citations */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Sources: Oklahoma Commission to Study the Tulsa Race Riot of 1921, Final Report · National WWII Museum, "The Black Panthers Drive into Germany," 2020 · Facing History & Ourselves · Sonia Schreiber Weitz Archive, Salem State University Special Collections · Air Force Historical Research Agency, 332nd Fighter Group records · Congressional Gold Medal records, 2007</p>
          <Link href="/Prophecy/trilogy" className="block mt-4 hover:text-black">← Back to Trilogy</Link>
        </div>
      </div>
    </div>
  );
}
// END FILE: app/Prophecy/unbreakable/page.tsx