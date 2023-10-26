import Image from "next/image";

type PostImageProps = {
  imageSrc: string;
}

function PostImage({imageSrc}: PostImageProps) {
  return (
    // Weird hacky fix for width and height for rounded images using Next.js Image component
    // (keeps looking like pill shape instead of circle otherwise)
    <div className="rounded-full overflow-hidden h-28 w-28">
      <Image
        width={200}
        height={200}
        quality={100}
        // Below line needed to focus on specific non-center part of the image
        // className="object-scale-down object-[100%_-50px]"
        src={imageSrc}
        alt="Rounded Image"
      />
    </div>
  );
}

export default PostImage;
