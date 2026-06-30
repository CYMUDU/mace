import React from 'react';
// Make sure these paths match exactly where you saved them!
import { DesktopCommander } from '../components/desktop/DesktopCommander';
import { SmartNotes } from '../components/notes/SmartNotes'; 

export const TacticalHubPage = () => {
  return (
    <div className="flex h-screen bg-[#04070D]">
      {/* If you want your LeftSidebar or TopBar on this page too, you can import and drop them right here just like in your Dashboard.tsx */}
      
      {/* Main Content Area */}
      <div className="flex-1 w-full min-h-screen p-8 overflow-y-auto">
        <div className="mb-8 border-b border-[#12202D] pb-4">
          <h1 className="text-[#E6F7FF] text-2xl tracking-[0.3em] font-light uppercase">
            Tactical Hub
          </h1>
          <p className="text-[#7FA8C7] text-xs tracking-widest uppercase mt-1">
            System Expansion & Agent Control
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SmartNotes />
          <DesktopCommander />
        </div>
      </div>
    </div>
  );
};