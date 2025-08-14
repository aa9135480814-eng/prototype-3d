// src/pages/services.jsx
import React from 'react';
import Layout from '@theme/Layout';
import styles from './services.module.css';
import FooterNeo from '../components/FAQ/FooterNeo';

export default function Services() {
  return (
    <Layout title="Услуги" description="3D‑сканирование, моделирование, печать, постобработка и др.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <h1>Технологии и услуги</h1>
          <p className={styles.lead}>
            От идеи и 3D‑сканирования — до серийной печати, постобработки, ПО и электромеханических решений.
          </p>
        </section>

        <section className={styles.grid}>
          {/* 1 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/scanning.jpg" alt="3D‑сканирование" />
            </div>
            <h3>3D‑сканирование</h3>
            <p>Оцифровка реальных объектов, точные облака точек и 3D‑модели для доработки.</p>
            <div className={styles.chips}><span>LIDAR</span><span>Reverse</span><span>CAD</span></div>
          </article>

          {/* 2 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/modeling.jpg" alt="3D‑моделирование" />
            </div>
            <h3>3D‑моделирование</h3>
            <p>Полный цикл проектирования: от эскиза до производственных чертежей.</p>
            <div className={styles.chips}><span>Solid</span><span>Surface</span><span>DFM</span></div>
          </article>

          {/* 3 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/printing.jpg" alt="Серийная 3D‑печать" />
            </div>
            <h3>Серийная 3D‑печать</h3>
            <p>FDM, SLS и DLP/SLA под задачу: точность, тираж, прочность и себестоимость.</p>
            <div className={styles.chips}><span>FDM</span><span>SLS</span><span>DLP</span></div>
          </article>

          {/* 4 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/postproc.jpg" alt="Постобработка" />
            </div>
            <h3>Постобработка</h3>
            <p>Шлифовка, грунт, окраска, лакировка, химобработка, сборка, упаковка.</p>
            <div className={styles.chips}><span>Finish</span><span>Paint</span><span>QA</span></div>
          </article>

          {/* 5 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/software.jpg" alt="Разработка ПО" />
            </div>
            <h3>Разработка ПО</h3>
            <p>ПО для наших установок и линий: управление, интеграция, аналитика.</p>
            <div className={styles.chips}><span>SCADA</span><span>API</span><span>UI</span></div>
          </article>

          {/* 6 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/optimize.jpg" alt="Оптимизация производства" />
            </div>
            <h3>Оптимизация производства</h3>
            <p>Внедрение 3D‑печати, сокращение сроков, снижение брака и издержек.</p>
            <div className={styles.chips}><span>Lean</span><span>DFM</span><span>ROI</span></div>
          </article>

          {/* 7 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/pcb.jpg" alt="Производство плат" />
            </div>
            <h3>Производство плат (под проект)</h3>
            <p>Индивидуальные платы, сборка, тестирование, мелко‑ и среднесерийно.</p>
            <div className={styles.chips}><span>PCB</span><span>SMT</span><span>ICT</span></div>
          </article>

          {/* 8 */}
          <article className={styles.card}>
            <div className={styles.thumb}>
              <img src="/img/services/electro.jpg" alt="Электромех. изделия и робототехника" />
            </div>
            <h3>Электромеханика и робототехника</h3>
            <p>Корпуса, крепёж, механизмы, интеграция электроники и приводов.</p>
            <div className={styles.chips}><span>Mech</span><span>Drive</span><span>IoT</span></div>
          </article>
          <div className={`${styles.card} ${styles.serviceGlow}`}>
  {/* thumb / h3 / p / chips */}
</div>
        </section>
      </main>
      <FooterNeo />
    </Layout>
  );
}
