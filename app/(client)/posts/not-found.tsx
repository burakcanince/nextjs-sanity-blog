import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[calc(100dvh-176px)] mx-auto max-w-2xl flex flex-col items-center justify-center p-5">
      <Link href="/" className="text-xl font-bold underline underline-offset-4">Back to Home</Link>
    </div>
  );
};

export default NotFound;
