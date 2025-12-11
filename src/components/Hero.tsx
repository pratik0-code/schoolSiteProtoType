"use client";

import styles from "./Hero.module.css";
import Notice from "./Notice";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background with overlay */}
            <div className={styles.bgContainer}>
                <div className={styles.overlay} />
                {/* In production, use next/image here */}
                <div className={styles.placeholderBg} />
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <div className={styles.mainContent}>
                    {/* Optional: Add Hero Text if needed, or keep it clean like typical school sites */}
                </div>

                <div className={styles.noticeContainer}>
                    <Notice />

                    {/* Chat Widget Placeholder */}
                    <div className={styles.chatWidget}>
                        <span className={styles.chatIcon}>🎓</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
