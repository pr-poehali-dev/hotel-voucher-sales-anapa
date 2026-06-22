import { Helmet } from 'react-helmet-async';
import HomeHeader from '@/components/home/HomeHeader';
import HomeCatalog from '@/components/home/HomeCatalog';
import HomeOrderForm from '@/components/home/HomeOrderForm';
import HomeFooter from '@/components/home/HomeFooter';

const Index = () => (
  <div className="min-h-screen bg-background font-sans">
    <Helmet>
      <title>Гостиничные чеки — купить с подтверждением | ЧекГарант</title>
      <meta name="description" content="Купить гостиничные чеки с подтверждением для авансового отчёта о командировке. Комиссия 12%. Официально, быстро, надёжно по всей России. Тел: +7 (999) 006-40-45" />
      <meta name="keywords" content="гостиничные чеки, купить гостиничные чеки, чеки для командировки, авансовый отчёт, кассовые чеки, товарные чеки" />
      <link rel="canonical" href="https://chekgarant.online/" />
    </Helmet>
    <HomeHeader />
    <HomeCatalog />
    <HomeOrderForm />
    <HomeFooter />
  </div>
);

export default Index;
