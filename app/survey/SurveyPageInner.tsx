"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function SurveyPageInner() {
  const searchParams = useSearchParams();
  const signatureId = searchParams.get("signatureId");

  const [form, setForm] = useState({
    topConcerns: [] as string[],
    otherIssues: "",
    solutions: "",
    endWar: "",
    article25: "",
    investigations: "",
    endUnauthorizedConflicts: "",
    authoritarianGuardrails: "",
    prosecuteCorruption: "",
    affordableHealthcare: "",
    housingStability: "",
    foodSecurity: "",
    tradeStability: "",
    willOrganize: "",
    canContact: true,
    ageRange: "",
    politicalIdentity: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          signatureId,
          ...form,
          solutions: form.solutions ? [form.solutions] : [],
          willOrganize: form.willOrganize === "yes",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Success!");
        window.location.href = "/action";
      } else {
        setStatus(data.error || "Error submitting survey");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!signatureId) {
    return (
      <>
        <Navigation />
        <main className="container section text-center pt-32">
          <div className="bg-bg-dark border border-red-500/20 rounded-xl p-6 max-w-[500px] mx-auto">
            <h1 className="text-xl font-bold text-white mb-2">Missing Signature ID</h1>
            <p className="text-gray-400">You must sign the petition before taking the survey.</p>
            <a href="/petition" className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded">Sign Petition</a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="container section py-12">
        <div className="max-w-2xl mx-auto bg-bg-dark border border-green/20 rounded-xl p-6">
          <h1 className="text-2xl font-bold text-green mb-2">Tell Your Representative What Matters</h1>
          <p className="text-gray-400 mb-6">Your voice helps us understand what districts need most.</p>
          
          {/* SKIP SURVEY BUTTON - AT THE TOP (visible immediately) */}
          <div className="mb-6">
            <a
              href="/action"
              className="inline-block w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Skip Survey → Take Action Now
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required fields */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-white font-semibold mb-1">End War *</label>
                <input
                  className="w-full p-2 rounded bg-bg-card border border-green/30 text-white"
                  value={form.endWar}
                  onChange={(e) => updateField("endWar", e.target.value)}
                  required
                  placeholder="yes/no/unsure"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1">Article 25 *</label>
                <input
                  className="w-full p-2 rounded bg-bg-card border border-green/30 text-white"
                  value={form.article25}
                  onChange={(e) => updateField("article25", e.target.value)}
                  required
                  placeholder="yes/no/unsure"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1">Investigations *</label>
                <input
                  className="w-full p-2 rounded bg-bg-card border border-green/30 text-white"
                  value={form.investigations}
                  onChange={(e) => updateField("investigations", e.target.value)}
                  required
                  placeholder="yes/no/unsure"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Top Concerns</label>
              <div className="space-y-1">
                {["Economy", "Healthcare", "Housing", "Corruption", "War", "Climate"].map((item) => (
                  <label key={item} className="flex items-center gap-2 text-white">
                    <input
                      type="checkbox"
                      checked={form.topConcerns.includes(item)}
                      onChange={() => {
                        const newVal = form.topConcerns.includes(item)
                          ? form.topConcerns.filter((i) => i !== item)
                          : [...form.topConcerns, item];
                        updateField("topConcerns", newVal);
                      }}
                      className="accent-green"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-1">Other Issues</label>
              <input
                className="w-full p-2 rounded bg-bg-card border border-green/30 text-white"
                value={form.otherIssues}
                onChange={(e) => updateField("otherIssues", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-1">Solutions</label>
              <textarea
                className="w-full p-2 rounded bg-bg-card border border-green/30 text-white"
                value={form.solutions}
                onChange={(e) => updateField("solutions", e.target.value)}
                rows={3}
                placeholder="What solutions do you want Congress to consider?"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Willing to organize?</label>
              <div className="flex gap-4">
                {["yes", "maybe", "no"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-white">
                    <input
                      type="radio"
                      name="willOrganize"
                      value={opt}
                      checked={form.willOrganize === opt}
                      onChange={() => updateField("willOrganize", opt)}
                      className="accent-green"
                    />
                    {opt.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={form.canContact}
                  onChange={(e) => updateField("canContact", e.target.checked)}
                  className="accent-green"
                />
                Can we contact you with district updates?
              </label>
            </div>

            <div>
              <label className="block text-white font-semibold mb-1">Age Range</label>
              <select
                className="w-full p-2 rounded bg-bg-card border border-green/30 text-white"
                value={form.ageRange}
                onChange={(e) => updateField("ageRange", e.target.value)}
              >
                <option value="">Select...</option>
                <option value="18-25">18–25</option>
                <option value="26-40">26–40</option>
                <option value="41-60">41–60</option>
                <option value="60+">60+</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-1">Political Identity</label>
              <select
                className="w-full p-2 rounded bg-bg-card border border-green/30 text-white"
                value={form.politicalIdentity}
                onChange={(e) => updateField("politicalIdentity", e.target.value)}
              >
                <option value="">Select...</option>
                <option value="Democrat">Democrat</option>
                <option value="Republican">Republican</option>
                <option value="Independent">Independent</option>
                <option value="Third party">Third party</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            {status && <p className="text-center text-gray-400">{status}</p>}

            {/* Bottom buttons */}
            <div className="flex gap-3 pt-4">
              <a
                href="/action"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg text-center transition-colors"
              >
                Skip Survey
              </a>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50 transition-colors"
              >
                {loading ? "Submitting..." : "Submit Survey"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}