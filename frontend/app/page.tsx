'use client';

import BodyContainer from "@/components/Containers/Body";
import PanelContainer from "@/components/Containers/Panel";
import Header from "@/components/UI/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="box">
        <PanelContainer />
        <BodyContainer />
      </div>
    </div>
  );
}
