import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Building2',
      title: 'Уборка офисов',
      description: 'Комплексная уборка офисных помещений с учетом специфики бизнеса',
      features: ['Ежедневная уборка', 'Генеральная уборка', 'Уборка после ремонта']
    },
    {
      icon: 'Home',
      title: 'Уборка складов',
      description: 'Профессиональная уборка складских комплексов любой площади',
      features: ['Очистка полов', 'Уборка стеллажей', 'Вывоз мусора']
    },
    {
      icon: 'Store',
      title: 'Уборка торговых центров',
      description: 'Поддержание чистоты в местах с высокой проходимостью',
      features: ['Круглосуточная уборка', 'Уборка витрин', 'Полировка полов']
    },
    {
      icon: 'Sparkles',
      title: 'Химчистка',
      description: 'Глубокая чистка мебели и текстиля профессиональным оборудованием',
      features: ['Чистка ковров', 'Чистка мебели', 'Удаление пятен']
    },
    {
      icon: 'Wind',
      title: 'Уборка после строительства',
      description: 'Качественная финишная уборка после ремонтных работ',
      features: ['Удаление пыли', 'Мытье окон', 'Уборка строительного мусора']
    },
    {
      icon: 'Shield',
      title: 'Дезинфекция',
      description: 'Профессиональная санитарная обработка помещений',
      features: ['Обработка поверхностей', 'Антибактериальная уборка', 'Профилактика']
    }
  ];

  const prices = [
    {
      title: 'Базовый',
      price: '5 000',
      period: 'за помещение до 100м²',
      features: [
        'Сухая и влажная уборка',
        'Вынос мусора',
        'Уборка санузлов',
        'Протирка поверхностей'
      ]
    },
    {
      title: 'Стандартный',
      price: '12 000',
      period: 'за помещение до 100м²',
      features: [
        'Всё из тарифа "Базовый"',
        'Мытье окон',
        'Чистка ковров',
        'Полировка мебели',
        'Уборка кухни'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: 'По запросу',
      period: 'индивидуальный расчет',
      features: [
        'Всё из тарифа "Стандартный"',
        'Химчистка мебели',
        'Дезинфекция помещений',
        'Круглосуточная поддержка',
        'Персональный менеджер'
      ]
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      company: 'ООО "ТехноПром"',
      rating: 5,
      text: 'Отличный сервис! Наш офис всегда в идеальном состоянии. Сотрудники компании профессиональны и пунктуальны.'
    },
    {
      name: 'Михаил Соколов',
      company: 'ТЦ "Галерея"',
      rating: 5,
      text: 'Сотрудничаем уже 2 года. Качество услуг на высоте, гибкий подход к нашим требованиям.'
    },
    {
      name: 'Елена Новикова',
      company: 'Складской комплекс "Логистик"',
      rating: 5,
      text: 'Профессиональная команда, современное оборудование. Рекомендуем!'
    }
  ];

  const certificates = [
    { id: 1, title: 'ISO 9001:2015', description: 'Система менеджмента качества' },
    { id: 2, title: 'ISO 14001:2015', description: 'Экологический менеджмент' },
    { id: 3, title: 'Лицензия МЧС', description: 'Безопасность работ' },
    { id: 4, title: 'СРО', description: 'Строительно-монтажные работы' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-xl font-bold">ПроКлининг</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'services', label: 'Услуги' },
              { id: 'prices', label: 'Цены' },
              { id: 'about', label: 'О компании' },
              { id: 'certificates', label: 'Лицензии' },
              { id: 'reviews', label: 'Отзывы' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button>Получить консультацию</Button>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/fe13bcb8-9d4d-4859-a990-c03c3e5f45eb/files/a216f2ca-9f65-47a8-b478-d56b1dea45c8.jpg"
            alt="Профессиональная уборка офисов"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4">Профессиональный клининг для бизнеса</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Безупречная чистота для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Комплексные клининговые услуги для офисов, складов и торговых центров. 
              Работаем с 2010 года. Более 500 довольных клиентов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать услугу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Рассчитать стоимость
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">13</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр клининговых услуг</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предлагаем профессиональные решения для поддержания чистоты в любых коммерческих помещениях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Icon name="Check" className="text-primary mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачное ценообразование</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный тариф для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((plan, index) => (
              <Card key={index} className={plan.popular ? 'border-primary border-2 shadow-lg' : ''}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'По запросу' && <span className="text-muted-foreground"> ₽</span>}
                  </div>
                  <CardDescription>{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">Профессионалы клининга с 2010 года</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы предоставляем высококачественные клининговые услуги для бизнеса, используя современное 
                оборудование и экологичные средства. Наша команда состоит из обученных специалистов с многолетним опытом.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Сертифицированные специалисты</h3>
                    <p className="text-sm text-muted-foreground">Регулярное обучение и повышение квалификации</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Leaf" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Экологичные средства</h3>
                    <p className="text-sm text-muted-foreground">Безопасные для здоровья и окружающей среды</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Гибкий график работы</h3>
                    <p className="text-sm text-muted-foreground">Работаем в удобное для вас время, включая выходные</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/fe13bcb8-9d4d-4859-a990-c03c3e5f45eb/files/c27b53a1-cea3-407d-8ed4-40342af9af02.jpg"
                alt="Профессиональное оборудование"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Лицензии и сертификаты</Badge>
            <h2 className="text-4xl font-bold mb-4">Мы работаем легально и профессионально</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Все необходимые разрешения и сертификаты качества
            </p>
          </div>

          <div className="mb-12">
            <img
              src="https://cdn.poehali.dev/projects/fe13bcb8-9d4d-4859-a990-c03c3e5f45eb/files/203c9e26-bd7a-436c-888c-2a99aeeb5155.jpg"
              alt="Сертификаты компании"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert) => (
              <Card key={cert.id} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 500 компаний доверяют нам чистоту своих помещений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости услуг
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              info@procleaning.ru
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={24} />
                <span className="font-bold">ПроКлининг</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные клининговые услуги для бизнеса с 2010 года
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Уборка офисов</li>
                <li>Уборка складов</li>
                <li>Химчистка</li>
                <li>Дезинфекция</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@procleaning.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 ПроКлининг. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
