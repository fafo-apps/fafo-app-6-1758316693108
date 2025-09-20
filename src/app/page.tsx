import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="funky-title text-4xl sm:text-5xl font-extrabold">RevUp — Car Blog</h1>
        <p className="text-black/70 dark:text-white/70 max-w-2xl">
          Honest car reviews, buying guides, and no-nonsense driving tips. From
          budget sports cars to EV essentials — we keep it simple and useful.
        </p>
        <div>
          <Link href="/blog" className="funky-btn">
            Read the blog →
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Latest posts</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="funky-card p-4 transition-transform">
              <div className="text-xs text-black/60 dark:text-white/60">{formatDate(post.date)}</div>
              <h3 className="mt-1 text-lg font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-3">{post.excerpt}</p>
              <div className="mt-3">
                <Link href={`/blog/${post.slug}`} className="text-sm funky-link">
                  Read more →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
