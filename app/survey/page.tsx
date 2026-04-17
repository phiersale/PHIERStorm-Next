"use client";

import { Suspense } from "react";
import SurveyPageInner from "./SurveyPageInner";

export default function SurveyPage() {
  return (
    <Suspense fallback={<div className="text-center p-8 text-white">Loading survey...</div>}>
      <SurveyPageInner />
    </Suspense>
  );
}