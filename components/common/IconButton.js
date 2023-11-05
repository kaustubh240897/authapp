import Image from "next/image";

export default function IconButton({ text, src, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 px-4 lg:px-6 my-2 bg-white rounded-full shadow"
    >
      <div className="flex items-center w-full text-left">
        <Image src={src} alt={text} width={20} height={20} />
        <span className="mx-3 lg:mx-4 text-[13px] font-semibold">{text}</span>
      </div>
    </button>
  );
}
