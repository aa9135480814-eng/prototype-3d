import React from 'react';
import Link from '@docusaurus/Link';

export default function ContactsForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: сюда добавишь отправку (fetch/axios/Formspree и т.п.)
    alert('Форма отправлена (демо).');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row1_NRFU">
        <label className="field_Wrse">
          <span>ФИО</span>
          <input
            type="text"
            placeholder="Иван Иванов"
            autoComplete="name"
            required
            name="name"
          />
        </label>

        <label className="field_Wrse">
          <span>E‑mail*</span>
          <input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            required
            name="email"
          />
        </label>
      </div>

      <div className="row1_NRFU">
        <label className="field_Wrse">
          <span>Телефон</span>
          <input
            type="tel"
            placeholder="+7 (___) ___‑__‑__"
            autoComplete="tel"
            inputMode="tel"
            name="phone"
          />
        </label>
      </div>

      <label className="field_Wrse">
        <span>Сообщение</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Коротко о задаче… материалы, сроки, тираж"
        />
      </label>

      <label className="check_uAvK">
        <input type="checkbox" required aria-required="true" name="policy" />
        <span>
          Согласен с{' '}
          <Link to="/privacy" target="_blank" rel="noreferrer">
            политикой конфиденциальности
          </Link>{' '}
          и{' '}
          <Link to="/terms" target="_blank" rel="noreferrer">
            условиями
          </Link>
        </span>
      </label>

      <div className="btnRow__I7v">
        <button type="submit" className="btnGlow__lDB" aria-label="Отправить форму">
          Отправить
        </button>

        <a
          className="btnGhost__RAK"
          href="https://t.me/a_drozd"
          target="_blank"
          rel="noreferrer"
          aria-label="Написать в Telegram"
        >
          Telegram
        </a>

        <a
          className="btnGhost__RAK"
          href="https://wa.me/74959681333"
          target="_blank"
          rel="noreferrer"
          aria-label="Написать в WhatsApp"
        >
          WhatsApp
        </a>
      </div>

      <div className="card_PM51" aria-labelledby="contacts-title">
        <h3 id="contacts-title" className="cardTitle_hcHm">Контакты</h3>
        <ul className="infoList_yUhM">
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

        <div className="btnRowSmall_Fuhk">
          <a
            className="btnOutline_BChY"
            href="https://t.me/a_drozd"
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </a>
          <a
            className="btnOutline_BChY"
            href="https://wa.me/74959681333"
            target="_blank"
            rel="noreferrer"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </form>
  );
}
