{/* FULL PETITION FORM - simplified */}
<section className="container section">
  <div className="text-center mb-4">
    <p className="text-white text-lg font-semibold">Add your name, ZIP, and optional email</p>
    <p className="text-gray-400 text-sm">Email optional – for updates, events, etc. No spam. No sharing.</p>
  </div>
  <div className="bg-bg-dark border border-green/20 rounded-xl p-6 max-w-[500px] mx-auto">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white font-condensed mb-1">Full Name *</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white" required />
      </div>
      <div>
        <label className="block text-white font-condensed mb-1">Email (optional)</label>
        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white" />
        <p className="text-gray-500 text-xs mt-1">Only used for district milestone alerts. Unsubscribe anytime.</p>
      </div>
      <div>
        <label className="block text-white font-condensed mb-1">ZIP Code *</label>
        <input type="text" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/[^0-9]/g, '').slice(0,5) })} className="w-full p-3 rounded-lg bg-bg-card border border-green/30 text-white" pattern="[0-9]{5}" maxLength={5} required />
      </div>
      {submitState === 'error' && <p className="text-red-400 text-sm">{errorMessage}</p>}
      <button type="submit" disabled={submitState === 'submitting'} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50">✍ ADD MY NAME</button>
    </form>
    <p className="text-gray-500 text-xs text-center mt-4">Used only to count you in your district. Your information is never shared.</p>
  </div>
</section>