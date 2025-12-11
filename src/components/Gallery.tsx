"use client";

import styles from "./Gallery.module.css";

export default function Gallery() {
    return (
        <section className={styles.section} id="gallery">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Life at ABC School</h2>
                    <p className={styles.subheading}>A glimpse into our campus activities and events.</p>
                </div>

                <div className={styles.grid}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className={styles.placeholderItem}>
                            <div className={styles.overlay}>
                                <span>Event Photo {item}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.action}>
                    <button className={styles.viewMore}>View All Gallery</button>
                </div>
            </div>
        </section>
    );
}
