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
        <h1 className="text-3xl font-bold">RevUp — Car Blog</h1>
        <p className="text-black/70 dark:text-white/70 max-w-2xl">
          Honest car reviews, buying guides, and no-nonsense driving tips. From
          budget sports cars to EV essentials — we keep it simple and useful.
        </p>
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Read the blog →
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Latest posts</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:shadow-sm transition-shadow">
              <div className="text-xs text-black/60 dark:text-white/60">{formatDate(post.date)}</div>
              <h3 className="mt-1 text-lg font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-3">{post.excerpt}</p>
              <div className="mt-3">
                <Link href={`/blog/${post.slug}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
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
