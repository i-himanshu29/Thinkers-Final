import React from "react";
import img1 from "../assets/socializer.jpg";
import { Tabs } from "../components/ui/tabs";
// import Image from "next/image";
export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-slate-800">
          <p>Product Tab</p>
          <DummyContent />
          <p className="text-black text-sm">TRIGGER THINKERS CORPORATION PVT LTD will employ TRIGGER, a patent filed technology called "A Centralised Interaction System for Facilitating Communication and Collaboration between Entities". The Trigger Button is a permission regulator and license agreement activator. When a user uses the Trigger Button to hide or unhide their data, they are agreeing to the following terms and conditions: The user grants permission to Thinkers Platform to store and process their data. The user grants permission to other users to view and interact with their data, subject to the user's privacy settings. The user agrees to be bound by the Thinkers Platform Terms of Service and Privacy Policy.</p>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random Tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] w-screen md:h-[40rem] [perspective:1000px] relative b bg-slate-600 flex flex-col max-w-5xl mx-auto  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src={img1}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[95%] rounded-xl mx-auto"
    />
  );
};
