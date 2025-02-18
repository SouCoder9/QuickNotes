import { useNotes } from "../context/NotesContext";
import Loader from "../components/Loader";

export default function Dashboard() {
    const { notes, addNote, updateNote, deleteNote } = useNotes();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Your Notes
            </h2>

            <button
                onClick={() =>
                    addNote({ title: "New Note", content: "Start typing..." })
                }
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
                + New Note
            </button>

            <div className="mt-6 grid gap-4">
                {loading ? (
                    <Loader />
                ) : notes.length === 0 ? (
                    <div className="mt-6 flex flex-col items-center justify-center text-center">
                        <img
                            src="/empty-notes.svg"
                            alt="No Notes"
                            className="w-60 opacity-70"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mt-4">
                            No notes yet!
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Start by adding your first note.
                        </p>
                        <button
                            onClick={() =>
                                addNote({
                                    title: "New Note",
                                    content: "Start typing...",
                                })
                            }
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            + Create Note
                        </button>
                    </div>
                ) : (
                    notes.map((note) => (
                        <div
                            key={note.id}
                            className="p-4 bg-white shadow-md rounded-md"
                        >
                            <h3 className="font-bold text-lg">{note.title}</h3>
                            <p className="text-gray-700">{note.content}</p>
                            <div className="mt-2 flex gap-2">
                                <button
                                    onClick={() =>
                                        updateNote(
                                            note.id,
                                            prompt("Edit Note", note.content)
                                        )
                                    }
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteNote(note.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
