import React, { useEffect } from "react";

const PALM_BEACH_SCRIPT_SRC =
  "https://palmbeaches.chambermaster.com/Content/Script/Member.js";
const PALM_BEACH_CONTAINER_ID = "mni-membership-639067469635950211";

function loadScriptOnce(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve();

    const s = document.createElement("script");
    s.src = src;
    s.type = "text/javascript";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(s);
  });
}

export default function ChamberBadges() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.getElementById(PALM_BEACH_CONTAINER_ID);
    if (!container) return;

    if (container.getAttribute("data-initialized") === "true") return;
    container.setAttribute("data-initialized", "true");

    loadScriptOnce(PALM_BEACH_SCRIPT_SRC)
      .then(() => {
        const MNI = (window as any).MNI;
        if (!MNI?.Widgets?.Member) return;

        new MNI.Widgets.Member(PALM_BEACH_CONTAINER_ID, {
          member: 40969,
          styleTemplate:
            "#@id{text-align:center;position:relative}" +
            "#@id .mn-widget-member-name{font-weight:700}" +
            "#@id .mn-widget-member-logo{max-width:100%}",
        }).create();
      })
      .catch(() => {
        container.removeAttribute("data-initialized");
      });
  }, []);

  return (
    <section aria-label="Chamber memberships" className="mt-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="flex justify-center mb-4">
            <img
              src="/broward-chamber-of-commerce-member-all-phase-construction-usa.png"
              alt="Broward Chamber of Commerce Member - All Phase Construction USA"
              className="h-24 w-auto object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            Broward County Chamber of Commerce Member
          </h3>
          <p className="text-gray-400 mb-4">
            Official member of the Broward County Chamber of Commerce, listed as a licensed roofing contractor serving Deerfield Beach since 2006. Our membership reinforces our commitment to local accountability and professional standards.
          </p>
          <a
            href="https://www.browardbiz.com/search_results?q=all+phase+construction+usa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-500 text-sm font-medium inline-flex items-center gap-1 transition-colors"
          >
            View our Chamber profile →
          </a>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div id={PALM_BEACH_CONTAINER_ID} className="flex justify-center mb-4 min-h-[96px]"></div>
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            Chamber of the Palm Beaches Member
          </h3>
          <p className="text-gray-400">
            Proud member of the Chamber of the Palm Beaches, demonstrating our commitment to business excellence and community engagement throughout Palm Beach County.
          </p>
          <noscript>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Member of the Chamber of the Palm Beaches.
            </p>
          </noscript>
        </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <img src="/tri-alliance-logo.jpg" alt="TRI Alliance Florida High Wind Certified — Tile Roofing Industry Alliance Member" width="80" height="80" loading="lazy" decoding="async" />
            <h3 className="text-white font-bold text-base mt-3">TRI Alliance Member</h3>
            <p className="text-gray-400 text-sm mt-1">Florida High Wind Certified — Tile Roofing Industry Alliance</p>
          </div>
      </div>
    </section>
  );
}
