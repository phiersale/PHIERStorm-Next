'use client';

import Link from 'next/link';

export default function MovementPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
          PHIERS
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
          THEY TOLD US
          <br />
          THE FUTURE
          <br />
          WOULD NOT
          <br />
          INCLUDE US.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mt-10 max-w-3xl mx-auto">
          But history keeps moving in our direction.
        </p>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mt-8 max-w-3xl mx-auto">
          Not because power surrendered.
          <br />
          Not because society suddenly became fair.
          <br />
          Not because anyone gave permission.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-8 max-w-3xl mx-auto">
          Because people pushed forward anyway.
        </p>
      </section>

      {/* SECTION */}
      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The system responds to pressure.
            <br />
            Not sympathy.
          </h2>

          <div className="mt-12 space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              People are told to vote harder. Wait longer. Trust institutions.
              Lower expectations. Survive individually.
            </p>

            <p>
              Meanwhile:
            </p>

            <ul className="space-y-3 text-gray-400 pl-6 list-disc">
              <li>wealth consolidates</li>
              <li>representation weakens</li>
              <li>communities fragment</li>
              <li>exhaustion becomes political strategy</li>
            </ul>

            <blockquote className="border-l-4 border-white pl-6 italic text-white text-2xl leading-relaxed">
              A disconnected population stays powerless.
              <br />
              A coordinated population becomes leverage.
            </blockquote>
          </div>
        </div>
      </section>

      {/* TRILOGY */}
      <section className="border-t border-gray-800 bg-[#0b0b0b]">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              The Trilogy
            </h2>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Three chapters.
              <br />
              Survival. Coordination. Legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white text-black rounded-2xl p-8">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Chapter One
              </p>

              <h3 className="text-3xl font-black mt-4">
                UNBREAKABLE
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                You survived what was supposed to erase you.
              </p>
            </div>

            <div className="bg-white text-black rounded-2xl p-8">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Chapter Two
              </p>

              <h3 className="text-3xl font-black mt-4">
                UNSTOPPABLE
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Disconnected people can be ignored.
                Coordinated people cannot.
              </p>
            </div>

            <div className="bg-white text-black rounded-2xl p-8">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Chapter Three
              </p>

              <h3 className="text-3xl font-black mt-4">
                UNFORGETTABLE
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                The goal is contribution so undeniable history cannot erase it.
              </p>
            </div>

          </div>

          <div className="text-center mt-20">
            <Link
              href="/Prophecy/trilogy"
              className="inline-block bg-white text-black font-bold text-lg py-4 px-10 rounded-full hover:bg-gray-200 transition"
            >
              → Enter The Trilogy
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}