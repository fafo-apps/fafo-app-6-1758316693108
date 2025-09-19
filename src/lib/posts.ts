export type Post = {
  slug: string;
  title: string;
  date: string; // ISO string
  excerpt: string;
  content: string;
  tags?: string[];
};

const posts: Post[] = [
  {
    slug: "best-budget-sports-cars-2025",
    title: "Best Budget Sports Cars in 2025",
    date: "2025-07-01T09:00:00.000Z",
    excerpt:
      "From the Mazda MX-5 to hot hatch heroes, here are the most fun cars you can buy without breaking the bank.",
    content:
      "Sports cars don't have to be expensive. In 2025, several models deliver pure driving joy for reasonable money.\n\nThe Mazda MX-5 remains the benchmark for lightweight fun: balanced chassis, slick manual, and real top-down enjoyment.\n\nHot hatches like the Hyundai i30 N and the Honda Civic Si (where available) add practicality with punchy performance.\n\nIf you want RWD thrills, keep an eye on used Toyota GR86/Subaru BRZ models—supply is tight, but the value is excellent.\n\nTip: Spend a little of the budget on tires and a fresh alignment—it transforms the driving experience.",
    tags: ["buying-guide", "sports-cars"]
  },
  {
    slug: "ev-charging-101",
    title: "EV Charging 101: Home, Public, and Road Trips",
    date: "2025-06-15T12:00:00.000Z",
    excerpt:
      "Level 1, Level 2, DC fast charging—what they are, how long they take, and what it costs in the real world.",
    content:
      "Charging an EV is simple once you understand the basics.\n\nLevel 1 (120V) is slow but works for short commutes if you can plug in overnight.\n\nLevel 2 (240V) is the home sweet spot: 7–11 kW, adding ~25–40 miles per hour. It's also common at public destinations.\n\nDC fast charging is for trips. Expect 20–80% in 20–40 minutes depending on your vehicle and charger speed.\n\nTip: Precondition the battery before fast charging in cold weather—you'll save time.",
    tags: ["ev", "charging"]
  },
  {
    slug: "suv-vs-crossover-difference",
    title: "SUV vs Crossover: What's the Difference?",
    date: "2025-05-20T08:30:00.000Z",
    excerpt:
      "Body-on-frame vs unibody, towing, comfort, and which one fits your lifestyle.",
    content:
      "Traditionally, SUVs use body-on-frame construction (think trucks), while crossovers are unibody (like cars).\n\nBody-on-frame SUVs typically tow more and handle rougher terrain, but ride quality and efficiency often favor crossovers.\n\nCrossovers excel at daily comfort, fuel economy, and interior packaging.\n\nIf you tow frequently or go off-road, consider a traditional SUV. For families and commuting, a crossover is usually the better fit.",
    tags: ["basics", "buying-guide"]
  }
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
