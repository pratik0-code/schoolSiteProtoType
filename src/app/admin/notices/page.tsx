"use client";

import { useState, useEffect } from "react";

interface Notice {
    _id: string;
    title: string;
    date: string;
}

export default function AdminNotices() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const res = await fetch("/api/notices");
            const data = await res.json();
            if (data.success) {
                setNotices(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch notices", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/notices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, date }),
            });
            const data = await res.json();
            if (data.success) {
                setTitle("");
                setDate("");
                fetchNotices();
            } else {
                alert("Failed to add notice");
            }
        } catch (error) {
            console.error("Error adding notice", error);
            alert("Error adding notice");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: "bold" }}>Notice Board Admin</h1>

            <div style={{ marginBottom: "3rem", padding: "1.5rem", border: "1px solid #ccc", borderRadius: "8px" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Add New Notice</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ddd" }}
                            placeholder="e.g., Annual Sports Day"
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Date</label>
                        <input
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ddd" }}
                            placeholder="e.g., 25 Jan 2026"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: "0.75rem",
                            backgroundColor: "#0070f3",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: loading ? "not-allowed" : "pointer",
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? "Adding..." : "Add Notice"}
                    </button>
                </form>
            </div>

            <div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Existing Notices</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {notices.map((notice) => (
                        <li key={notice._id} style={{ padding: "1rem", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontWeight: "500" }}>{notice.title}</span>
                            <span style={{ color: "#666" }}>{notice.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
