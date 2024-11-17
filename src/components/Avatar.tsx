type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      <img
        className="rounded-full p-[0.1rem]"
        alt="user profile"
        src={image ?? undefined}
        // 액스박스 방지
        referrerPolicy="no-referrer"
      />
    </div>
  );
}