import { parseDate } from "@/util/date";
import BookmarkIcon from "./ui/icons/BookmarIcon";
import HeartIcon from "./ui/icons/HeartIcon";

type Props = {
  likes: string[];
  username: string;
  createAt: string;
  text?: string;
};

export default function ActionBar({ likes, username, text, createAt }: Props) {
  return (
    <>
      <div className="flex justify-between mt-2 px-4">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="px-4 py-1">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {text && (
          <p>
            <span className="font-bold mr-1">{username}</span>
            {text}
          </p>
        )}
        <p className="text-xs text-neutral-500 uppercase my-2">
          {parseDate(createAt)}
        </p>
      </div>
    </>
  );
}