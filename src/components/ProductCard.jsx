import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl h-[70vh] mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    description:
      "★ Researchers: Looking for funding, collaborators, or guidance.",
  },
  {
    description:
      "★ Investors: Looking for promising projects to invest in.",
  },
  {
    description:
      "★ Skilled unemployed individuals: Looking for investment or guidance",
  },
  {
    description:
      "★ Anyone: Looking to socialize and collaborate with other thinkers.",
  },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
];
