import type { ComponentType } from "react";
import type { LinkPreview } from "../helpers/getLinkPreview";

type MicroblogCardProps = {
  title: string;
  date: string;
  // The compiled MDX file's default export, rendered inline within the card.
  Content: ComponentType;
  // Optional link previews (favicon + page title) resolved at build time.
  links?: LinkPreview[];
};

// Unlike PostCard (which links out to a standalone note page), a microblog card
// renders the full content of its small MDX file inline.
function MicroblogCard({ title, date, Content, links }: MicroblogCardProps) {
  return (
    <div className="border rounded-lg p-6 my-6 shadow-sm">
      <h2 className="font-bold text-2xl mb-1">{title}</h2>
      <time className="text-gray-400">{date}</time>
      <article className="prose dark:prose-invert prose-a:text-blue-400 mt-3 max-w-none">
        <Content />
      </article>
      {links && links.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md border p-3 no-underline transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={link.favicon}
                alt=""
                width={20}
                height={20}
                className="shrink-0 rounded"
              />
              <span className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">
                {link.title}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default MicroblogCard;
