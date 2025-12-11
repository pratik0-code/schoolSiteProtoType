"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.content}
                >
                    <span className={styles.label}>Our Mission</span>
                    <h2 className={styles.heading}>
                        Cultivating intellect, creativity, and character.
                    </h2>
                    <p className={styles.text}>
                        We believe that education is not just about filling a bucket, but lighting a fire.
                        At Lumina, we provide an environment where students are encouraged to question,
                        explore, and discover their unique potential.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
