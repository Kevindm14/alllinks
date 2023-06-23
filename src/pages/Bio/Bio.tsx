import {
  Loading,
  ModalLink,
  Toastify,
  PreviewUser,
  LinkList,
  EmptyLinks
} from "@/components";
import { useModal } from "@/hooks";
import { useAuth } from "@/context";
import { useEffect, useState } from "react";
import { supabase } from "@/services/supabase.ts";
import { MODAL1 } from "@/utils/constants.ts";
import { Link } from "@/utils/interfaces.ts";
import Icons from "@/components/ui/Icons.tsx";

export const Bio = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const { session } = useAuth();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(true);
  const metadata = session?.user.user_metadata;

  useEffect(() => {
    if (!session) return;

    const getLinks = async () => {
      const { data, error } = await supabase
        .from("links")
        .select("*")
        .filter("user_id", "eq", session?.user.id);

      if (error) console.log(error);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setLinks(data);
      setLoading(false);
    };

    getLinks();
  }, []);

  return (
    <div className="w-full bg-gray-100 md:px-40 h-screen xl:px-96">
      <Toastify />

			<PreviewUser
				avatar={metadata?.picture}
				fullName={metadata?.full_name}
			/>

      <div className="mx-5 mt-10 md:mx-0">
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-2xl w-full min-w-fit hover:bg-blue-700 transition ease-in flex justify-center items-center gap-3"
          onClick={() => openModal(MODAL1)}
        >
          <Icons.Arrow width={16} height={16} />
          Add Link
        </button>

        <ModalLink
          title="Add Link"
          isOpen={isModalOpen.modal1}
          onClose={() => closeModal(MODAL1)}
          userId={session?.user.id}
        />
      </div>

      {loading ? (
        <Loading />

      ) : links.length > 0 ? (
        <LinkList links={links} />
      ) : (
        <EmptyLinks />
      )}
    </div>
  );
};

export default Bio;
