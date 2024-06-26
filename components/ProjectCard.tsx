import { ProjectCardProps } from "@/types";
import NewtabIcon from "./Icons/NewtabIcon";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <li className="mb-12">
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            href={link}
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
          >
            {title}
            <NewtabIcon />
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
    </li>
  );
};

export default ProjectCard;
