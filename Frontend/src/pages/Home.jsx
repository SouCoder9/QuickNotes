import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import { useState } from "react";

const Home = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: "First Note", content: "This is a test note." },
        { id: 2, title: "Second Note", content: "Another example note." },
    ]);

    // Function to add a new note
    const addNote = () => {
        const newNote = {
            id: Date.now(),
            title: "New Note",
            content: "Start typing...",
        };
        setNotes([...notes, newNote]);
    };

    // Function to delete a note
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    // Function to edit a note
    const editNote = (id, updatedTitle, updatedContent) => {
        setNotes(
            notes.map((note) =>
                note.id === id
                    ? { ...note, title: updatedTitle, content: updatedContent }
                    : note
            )
        );
    };

    return (
        <div className="bg-gray-400 min-h-screen">
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Your Notes
                    </h2>
                    <button
                        onClick={addNote}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition"
                    >
                        + New Note
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                        <NoteCard
                            key={note.id}
                            note={note}
                            onDelete={deleteNote}
                            onEdit={editNote}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
