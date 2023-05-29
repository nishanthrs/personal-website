import * as fs from 'fs';
import matter from 'gray-matter';
import * as path from 'path';

import {PostType} from '../types/post';

const getPost = (postType: PostType, slug: string) => {
  const fileContents = fs.readFileSync(path.join(`pages/${postType}/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
