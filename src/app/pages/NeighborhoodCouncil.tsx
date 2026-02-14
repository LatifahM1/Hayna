import { Link } from "react-router";
import { ArrowRight, Users, Coffee, Calendar, Heart, MessageSquare, UserPlus } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NeighborhoodCouncil() {
  const activities = [
    {
      title: "جلسة كبار السن الأسبوعية",
      description: "لقاء أسبوعي لكبار السن مع الشباب لتبادل القصص والخبرات",
      schedule: "كل يوم أحد، 4:00 مساءً",
      participants: 25,
      icon: Coffee,
      color: "bg-amber-500",
    },
    {
      title: "ورشة الحرف التراثية",
      description: "تعليم الحرف اليدوية التقليدية للأجيال الجديدة",
      schedule: "الأربعاء، 5:00 مساءً",
      participants: 18,
      icon: Heart,
      color: "bg-pink-500",
    },
    {
      title: "لقاء العائلات الشهري",
      description: "اجتماع شهري لجميع عائلات الحي",
      schedule: "آخر جمعة من كل شهر",
      participants: 45,
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "جلسات القهوة الصباحية",
      description: "لقاء صباحي ودي للجيران",
      schedule: "السبت والثلاثاء، 9:00 صباحاً",
      participants: 15,
      icon: MessageSquare,
      color: "bg-teal-500",
    },
  ];

  const upcomingGatherings = [
    {
      title: "جلسة القهوة مع كبار السن",
      date: "الأحد، 16 فبراير 2026",
      time: "4:00 - 6:00 مساءً",
      location: "دارية الحي - القاعة الرئيسية",
      description: "لقاء دافئ لتبادل الذكريات والقصص",
    },
    {
      title: "ورشة الطبخ التراثي",
      date: "الأربعاء، 19 فبراير 2026",
      time: "3:00 - 5:00 مساءً",
      location: "دارية الحي - المطبخ المجتمعي",
      description: "تعلم أسرار الطبخات السعودية التقليدية",
    },
    {
      title: "لقاء العائلات الشهري",
      date: "الجمعة، 28 فبراير 2026",
      time: "6:00 - 9:00 مساءً",
      location: "ساحة الحي المفتوحة",
      description: "فعالية عائلية مع أنشطة ترفيهية ووجبة جماعية",
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
              <div className="bg-purple-500 p-2 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">دارية حيّنا</h1>
                <p className="text-sm text-gray-600">تعزيز الانتماء والتكافل</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden">
          <div className="relative h-64 md:h-80">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1665567683724-bff463ac1676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwYXJhYiUyMHBlb3BsZSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzExMDQwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="جلسة كبار السن"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">مرحباً بك في دارية حيّنا</h2>
              <p className="text-lg md:text-xl text-white/90">
                مكان يجمع الأجيال ويعزز الروابط الاجتماعية بين سكان الحي
              </p>
            </div>
          </div>
        </Card>

        {/* About Section */}
        <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 p-3 rounded-lg flex-shrink-0">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">ما هي دارية حيّنا؟</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  دارية حيّنا هي مبادرة مجتمعية تهدف إلى تعزيز التواصل بين الأجيال وتقوية أواصر المحبة والتكافل في الحي. نقدم جلسات دورية وأنشطة اجتماعية متنوعة تجمع كبار السن مع الشباب والعائلات، حيث يتم تبادل الخبرات والقصص والتراث.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  نؤمن بأن كبار السن هم كنز الحي وذاكرته الحية، ومن خلال هذه الجلسات نحافظ على التراث ونعزز الانتماء للمجتمع.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activities */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">الأنشطة الدورية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`${activity.color} p-3 rounded-lg flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{activity.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {activity.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">الموعد:</span>
                        <span className="font-medium">{activity.schedule}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">المشاركون:</span>
                        <span className="font-medium text-purple-600">{activity.participants} شخص</span>
                      </div>
                      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                        <UserPlus className="w-4 h-4 ml-2" />
                        انضم للنشاط
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Upcoming Gatherings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">الجلسات القادمة</h3>
          <div className="space-y-4">
            {upcomingGatherings.map((gathering, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{gathering.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{gathering.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {gathering.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Coffee className="w-4 h-4" />
                          {gathering.time}
                        </div>
                        <div className="flex items-center gap-2 text-purple-600 font-medium">
                          <Users className="w-4 h-4" />
                          {gathering.location}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap">
                      سجل حضورك
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-2xl">فوائد المشاركة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="bg-amber-500 p-2 rounded-lg h-fit">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">تعزيز الترابط الاجتماعي</h4>
                  <p className="text-sm text-gray-600">بناء علاقات قوية بين الجيران والعائلات</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-amber-500 p-2 rounded-lg h-fit">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">التواصل بين الأجيال</h4>
                  <p className="text-sm text-gray-600">نقل الخبرات والحكمة من كبار السن للشباب</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-amber-500 p-2 rounded-lg h-fit">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">الحفاظ على التراث</h4>
                  <p className="text-sm text-gray-600">توثيق ونقل العادات والتقاليد الأصيلة</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-amber-500 p-2 rounded-lg h-fit">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">الدعم النفسي</h4>
                  <p className="text-sm text-gray-600">توفير بيئة دافئة ومحفزة للجميع</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
