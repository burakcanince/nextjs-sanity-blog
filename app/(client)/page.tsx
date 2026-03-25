import { client } from "@/sanity/lib/client";
import { Post } from "@/types/post";
import Link from "next/link";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div className="flex flex-col gap-8">
      {posts?.map((post) => (
        <Link href={`/posts/${post?.slug?.current}`} key={post?.slug?.current}>
          <h2 className="font-bold text-2xl underline underline-offset-5">{post?.title}</h2>
          <p className="text-sm text-gray-500 mt-3">
            {new Date(post?.publishedAt).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </Link>
      ))}
    </div>
  );
}
