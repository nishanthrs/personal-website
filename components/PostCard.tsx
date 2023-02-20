import Link from "next/link";
import { PostType } from "../types/post";
import styles from '../styles/Home.module.css'

type PostCardProps = {
    title: string;
    date: string;
    description: string;
    slug: string;
    postType: PostType;
}

function PostCard({ title, date, description, slug, postType }: PostCardProps) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-2xl">{title}</h2>
      <time className="text-gray-400">{date}</time>
      <p className="mt-2 italic">{description}</p>

      <Link href={`/${postType}/[slug]`} as={`/${postType}/${slug}`}>
        <p className="text-blue-500 mt-4 mb-2 block">Read more</p>
      </Link>
    </div>
  );
}

export default PostCard;
