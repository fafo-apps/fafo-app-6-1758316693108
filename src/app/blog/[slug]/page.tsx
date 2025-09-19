import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Next 15 with React 19 can provide params as a Promise
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found | RevUp" };
  }
  return {
    title: `${post.title} | RevUp`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const paragraphs = post.content.split("\n\n");

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = allPosts[currentIndex + 1];
  const next = allPosts[currentIndex - 1];

  return (
    <article className="prose dark:prose-invert max-w-none">
      <header className="mb-6">
        <div className="text-xs text-black/60 dark:text-white/60">{formatDate(post.date)}</div>
        <h1 className="mt-1 text-3xl font-bold">{post.title}</h1>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5">
                #{t}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="space-y-4 leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <hr className="my-8 border-black/10 dark:border-white/15" />

      <nav className="flex items-center justify-between text-sm">
        <div>
          {prev && (
            <Link href={`/blog/${prev.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              ← {prev.title}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link href={`/blog/${next.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {next.title} →
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
