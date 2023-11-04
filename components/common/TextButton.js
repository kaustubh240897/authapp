import Link from "next/link";

export default function TextButton({ text, href, onClick }) {
  return (
    <div className="my-4 flex justify-center">
      <Link href={href || ""}>
        <button
          onClick={onClick}
          className="bg-[#1f3060] text-sm font-semibold text-white pt-2 pb-3 px-16 rounded-full"
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
