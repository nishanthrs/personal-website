export const enum PostType {
  Notes = "notes",
  Projects = "projects",
};

export type PostData = {
  slug: string,
  data: {
      [key: string]: any;
  },  /* matter.GrayMatterFile<any> */
};
