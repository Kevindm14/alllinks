import { Link } from "@/utils/interfaces";
import { LinkItem } from "./link-item";

interface Props {
  links: Link[];
}

export const LinkList = ({ links }: Props) => {
  return (
    <div className="flex flex-col mt-5 mx-auto gap-5">
      {links.map(link => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
