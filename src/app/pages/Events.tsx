import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CalendarDays, Clock, MapPin, Users, Filter, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";

export function Events() {
  const [filter, setFilter] = useState<"all" | "this-week" | "this-month">("all");

  const events = [
    {
      id: 1,
      title: "جلسة كبار السن الأسبوعية",
      description: "لقاء أسبوعي دافئ لكبار السن مع الشباب لتبادل القصص والخبرات",
      date: "الأحد، 16 فبراير 2026",
      time: "4:00 - 6:00 مساءً",
      location: "دارية الحي - القاعة الرئيسية",
      category: "اجتماعي",
      attendees: 25,
      maxAttendees: 30,
      organizer: "لجنة دارية حيّنا",
      image: "https://images.unsplash.com/photo-1665567683724-bff463ac1676?w=400",
      week: "this-week",
    },
    {
      id: 2,
      title: "ورشة البستنة المجتمعية",
      description: "تعلم أساسيات البستنة والزراعة المنزلية",
      date: "الثلاثاء، 18 فبراير 2026",
      time: "5:30 - 7:00 مساءً",
      location: "حديقة الحي",
      category: "ورشة",
      attendees: 12,
      maxAttendees: 20,
      organizer: "مبادرة الحي الأخضر",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      week: "this-week",
    },
    {
      id: 3,
      title: "حملة النظافة الأسبوعية",
      description: "مبادرة تطوعية لتنظيف وتجميل الحي",
      date: "الخميس، 20 فبراير 2026",
      time: "7:00 - 10:00 صباحاً",
      location: "ساحة الحي - نقطة التجمع",
      category: "تطوعي",
      attendees: 18,
      maxAttendees: 50,
      organizer: "فريق حيّنا التطوعي",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      week: "this-week",
    },
    {
      id: 4,
      title: "لقاء العائلات الشهري",
      description: "فعالية عائلية كبرى مع أنشطة ترفيهية ووجبة جماعية",
      date: "الجمعة، 21 فبراير 2026",
      time: "6:00 - 9:00 مساءً",
      location: "ساحة الحي المفتوحة",
      category: "عائلي",
      attendees: 67,
      maxAttendees: 100,
      organizer: "لجنة الفعاليات",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400",
      week: "this-week",
    },
    {
      id: 5,
      title: "ورشة الطبخ التراثي",
      description: "تعلم أسرار الطبخات السعودية التقليدية من الجدات",
      date: "الأربعاء، 26 فبراير 2026",
      time: "3:00 - 5:00 مساءً",
      location: "دارية الحي - المطبخ المجتمعي",
      category: "ورشة",
      attendees: 8,
      maxAttendees: 15,
      organizer: "لجنة التراث",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400",
      week: "this-month",
    },
    {
      id: 6,
      title: "بطولة الحي الرياضية",
      description: "مسابقات رياضية ودية بين فرق الحي",
      date: "السبت، 29 فبراير 2026",
      time: "4:00 - 8:00 مساءً",
      location: "ملعب الحي",
      category: "رياضي",
      attendees: 32,
      maxAttendees: 60,
      organizer: "نادي الحي الرياضي",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400",
      week: "this-month",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "اجتماعي": "bg-purple-100 text-purple-700",
      "ورشة": "bg-blue-100 text-blue-700",
      "تطوعي": "bg-green-100 text-green-700",
      "عائلي": "bg-pink-100 text-pink-700",
      "رياضي": "bg-orange-100 text-orange-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const filteredEvents = events.filter(event => {
    if (filter === "all") return true;
    return event.week === filter;
  });

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
              <div className="bg-blue-500 p-2 rounded-lg">
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">فعاليات الحي</h1>
                <p className="text-sm text-gray-600">الأحداث والورش القادمة</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 border-0 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">تقويم الفعاليات</h2>
                <p className="text-blue-100 text-lg">
                  اكتشف الأحداث القادمة وشارك في بناء مجتمع أقوى
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">{events.length}</p>
                <p className="text-sm text-blue-100">فعالية قادمة</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="mb-8">
          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="this-week">هذا الأسبوع</TabsTrigger>
              <TabsTrigger value="this-month">هذا الشهر</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-gray-600">
                    <CalendarDays className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-600">الحضور:</span>
                    <span className="font-semibold text-blue-600">
                      {event.attendees} / {event.maxAttendees}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    سجل حضورك
                  </Button>
                </div>

                <div className="pt-3 border-t text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>المنظم: {event.organizer}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <Card className="p-12 text-center">
            <CalendarDays className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد فعاليات</h3>
            <p className="text-gray-600">لا توجد فعاليات في هذه الفترة حالياً</p>
          </Card>
        )}
      </main>
    </div>
  );
}
