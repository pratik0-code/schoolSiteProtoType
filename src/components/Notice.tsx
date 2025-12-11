"use client";

import { motion } from "framer-motion";
import styles from "./Notice.module.css";
import { X, Bell } from "lucide-react";
import { useState } from "react";

const notices = [
    { id: 1, title: "Entrance Result Declared", date: "27 Nov 2025" },
    { id: 2, title: "2nd term exam happening soon", date: "10 Nov 2025" },
];

export default function Notice() {
    const [isVisible, setIsVisible] = useState(true);

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
                    <div key={notice.id} className={styles.item}>
                        <a href="#" className={styles.link}>{notice.title}</a>
                        <span className={styles.date}>{notice.date}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
