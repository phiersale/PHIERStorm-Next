'use client';

import Link from 'next/link';

export default function MovementPage() {
  return (
    <>
      <div className="sticky-header">
        <Link href="/Prophecy">
          <img
            src="/images/PHIERS_Logo_BW.png"
            alt="PHIERS"
            className="w-14 h-auto md:w-16 opacity-60 hover:opacity-80 transition cursor-pointer"
          />
        </Link>
      </div>
      <div className="sticky-header-offset min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 pt-20 md:pt-28 pb-14 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
          THEY TOLD US
          <br />
          THE FUTURE
          <br />
          WOULD NOT
          <br />
          INCLUDE US.
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed mt-10 max-w-3xl mx-auto">
          But history keeps moving in our direction.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mt-8 max-w-3xl mx-auto">
          Not because power surrendered.
          <br />
          Not because society suddenly became fair.
          <br />
          Not because anyone gave permission.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-8 max-w-3xl mx-auto">
          Because people pushed forward anyway.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="w-full">
        <img
          src="/images/trilogy/400-years-prophesy_sentence-served.jpg"
          alt="The crossing – prophecy fulfilled"
          className="w-full h-auto max-h-[70vh] object-cover"
          onError={(e) => {
            console.error('Hero image failed, using fallback');
            (e.target as HTMLImageElement).src = '/images/trilogy/You_Are_Not_Powerless_Bro.jpg';
          }}
        />
      </section>

      {/* SECTION 1 */}
      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-16 md:py-24">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            The system responds to pressure.
            <br />
            Not sympathy.
          </h2>

          <div className="mt-10 md:mt-12 space-y-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">

            <p>
              For a long time, we were taught to think of ourselves as isolated.
            </p>

            <p>
              Separate struggles. Separate failures. Separate dead ends.
            </p>

            <p>
              One brother blamed for not making it.
              <br />
              Another blamed for surviving differently.
              <br />
              Another blamed simply for existing at all.
            </p>

            <p>
              Meanwhile the structures surrounding us remained coordinated:
            </p>

            <ul className="space-y-3 text-gray-400 pl-6 list-disc">
              <li>political power</li>
              <li>economic power</li>
              <li>media power</li>
              <li>institutional power</li>
            </ul>

            <p>
              Organized systems always defeat disconnected people.
            </p>

            <p>
              PHIERS begins with a different assumption:
            </p>

            <blockquote className="border-l-4 border-white pl-5 italic text-white text-xl sm:text-2xl leading-relaxed">
              A disconnected population stays powerless.
              <br />
              A coordinated population becomes leverage.
            </blockquote>

            {/* IMAGE */}
            <div className="my-14 md:my-16 flex justify-center">
              <div className="w-full max-w-[260px] sm:max-w-sm">

                <img
                  src="/images/trilogy/convict_leasing.jpg"
                  alt="Historical burden and brotherhood"
                  className="w-full rounded-lg shadow-2xl object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed, using fallback');
                    (e.target as HTMLImageElement).src = '/images/trilogy/400-years-prophesy_No_Words.jpg';
                  }}
                />

                <p className="text-center text-gray-500 text-sm mt-4 italic leading-relaxed px-2">
                  We rise faster when we stop climbing alone.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="border-t border-gray-800 bg-[#0b0b0b]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-16 md:py-24">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Something is shifting.
          </h2>

          <div className="mt-10 md:mt-12 space-y-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">

            <p>
              Across the country, millions of people are quietly realizing:
            </p>

            <div className="space-y-4 text-gray-400">
              <p>• survival is not the same as progress</p>
              <p>• visibility is not the same as power</p>
              <p>• inclusion is not the same as influence</p>
              <p>• symbolism is not the same as structural change</p>
            </div>

            <p>
              People once treated as politically expendable are beginning to understand their collective gravity.
            </p>

            <p>
              That changes behavior.
              <br />
              Behavior changes pressure.
              <br />
              Pressure changes institutions.
            </p>

            <p className="text-white font-semibold text-xl sm:text-2xl leading-relaxed">
              History changes when enough people stop seeing themselves as isolated.
            </p>

          </div>
        </div>
      </section>

      {/* TRILOGY */}
      <section className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24">

          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              The Trilogy
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              The Trilogy is not entertainment.
              <br />
              Not branding.
              <br />
              Not motivational language.
            </p>

            <p className="text-gray-300 text-base sm:text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              It is a framework.
              <br />
              A way of seeing ourselves clearly again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            <div className="bg-white text-black rounded-2xl p-7 md:p-8">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Chapter One
              </p>

              <h3 className="text-3xl font-black mt-4">
                UNFORGETTABLE
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
                What was done to us cannot be erased.
              </p>
            </div>

            <div className="bg-white text-black rounded-2xl p-7 md:p-8">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Chapter Two
              </p>

              <h3 className="text-3xl font-black mt-4">
                UNBREAKABLE
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
                What survived could not be destroyed.
              </p>
            </div>

            <div className="bg-white text-black rounded-2xl p-7 md:p-8">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Chapter Three
              </p>

              <h3 className="text-3xl font-black mt-4">
                UNSTOPPABLE
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
                What becomes coordinated changes history.
              </p>
            </div>

          </div>

          {/* FINAL */}
          <div className="text-center mt-20 max-w-3xl mx-auto">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Be of good heart.
            </h2>

            <div className="mt-10 space-y-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">

              <p>
                Not because the obstacles are small.
              </p>

              <p>
                Not because victory is guaranteed.
              </p>

              <p>
                But because isolation is breaking.
                <br />
                People are waking up.
                <br />
                And the future is not as closed as it once appeared.
              </p>

              <p className="text-white font-semibold text-xl sm:text-2xl leading-relaxed pt-4">
                You are not witnessing the end of the story.
                <br />
                You are witnessing reorganization.
              </p>

            </div>

            <div className="mt-14">
              <Link
                href="/Prophecy/trilogy"
                className="inline-block bg-white text-black font-bold text-lg py-4 px-10 rounded-full hover:bg-gray-200 transition"
              >
                → Enter The Trilogy
              </Link>
            </div>

          </div>

        </div>
      </section>

      </div>
    </>
  );
}