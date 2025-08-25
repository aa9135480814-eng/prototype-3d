import React, {useState, useMemo} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './projects.module.css';

/** Категории */
const CATEGORIES = [
  'Электромеханика',
  'Изделия для ферм',
  'Авиакосмическая отрасль и РЖД',
  'Дизайн и мебель',
  'Корпуса',
  'Фильтра',
  'Медицина',
  'Прочее',
];

/** Проекты (первая часть заполнена) */
const ALL_PROJECTS = [
  /* === Электромеханика === */
  /* === Электромеханика === */
  {
    id: 'boat-panel',
    cat: 'Электромеханика',
    title: 'Разработка приборной панели для катера',
    img: 'img/projects/panel-boat.jpg',
    text: 'Создание уникальной высокофункциональной панели: компоновка электроники, 3D-печатные детали, подготовка под серийное литьё. Оптимизация прочности и толщин.',
  },
  {
    id: 'thermoregulator',
    cat: 'Электромеханика',
    title: 'Промышленный терморегулятор',
    img: 'img/projects/thermoreg.jpg',
    text: 'Корпуса под разные конфигурации, стойкие материалы, FDM/SLA-печать, сборка. Изделие адаптировано к работе в тяжёлых условиях.',
  },
  {
    id: 'bp-measure-system',
    cat: 'Электромеханика',
    title: 'Система измерения давления для водителей',
    img: 'img/projects/bp-driver.jpg',
    text: 'Концепт → прототип → опытная партия. Эргономика, механика крепления, учтены требования эксплуатации в транспорте.',
  },

  /* === Изделия для ферм === */
  {
    id: 'capsule',
    cat: 'Изделия для ферм',
    title: 'Прочная капсула для переноса веществ',
    img: 'img/projects/capsule-farm.jpg',
    text: 'Износостойкий печатаемый материал, герметичная конструкция, рассчитанная на частые циклы использования.',
  },
  {
    id: 'valve-us-milking',
    cat: 'Изделия для ферм',
    title: 'Аналог клапана для американских доилок',
    img: 'img/projects/valve-cow.jpg',
    text: 'Полный цикл: реверс-инжиниринг, 3D-модель, печать и тестирование. Совместимость с существующими узлами.',
  },
  {
    id: 'milk-printer-spares',
    cat: 'Изделия для ферм',
    title: 'Пищевая пластиковая запчасть для доильных комплексов',
    img: 'img/projects/milk-part.jpg',
    text: 'Материалы, допускаемые к пищевому контакту, аккуратная постобработка и контроль размеров по посадкам.',
  },
  {
    id: 'agro-filter',
    cat: 'Изделия для ферм',
    title: 'Инновационный фильтр с функцией ионизации воздуха',
    img: 'img/projects/agro-filter.jpg',
    text: 'Высокая производительность при малом сопротивлении. Конструкция рассчитана на сменные элементы.',
  },

  /* === Авиакосмос / РЖД === */
  {
    id: 'rzd-filter-cassette',
    cat: 'Авиакосмическая отрасль и РЖД',
    title: 'Кассеты фильтров для поездов РЖД',
    img: 'img/projects/filter-train.jpg',
    text: 'Печатаемые кассеты, обеспечивающие очистку/ионизацию воздуха. Оптимизация геометрии под поток и прочность.',
  },

  /* === Дизайн и мебель === */
  {
    id: 'design-table',
    cat: 'Дизайн и мебель',
    title: 'Стол, стул и торшер из пластика',
    img: 'img/projects/furniture-set.jpg',
    text: 'Авторские модели под печать крупными слоями, последующая шлифовка и покраска. Отправка на выставку в Сингапур.',
  },
  {
    id: 'sculpt-putin',
    cat: 'Дизайн и мебель',
    title: 'Скульптура (Путин на медведе)',
    img: 'img/projects/putin-bear.jpg',
    text: 'Крупноформатная печать с секционированием, усиления, армирование и покраска. Экспонирование в Лондоне.',
  },
  {
    id: 'neon-signs',
    cat: 'Дизайн и мебель',
    title: 'Неоновые вывески и инсталляции',
    img: 'img/projects/neon-signs.jpg',
    text: 'Индивидуальные вывески и световые контуры. Конструкции под скрытый монтаж и безопасную эксплуатацию.',
  },
  {
    id: 'house-numbers',
    cat: 'Дизайн и мебель',
    title: '3D-номера домов для вывесок',
    img: 'img/projects/house-numbers.jpg',
    text: 'Технология окрашиваемых 3D-цифр с длительной погодостойкостью. Серийное исполнение.',
  },
  {
    id: 'city-model',
    cat: 'Дизайн и мебель',
    title: 'Масштабный макет жилого комплекса',
    img: 'img/projects/building-model.jpg',
    text: 'Сборный макет с подсветкой. Отдельные кварталы на съемных модулях для демонстраций.',
  },
  {
    id: 'hookah-dragon',
    cat: 'Дизайн и мебель',
    title: 'Индивидуальный кальян со скульптурой дракона',
    img: 'img/projects/dragon-hookah.jpg',
    text: 'Сложная декоративная оболочка, стойкие покрытия, безопасная сборка. Акцент на художественную часть.',
  },
  {
    id: 'egypt-chess',
    cat: 'Дизайн и мебель',
    title: 'Шахматы в египетском стиле',
    img: 'img/projects/egypt-chess.jpg',
    text: 'Авторский набор фигур, печать с высоким качеством поверхности и окраской под камень/бронзу.',
  },
  {
    id: 'lamp-coffee',
    cat: 'Дизайн и мебель',
    title: 'Люстра для кофейни',
    img: 'img/projects/cafe-lamp.jpg',
    text: 'Лёгкая подвесная конструкция, рассеиватель из печатных элементов. Быстрый монтаж.',
  },
  {
    id: 'panel-facade',
    cat: 'Дизайн и мебель',
    title: 'Кастомные фасадные панели',
    img: 'img/projects/tv-panels.jpg',
    text: 'Рельефные 3D-панели под окраску. Конструкторская подготовка под серийное изготовление.',
  },
  {
    id: 'polycat',
    cat: 'Дизайн и мебель',
    title: 'Полигоночная скульптура кота',
    img: 'img/projects/cat-sculpture.jpg',
    text: 'Крупногабарит, сборка сегментов «в ноль», шпатлевание, окраска в фирменной палитре.',
  },
  {
    id: 'lion-sculpt',
    cat: 'Дизайн и мебель',
    title: 'Статуя льва любых размеров',
    img: 'img/projects/lion-statue.jpg',
    text: 'Секционная печать, армирование, текстурирование под камень. Возможны уличные исполнения.',
  },
  {
    id: 'bas-relief',
    cat: 'Дизайн и мебель',
    title: 'Бас-рельеф для ванной',
    img: 'img/projects/bathroom-panel.jpg',
    text: 'Тонкий рельеф с влагостойкими материалами и креплением под плиточную зону.',
  },

  /* === Корпуса === */
  {
    id: 'case-elec-split',
    cat: 'Корпуса',
    title: 'Корпус по индивидуальным размерам под разводку электрики',
    img: 'img/projects/case-electric.jpg',
    text: 'Индивидуальная геометрия, технологичное крепление, стойкий материал под уличную эксплуатацию.',
  },
  {
    id: 'case-underground',
    cat: 'Корпуса',
    title: 'Корпус для разводки электрики под землей',
    img: 'img/projects/case-underground.jpg',
    text: 'Герметичный стакан с резьбой и крышкой, ударопрочный пластик.',
  },

  /* ==== ФИЛЬТРА ==== */
  {
    id: 'filter-duct-replace',
    cat: 'Фильтра',
    title: 'Заменённый воздуховод',
    img: 'img/projects/air-duct.jpg',
    text: 'Прозрачный канал, посадки под стяжки и фитинги, быстрое изготовление.',
  },

  /* ==== МЕДИЦИНА ==== */
  {
    id: 'med-ribcage-dummy',
    cat: 'Медицина',
    title: 'Композитная грудная клетка для манекена',
    img: 'img/projects/chest-mannequin.jpg',
    text: 'Учебный манекен для отработки СЛР: композит + печать, реалистичная жёсткость.',
  },
  {
    id: 'med-orthoses',
    cat: 'Медицина',
    title: 'Ортезы',
    img: 'img/projects/orthosis.jpg',
    text: 'Снятие слепка, 3D-сканирование, печать индивидуальных ортезов под пациента.',
  },

  /* ==== ПРОЧЕЕ ==== */
  {
    id: 'misc-amg-lip',
    cat: 'Прочее',
    title: 'Карбоновая губа для AMG GT (макет)',
    img: 'img/projects/amg-lip.jpg',
    text: 'Геометрия по скану бампера, примерка, подготовка под композит.',
  },
  {
    id: 'misc-audi-spoiler',
    cat: 'Прочее',
    title: 'Спойлер Audi (макет)',
    img: 'img/projects/audi-spoiler.jpg',
    text: 'Стайлинг-элемент, подгонка по кузову, быстрый прототип.',
  },
  {
    id: 'misc-carbon-panels',
    cat: 'Прочее',
    title: 'Карбоновые планки с кнопками',
    img: 'img/projects/carbon-panels.jpg',
    text: 'Интеграция печатной панели в интерьер авто, аккуратные посадки.',
  },
  {
    id: 'misc-coffee-cap',
    cat: 'Прочее',
    title: 'Крышка для больших пакетов с кофе',
    img: 'img/projects/coffee-lid.jpg',
    text: 'Удобный дозатор-зажим для мешков с продуктами, пищевой пластик.',
  },
  {
    id: 'misc-candle-shells',
    cat: 'Прочее',
    title: 'Корпуса свечей из огнестойкого пластика',
    img: 'img/projects/candle-case.jpg',
    text: 'Декоративные светильники-плафоны, огнестойкий материал.',
  },
  {
    id: 'misc-earrings-1',
    cat: 'Прочее',
    title: 'Серьги (печатные)',
    img: 'img/projects/earrings-1.jpg',
    text: 'Ювелирный принт: лёгкие, прочные, выразительная форма.',
  },
  {
    id: 'misc-pendant-bio',
    cat: 'Прочее',
    title: 'Кулон из биопластика',
    img: 'img/projects/pendant-bio.jpg',
    text: 'Экологичный материал, высокая детализация орнамента.',
  },
  {
    id: 'misc-earrings-2',
    cat: 'Прочее',
    title: 'Серьги 3D-печать',
    img: 'img/projects/earrings-2.jpg',
    text: 'Сложная пространственная форма, малая масса и жёсткость.',
  },
  {
    id: 'misc-vase-mock',
    cat: 'Прочее',
    title: 'Макет будущей вазы',
    img: 'img/projects/vase-future.jpg',
    text: 'Быстрый прототип с выразительной волнистой геометрией.',
  },
  {
    id: 'misc-rope-lay',
    cat: 'Прочее',
    title: 'Тросоукладчик для бетонного завода',
    img: 'img/projects/rope-clamp.jpg',
    text: 'Функциональный узел под тяжёлые условия эксплуатации.',
  },
  {
    id: 'misc-newyear-toys',
    cat: 'Прочее',
    title: 'Новогодние игрушки',
    img: 'img/projects/toys-newyear.jpg',
    text: 'Небьющиеся украшения сложной формы, малая серия.',
  },
  {
    id: 'misc-pioneer-base',
    cat: 'Прочее',
    title: 'Основание памятника «Первопроходца»',
    img: 'img/projects/monument-base.jpg',
    text: 'Технологичная геометрия под формование, точная посадка.',
  },
  {
    id: 'misc-mascot',
    cat: 'Прочее',
    title: 'Маскот',
    img: 'img/projects/mascot.jpg',
    text: 'Фирменный персонаж компании: печать, шлифовка, покраска.',
  },
  {
    id: 'misc-souvenirs-awards',
    cat: 'Прочее',
    title: 'Сувениры, награды, подставки',
    img: 'img/projects/souvenirs.jpg',
    text: 'Индивидуальные изделия под бренд: быстро, малой серией.',
  },
  /* Остальные категории наполним позже */
];
/** Карточка проекта */
function ProjectCard({ project }) {
  const src = useBaseUrl(project.img.startsWith('/') ? project.img : '/' + project.img);
  const fallbackSrc = useBaseUrl('/img/noise.png');

  return (
    <article className={styles.card}>
      <img
        className={styles.img}
        src={src}
        alt={project.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallbackSrc;
          console.warn('Image not found:', src);
        }}
      />
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardText}>{project.text}</p>
      <div className={styles.cardActions}>
        <Link className={styles.btn} to={useBaseUrl('/contacts')}>
          Обсудить проект
        </Link>
      </div>
    </article>
  );
}
/** Карточка */
export default function ProjectsPage() {
  // состояние: какая вкладка выбрана
  const [active, setActive] = useState(CATEGORIES[0]);

  // отфильтрованный список карточек по активной категории
  const list = useMemo(() => ALL_PROJECTS.filter(p => p.cat === active), [active]);

  return (
    <Layout
      title="Проекты"
      description="Портфолио работ: инженерия, прототипы и серийные изделия"
    >
      <div className={styles.pageWrap}>
        <Head>
          <meta property="og:title" content="Проекты — Prototype-3D" />
          <meta
            property="og:description"
            content="Портфолио выполненных работ: от прототипа до серийного производства."
          />
        </Head>

        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>Проекты</h1>
            <p className={styles.heroLead}>
              Кейсы из разных отраслей — инженерия, 3D-прототипирование и мелкосерийное производство.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} to={useBaseUrl('/contacts')}>
                Рассчитать проект
              </Link>
              <a className={styles.btnGhost} href="https://t.me/a_drozd" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </section>

        {/* КОНТЕНТ */}
        <main className={styles.page}>
          <div className="container">
            {/* Вкладки */}
            <div className={styles.tabs} role="tablist" aria-label="Категории проектов">
              {CATEGORIES.map((cat) => {
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`${styles.tab} ${isActive ? styles.active : ''}`}
                    onClick={() => setActive(cat)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Сетка карточек */}
            <div className={styles.grid}>
              {list.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
              {list.length === 0 && (
                <div className={styles.empty}>В этой категории пока нет проектов.</div>
              )}
            </div>

            {/* Нижний CTA */}
            <section className={styles.cta}>
              <h2 className={styles.ctaTitle}>Хотите обсудить вашу задачу?</h2>
              <p className={styles.ctaText}>
                Подскажем по материалам, технологиям и срокам. Предложим лучшее решение под бюджет.
              </p>
              <div className={styles.ctaRow}>
                <Link className={styles.btnPrimary} to={useBaseUrl('/contacts')}>
                  Написать нам
                </Link>
                <a className={styles.btnGhost} href="https://wa.me/74959681333" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}
