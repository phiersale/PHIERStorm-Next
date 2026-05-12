// FILE: app/Prophecy/unbreakable/page.tsx
// VERSION: 5.1.0 – Fixed syntax error, removed stray fragment

'use client';

import ImageThumbnail from '../components/ImageThumbnail';
import Accordion from '../components/Accordion';
import PullQuote from '../components/PullQuote';
import CTASection from '../components/CTASection';
import Link from 'next/link';

export default function UnbreakablePage() {
  return (
    <div className="sticky-header-offset min-h-screen bg-white text-black">
      <div className="sticky-header">
        <a href="https://phiers.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition"
          />
        </a>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Intro */}
        <div className="bg-black text-white p-8 rounded-lg mb-12 text-center">
          <p className="text-xl leading-relaxed">What was done to us did not break us.</p>
          <p className="text-gray-300 mt-2">Here's the proof.</p>
        </div>

        {/* SECTION 1 – GREENWOOD */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail src="/images/trilogy/greenwood.jpg" alt="Greenwood District, Tulsa, Oklahoma – before 1921" className="md:w-1/3" />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              They built an entire world from nothing.<br />
              Then the mobs came. And the government watched.
            </p>
            <Accordion triggerLabel="The full story">
              <p>There have been many Black Wall Streets. Greenwood, Oklahoma. Rosewood, Florida. Jackson Ward in Richmond. Durham's Hayti District.</p>
              <p className="mt-2">Black communities built banking districts, hospitals, newspapers, law offices, and schools. From nothing. After everything had been stripped away. Without asking permission.</p>
              <p className="mt-2">Then the mobs came. Incendiary devices were dropped from airplanes onto American citizens in Tulsa. City governments looked the other way. The federal government did nothing.</p>
              <p className="mt-2">Most of those communities never recovered. The land was taken. The wealth was gone. The history was buried in school curricula for generations.</p>
              <p className="mt-2">But the knowledge of how to build — that survived.</p>
              <p className="mt-2 font-semibold">And that pattern — the government watching while we are destroyed — appears to be headed our way again. Trump‑Crow (Jim Crow after Project 2025) has been strengthened by SCOTUS's recent ruling on redistricting. PHIERS is the proper response.</p>
            </Accordion>
          </div>
        </div>

        {/* SECTION 2 – THE 761st */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail src="/images/trilogy/761st.jpg" alt="761st Tank Battalion – The Original Black Panthers, World War II" className="md:w-1/3" />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              183 days at the front. Six countries.<br />
              The hole they punched through the Siegfried Line<br />
              is the hole Patton drove through into Germany.
            </p>
            <Accordion triggerLabel="The full story">
              <p>The 761st Tank Battalion. The first all‑Black armored unit to see combat in World War II.</p>
              <p className="mt-2">They trained for two years while white units deployed after weeks — because the Army doubted them. Then they fought through France, Belgium, Luxembourg, the Netherlands, Germany, and Austria. Six countries. 183 consecutive days at the front. White units rotated after one or two weeks.</p>
              <p className="mt-2">They breached the Siegfried Line — Hitler's fortified western wall — and punched the gap that Patton's 4th Armored Division drove through into Germany.</p>
              <p className="mt-2 font-semibold">They liberated Jews from three different concentration camps. Gunskirchen. Mauthausen. Others. Many of the survivors went on to help form the modern state of Israel.</p>
              <p className="mt-2">One of their members was Jackie Robinson. Before he broke the color line in baseball, he was court‑martialed for refusing to move to the back of a military bus. The charges were dropped. He never backed down.</p>
              <p className="mt-2">They came home to a country that still wouldn't let them vote in the states they'd bled for. Some were beaten in their uniforms on American soil.</p>
              <p className="mt-2">They didn't break.</p>
            </Accordion>
          </div>
        </div>

        {/* SECTION 3 – SONIA WEITZ */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail src="/images/trilogy/gunskirchen.jpg" alt="Liberation of Gunskirchen concentration camp, May 1945" className="md:w-1/3" />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              A 17‑year‑old Holocaust survivor looked at her liberator<br />
              and wrote a poem.<br />
              She called him "The Black Messiah."
            </p>
            <Accordion triggerLabel="The Black Messiah — Sonia Weitz">
              <p>In May 1945, the 761st helped liberate Gunskirchen — a subcamp of Mauthausen concentration camp in Austria. They found 15,000 Hungarian Jews near death from starvation. Black men opened those gates. Black faces were the first free faces those survivors ever saw. Some of them went on to help build the modern state of Israel.</p>
              <p className="mt-2">A 17‑year‑old girl named Sonia Schreiber Weitz was among them. She had survived Auschwitz, Bergen‑Belsen, and Mauthausen. She looked up and saw a Black soldier standing at the door of her liberation.</p>
              <p className="mt-2">She wrote a poem about him. She called it "The Black Messiah."</p>
              <div className="mt-4 p-4 bg-gray-100 italic border-l-4 border-yellow-600 text-gray-800">
                <p className="whitespace-pre-line">A Black GI stood by the door<br />(I never saw a Black before)<br />He'll set me free before I die,<br />I thought, he must be the Messiah.</p>
                <p className="text-sm text-gray-600 mt-2">— Sonia Schreiber Weitz<br />Liberated from Mauthausen, May 1945</p>
              </div>
            </Accordion>
          </div>
        </div>

        {/* SECTION 4 – RABBI COHEN / DOCUMENTED DEBT */}
        <div className="my-12 p-6 bg-gray-50 border-l-4 border-black">
          <h3 className="text-xl font-bold mb-2">A documented debt — from a Chabad rabbi</h3>
          <p className="mt-2">In a time‑stamped conversation, with a verifiable text trail on record, <strong>Rabbi Cohen of the Chabad Lubavitch movement</strong> reviewed the history of Black soldiers in World War II — specifically the 761st Tank Battalion and the Tuskegee Airmen.</p>
          <p className="mt-2 italic">"The state of Israel might not even exist if it were not for the contributions of Black soldiers during World War II."</p>
          <p className="mt-2">That is not opinion. That is a documented acknowledgment from one of the most influential Orthodox Jewish movements in the world.</p>
          <p className="mt-2 font-semibold">Here is what that means: A life debt is owed to the Black men who helped liberate the camps — Gunskirchen, Mauthausen, Buchenwald. Those survivors went on to form modern Israel. And without Israel, there would be no Christian Zionism. No white evangelical movement waging wars around the world in the name of prophecy.</p>
          <p className="mt-2">The chain of existence runs through <strong>us</strong>.</p>
          <p className="mt-2">Will Price — founder of PHIERS — has shared many meals and spent many hours with the families of the Tuskegee Airmen and the Original Black Panthers. He has seen the records. He has sat at their tables. He has the text trail with Rabbi Cohen.</p>
          <p className="mt-2 font-bold">No other organization on this planet has that.</p>
          <p className="mt-2">That is not symbolism. That is leverage. And that leverage — properly applied — can overcome AIPAC's outsized influence over Congress. Because when the people who hold that debt are organized and vocal, the political math changes. The representatives who take money from AIPAC suddenly have to answer to a different question:</p>
          <p className="mt-2 italic">"Why are you opposing the people who made your existence possible?"</p>
        </div>

        {/* SECTION 5 – FAMILIES ASKED ME TO SPEAK (WITH YOUR PHOTOS) */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <div className="md:w-1/3 space-y-4">
            <ImageThumbnail src="/images/trilogy/Me_w_Tuskegee_Airman_George_SpankyRoberts_Family.jpg" alt="Will Price with the family of Tuskegee Airman George 'Spanky' Roberts" className="w-full" />
            <ImageThumbnail src="/images/trilogy/Me_n_Dad_at_CHURCH.jpg" alt="Will Price and his father at Bethany Avic Missionary Church" className="w-full" />
          </div>
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">The families of the Black soldiers who defeated Hitler and secured the existence of Israel asked me to speak for them.</p>
            <p className="mt-2">I have pictures of us together. Real photos. Real people. Real trust.</p>
            <p className="mt-2">They didn't ask a university. They didn't ask a museum. They didn't ask a politician.</p>
            <p className="mt-2 font-bold">They asked me — Will Price, founder of PHIERS.</p>
            <p className="mt-2">Because they know that their fathers and grandfathers — the men of the 761st, the Tuskegee Airmen, the forgotten battalions — never got their full story told. The government erased it. The textbooks left it out. The monuments ignore it.</p>
            <p className="mt-2">But the families remember. And they chose PHIERS to carry the record.</p>
            <p className="mt-2 font-bold">That is not leverage we manufactured. That is leverage we were given.</p>
            <p className="mt-2">And we will use it to build a future those men would be proud of — not just for Black men, but for all of humanity.</p>
          </div>
        </div>

        {/* SECTION 6 – TUSKEGEE AIRMEN */}
        <div className="flex flex-col md:flex-row gap-6 items-start my-12">
          <ImageThumbnail src="/images/trilogy/tuskegee.jpg" alt="Tuskegee Airmen – 332nd Fighter Group, The Red Tails, World War II" className="md:w-1/3" />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              Bomber crews requested them by name.<br />
              They destroyed the factories that built Hitler's tanks.<br />
              Then came home to segregation.
            </p>
            <Accordion triggerLabel="The full story">
              <p>The Tuskegee Airmen. The 332nd Fighter Group. The Red Tails. Nearly a thousand Black pilots. Over 15,000 combat missions over Nazi‑controlled Europe. An Air Force that almost didn't let them fly.</p>
              <p className="mt-2">They shot down more than 100 enemy aircraft. They destroyed the Daimler‑Benz factories that manufactured Hitler's tanks and the oil refineries that fueled his armies. When Germany could no longer manufacture armor and fuel fast enough — the tide turned. The Red Tails were part of why.</p>
              <p className="mt-2">Bomber crews specifically requested them as escorts. Because the Red Tails stayed with the bombers. Other escort groups peeled off chasing individual glory kills. The Red Tails protected the mission.</p>
              <p className="mt-2">All of this for a country that called them inferior. For an Air Force that questioned their humanity until their record made that position indefensible.</p>
              <p className="mt-2">They came home to Jim Crow anyway. They didn't break.</p>
              <p className="mt-2 italic">Will Price has sat with their families. He knows what they carried. He built PHIERS to honor that inheritance.</p>
            </Accordion>
          </div>
        </div>

        {/* SECTION 7 – CURRENT ERASURE */}
        <div className="my-12 p-6 bg-black text-white rounded-lg">
          <h3 className="text-xl font-bold mb-2">They are still erasing us. Right now.</h3>
          <p className="mt-2">While we build, they are destroying.</p>
          <p className="mt-2">The Trump administration is shutting down museums and displays that told the truth about our history — enslavement, contributions, the full record. They are whitewashing curricula, removing books, scrubbing federal websites.</p>
          <p className="mt-2">They are erasing the penny. And with it, they intend to erase <strong>Foundational Black Americans</strong> from the story of this country.</p>
          <p className="mt-2">But here is what they cannot erase:</p>
          <p className="mt-2 font-bold">Crispus Attucks</strong> — the first person to die in the Revolutionary War. A Black man.</p>
          <p className="mt-2"><strong>Every war since</strong> — we fought. Valiantly. Without citizenship. Without thanks. Without the full history written down.</p>
          <p className="mt-2">The 761st. The Tuskegee Airmen. The Harlem Hellfighters. The Buffalo Soldiers. The Black sailors at Port Chicago. The men who built the Alaska Highway. The men who stormed Normandy in segregated units.</p>
          <p className="mt-2">They are trying to bury us. But we are the ones who built the floor they stand on.</p>
          <p className="mt-4 font-bold text-xl">We need to sit this one down and end them once and for all.</p>
          <p className="mt-2">That is not rage. That is strategic clarity.</p>
          <p className="mt-2">And that is exactly what PHIERS is built to do.</p>
        </div>

        {/* CLOSING */}
        <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
          <p className="text-xl leading-relaxed">Neither did you.</p>
          <p className="text-gray-300 mt-4">
            You come from men who built entire cities from scratch — and rebuilt after arson.<br />
            Who liberated the persecuted while still carrying oppression themselves.<br />
            Who flew the most dangerous missions of the war for a country that wouldn't let them sit at a lunch counter when they landed.
          </p>
          <p className="text-gray-300 mt-4">
            They tried to erase us then. They are trying to erase us now.
          </p>
          <p className="text-gray-300 mt-2">
            But we are still here. And we have something they never expected: <strong>the receipts, the connections, the strategy, and the will.</strong>
          </p>
          <p className="text-white font-bold text-2xl mt-6">That is not ancient history. That is your inheritance.</p>
          <PullQuote>
            That strength is not behind you.<br />
            It is in you. Right now.<br />
            It never left.
          </PullQuote>
          <p className="text-white font-bold text-xl mt-4">
            PHIERS is the instrument. The petition is the voice. The survey is the map.
          </p>
          <p className="text-white font-bold text-xl mt-2">
            This time, we finish it.
          </p>
        </div>

        <CTASection href="/Prophecy/unstoppable" label="→ UNSTOPPABLE" />

        {/* Footer citations */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Sources: Oklahoma Commission to Study the Tulsa Race Riot of 1921, Final Report · National WWII Museum · Facing History & Ourselves · Sonia Schreiber Weitz Archive · Air Force Historical Research Agency · Congressional Gold Medal records · Rabbi Cohen conversation (text trail on file)</p>
          <Link href="/Prophecy/trilogy" className="block mt-4 hover:text-black">← Back to Trilogy</Link>
        </div>
      </div>
    </div>
  );
}
// FILE: app/Prophecy/unbreakable/page.tsx