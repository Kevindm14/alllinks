import Icons from "@/components/ui/Icons";
import { NavLink } from "react-router-dom";

type EditUserProps = {
  id: string | undefined;
  avatar: string;
}

const EditUser = ({ avatar, id }: EditUserProps) => {
  return (
    <div
      className="relative rounded-full overflow-hidden border-4 border-blue-500"
      style={{ backgroundColor: "rgb(52, 69, 92)", opacity: 1 }}
    >
      <NavLink to={`/edit/${id}`} className="group">
        <div className="absolute z-10 text-white inset-0 flex flex-col items-center justify-center bg-neutrals-900/50 p-4 text-center opacity-0 backdrop-brightness-50 transition-all duration-300 hover:opacity-100 group-focus-visible:opacity-100 gap-y-2">
          <div className="overflow-hidden">
            <p className="translate-y-full text-xs transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 text-neutrals-50/90 uppercase">
              <Icons.Edit width={16} height={16} fill="#FFF" />
            </p>
          </div>
        </div>

        <img
          src={avatar}
          className="rounded-full w-20 object-cover"
          alt="avatar"
        />
      </NavLink>
    </div>
  );
};

export default EditUser;
