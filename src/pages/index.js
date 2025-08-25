import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import FAQ from '../components/FAQ';
import FooterNeo from '../components/FAQ/FooterNeo';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout title="Главная" description="3D‑печать и цифровое производство">
      <main className={styles.page}>

        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.h1}>Серийная 3D‑печать. Будущее уже здесь.</h1>
              <p className={styles.lead}>
                Инженерный подход, промышленное качество и скорость — от прототипа до тысяч единиц.
              </p>
              <div className={styles.ctaRow}>
                <Link
  className={styles.btnPrimary}
  to={useBaseUrl('/contacts')}
  aria-label="Перейти на страницу Контакты"
>
  Рассчитать проект
</Link>
                <Link
  className={styles.btnGhost}
  to={useBaseUrl('/portfolio')}   // или to="#portfolio", если это якорь на этой же странице
>
  Портфолио
</Link>
              </div>
            </div>

            {/* иллюстрация справа — можешь заменить на 3D/рендер */}
            <div className={styles.heroArt}>
              <img src="/prototype-3d/img/hero-plant.jpg" alt="Футуристичная сцена" />
            </div>
          </div>

          {/* волна внизу */}
          <div className={styles.wave} aria-hidden="true" />
        </section>

        {/* ===== ТРИ ФИЧИ ===== */}
        <section className={styles.features3}>
          <div className={styles.featuresRow}>
            <div className={styles.featureItem}>
              <h3>1200 +</h3>
              <p>реализованных проектов в медицине, авто, авиа и других отраслях</p>
            </div>
            <div className={styles.featureItem}>
              <h3>100 +</h3>
              <p>принтеров (FDM, SLA/DLP, SLS) и кастомные установки собственной разработки</p>
            </div>
            <div className={styles.featureItem}>
              <h3>1000 +</h3>
              <p>выпускаем более 1000 плат в год с собственным ПО</p>
            </div>
          </div>
        </section>

        {/* ===== СЕТКА КАРТОЧЕК (3 в ряд) ===== */}
        <section className={styles.cardGridSection} id="tech">
          <h2 className={styles.sectionTitle}>Технологии и возможности</h2>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.cardMedia}>
                <img src="/prototype-3d/img/grid-lab.jpg" alt="Лаборатория" />
              </div>
              <h4>Инжиниринг</h4>
              <p>От идеи до чертежей и готовой детали. Материалы: ABS, нейлон, фотополимеры и пр.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardMedia}>
                <img src="/prototype-3d/img/grid-laser.jpg" alt="DLP/SLA" />
              </div>
              <h4>DLP, SLS и FDM</h4>
              <p>Подбираем технологию под задачу: точность, прочность, тираж, стоимость.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardMedia}>
                <img src="/prototype-3d/img/grid-space.jpg" alt="Постобработка" />
              </div>
              <h4>Постобработка</h4>
              <p>Шлифовка, покраска, хим. обработка, сборка. Серийная упаковка и логистика.</p>
            </article>
          </div>
        </section>

        {/* ===== ПОЛОСА С ИКОНКАМИ/ЧИПСАМИ ===== */}
        <section className={styles.chips}>
          <div className={styles.chipsInner}>
            <span className={styles.chip}>Сканирование</span>
            <span className={styles.chip}>CAD/CAM</span>
            <span className={styles.chip}>Материалы: PLA/ABS/PA12</span>
            <span className={styles.chip}>Сборка и тесты</span>
            <span className={styles.chip}>Гарантия качества</span>
          </div>
        </section>
<section className={styles.aiSection}>
  <div className={styles.aiContent}>
    <h2>Применение искусственного интеллекта в производственном процессе</h2>
    <p>
      Серийная 3D-печать в России становится технологическим решением и стратегическим инструментом, 
      позволяющим компаниям динамично адаптироваться к вызовам рынка. Это создаёт условия для появления 
      инновационных продуктов, спроектированных с учётом требований времени, что, в свою очередь, 
      способствует укреплению позиции российских предприятий на глобальной арене.
    </p>
  </div>
</section>
<section>
  <FAQ />
</section>
<section className={styles.trendSection}>
  <div className={styles.trendBg} />
  <div className={styles.trendGlass}>
    <h2 className={styles.trendTitle}>
      На сегодняшний день в мире наблюдается стремительное развитие индустрии промышленной 3D‑печати
    </h2>

    <p className={styles.trendText}>
      Особенно в сфере производства деталей, запчастей и комплектующих в различных отраслях.
      Этот метод, ориентированный на серийное производство, позволяет в сжатые сроки создавать
      необходимые изделия, ничем не уступающие по техническим параметрам аналогам, произведённым
      иными способами. Сложившаяся ситуация в ближайшее время позволит промышленной 3D‑печати
      стать одним из ключевых элементов стратегии импортозамещения в России.
    </p>

    <a className={styles.trendBtn} href="/innovation">
      Узнать больше
    </a>
  </div>
</section>
<section className={styles.footerNeo} id="contact">
  {/* Декоративные неоновые орбы */}
  <span className={styles.orb} aria-hidden="true"></span>
  <span className={styles.orb2} aria-hidden="true"></span>

  <div className={styles.footerNeoGrid}>
    {/* Карта */}
    <div className={styles.card + ' ' + styles.cardMap}>
      <h4 className={styles.cardTitle}>Мы на карте</h4>
      <div className={styles.mapWrap}>
        {/* Яндекс.Карты: поставь свои координаты в ll= и pt= */}
        <iframe
          title="Карта — Обнинск, пр-т Ленина, 121"
          src="https://yandex.ru/map-widget/v1/?ll=36.620000%2C55.110000&z=16&pt=36.620000,55.110000,pm2rdl"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <a
        className={styles.linkGhost}
        href="https://yandex.ru/maps/?text=г.%20Обнинск%2C%20проспект%20Ленина%2C%20121"
        target="_blank"
        rel="noreferrer"
      >
        Открыть в Яндекс.Картах ↗
      </a>
    </div>

    {/* Призыв к действию */}
    <div className={styles.card + ' ' + styles.cardCTA}>
      <h3 className={styles.ctaTitle}>Хотите обсудить проект?</h3>
      <p className={styles.ctaText}>
        Запишитесь на встречу — предложим лучшее решение для вашего бизнеса:
        инженерия, выбор технологии печати, серийное производство.
      </p>
      <div className={styles.btnRow}>
        <Link
  className={styles.btnPrimary} // или твой класс для этой кнопки
  to={useBaseUrl('/contacts')}
  aria-label="Перейти на страницу Контакты"
>
  Записаться на встречу
</Link>

      </div>
    </div>

    {/* Быстрые контакты в подвале */}
    <div className={styles.card + ' ' + styles.cardInfo}>
      <h4 className={styles.cardTitle}>Контакты</h4>
      <ul className={styles.infoList}>
        <li>г. Обнинск, проспект Ленина, дом 121<br/>Территория Приборного завода «Сигнал»</li>
        <li><a href="tel:+74969681333">+7 (495) 968-13-33</a></li>
        <li><a href="mailto:order@prototype-3d.ru">order@prototype-3d.ru</a></li>
      </ul>
      <div className={styles.btnRowSmall}>
        <a className={styles.btnOutline} href="https://wa.me/74959681333" target="_blank" rel="noreferrer">WhatsApp</a>
        <a className={styles.btnOutline} href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
      </div>
    </div>
  </div>
</section>
      </main>
      <FooterNeo />
    </Layout>
  );
}