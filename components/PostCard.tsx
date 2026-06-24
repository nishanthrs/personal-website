import Link from "next/link";
import { PostType } from "../types/post";
import { blueTextLinkHoverStyle } from '../styles/colors';

type PostCardProps = {
    title: string;
    date: string;
    description: string;
    time_to_read: string;
    slug: string;
    postType: PostType;
}

function PostCard({ title, date, description, time_to_read, slug, postType }: PostCardProps) {
  return (
    <div className="flex justify-center flow-root border-b">
      <div className="float-left my-4">
        <Link href={`/${postType}/${slug}`}>
          <h2 className={blueTextLinkHoverStyle + " font-bold text-2xl"}>{title}</h2>
        </Link>
        <time className="text-gray-400">{date}</time>
        <p className="text-gray-400 italic">Time to read: {time_to_read}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default PostCard;
