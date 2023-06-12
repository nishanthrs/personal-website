import Image from "next/image";

type PostImageProps = {
  imageSrc: string;
}

function PostImage({imageSrc}: PostImageProps) {
  return (
    // Weird hacky fix for width and height for rounded images using Next.js Image component
    // (keeps looking like pill shape instead of circle otherwise)
    <div className="rounded-full overflow-hidden h-40 w-40">
      <Image
        width={200}
        height={200}
        quality={100}
        className="object-cover h-full w-full"
        src={imageSrc}
        alt="Rounded Image"
      />
    </div>
  );
}

export default PostImage;
