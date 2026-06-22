import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CATALOG } from '@/components/home/HomeCatalog';

const STEPS = [
  { icon: 'MessageCircle', title: 'Связываетесь с нами', text: 'Вы можете связаться с нами по контактам, указанным на сайте.' },
  { icon: 'HeadphonesIcon', title: 'Получаете бесплатную консультацию', text: 'Наш оператор проведёт консультацию, расскажет подробно и ответит на все вопросы.' },
  { icon: 'ClipboardList', title: 'Оформляете заказ', text: 'Наш оператор помогает вам оформить заказ и консультирует до принятия работ.' },
  { icon: 'FileText', title: 'Изготовление документов', text: 'Вносите предоплату. Мы изготавливаем официальный документ в кратчайшие сроки.' },
  { icon: 'CheckCircle2', title: 'Проверяете и оплачиваете', text: 'Получаете документы на проверку по email и после этого производите оплату.' },
  { icon: 'Truck', title: 'Отправка заказа', text: 'Мы отправляем вам ваш заказ экспресс-доставкой.' },
  { icon: 'Star', title: 'Наслаждаетесь новыми документами', text: '' },
];

const SEND_ORDER_URL = 'https://functions.poehali.dev/f7bc5056-5d3a-4553-8128-4067e8082b88';

import Icon from '@/components/ui/icon';

const HomeOrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [contact, setContact] = useState('');
  const [product, setProduct] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleSubmit = async () => {
    setSending(true);
    setSendError('');
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, contact, product }),
      });
      if (res.ok) {
        setSent(true);
        setName(''); setPhone(''); setEmail(''); setContact(''); setAgree(false); setProduct('');
      } else {
        setSendError('Ошибка отправки. Попробуйте ещё раз.');
      }
    } catch {
      setSendError('Ошибка сети. Попробуйте ещё раз.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
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
                <label className="mb-1.5 block text-sm font-500 text-foreground">Что вас интересует?</label>
                <div className="flex flex-wrap gap-2">
                  {CATALOG.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setProduct(product === c.name ? '' : c.name)}
                      className={`rounded-full px-4 py-2 text-sm font-500 border transition-colors ${product === c.name ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}
                    >{c.name}</button>
                  ))}
                </div>
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
              {sent && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-center text-green-700 font-500">
                  Заявка отправлена! Мы свяжемся с вами в течение 15 минут.
                </div>
              )}
              {sendError && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-center text-red-600 text-sm">
                  {sendError}
                </div>
              )}
              <Button
                disabled={!agree || !name || !phone || sending || sent}
                onClick={handleSubmit}
                className="h-12 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-600 disabled:opacity-50"
              >
                {sending ? 'Отправка...' : sent ? 'Отправлено!' : 'Отправить'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeOrderForm;
