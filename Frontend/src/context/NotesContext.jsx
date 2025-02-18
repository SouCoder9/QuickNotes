import { createContext, useState, useContext, useEffect } from "react";
import { useUser } from "@clerk/clerk-react"; // Get current user from Clerk

const NotesContext = createContext();



export const NotesProvider = ({ children }) => {
    const { user } = useUser();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (user) {
            fetchNotes();
        }
    }, [user]);

    const fetchNotes = async () => {
        try {
            // Fetch only notes belonging to the logged-in user
            const response = await fetch(`/api/notes?userId=${user.id}`);
            const data = await response.json();
            setNotes(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const addNote = async (newNote) => {
        try {
            const response = await fetch("/api/notes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...newNote, userId: user.id }),
            });
            const data = await response.json();
            setNotes([...notes, data]);
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    const updateNote = async (id, updatedContent) => {
        try {
            await fetch(`/api/notes/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: updatedContent }),
            });
            setNotes(
                notes.map((note) =>
                    note.id === id ? { ...note, content: updatedContent } : note
                )
            );
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await fetch(`/api/notes/${id}`, { method: "DELETE" });
            setNotes(notes.filter((note) => note.id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <NotesContext.Provider
            value={{ notes, addNote, updateNote, deleteNote }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => useContext(NotesContext);
