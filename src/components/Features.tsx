"use client";

import { motion } from "framer-motion";
import styles from "./Features.module.css";
import { BookOpen, Users, Trophy } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Academic Excellence",
        description: "Rigorous curriculum designed to challenge and inspire students to reach their full potential."
    },
    {
        icon: Users,
        title: "Diverse Community",
        description: "A vibrant, inclusive community where every voice is heard and every background is celebrated."
    },
    {
        icon: Trophy,
        title: "Holistic Development",
        description: "Focus on character building, sports, and arts alongside academic achievements."
    }
];

export default function Features() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={styles.card}
                        >
                            <feature.icon className={styles.icon} size={32} />
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
