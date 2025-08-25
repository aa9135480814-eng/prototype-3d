import React from 'react';
import Layout from '@theme/Layout';
import styles from './technologies.module.css';
import FooterNeo from '../components/FAQ/FooterNeo';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Technologies() {
  return (
    <Layout
      title="Технологии и ИИ"
      description="FDM, DLP, SLS и применение искусственного интеллекта в 3D‑печати"
    >
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroInner}>
            <h1>Технологии трёхмерной печати и искусственный интеллект</h1>
            <p>
              Коротко и по делу: три промышленные технологии печати, а ниже —
              где именно ИИ даёт реальную пользу в производстве.
            </p>
          </div>
        </section>

        {/* ТЕХНОЛОГИИ */}
        <section className={styles.techSection} id="tech">
          <h2 className={styles.sectionTitle}>Технологии печати</h2>

          <div className={styles.steps}>
            <article className={styles.stepCard}>
              <div className={styles.bullet}>1</div>
              <h3>FDM</h3>
              <p>
                Послойное наплавление термопластом. Сильные стороны: габарит,
                прочность, себестоимость. Материалы: PLA/ABS/ASA/PA/PC и&nbsp;др.
              </p>
            </article>

            <article className={styles.stepCard}>
              <div className={styles.bullet}>2</div>
              <h3>DLP / SLA</h3>
              <p>
                Полимеризация смолы светом. Высокая точность, плавные поверхности,
                мелкая детализация. Подходит для корпусов, оснастки, макетов.
              </p>
            </article>

            <article className={styles.stepCard}>
              <div className={styles.bullet}>3</div>
              <h3>SLS</h3>
              <p>
                Спекание порошков лазером. Функциональные детали без поддержек,
                прочность в изделиях сложной геометрии. Полиамиды и композиты.
              </p>
            </article>
          </div>
        </section>

        {/* ИИ В ПРОИЗВОДСТВЕ */}
        <section className={styles.aiSection} id="ai">
          <h2 className={styles.sectionTitle}>Применение ИИ в 3D‑печати</h2>
          <div className={styles.aiGrid}>
            <article className={styles.aiCard}>
              <div className={styles.aiImg}>
                <img src={useBaseUrl('/img/ai/ai-concepts.jpg')}alt="Генерация концепций ИИ" loading="lazy"/>
              </div>
              <h3>Генерация концепций</h3>
              <p>ИИ → быстрые референсы и варианты форм для обсуждения с заказчиком.</p>
            </article>

            <article className={styles.aiCard}>
              <div className={styles.aiImg}>
                <img src="/prototype-3d/img/ai/ai-generative.jpg" alt="Генеративный дизайн" loading="lazy"/>
              </div>
              <h3>Генеративный дизайн</h3>
              <p>Оптимизация топологии: меньше вес, та же жёсткость, готово под печать.</p>
            </article>

            <article className={styles.aiCard}>
              <div className={styles.aiImg}>
                <img src="/prototype-3d/img/ai/ai-modeling.jpg" alt="Автоматизация 3D‑моделирования" loading="lazy"/>
              </div>
              <h3>Автоматизация моделирования</h3>
              <p>Из 2D/фото → 3D‑болванка, черновая очистка сетки, ускорение CAD‑этапа.</p>
            </article>

            <article className={styles.aiCard}>
              <div className={styles.aiImg}>
                <img src="/prototype-3d/img/ai/ai-optimization.jpg" alt="Оптимизация форм и параметров" loading="lazy"/>
              </div>
              <h3>Оптимизация процесса</h3>
              <p>ИИ‑подбор материалов и параметров печати для срока, цены и качества.</p>
            </article>
          </div>
        </section>
      </main>
      <FooterNeo />
    </Layout>
  );
}