import { useModal } from "@/hooks";
import { supabase } from "@/services/supabase";
import { Link } from "@/utils/interfaces";
import { ModalConfirm } from "./modal-confirm";
import Icons from "./ui/Icons";
import { MODAL2 } from "@/utils/constants";

interface Props {
    link: Link;
}

export const LinkItem = ({ link: { id, name, url } }: Props) => {
    const { isModalOpen, openModal, closeModal } = useModal();

  const deleteLink = async (id: string) => {
    const { error } = await supabase.from("links").delete().eq("id", id);

    if (error) console.log(error);

    window.location.reload();
  };

  // const updateLink = async (id: string) => {
  //   const { error } = await supabase
  //     .from("links")
  //     .update({
  //       url: "New Url",
  //     })
  //     .eq("id", id);

  //   if (error) console.log(error);
  // };

    return (
        <div
          key={id}
          className="bg-white shadow-sm rounded-2xl mx-4 md:mx-0 px-8 py-6 md:px-16"
        >
          <div className="flex flex-col mb-2">
            <h3 className="flex gap-3 mb-1 font-bold text-sm sm:text-lg">
              {name}
              <button>
                <Icons.Edit className="w-5" fill="#000" />
              </button>
            </h3>
            <span className="font-light flex gap-3 text-sm sm:text-md">
              {url}
              <button>
                <Icons.Edit className="w-5" fill="#000" />
              </button>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <button>
                <Icons.Picture className="w-5" />
              </button>
            </div>

            <button onClick={() => openModal(MODAL2)}>
              <Icons.Remove className="w-5" />
            </button>

            <ModalConfirm
              isOpen={isModalOpen.modal2}
              onClose={() => closeModal(MODAL2)}
              deleteFunction={() => deleteLink(id)}
            />
          </div>
        </div>
    )
}