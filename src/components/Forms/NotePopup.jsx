import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

function NotePopup({ onClose, onSubmitNote, note }) {
  const [inputValue, setInputValue] = useState(note || "");
  return (
    <div className="flex gap-3">
      <div
        className="fixed inset-0 z-10 bg-black/20"
        onClick={onClose}
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="relative z-20 w-full rounded-xl border bg-white p-2 outline-none"
        autoFocus
      />
      <button
        onClick={() => onSubmitNote(inputValue)}
        className="bg-primary z-20 rounded-full px-3 text-white shadow-xl"
      >
        <FaCheck />
      </button>
    </div>
  );
}
export default NotePopup;
