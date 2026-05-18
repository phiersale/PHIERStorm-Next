import { Suspense } from "react";
import ThankYouInner from "./ThankYouInner";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="text-center p-8 text-white">Loading...</div>}>
      <ThankYouInner />
    </Suspense>
  );
}