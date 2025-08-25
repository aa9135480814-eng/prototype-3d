import React from 'react';
import Layout from '@theme/Layout';
import styles from './contacts.module.css';
import FooterNeo from '../components/FAQ/FooterNeo';

export default function ContactsPage() {
  return (
    <Layout title="Контакты" description="Свяжитесь с Prototype-3D">
      <main className={styles.wrap}>
        {/* Фон */}
        <div className={styles.bg} />

        <section className={styles.container}>
          <header className={styles.header}>
            <h1>Свяжитесь с нами</h1>
            <p>
              Пришло время творить — поможем с проектированием, 3D‑печатью и серийным производством.
            </p>
          </header>

          <div className={styles.grid}>
            {/* Карта */}
            <div className={`${styles.card} ${styles.cardMap}`}>
              <h3 className={styles.cardTitle}>Мы на карте</h3>
              <div className={styles.mapWrap}>
                <iframe
                  title="Карта — Prototype‑3D"
                  src="https://yandex.ru/map-widget/v1/?text=%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%20121"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                className={styles.linkGhost}
                href="https://yandex.ru/maps/?text=%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%20121"
                target="_blank"
                rel="noreferrer"
              >
                Открыть в Яндекс.Картах →
              </a>
            </div>

            {/* Форма */}
            <div className={`${styles.card} ${styles.cardForm}`}>
              <h3 className={styles.cardTitle}>Записаться на встречу</h3>

              {/* TODO: замени action на свой обработчик/формсервис */}
              <form
                className={styles.form}
                action="https://formspree.io/f/your-id"
                method="POST"
                noValidate
              >
                {/* анти‑спам поле (скрытое) */}
                <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" hidden />

                <div className={styles.row2}>
                  <label className={styles.field}>
                    <span>ФИО</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Иван Иванов"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span>E‑mail*</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                      required
                    />
                  </label>
                </div>

                <div className={styles.row1}>
                  <label className={styles.field}>
                    <span>Телефон</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+7 (___) ___‑__‑__"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </label>
                </div>

                <label className={styles.field}>
                  <span>Сообщение</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Коротко о задаче… материалы, сроки, тираж"
                  />
                </label>

                <label className={styles.check}>
                  <input type="checkbox" name="policy" required aria-required="true" />
                  <span>
                    Согласен с{' '}
<a href="/privacy" target="_blank" rel="noreferrer">
                      политикой конфиденциальности
                    </a>{' '}
                    и{' '}
                    <a href="/terms" target="_blank" rel="noreferrer">
                      условиями
                    </a>
                  </span>
                </label>

                <div className={styles.btnRow}>
                  <button type="submit" className={styles.btnGlow} aria-label="Отправить форму">
                    Отправить
                  </button>
                  <a
                    className={styles.btnGhost}
                    href="https://t.me/a_drozd"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Написать в Telegram"
                  >
                    Telegram
                  </a>
                  <a
                    className={styles.btnGhost}
                    href="https://wa.me/74959681333"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Написать в WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>

            {/* Контакты */}
            <div className={styles.card} aria-labelledby="contacts-title">
              <h3 id="contacts-title" className={styles.cardTitle}>
                Контакты
              </h3>

              <ul className={styles.infoList}>
                <li>
                  <strong>Адрес:</strong>
                  <br />
                  г. Обнинск, проспект Ленина, дом 121
                  <br />
                  Территория Приборного завода «Сигнал»
                </li>
                <li>
                  <strong>Телефон:</strong>{' '}
                  <a href="tel:+74959681333" aria-label="Позвонить +7 495 968 13 33">
                    +7 (495) 968‑13‑33
                  </a>
                </li>
                <li>
                  <strong>E‑mail:</strong>{' '}
                  <a href="mailto:order@prototype-3d.ru">order@prototype-3d.ru</a>
                </li>
              </ul>

              <div className={styles.btnRowSmall}>
                <a
                  className={styles.btnOutline}
                  href="https://https://t.me/a_drozd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
                </a>
                <a
                  className={styles.btnOutline}
                  href="https://wa.me/74959681333"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
</section>
      </main>
        <FooterNeo />
    </Layout>
  );
}