import styles from "./footer.module.css";

export default function Footer({ text }: { text: string }) {
  return <footer className={styles.footer}>{text}</footer>;
}
