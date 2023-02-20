import * as fs from 'fs';
import matter from 'gray-matter';
import * as path from 'path';

import {PostType, PostData} from '../types/post';

const POST_TYPE_TO_DIR_MAPPING: { [key: string]: string } = {
  "Writing": "writing",
  "Projects": "projects",
}

export function getPosts(postType: PostType): PostData[] {
  const writingPostsDir = path.join('pages', postType);
  const files = fs.readdirSync(writingPostsDir).filter(
    (file) => file.includes(".mdx")
  );
  const postsDataForType = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(writingPostsDir, `${slug}.mdx`),
      "utf8",
    );
    const {data} = matter(fileContents);
    return {
      slug: slug,
      data: data,
    };
  });
  return postsDataForType;
}
