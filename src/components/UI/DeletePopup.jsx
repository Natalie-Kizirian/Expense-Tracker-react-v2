function DeletePopup({ onCancel, onConfirm }) {
  return (
    <div className="border">
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-45" />

      <div className="bg-background fixed top-1/3 left-1/2 z-20 -translate-x-1/2 rounded-lg p-3 drop-shadow-lg min-[320px]:w-[85vw] md:w-1/3">
        <h2 className="text-center text-xl">Are you sure?</h2>
        <div className="mt-4 flex justify-around gap-3">
          <button
            className="primary-button w-1/3"
            onClick={onCancel}
          >
            No
          </button>
          <button
            className="w-1/3 white-button"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletePopup;
