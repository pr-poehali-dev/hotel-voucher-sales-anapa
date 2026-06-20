import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const HERO_IMG = 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/57eafb98-1df7-45d7-a225-ffc3d3b5fb26.jpg';

type Receipt = {
  id: number;
  hotel: string;
  category: string;
  stars: number;
  nights: number;
  guests: number;
  amount: number;
  period: string;
};

const RECEIPTS: Receipt[] = [
  { id: 1, hotel: 'Гранд Отель Валентина', category: 'Отель', stars: 5, nights: 7, guests: 2, amount: 84500, period: 'Июнь 2025' },
  { id: 2, hotel: 'Пансионат Жемчужина моря', category: 'Пансионат', stars: 4, nights: 10, guests: 3, amount: 96000, period: 'Июль 2025' },
  { id: 3, hotel: 'Санаторий Анапа-Океан', category: 'Санаторий', stars: 4, nights: 14, guests: 2, amount: 128000, period: 'Август 2025' },
  { id: 4, hotel: 'Гостевой дом Бриз', category: 'Гостевой дом', stars: 3, nights: 5, guests: 4, amount: 38500, period: 'Июнь 2025' },
  { id: 5, hotel: 'Отель Riviera Beach', category: 'Отель', stars: 5, nights: 6, guests: 2, amount: 72000, period: 'Сентябрь 2025' },
  { id: 6, hotel: 'Пансионат Золотой берег', category: 'Пансионат', stars: 3, nights: 8, guests: 2, amount: 52000, period: 'Июль 2025' },
];

const CATEGORIES = ['Все', 'Отель', 'Пансионат', 'Санаторий', 'Гостевой дом'];

const Index = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Все');

  const filtered = useMemo(() => {
    return RECEIPTS.filter((r) => {
      const q = query.trim().toLowerCase();
      const matchQuery = !q || r.hotel.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || r.period.toLowerCase().includes(q);
      const matchCat = category === 'Все' || r.category === category;
      return matchQuery && matchCat;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-primary">
              <Icon name="ShieldCheck" size={20} className="text-accent" />
            </div>
            <span className="font-display text-xl font-700 uppercase tracking-wide text-primary">ЧекГарант</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#catalog" className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary">Каталог</a>
            <a href="#how" className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary">Как это работает</a>
            <a href="#contacts" className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary">Контакты</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" /> Связаться
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Анапа" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
        </div>
        <div className="container relative py-24 md:py-36">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-6 border-accent/40 bg-accent/15 text-accent hover:bg-accent/15">
              <Icon name="MapPin" size={14} className="mr-1" /> Город-курорт Анапа
            </Badge>
            <h1 className="font-display text-4xl font-700 uppercase leading-tight tracking-tight text-white md:text-6xl">
              Гостиничные чеки <span className="text-accent">с гарантией</span> подлинности
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Подтверждённые отчётные документы о проживании в отелях, пансионатах и санаториях Анапы. Официально, быстро и надёжно.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#catalog"><Icon name="Search" size={18} className="mr-2" /> Перейти в каталог</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                <a href="#how">Как это работает</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-8">
              {[['1500+', 'выданных чеков'], ['40+', 'отелей-партнёров'], ['100%', 'подлинность']].map(([n, t]) => (
                <div key={t}>
                  <div className="font-display text-3xl font-700 text-accent">{n}</div>
                  <div className="text-sm text-white/70">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-border py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="font-display text-sm font-600 uppercase tracking-widest text-accent">Простой процесс</span>
            <h2 className="mt-2 font-display text-3xl font-700 uppercase text-primary md:text-4xl">Как это работает</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: 'Search', title: 'Выберите чек', text: 'Найдите подходящий документ по названию отеля, сумме и периоду проживания.' },
              { icon: 'FileCheck2', title: 'Оформите заказ', text: 'Оставьте заявку — мы подготовим официальный отчётный документ под ваши данные.' },
              { icon: 'PackageCheck', title: 'Получите документ', text: 'Заберите готовый чек с печатью в удобном формате — в офисе или с доставкой.' },
            ].map((s, i) => (
              <div key={s.title} className="relative rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg">
                <div className="absolute right-6 top-6 font-display text-5xl font-700 text-muted">{i + 1}</div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded bg-primary">
                  <Icon name={s.icon} size={24} className="text-accent" />
                </div>
                <h3 className="mb-2 font-display text-xl font-600 text-primary">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container">
          <div className="mb-10">
            <span className="font-display text-sm font-600 uppercase tracking-widest text-accent">Актуальные предложения</span>
            <h2 className="mt-2 font-display text-3xl font-700 uppercase text-primary md:text-4xl">Каталог гостиничных чеков</h2>
          </div>

          {/* Search & filters */}
          <div className="mb-8 rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по названию отеля, типу или периоду..."
                className="h-12 pl-11 text-base"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-2 text-sm font-500 transition-colors ${
                    category === c
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border py-20 text-center text-muted-foreground">
              <Icon name="SearchX" size={40} className="mx-auto mb-3 opacity-50" />
              По вашему запросу ничего не найдено
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((r) => (
                <div key={r.id} className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl animate-scale-in">
                  <div className="mb-4 flex items-start justify-between">
                    <Badge variant="secondary" className="font-500">{r.category}</Badge>
                    <div className="flex items-center gap-0.5 text-accent">
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-600 leading-snug text-primary">{r.hotel}</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground"><Icon name="Moon" size={16} /> {r.nights} ночей</div>
                    <div className="flex items-center gap-2 text-muted-foreground"><Icon name="Users" size={16} /> {r.guests} гостя</div>
                    <div className="col-span-2 flex items-center gap-2 text-muted-foreground"><Icon name="Calendar" size={16} /> {r.period}</div>
                  </div>
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Сумма чека</div>
                      <div className="font-display text-2xl font-700 text-primary">{r.amount.toLocaleString('ru-RU')} ₽</div>
                    </div>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Заказать
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-primary py-20 text-primary-foreground">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-display text-sm font-600 uppercase tracking-widest text-accent">Поддержка</span>
            <h2 className="mt-2 font-display text-3xl font-700 uppercase md:text-4xl">Свяжитесь с нами</h2>
            <p className="mt-4 max-w-md text-white/70">
              Ответим на все вопросы по оформлению гостиничных чеков и поможем подобрать подходящий документ.
            </p>
            <div className="mt-8 space-y-5">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (800) 555-04-12' },
                { icon: 'Mail', label: 'Email', value: 'info@chekgarant-anapa.ru' },
                { icon: 'MapPin', label: 'Адрес', value: 'г. Анапа, ул. Крымская, 99' },
                { icon: 'Clock', label: 'Часы работы', value: 'Ежедневно с 9:00 до 20:00' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded bg-white/10">
                    <Icon name={c.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">{c.label}</div>
                    <div className="font-500">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 text-foreground shadow-2xl">
            <h3 className="font-display text-xl font-600 text-primary">Оставить заявку</h3>
            <p className="mt-1 text-sm text-muted-foreground">Перезвоним в течение 15 минут</p>
            <div className="mt-6 space-y-4">
              <Input placeholder="Ваше имя" className="h-12" />
              <Input placeholder="Телефон" className="h-12" />
              <Input placeholder="Какой чек интересует?" className="h-12" />
              <Button className="h-12 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Отправить заявку
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheck" size={18} className="text-primary" />
            <span className="font-display font-600 uppercase tracking-wide text-primary">ЧекГарант Анапа</span>
          </div>
          <span>© 2026 Все права защищены</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
