"use client";

import styles from "./Contact.module.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.heading}>Get in Touch</h2>
                        <p className={styles.description}>
                            Have questions? We are here to help you.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.item}>
                                <MapPin className={styles.icon} />
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>Godawari, Lalitpur, Nepal</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Phone className={styles.icon} />
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+977 01-5555555</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Mail className={styles.icon} />
                                <div>
                                    <h4>Email Us</h4>
                                    <p>info@godawari.edu.np</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Clock className={styles.icon} />
                                <div>
                                    <h4>Office Hours</h4>
                                    <p>Sun - Fri, 9:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Message</label>
                                <textarea placeholder="How can we help you?" rows={4}></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
