import { useEffect } from 'react';

// Extend Window interface to include MNI
declare global {
  interface Window {
    MNI?: {
      Widgets: {
        Member: new (
          elementId: string,
          options: {
            member: number;
            styleTemplate: string;
          }
        ) => { create: () => void };
      };
    };
  }
}

export default function ChamberBadge() {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="member.js"]')) {
      // Script already exists, just initialize the widget if MNI is available
      if (window.MNI) {
        initializeWidget();
      }
      return;
    }

    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://www.memberleap.com/js/member.js';
    script.async = true;
    script.onload = () => {
      initializeWidget();
    };

    document.body.appendChild(script);

    return () => {
      // Don't remove the script on unmount to avoid breaking it on route changes
      // The script loading check at the top will handle subsequent mounts
    };
  }, []);

  const initializeWidget = () => {
    if (window.MNI) {
      try {
        new window.MNI.Widgets.Member('mni-membership-639053715261395997', {
          member: 7262,
          styleTemplate: '#@id{text-align:center;position:relative}#@id .mn-widget-member-name{font-weight:700}#@id .mn-widget-member-logo{max-width:100%}',
        }).create();
      } catch (error) {
        console.error('Error initializing Chamber badge:', error);
      }
    }
  };

  return (
    <div className="flex justify-center py-8">
      <div id="mni-membership-639053715261395997"></div>
    </div>
  );
}
