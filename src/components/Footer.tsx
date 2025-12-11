import Link from "next/link";
import styles from "./Footer.module.css";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            ABC School
                        </Link>
                        <p className={styles.description}>
                            Fostering excellence, curiosity, and character in every student.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4>Academics</h4>
                        <Link href="#">Programs</Link>
                        <Link href="#">Faculty</Link>
                        <Link href="#">Library</Link>
                    </div>

                    <div className={styles.links}>
                        <h4>Admissions</h4>
                        <Link href="#">Apply</Link>
                        <Link href="#">Tuition</Link>
                        <Link href="#">Visit Us</Link>
                    </div>

                    <div className={styles.contact}>
                        <h4>Contact</h4>
                        <p>123 Education Lane</p>
                        <p>Academic City, AC 12345</p>
                        <div className={styles.social}>
                            <Link href="#"><Twitter size={20} /></Link>
                            <Link href="#"><Instagram size={20} /></Link>
                            <Link href="#"><Linkedin size={20} /></Link>
                            <Link href="#"><Mail size={20} /></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} ABC School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
