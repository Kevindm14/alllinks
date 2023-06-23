import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/index.ts";
import Icons from "./ui/Icons.tsx";
import EditUser from "./edit-user.tsx";

export const SideBar = () => {
  const { signOut, session } = useAuth();
  const metadata = session?.user.user_metadata;

  const logout = async () => {
    await signOut?.();
  };

  return (
    <aside className="flex w-full justify-between items-center py-10 bg-white shadow-md border-l border lg:w-[200px] lg:min-w-[200px] lg:flex-col px-5 lg:px-0">
      <div className="flex lg:flex-col gap-10 w-full items-center">
        <div className="flex items-center gap-3 text-blue-500">
          <h1 className="font-extrabold uppercase text-sm">Link Connect</h1>
        </div>
        <NavLink
          to="/bio"
          className={(isActive) =>
            isActive
              ? "hidden lg:block border-l-8 border-blue-600 gap-3 w-full transition ease-in text-blue-500 px-7 font-light"
              : "px-3 py-2 rounded-sm"
          }
        >
          <div className="flex gap-2 justify-center rounded-md bg-blue-100 py-3 px-3">
            <span>My Links</span>
            <Icons.Home className="w-6" />
          </div>
        </NavLink>
      </div>

      <div className="lg:hidden"></div>

      <div className="hidden lg:block border-t border-gray-300 pt-10 w-2/3">
        <div className="flex flex-col items-center">
          <EditUser
            id={session?.user?.id}
            avatar={metadata?.picture}
          />
          <h2 className="mt-3 font-bold">{metadata?.full_name}</h2>
        </div>

        <ul className="mt-10 flex flex-col items-center gap-4">
          <li>
            <button
              className="hover:text-blue-700 transition-all ease-in inline-flex"
              onClick={logout}
            >
              Logout
              <Icons.Logout className="w-6 inline ml-4" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
