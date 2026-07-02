import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons/BrandIcons";
import { PROJECTS } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import VideoEmbed from "@/components/ui/VideoEmbed";

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-32">
      <div className="mx-auto w-full max-w-7xl px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
          Projects
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white lg:text-5xl">
          Things I&apos;ve shipped.
        </h2>

        <div className="mt-16 flex flex-col gap-24">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <VideoEmbed
                  videoUrl={project.videoUrl}
                  title={project.title}
                />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item} label={item} />
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 hover:text-violet-400"
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
                  >
                    GitHub <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}