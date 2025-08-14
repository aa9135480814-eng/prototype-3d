// src/components/FooterNeo.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './FooterNeo.module.css';

export default function FooterNeo() {
  return (
    <div className={styles.footerBar}>
      <div className={styles.footerBarInner}>
        <div>© {new Date().getFullYear()} Prototype‑3D</div>
        <div className={styles.footerLinks}>
          <Link to="/privacy">Политика конфиденциальности</Link>
          <span>•</span>
        </div>
      </div>
    </div>
  );
}