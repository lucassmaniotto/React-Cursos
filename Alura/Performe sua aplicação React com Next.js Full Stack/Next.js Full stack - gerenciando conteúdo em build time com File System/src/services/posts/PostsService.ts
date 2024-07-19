import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export interface Post {
  metadata: {
    date: string;
    url?: string;
    excerpt?: string;
    tags: string[];
  };
  slug: string;
  title: string;
  content: string;
}

export default function PostsService() {
  return {
    async getAll() {
      const postsDirectory = path.resolve(".", "_data", "posts");
      const files = await fs.readdir(postsDirectory, { encoding: "utf-8" });
      const postsPromise = files.map(async (postFileName) => {
        const filePath = path.join(postsDirectory, postFileName);
        const postFile = await fs.readFile(filePath, { encoding: "utf-8" });
        const { data, content } = matter(postFile);

        const post: Post = {
          metadata: {
            date: new Date(data.date).toISOString(),
            url: data.url,
            excerpt: data.excerpt,
            tags: data.tags,
          },
          slug: postFileName.replace(/\.md$/, ""),
          title: data.title,
          content: content,
        };

        return post;

      });

      const posts = await Promise.all(postsPromise);
      return posts;
    },
  };
}
