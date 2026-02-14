import { Link } from "react-router";
import { 
  Home, 
  HandHeart, 
  CalendarDays, 
  AlertCircle, 
  Users, 
  Wallet,
  MessageCircle,
  LogOut,
  Bell,
  Menu
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ChatBot } from "../components/ChatBot";
import { RequestVolunteerDialog } from "../components/RequestVolunteerDialog";

export function ResidentDashboard() {
  const services = [
    {
      title: "ساعد جار",
      description: "اطلب أو قدم مساعدة لجيرانك",
      icon: HandHeart,
      color: "bg-emerald-500",
      link: "/resident",
    },
    {
      title: "فعاليات الحي",
      description: "تصفح الفعاليات والورش القادمة",
      icon: CalendarDays,
      color: "bg-blue-500",
      link: "/events",
    },
    {
      title: "البلاغات والتنبيهات",
      description: "أبلغ عن مشاكل الحي",
      icon: AlertCircle,
      color: "bg-orange-500",
      link: "/report",
    },
    {
      title: "دارية حيّنا",
      description: "جلسات وأنشطة اجتماعية",
      icon: Users,
      color: "bg-purple-500",
      link: "/council",
    },
    {
      title: "صندوق الحي",
      description: "ساهم في دعم الحي",
      icon: Wallet,
      color: "bg-teal-500",
      link: "/fund",
    },
    {
      title: "المساعد الذكي",
      description: "احصل على مساعدة فورية",
      icon: MessageCircle,
      color: "bg-indigo-500",
      link: "#chatbot",
    },
  ];

  const upcomingEvents = [
    {
      title: "جلسة كبار السن الأسبوعية",
      date: "الأحد، 16 فبراير",
      time: "4:00 مساءً",
      location: "دارية الحي",
    },
    {
      title: "ورشة عمل البستنة المجتمعية",
      date: "الثلاثاء، 18 فبراير",
      time: "5:30 مساءً",
      location: "حديقة الحي",
    },
    {
      title: "لقاء العائلات الشهري",
      date: "الجمعة، 21 فبراير",
      time: "6:00 مساءً",
      location: "ساحة الحي",
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">حيّنا</h1>
                <p className="text-sm text-gray-600">مرحباً، أحمد</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <LogOut className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-500 to-teal-500 border-0 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">مرحباً بك في لوحة الساكن</h2>
                <p className="text-emerald-50">
                  ابدأ بتصفح الخدمات المتاحة أو شاهد الفعاليات القادمة في حيك
                </p>
              </div>
              <RequestVolunteerDialog />
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">الخدمات المتاحة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.link}>
                  <Card className="hover:shadow-lg transition-all cursor-pointer h-full border-2 hover:border-emerald-200">
                    <CardHeader>
                      <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">الفعاليات القادمة</h3>
            <Link to="/events">
              <Button variant="outline">عرض الكل</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <CalendarDays className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base mb-2">{event.title}</CardTitle>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p className="text-emerald-600">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          <Link to="/resident">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 w-full">
              <Home className="w-5 h-5" />
              <span className="text-xs">الرئيسية</span>
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 w-full">
              <CalendarDays className="w-5 h-5" />
              <span className="text-xs">الفعاليات</span>
            </Button>
          </Link>
          <Link to="/report">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 w-full">
              <AlertCircle className="w-5 h-5" />
              <span className="text-xs">البلاغات</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 w-full">
            <Menu className="w-5 h-5" />
            <span className="text-xs">المزيد</span>
          </Button>
        </div>
      </nav>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
