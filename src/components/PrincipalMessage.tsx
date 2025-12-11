"use client";

import styles from "./PrincipalMessage.module.css";
import Image from "next/image";

export default function PrincipalMessage() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.imageWrapper}>
                        {/* Placeholder for Principal's Photo */}
                        <div className={styles.imagePlaceholder} />
                        <div className={styles.nameTag}>
                            <h3>Dr. A.B. Surname</h3>
                            <p>Principal</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Message from the Principal</h2>
                        <p className={styles.text}>
                            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
                            At ABC School, we are committed to providing a nurturing environment where students can thrive academicall, socially, and emotionally."
                        </p>
                        <p className={styles.text}>
                            We welcome you to join our vibrant community of learners and leaders.
                        </p>
                        <button className={styles.readMore}>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
