import Link from "next/link";
import { PostType } from "../types/post";
import PostImage from '../components/PostImage';

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
    <div className="flow-root border-b">
      <div className="float-left py-4">
        <h2 className="font-bold text-2xl">{title}</h2>
        <time className="text-gray-400">{date}</time>
        <p className="text-gray-400 italic">Time to read: {time_to_read}</p>
        <p className="mt-2">{description}</p>

        <Link href={`/${postType}/[slug]`} as={`/${postType}/${slug}`}>
          <p className="text-blue-500 mt-4 mb-2 block">Read more</p>
        </Link>
      </div>
      <div className="float-right mx-8">
        <PostImage imageSrc="/hello_world_note_img.png" />
      </div>
    </div>
  );
}

export default PostCard;
