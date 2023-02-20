import * as fs from 'fs';
import matter from 'gray-matter';
import * as path from 'path';

const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(path.join(`pages/writing/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
