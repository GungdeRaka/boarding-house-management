 import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <Image width={1920} height={1080} src="/hero_bg.png" alt="Kuda Putih House Bali" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-brand-dark/50 bg-linear-t/o-t from-brand-dark/80 via-transparent to-brand-dark/20 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-28 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left side: SEO Optimized Short Copywriting */}
            <div className="text-left filter drop-shadow-lg">
               <span className="inline-block py-1.5 px-4 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-6 tracking-widest uppercase shadow-sm">
                Discover Kuda Putih House
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Cozy Living Near <span className="text-brand-accent">Pantai Gunung Payung</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg font-light leading-relaxed">
                Experience safety, tranquility, and modern comfort in the heart of South Kuta, Bali.
              </p>
            </div>

            {/* Right side: Glassmorphism Availability Form */}
            <div className="bg-black/20 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 transform lg:translate-x-4 max-w-md ml-auto w-full">
              <h2 className="text-2xl font-heading font-bold text-white mb-6">Reserve Your Room</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/80 uppercase tracking-widest mb-2">Check-in</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all "
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 uppercase tracking-widest mb-2">Check-out</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all "
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 uppercase tracking-widest mb-2">Guests</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-xl border border-white/20 bg-emerald-950/50 text-white focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all appearance-none cursor-pointer">
                      <option className="text-black">1 Person</option>
                      <option className="text-black">2 People</option>
                      <option className="text-black">3 People +</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-brand-accent hover:bg-brand-accentSoft text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(217,108,59,0.3)] hover:shadow-[0_0_30px_rgba(217,108,59,0.5)] transform active:scale-[0.98] transition-all tracking-wide">
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
