import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `TRIGGER THINKERS CORPORATION PVT LTD will employ TRIGGER, a patent filed technology called "A Centralised Interaction System for Facilitating Communication and Collaboration between Entities".
The Trigger Button is a permission regulator and license agreement activator. When a user uses the Trigger Button to hide or unhide their data, they are agreeing to the following terms and conditions: The user grants permission to Thinkers Platform to store and process their data.
The user grants permission to other users to view and interact with their data, subject to the user's privacy settings. The user agrees to be bound by the Thinkers Platform Terms of Service and Privacy Policy.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
