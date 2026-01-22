"use client";

import { motion } from "framer-motion";
import styles from "./Notice.module.css";
import { X, Bell } from "lucide-react";
import { useState, useEffect } from "react";

export default function Notice() {
    const [isVisible, setIsVisible] = useState(true);
    const [notices, setNotices] = useState<{ _id: string, title: string, date: string }[]>([]);

    useEffect(() => {
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

        fetchNotices();
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.noticeBoard}
        >
            <div className={styles.header}>
                <div className={styles.title}>
                    <Bell size={16} /> Notice
                </div>
                <button onClick={() => setIsVisible(false)} className={styles.closeBtn}>
                    <X size={16} />
                </button>
            </div>
            <div className={styles.list}>
                {notices.map((notice) => (
                    <div key={notice._id} className={styles.item}>
                        <a href="#" className={styles.link}>{notice.title}</a>
                        <span className={styles.date}>{notice.date}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
