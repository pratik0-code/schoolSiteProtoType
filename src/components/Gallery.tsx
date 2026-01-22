"use client";

import styles from "./Gallery.module.css";
import Image from "next/image";

const galleryImages = [
    { src: "/images/exterior.png", alt: "School Exterior" },
    { src: "/images/classroom.png", alt: "Classroom Learning" },
    { src: "/images/sports.png", alt: "Sports Activities" },
    { src: "/images/exterior.png", alt: "School Campus" },
    { src: "/images/classroom.png", alt: "Interactive Session" },
    { src: "/images/sports.png", alt: "Playground Fun" },
];

export default function Gallery() {
    return (
        <section className={styles.section} id="gallery">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Life at ABC School</h2>
                    <p className={styles.subheading}>A glimpse into our campus activities and events.</p>
                </div>

                <div className={styles.grid}>
                    {galleryImages.map((image, index) => (
                        <div key={index} className={styles.placeholderItem}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div className={styles.overlay}>
                                <span>{image.alt}</span>
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
