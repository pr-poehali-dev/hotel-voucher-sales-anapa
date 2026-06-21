import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CITIES } from '@/data/cities';

const HERO_IMG = 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/9c55a72e-8db7-4f0f-9133-153f82ea8a63.jpg';

const STEPS = [
  { icon: 'MessageCircle', title: 'Связываетесь с нами', text: 'Вы можете связаться с нами по контактам, указанным на сайте.' },
  { icon: 'HeadphonesIcon', title: 'Получаете бесплатную консультацию', text: 'Наш оператор проведёт консультацию, расскажет подробно и ответит на все вопросы.' },
  { icon: 'ClipboardList', title: 'Оформляете заказ', text: 'Наш оператор помогает вам оформить заказ и консультирует до принятия работ.' },
  { icon: 'FileText', title: 'Изготовление документов', text: 'Вносите предоплату. Мы изготавливаем официальный документ в кратчайшие сроки.' },
  { icon: 'CheckCircle2', title: 'Проверяете и оплачиваете', text: 'Получаете документы на проверку по email и после этого производите оплату.' },
  { icon: 'Truck', title: 'Отправка заказа', text: 'Мы отправляем вам ваш заказ экспресс-доставкой.' },
  { icon: 'Star', title: 'Наслаждаетесь новыми документами', text: '' },
];

const CATALOG = [
  { name: 'Кассовые чеки', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/dfb78967-bace-4005-bd2f-c9c2892226e8.jpg' },
  { name: 'Товарные чеки', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/70a1594f-232a-4cd9-8b1d-3e89a0c5324c.jpg' },
  { name: 'Гостиничные чеки', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/eaa43569-2dc0-4b19-9ffc-980bae491f21.jpg' },
  { name: 'Ресторанные чеки', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/0e81b8fc-8f47-46d0-ba0a-1d0d7a629e54.jpg' },
  { name: 'Счета-фактуры', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/a992d67d-0c9a-4541-95a8-bb147eb1f379.jpg' },
  { name: 'Чеки АЗС', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/98559993-1a62-4e01-b162-b3eb363d12f0.jpg' },
  { name: 'Чеки на стройматериалы', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/5727fd5e-4280-49a8-bb7b-939f35e0cd0a.jpg' },
  { name: 'Акты выполненных работ', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/0e63723b-14b0-4354-aa91-261b42811aef.jpg' },
  { name: 'Почтовые чеки', img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/cd97999b-3b1b-42ce-8ce3-5f5263c019ad.jpg' },
];

const Index = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [contact, setContact] = useState('');
  const [modalItem, setModalItem] = useState<{ name: string; img: string } | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-6">
            <a href="mailto:a9990064045@mail.ru" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <Icon name="Mail" size={14} /> a9990064045@mail.ru
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-white/70">
              <Icon name="MapPin" size={14} /> Анапа и другие города
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+79990064045" className="font-600 text-accent">+7 (999) 006-40-45</a>
            <a href="https://wa.me/79990064045" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 rounded border border-green-500/50 px-3 py-1 text-green-400 hover:bg-green-500 hover:text-white transition-colors text-xs font-500">
              <Icon name="MessageCircle" size={13} /> WhatsApp
            </a>
            <a href="https://t.me/+79990064045" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 rounded border border-sky-400/50 px-3 py-1 text-sky-400 hover:bg-sky-500 hover:text-white transition-colors text-xs font-500">
              <Icon name="Send" size={13} /> Telegram
            </a>
            <button className="rounded border border-accent/50 px-3 py-1 text-accent hover:bg-accent hover:text-accent-foreground transition-colors text-xs font-500">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg shadow-sm">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-primary">
              <Icon name="ShieldCheck" size={20} className="text-accent" />
            </div>
            <div>
              <div className="font-display text-base font-700 uppercase tracking-wide text-primary leading-tight">ЧекГарант</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider leading-tight">Действительные чеки</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex text-sm">
            <a href="#catalog-nav" className="text-muted-foreground hover:text-primary transition-colors font-500">Каталог</a>
            <a href="#how" className="text-muted-foreground hover:text-primary transition-colors font-500">Как мы работаем</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-500">О нас</a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors font-500">Контакты</a>
          </nav>
          <a href="tel:+79990064045" className="hidden md:flex items-center gap-2 font-display font-600 text-primary hover:text-accent transition-colors">
            <Icon name="Phone" size={16} />+7 (999) 006-40-45
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Анапа" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/96 via-primary/88 to-primary/50" />
        </div>
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-accent font-600 uppercase tracking-widest text-sm mb-3">Действительные чеки · Анапа</p>
            <h1 className="font-display text-4xl md:text-6xl font-700 uppercase text-white leading-tight">
              Гостиничные чеки
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-white/90 text-base">
              <div className="flex items-center gap-2 bg-white/10 rounded px-4 py-2">
                <Icon name="Percent" size={18} className="text-accent" />
                <span className="font-bold text-yellow-400 text-xl">Наша комиссия 12% от суммы чека</span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-white/75 leading-relaxed text-lg">
              Сотрудникам предприятий часто приходится направляться в деловые поездки. Мы поможем оформить гостиничные чеки с подтверждением для авансового отчёта о командировке. Официально, быстро и надёжно.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-600" asChild>
                <a href="#catalog-nav">Наш каталог</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                <a href="#order">Заказать звонок</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section id="about" className="py-14">
        <div className="container grid gap-10 lg:grid-cols-3">
          {/* Article */}
          <div className="lg:col-span-2 space-y-8 text-muted-foreground leading-relaxed text-[15px]">
            <div>
              <h2 className="font-display text-2xl font-700 uppercase text-primary mb-4">Гостиничные чеки в Анапе</h2>
              <p>
                Сотрудникам предприятий часто приходится направляться в деловые поездки. Это связано с расширением сферы деятельности, поиском новых партнёров, прохождением курсов повышения квалификации. Поездки преимущественно финансируются работодателем, но сотрудником к отчёту прикладываются гостиничные чеки, обосновывающие расход.
              </p>
              <p className="mt-3">
                Командированному сотруднику знакома система компенсации и возмещения расходов. Часто из региональных отделений сотрудников отправляют для прохождения различных семинаров, сдачи отчётов, курсов повышения квалификации.
              </p>
              <ul className="mt-4 space-y-2 ml-4 list-none">
                {['Оптимизация издержек во время поездки', 'Предоставление точной информации о расходах', 'Создание условий для сотрудника, позволяющих справляться со своими задачами'].map(t => (
                  <li key={t} className="flex items-start gap-2"><Icon name="ChevronRight" size={16} className="text-accent mt-0.5 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-600 uppercase text-primary mb-3">Особенности подготовки гостиничных чеков</h3>
              <p>Цели работы с документами понятны каждому — начиная от руководителей, заканчивая конкретными подчинёнными. Гостиничные чеки с подтверждением содержат основную информацию:</p>
              <ul className="mt-3 space-y-2 ml-4">
                {['Время заселения и выезда (общая продолжительность аренды номера)', 'Общая стоимость услуги', 'Дополнительные сведения об условиях проживания'].map(t => (
                  <li key={t} className="flex items-start gap-2"><Icon name="ChevronRight" size={16} className="text-accent mt-0.5 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-600 uppercase text-primary mb-3">Для чего нужны гостиничные чеки во время поездки?</h3>
              <p>Это документация, собирающаяся вместе и представляющаяся работодателю. Во всех организациях действует строгая отчётность. Преследуются разнообразные цели:</p>
              <ul className="mt-3 space-y-2 ml-4">
                {['Обоснование факта заселения и сбор документов', 'Снижение издержек и увеличение гонорара за счёт квитанций', 'Составление точных отчётов и исключение любых неточностей'].map(t => (
                  <li key={t} className="flex items-start gap-2"><Icon name="ChevronRight" size={16} className="text-accent mt-0.5 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-600 uppercase text-primary mb-3">Потеря документов — как подготовить отчёт о затратах?</h3>
              <p>На помощь сотрудникам муниципальных и коммерческих структур приходят специалисты нашей фирмы. С нашей помощью можно составить отчёт о своих издержках. Если из-за рассеянности или случайности потеряны документы — просто обратитесь в нашу фирму. Мы поможем купить гостиничные чеки с подтверждением и другие документы для авансового отчёта о командировке.</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-600 uppercase text-primary mb-3">Оперативность и гарантия полной безопасности</h3>
              <p>Пакет сформированных документов обосновывается при необходимости. Если бухгалтеры захотят проверить чеки, они смогут это сделать — по телефону им ответят на все вопросы и официально подтвердят подлинность справок.</p>
              <ul className="mt-3 space-y-2 ml-4">
                {['Оперативность выполнения любого заказа', 'Индивидуальный подход при решении поставленных задач', 'Конфиденциальность и гарантия безопасности', 'Большой ассортимент квитанций'].map(t => (
                  <li key={t} className="flex items-start gap-2"><Icon name="CheckCircle2" size={16} className="text-accent mt-0.5 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <div className="font-display text-lg font-700 text-primary mb-1">Стоимость</div>
              <div className="text-3xl font-display font-700 text-accent">12% <span className="text-base text-muted-foreground font-400">от суммы чека</span></div>
              <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#order">Купить</a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div id="catalog-nav" className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="font-display text-sm font-600 uppercase tracking-wider text-muted-foreground mb-3">Каталог</div>
              <ul className="space-y-1">
                {CATALOG.map((item) => (
                  <li key={item.name}>
                    <button onClick={() => setModalItem(item)} className={`w-full flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors text-left ${item.name === 'Гостиничные чеки' ? 'bg-primary text-primary-foreground font-600' : 'text-foreground hover:bg-muted'}`}>
                      <Icon name="ChevronRight" size={14} className={item.name === 'Гостиничные чеки' ? 'text-accent' : 'text-muted-foreground'} />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="font-display text-sm font-600 uppercase tracking-wider text-muted-foreground mb-3">Контакты</div>
              <div className="space-y-3 text-sm">
                <a href="tel:+79990064045" className="flex items-center gap-2 text-primary font-600 hover:text-accent transition-colors">
                  <Icon name="Phone" size={16} className="text-accent" />+7 (999) 006-40-45
                </a>
                <a href="mailto:a9990064045@mail.ru" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} className="text-accent" />a9990064045@mail.ru
                </a>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-accent" />г. Анапа и другие города
                </div>
              </div>
              <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#order">Заказать звонок</a>
              </Button>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="font-display text-sm font-600 uppercase tracking-wider text-muted-foreground mb-3">Информация</div>
              <ul className="space-y-1 text-sm">
                {['Доставка и оплата', 'О нас', 'Отзывы', 'Контакты'].map(item => (
                  <li key={item}>
                    <a href="#contacts" className="flex items-center gap-2 rounded px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary transition-colors">
                      <Icon name="ChevronRight" size={14} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how" className="bg-secondary/40 py-14 border-y border-border">
        <div className="container">
          <div className="mb-10 text-center">
            <span className="font-display text-sm font-600 uppercase tracking-widest text-accent">Простой процесс</span>
            <h2 className="mt-2 font-display text-3xl font-700 uppercase text-primary">Как мы работаем</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.slice(0, 4).map((s, i) => (
              <div key={s.title} className="relative rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow">
                <div className="absolute right-4 top-4 font-display text-4xl font-700 text-muted/60">{i + 1}</div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-primary">
                  <Icon name={s.icon} size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-base font-600 text-primary leading-snug">{s.title}</h3>
                {s.text && <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>}
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {STEPS.slice(4).map((s, i) => (
              <div key={s.title} className="relative rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow">
                <div className="absolute right-4 top-4 font-display text-4xl font-700 text-muted/60">{i + 5}</div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-primary">
                  <Icon name={s.icon} size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-base font-600 text-primary leading-snug">{s.title}</h3>
                {s.text && <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="py-14">
        <div className="container max-w-2xl">
          <div className="rounded-xl border border-border bg-card p-8 shadow-lg">
            <h2 className="font-display text-2xl font-700 uppercase text-primary">Оформить заказ</h2>
            <p className="mt-1 text-muted-foreground">Заполните контактные данные и мы свяжемся с вами в течение 15 минут</p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-500 text-foreground">Ваше имя <span className="text-destructive">*</span></label>
                <Input value={name} onChange={e => setName(e.target.value)} placeholder="Иван Иванов" className="h-11" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-500 text-foreground">Ваш телефон <span className="text-destructive">*</span></label>
                <Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" className="h-11" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-500 text-foreground">Ваш email</label>
                <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com" className="h-11" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-500 text-foreground">Как с вами связаться?</label>
                <div className="flex flex-wrap gap-2">
                  {['Телефон', 'WhatsApp', 'Telegram'].map(c => (
                    <button
                      key={c}
                      onClick={() => setContact(c)}
                      className={`rounded-full px-4 py-2 text-sm font-500 border transition-colors ${contact === c ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}
                    >{c}</button>
                  ))}
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="mt-1 h-4 w-4 accent-primary" />
                <span className="text-sm text-muted-foreground">Согласие на обработку персональных данных <span className="text-destructive">*</span></span>
              </label>
              <Button disabled={!agree || !name || !phone} className="h-12 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-600 disabled:opacity-50">
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border py-14">
        <div className="container">
          <div className="mb-6 text-center">
            <span className="font-display text-sm font-600 uppercase tracking-widest text-accent">Наш адрес</span>
            <h2 className="mt-2 font-display text-3xl font-700 uppercase text-primary">Мы на карте</h2>
            <p className="mt-2 text-muted-foreground flex items-center justify-center gap-2">
              <Icon name="MapPin" size={16} className="text-accent" />
              г. Анапа, Анапское шоссе, 14
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.0!2d37.3167!3d44.8957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f0f5c3e1b1b1b1%3A0x0!2z0JDQvdCw0L_RgdC60L7QtSDRiNC-0YHRgdC1IDE0LCDQkNC90LDQv9CwLCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuQ!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Мы на карте — Анапа, Анапское шоссе 14"
            />
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="border-t border-border py-12 bg-secondary/30">
        <div className="container">
          <h2 className="font-display text-xl font-700 uppercase text-primary mb-6">Гостиничные чеки в регионах РФ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
            {CITIES.map(city => (
              <Link key={city.slug} to={`/cities/${city.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-primary py-12 text-primary-foreground">
        <div className="container grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-sm font-600 uppercase tracking-widest text-accent mb-4">Каталог</div>
            <ul className="space-y-1.5 text-sm">
              {CATALOG.map(item => (
                <li key={item.name}><a href="#order" className="text-white/70 hover:text-white transition-colors">{item.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-sm font-600 uppercase tracking-widest text-accent mb-4">Информация</div>
            <ul className="space-y-1.5 text-sm">
              {['Доставка и оплата', 'О нас', 'Отзывы', 'Контакты'].map(item => (
                <li key={item}><a href="#order" className="text-white/70 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-sm font-600 uppercase tracking-widest text-accent mb-4">Контакты</div>
            <div className="space-y-3 text-sm">
              <a href="tel:+79990064045" className="flex items-center gap-2 text-white font-600 hover:text-accent transition-colors">
                <Icon name="Phone" size={16} className="text-accent" />+7 (999) 006-40-45
              </a>
              <a href="mailto:a9990064045@mail.ru" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Icon name="Mail" size={16} className="text-accent" />a9990064045@mail.ru
              </a>
              <Button className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-600" asChild>
                <a href="#order">Онлайн заказ</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer cities */}
      <footer className="bg-primary/95 border-t border-white/10 py-10">
        <div className="container">
          <div className="mb-6">
            <div className="font-display text-sm font-600 uppercase tracking-widest text-accent mb-4">Гостиничные чеки по городам России</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
              {CITIES.map(city => (
                <Link key={city.slug} to={`/cities/${city.slug}`} className="text-xs text-white/50 hover:text-white transition-colors">
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-4 flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheck" size={16} className="text-accent" />
              <span className="font-display font-600 uppercase tracking-wide text-white/70">ЧекГарант Анапа</span>
            </div>
            <span>© 2026 Действительные чеки в Анапе</span>
          </div>
        </div>
      </footer>

      {/* Floating call button */}
      <a
        href="tel:+79990064045"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-accent-foreground shadow-xl hover:bg-accent/90 transition-all hover:scale-105 font-600 text-sm"
      >
        <Icon name="Phone" size={20} />
        Позвонить
      </a>

      {/* Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setModalItem(null)}>
          <div className="relative max-w-lg w-full bg-card rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <img src={modalItem.img} alt={modalItem.name} className="w-full object-cover max-h-[60vh]" />
            <div className="p-5 flex items-center justify-between">
              <h3 className="font-display text-xl font-700 uppercase text-primary">{modalItem.name}</h3>
              <div className="flex gap-3">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-600" asChild>
                  <a href="#order" onClick={() => setModalItem(null)}>Заказать</a>
                </Button>
                <button onClick={() => setModalItem(null)} className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors">
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Index;