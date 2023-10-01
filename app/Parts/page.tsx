"use client";

import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="text-[white]">Sidebar</h1>
        <Sidebar openContentName="Sidebar" closedContentName="Closed" />
      </div>
    </div>
  );
}
