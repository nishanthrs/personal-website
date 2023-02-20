export const enum PostType {
  Writing = "writing",
  Projects = "projects",
};

export type PostData = {
  slug: string,
  data: {
      [key: string]: any;
  },  /* matter.GrayMatterFile<any> */
};
