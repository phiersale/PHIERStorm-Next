// components/TrilogyLayout.jsx
export default function TrilogyLayout({ children }) {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex justify-center px-4">
      <div className="w-full max-w-[640px] bg-white px-6 py-10">
        {children}

        <footer className="mt-16 pt-6 border-t border-[#E5E5E5] text-sm text-[#999999]">
          <p>This space is for us.</p>
        </footer>
      </div>
    </div>
  );
}