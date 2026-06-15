import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  live: string;
  github: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  live,
  github,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0f172a]/50 backdrop-blur-md shadow-lg hover:scale-[1.03] hover:border-purple-500 hover:shadow-[0_0_25px_rgba(112,66,248,0.35)] transition-all duration-300">

      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-5">
        <h1 className="text-2xl font-semibold text-white">
          {title}
        </h1>

        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex gap-4 mt-6">

          <Link
            href={live}
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
          >
            Live Demo
          </Link>

          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-500/10 transition text-white font-medium"
          >
            GitHub
          </Link>

        </div>
      </div>
    </div>
  );
};