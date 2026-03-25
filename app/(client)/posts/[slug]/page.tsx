import { Post } from "@/types/post";
import { client } from "@/sanity/lib/client";
import { blogContent } from "@/components/PortableText";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    content
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post: Post = await getPost(params?.slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.content,
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col border-b border-gray-200 pb-8 mb-8">
        <div className="font-bold text-4xl">
          {post?.title}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          {new Date(post?.publishedAt).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <PortableText
        value={post?.content}
        components={blogContent}
      />
    </>
  );
};

export default page;
