import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const NoteCard = ({ note, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    // Save edits
    const saveEdit = () => {
        onEdit(note.id, title, content);
        setIsEditing(false);
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-lg transition hover:shadow-xl border border-gray-200">
            {isEditing ? (
                <>
                    <input
                        className="w-full border p-2 rounded-lg mb-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="w-full border p-2 rounded-lg"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                        onClick={saveEdit}
                        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg transition"
                    >
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h3 className="font-semibold text-lg text-gray-900">
                        {title}
                    </h3>
                    <p className="text-gray-600 mt-1">{content}</p>
                    <div className="flex justify-end gap-3 mt-3">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-blue-500 hover:text-blue-600"
                        >
                            <FiEdit size={18} />
                        </button>
                        <button
                            onClick={() => onDelete(note.id)}
                            className="text-red-500 hover:text-red-600"
                        >
                            <FiTrash size={18} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default NoteCard;
