import TrashIcon from "../../assets/sidebar/TrashIcon";
import MoveLeftIcon from "../../assets/sidebar/MoveLeftIcon";
import MoveRightIcon from "../../assets/sidebar/MoveRightIcon";
import EditIcon from "../../assets/sidebar/EditIcon";

const DropdownMenu = ({
  isShowMenu,
  idTask,
  currentTaskId,
  setIsShowModalDelete,
}) => {
  return (
    <>
      <div
        className={`absolute top-8 bg-white rounded pt-3.5 pb-[2px] px-6 w-full max-w-[320px] shadow z-10 ${
          isShowMenu && idTask === currentTaskId ? "block" : "hidden"
        }`}
      >
        <ul>
          <li className="mb-3">
            <button className="flex items-center group">
              <MoveRightIcon />
              <span className="text-sm leading-6 font-semibold ml-[28px] group-hover:text-primary-main">
                Move Right
              </span>
            </button>
          </li>
          <li className="mb-3">
            <button className="flex items-center group">
              <MoveLeftIcon />
              <span className="text-sm leading-6 font-semibold ml-[28px] group-hover:text-primary-main">
                Move Left
              </span>
            </button>
          </li>
          <li className="mb-3">
            <button className="flex items-center group">
              <EditIcon />
              <span className="text-sm leading-6 font-semibold ml-[22px] group-hover:text-primary-main">
                Edit
              </span>
            </button>
          </li>
          <li className="mb-3">
            <button
              className="flex items-center group"
              onClick={() => {
                setIsShowModalDelete((isShowModalDelete) => !isShowModalDelete);
              }}
            >
              <TrashIcon />
              <span className="text-sm leading-6 font-semibold ml-[22px] group-hover:text-danger-main">
                Delete
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
