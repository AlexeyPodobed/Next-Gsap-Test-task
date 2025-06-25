export const TEST_DATA = {
  mainHero: {
    title: "This is a test page for checking routes",
    text: "We're rendering this page to verify dynamic and static routing in Next.js. All animations, sections, and logic should behave as expected.",
    heroCards: [
      { label: "12", text: "Rendered Sections" },
      { label: "3", text: "Test Cases Passed" },
      { label: "0", text: "Errors Found" },
    ],
    primaryLink: { href: "/", text: "Back to Home" },
    secondaryLink: { href: "/", text: "Run Test Again" },
  },

  integrationsSection: {
    title: "Logos used for integration styling test",
    images: [
      { src: "/images/integration-section/solana.svg", alt: "Solana" },
      { src: "/images/integration-section/arweave.svg", alt: "Arweave" },
      { src: "/images/integration-section/bittensor.svg", alt: "Bittensor" },
      { src: "/images/integration-section/image-1.svg", alt: "Placeholder 1" },
      { src: "/images/integration-section/image-2.svg", alt: "Telegram" },
    ],
  },

  mainText: {
    title: "Purpose of this test page",
    text: `This page exists to validate that routing, component rendering, and layout behavior work as intended across environments. It’s also used to preview sections with mocked content and styling without breaking anything in production.`,
    link: { href: "/", text: "Return to main site" },
  },

  joinSection: {
    title: "Get involved with testing",
    text: `Want to contribute to layout or animation testing? Help us fine-tune route behavior, visual consistency, and ensure that all sections render in isolation.`,
    subText: "Join our dev chat for updates",
    links: [
      { href: "/", src: "/images/soc-icons/tg.svg", alt: "Telegram" },
      { href: "/", src: "/images/soc-icons/x.svg", alt: "X/Twitter" },
    ],
  },
};
