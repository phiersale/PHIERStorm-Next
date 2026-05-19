// FILE: app/Prophecy/register/page.tsx
// Version: 2.0 – Invert CSS filter to force Google Form's white containers to dark mode.

export default function ProphecyRegisterPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="text-center pt-8 pb-4">
        <div className="flex justify-center mb-4">
          <img
            src="/images/trilogy/BW_PHIERS_Logo_NO_Words.png"
            alt="PHIERS Logo"
            className="w-24 h-auto md:w-32"
          />
        </div>
        <p className="text-sm md:text-lg tracking-[0.28em] md:tracking-[0.35em] uppercase text-gray-300 font-semibold">
          For Us. By Us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-800">
          {/* CSS filter to invert the Google Form's colors to dark mode */}
          <div className="w-full h-[800px] overflow-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScXy3ZKxMXm-o7eXIwUtmJEH5lrCVaIc_vEm3ieqskiD0hx5w/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ filter: 'invert(1) hue-rotate(180deg)' }}
              title="PHIERS Zoom Registration"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

// FILE: app/Prophecy/register/page.tsx