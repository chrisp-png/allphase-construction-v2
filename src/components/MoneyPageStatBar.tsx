import { Award, Shield, Clock, Star } from 'lucide-react';

export default function MoneyPageStatBar() {
  return (
    <div className="bg-[#0a0a0a] border-y border-[#C5A572]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <Award className="w-6 h-6 text-[#C5A572]" />
            <div className="text-2xl font-bold text-white">Dual Licensed</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest">CCC-1331464 · CGC-1526236</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-6 h-6 text-[#C5A572]" />
            <div className="text-2xl font-bold text-white">HVHZ Certified</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest">High Velocity Hurricane Zone</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-6 h-6 text-[#C5A572]" />
            <div className="text-2xl font-bold text-white">20+ Years</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest">South Florida Experience</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="w-6 h-6 text-[#C5A572]" />
            <div className="text-2xl font-bold text-white">4.9 ★ Rating</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest">150+ Verified Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}
