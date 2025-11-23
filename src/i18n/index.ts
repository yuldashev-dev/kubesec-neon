import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        price: 'Pricing',
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        title: 'Enterprise Kubernetes Security',
        subtitle: 'Protect your cloud infrastructure with advanced security solutions',
        cta: 'Get Started',
        learn: 'Learn More',
      },
      price: {
        title: 'Choose Your Plan',
        subtitle: 'Flexible pricing for teams of all sizes',
        monthly: 'Monthly',
        annually: 'Annually',
        save: 'Save 20%',
        perMonth: '/month',
        features: 'Features',
        getStarted: 'Get Started',
        popular: 'Most Popular',
      },
      footer: {
        rights: 'All rights reserved',
        description: 'Enterprise-grade Kubernetes security solutions',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        services: 'Услуги',
        price: 'Цены',
        about: 'О нас',
        contact: 'Контакты',
      },
      hero: {
        title: 'Корпоративная безопасность Kubernetes',
        subtitle: 'Защитите вашу облачную инфраструктуру с помощью передовых решений безопасности',
        cta: 'Начать',
        learn: 'Узнать больше',
      },
      price: {
        title: 'Выберите ваш план',
        subtitle: 'Гибкие цены для команд любого размера',
        monthly: 'Ежемесячно',
        annually: 'Ежегодно',
        save: 'Скидка 20%',
        perMonth: '/месяц',
        features: 'Возможности',
        getStarted: 'Начать',
        popular: 'Популярный',
      },
      footer: {
        rights: 'Все права защищены',
        description: 'Корпоративные решения безопасности Kubernetes',
      },
    },
  },
  uz: {
    translation: {
      nav: {
        home: 'Bosh sahifa',
        services: 'Xizmatlar',
        price: 'Narxlar',
        about: 'Biz haqimizda',
        contact: 'Aloqa',
      },
      hero: {
        title: 'Korporativ Kubernetes xavfsizligi',
        subtitle: 'Bulut infratuzilmangizni ilg\'or xavfsizlik yechimlari bilan himoyalang',
        cta: 'Boshlash',
        learn: 'Batafsil',
      },
      price: {
        title: 'Rejangizni tanlang',
        subtitle: 'Har qanday o\'lchamdagi jamoalar uchun moslashuvchan narxlar',
        monthly: 'Oylik',
        annually: 'Yillik',
        save: '20% chegirma',
        perMonth: '/oy',
        features: 'Imkoniyatlar',
        getStarted: 'Boshlash',
        popular: 'Mashhur',
      },
      footer: {
        rights: 'Barcha huquqlar himoyalangan',
        description: 'Korporativ Kubernetes xavfsizlik yechimlari',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
