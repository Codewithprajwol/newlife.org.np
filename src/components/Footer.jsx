import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3A5451] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid gap-10 lg:grid-cols-3">
        {/* Blog Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#E7CB93] uppercase tracking-wide">From the Blog</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <img src="/detox.jpg" alt="blog1" className="w-14 h-14 rounded-md object-cover" />
              <p className="text-sm leading-snug">Understanding Addiction Detox for recovery in New Life</p>
            </div>
            <div className="flex gap-3">
              <img src="/vr.jpg" alt="blog2" className="w-14 h-14 rounded-md object-cover" />
              <p className="text-sm leading-snug">How VR is Transforming Pain Management in Addiction Recovery</p>
            </div>
          </div>
        </div>

        {/* Instagram Gallery */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#E7CB93] uppercase tracking-wide">@newlife</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
            {["/insta1.jpg", "/insta2.jpg", "/insta3.jpg", "/insta4.jpg"].map((src, idx) => (
              <div key={idx} className='aspect-square overflow-hidden rounded-md'>
              <img key={idx} src={src} alt={`insta${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Social + Info */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-3 mb-6">
            <a href="#" className="p-2 rounded-full bg-white text-[#3A5451] hover:bg-[#E7CB93]">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#3A5451] hover:bg-[#E7CB93]">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#3A5451] hover:bg-[#E7CB93]">
              <Twitter size={18} />
            </a>
          </div>
          <p className="text-xs text-gray-300">
            © 2025 New Life. Operates in compliance with ISO9001:2015 Quality Management System Standard.
          </p>
          <div className="text-xs text-gray-300 mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <a href="#" className="hover:underline">Patient Privacy</a>
            <a href="#" className="hover:underline">Terms & Privacy</a>
            <a href="#" className="hover:underline">Brisbane</a>
            <a href="#" className="hover:underline">Melbourne</a>
            <a href="#" className="hover:underline">Sydney</a>
            <span className="block">Crafted by newLife</span>
          </div>
        </div>
      </div>
    </footer>
  );
}