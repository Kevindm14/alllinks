import { useAuth } from "@/context";
import EditUser from "./edit-user";

interface PreviewUserProps {
	avatar: string;
	fullName: string;
}

export const PreviewUser = ({ avatar, fullName }: PreviewUserProps) => {
  const { session } = useAuth();

  return (
    <div className="bg-white mt-10 py-5 rounded-2xl shadow-sm mx-5 md:mx-0 px-8 md:px-16 flex gap-3">
      <EditUser
        id={session?.user?.id}
				avatar={avatar}
			/>

      <div className="py-2 flex flex-col justify-around">
        <h2 className="font-extrabold text-xl">{fullName}</h2>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Preview your Links
        </a>
      </div>
    </div>
  );
};

export default PreviewUser;