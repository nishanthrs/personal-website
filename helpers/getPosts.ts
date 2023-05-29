import * as fs from 'fs';
import matter from 'gray-matter';
import * as path from 'path';

import {PostType, PostData} from '../types/post';

export function getPosts(postType: PostType): PostData[] {
  const postsDir = path.join("pages", postType);
  const files = fs.readdirSync(postsDir).filter(
    (file) => file.includes(".mdx")
  );
  const postsDataForType = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(postsDir, `${slug}.mdx`),
      "utf8",
    );
    const {data} = matter(fileContents);
    return {
      slug: slug,
      data: data,
    };
  });
  return postsDataForType.sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));
}
