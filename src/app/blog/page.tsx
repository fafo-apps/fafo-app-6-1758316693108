import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | RevUp",
  description: "All articles from RevUp car blog.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div className="space-y-6">
      <h1 className="funky-title text-3xl font-extrabold">All posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="funky-card p-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h2 className="text-lg font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <div className="text-xs text-black/60 dark:text-white/60">{formatDate(post.date)}</div>
            </div>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{post.excerpt}</p>
            <div className="mt-3">
              <Link href={`/blog/${post.slug}`} className="text-sm funky-link">
                Read more →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
