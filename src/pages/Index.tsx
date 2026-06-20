import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const HERO_IMG = 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/57eafb98-1df7-45d7-a225-ffc3d3b5fb26.jpg';

const Index = () => {
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
            <a href="#how" className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary">Как это работает</a>
            <a href="#samples" className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary">Образцы</a>
            <a href="#contacts" className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary">Контакты</a>
          </nav>
          <a href="tel:+79990064045" className="hidden items-center gap-2 font-display font-600 text-primary hover:text-accent transition-colors md:flex">
            <Icon name="Phone" size={16} />
            +7 (999) 006-40-45
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 md:hidden">
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
                <a href="#contacts"><Icon name="FileText" size={18} className="mr-2" /> Оставить заявку</a>
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

      {/* Samples */}
      <section id="samples" className="py-20 bg-secondary/40">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="font-display text-sm font-600 uppercase tracking-widest text-accent">Наглядные примеры</span>
            <h2 className="mt-2 font-display text-3xl font-700 uppercase text-primary md:text-4xl">Образцы гостиничных чеков</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Ниже представлены примеры документов, которые мы оформляем. Все чеки соответствуют требованиям бухгалтерской отчётности.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/52a9ca68-8e88-446f-a52a-8234182ea751.jpg',
                type: 'Отель',
                title: 'Гостиничный чек (отель)',
                features: ['Кассовый чек', 'Счёт-фактура', 'Печать и подпись', 'Данные гостя'],
              },
              {
                img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/1dd2770d-aed2-43f0-b7d9-befdeb0ba651.jpg',
                type: 'Санаторий',
                title: 'Чек санатория',
                features: ['Путёвка', 'Медицинская справка', 'Печать учреждения', 'Лечебные услуги'],
              },
              {
                img: 'https://cdn.poehali.dev/projects/5801a4f3-870b-4b77-9d1b-c82c5628d209/files/9f16b4f8-ce44-4ef4-a2d0-3068729ca509.jpg',
                type: 'Пансионат',
                title: 'Чек пансионата',
                features: ['Договор проживания', 'Квитанция об оплате', 'Печать и подпись', 'Полный пакет'],
              },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden h-56 bg-muted">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground font-500">{s.type}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-600 text-primary">{s.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" size={16} className="text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="#contacts">Заказать такой чек</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
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