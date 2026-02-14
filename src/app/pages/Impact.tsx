import { Link } from "react-router";
import { 
  ArrowRight, 
  Heart, 
  Users, 
  TrendingUp, 
  Award,
  HandHeart,
  Home,
  TreePine,
  Smile
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function Impact() {
  const stats = [
    {
      title: "ساعات تطوعية",
      value: "2,450",
      change: "+18% هذا الشهر",
      icon: HandHeart,
      color: "bg-emerald-500",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "عائلات تم دعمها",
      value: "87",
      change: "45 عائلة هذا الشهر",
      icon: Home,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "مبادرات منجزة",
      value: "34",
      change: "12 مبادرة نشطة",
      icon: Award,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "متطوعون نشطون",
      value: "156",
      change: "+23 متطوع جديد",
      icon: Users,
      color: "bg-orange-500",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const impacts = [
    {
      title: "دعم كبار السن",
      description: "توفير الرعاية والمؤانسة لكبار السن في الحي",
      metrics: [
        { label: "جلسات أسبوعية", value: "48" },
        { label: "كبار السن المستفيدون", value: "34" },
        { label: "متطوعون", value: "28" },
      ],
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      title: "تعزيز الترابط الاجتماعي",
      description: "بناء علاقات قوية بين سكان الحي وتعزيز روح الجماعة",
      metrics: [
        { label: "فعاليات اجتماعية", value: "67" },
        { label: "مشاركون", value: "892" },
        { label: "عائلات نشطة", value: "145" },
      ],
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "تنظيم التطوع والتكافل",
      description: "تسهيل عمليات المساعدة والتطوع بين الجيران",
      metrics: [
        { label: "طلبات مساعدة", value: "234" },
        { label: "طلبات منجزة", value: "218" },
        { label: "نسبة النجاح", value: "93%" },
      ],
      icon: HandHeart,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "تحسين جودة الحياة",
      description: "رفع مستوى الخدمات والمرافق في الحي",
      metrics: [
        { label: "مشاريع تطوير", value: "18" },
        { label: "مبلغ الاستثمار", value: "145,000 ر.س" },
        { label: "مشاريع منجزة", value: "12" },
      ],
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "الاستدامة البيئية",
      description: "حملات النظافة والتشجير وحماية البيئة",
      metrics: [
        { label: "حملات نظافة", value: "24" },
        { label: "أشجار مزروعة", value: "156" },
        { label: "متطوعون بيئيون", value: "67" },
      ],
      icon: TreePine,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "السعادة والرضا",
      description: "قياس مستوى رضا وسعادة سكان الحي",
      metrics: [
        { label: "تقييم الرضا", value: "4.7/5" },
        { label: "مشاركون في الاستبيان", value: "234" },
        { label: "توصيات إيجابية", value: "96%" },
      ],
      icon: Smile,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  ];

  const testimonials = [
    {
      name: "أم محمد",
      role: "ساكنة في الحي منذ 15 سنة",
      quote: "حيّنا غيّر حياتنا بالكامل. أصبحنا عائلة واحدة نساعد بعضنا البعض. شكراً لكل من ساهم في هذه المبادرة الرائعة.",
      avatar: "https://ui-avatars.com/api/?name=أم+محمد&background=10b981&color=fff",
    },
    {
      name: "خالد العتيبي",
      role: "متطوع نشط",
      quote: "التطوع في حيّنا أعطاني إحساس بالانتماء والمسؤولية. كل يوم أساعد جاري هو يوم مميز بالنسبة لي.",
      avatar: "https://ui-avatars.com/api/?name=خالد+العتيبي&background=3b82f6&color=fff",
    },
    {
      name: "فاطمة السعيد",
      role: "منسقة الفعاليات",
      quote: "المنصة سهلت علينا تنظيم الفعاليات والتواصل مع السكان. النتائج مذهلة والتفاعل رائع.",
      avatar: "https://ui-avatars.com/api/?name=فاطمة+السعيد&background=8b5cf6&color=fff",
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <Link to="/resident">
              <Button variant="ghost" size="icon">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">الأثر المجتمعي</h1>
                <p className="text-sm text-gray-600">قياس تأثيرنا الإيجابي</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 border-0 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <CardContent className="p-8 md:p-12 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">معاً نصنع الفرق</h2>
              <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed">
                بفضل جهود سكان الحي ومتطوعيه، نحقق تأثيراً إيجابياً يومياً في حياة الجميع. هنا نقيس النجاحات ونحتفي بالإنجازات.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${stat.gradient} text-white border-0 hover:shadow-xl transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-sm opacity-90 mb-1">{stat.title}</p>
                  <p className="text-xs opacity-75">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Areas */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">مجالات التأثير</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <Card key={index} className={`hover:shadow-lg transition-all border-2 ${impact.borderColor} ${impact.bgColor}`}>
                  <CardHeader>
                    <div className={`${impact.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${impact.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{impact.title}</CardTitle>
                    <CardDescription className="text-gray-700">
                      {impact.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 pt-4 border-t">
                      {impact.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <span className={`font-bold text-lg ${impact.color}`}>{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">شهادات السكان</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white text-center">
          <CardContent className="p-12">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">كن جزءاً من التغيير</h3>
            <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
              انضم إلى مجتمع حيّنا وساهم في صنع فرق حقيقي في حياة جيرانك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8">
                  ابدأ الآن
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                  كن متطوعاً
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
