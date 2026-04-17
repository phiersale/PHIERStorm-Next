"use client";

import { useSearchParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Button from "@/components/Button";

export default function ThankYouInner() {
  const searchParams = useSearchParams();
  const signatureId = searchParams.get("signatureId");

  if (!signatureId) {
    return (
      <>
        <Navigation />
        <main className="container section text-center pt-32">
          <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
            <h1 className="text-2xl font-bold text-white">Thank You!</h1>
            <p className="text-gray-400 mt-2">Your signature has been recorded.</p>
            <Button href="/action" className="mt-4">Continue to Action</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="container section text-center pt-32">
        <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[600px] mx-auto">
          <div className="text-center space-y-6">
            <div className="text-5xl">✓</div>
            <h1 className="text-3xl font-bold text-green">Thank You!</h1>
            <p className="text-white text-lg">
              Your signature has been recorded. You're now part of the movement.
            </p>
            <p className="text-gray-400">
              Every signature brings us closer to triggering a mandatory town hall in your district.
            </p>
            
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={`/survey?signatureId=${signatureId}`}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-center"
              >
                📋 Take the Optional Survey
              </a>
              <Button href="/action" variant="secondary">
                ✊ Skip & Go to Actions
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}