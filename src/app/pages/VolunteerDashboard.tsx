import { useState } from "react";
import { Link } from "react-router";
import { 
  Home, 
  HandHeart, 
  MapPin, 
  Bell,
  LogOut,
  List,
  Map as MapIcon,
  Clock,
  AlertTriangle,
  Package,
  Users,
  Wrench,
  CheckCircle2
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";

export function VolunteerDashboard() {
  const [view, setView] = useState<"list" | "map">("list");
  const [acceptedRequests, setAcceptedRequests] = useState<number[]>([]);

  const handleAcceptRequest = (requestId: number, requestTitle: string) => {
    setAcceptedRequests([...acceptedRequests, requestId]);
    toast.success(`تم قبول الطلب: ${requestTitle}`, {
      description: "سيتم التواصل معك قريباً للتنسيق",
    });
  };

  const helpRequests = [
    {
      id: 1,
      type: "walking",
      title: "مرافقة للمشي في الحديقة",
      requester: "أم محمد",
      location: "شارع الورد، بيت رقم 15",
      distance: "0.3 كم",
      time: "منذ 15 دقيقة",
      urgent: false,
      icon: Users,
      color: "text-emerald-600",
    },
    {
      id: 2,
      type: "shopping",
      title: "شراء احتياجات من البقالة",
      requester: "أبو عبدالله",
      location: "شارع النخيل، بيت رقم 8",
      distance: "0.5 كم",
      time: "منذ ساعة",
      urgent: false,
      icon: Package,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "maintenance",
      title: "إصلاح صنبور ماء",
      requester: "عبدالرحمن الأحمدي",
      location: "شارع الياسمين، بيت رقم 22",
      distance: "0.7 كم",
      time: "منذ 3 ساعات",
      urgent: true,
      icon: Wrench,
      color: "text-orange-600",
    },
    {
      id: 4,
      type: "urgent",
      title: "مساعدة عاجلة - نقل إلى المستشفى",
      requester: "أم خالد",
      location: "شارع العليا، عمارة رقم 5",
      distance: "1.2 كم",
      time: "منذ 5 دقائق",
      urgent: true,
      icon: AlertTriangle,
      color: "text-red-600",
    },
  ];

  const initiatives = [
    {
      title: "حملة نظافة الحي",
      date: "السبت، 15 فبراير",
      volunteers: 12,
      needed: 20,
    },
    {
      title: "توزيع وجبات الإفطار",
      date: "يومياً",
      volunteers: 8,
      needed: 10,
    },
    {
      title: "صيانة حديقة الحي",
      date: "الخميس، 20 فبراير",
      volunteers: 5,
      needed: 15,
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
                <HandHeart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">لوحة المتطوع</h1>
                <p className="text-sm text-gray-600">مرحباً، خالد</p>
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">طلبات قريبة</p>
                  <p className="text-2xl font-bold text-emerald-600">8</p>
                </div>
                <MapPin className="w-8 h-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">طلبات عاجلة</p>
                  <p className="text-2xl font-bold text-red-600">2</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ساعات تطوعية</p>
                  <p className="text-2xl font-bold text-blue-600">24</p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">مهام منجزة</p>
                  <p className="text-2xl font-bold text-purple-600">47</p>
                </div>
                <HandHeart className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Requests Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">طلبات المساعدة القريبة</h3>
            <Tabs value={view} onValueChange={(v) => setView(v as "list" | "map")}>
              <TabsList>
                <TabsTrigger value="list">
                  <List className="w-4 h-4 ml-2" />
                  قائمة
                </TabsTrigger>
                <TabsTrigger value="map">
                  <MapIcon className="w-4 h-4 ml-2" />
                  خريطة
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {view === "list" ? (
            <div className="space-y-4">
              {helpRequests.map((request) => {
                const Icon = request.icon;
                return (
                  <Card key={request.id} className={`hover:shadow-md transition-shadow ${request.urgent ? 'border-2 border-red-300 bg-red-50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`${request.urgent ? 'bg-red-100' : 'bg-gray-100'} p-3 rounded-lg`}>
                          <Icon className={`w-6 h-6 ${request.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-lg mb-1">{request.title}</h4>
                              <p className="text-gray-600 text-sm">الطالب: {request.requester}</p>
                            </div>
                            {request.urgent && (
                              <Badge variant="destructive" className="mr-2">عاجل</Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {request.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {request.time}
                            </div>
                            <div className="text-emerald-600 font-medium">
                              {request.distance} منك
                            </div>
                          </div>
                          <div className="flex gap-3 mt-4">
                            {acceptedRequests.includes(request.id) ? (
                              <Button className="bg-emerald-600 hover:bg-emerald-700">
                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                تم قبول المهمة
                              </Button>
                            ) : (
                              <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => handleAcceptRequest(request.id, request.title)}>
                                قبول المهمة
                              </Button>
                            )}
                            <Button variant="outline">
                              عرض التفاصيل
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="h-[600px]">
              <CardContent className="p-0 h-full">
                <div className="h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">خريطة تفاعلية توضح مواقع طلبات المساعدة</p>
                    <p className="text-sm text-gray-500 mt-2">سيتم إضافة التكامل مع خرائط Google قريباً</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Volunteer Initiatives */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">المبادرات التطوعية</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{initiative.title}</CardTitle>
                  <CardDescription>{initiative.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">المتطوعون:</span>
                      <span className="font-semibold">
                        {initiative.volunteers} / {initiative.needed}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full"
                        style={{ width: `${(initiative.volunteers / initiative.needed) * 100}%` }}
                      ></div>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      انضم للمبادرة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-50">
        <div className="grid grid-cols-3 gap-1 p-2">
          <Link to="/volunteer">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 w-full">
              <List className="w-5 h-5" />
              <span className="text-xs">الطلبات</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 w-full">
            <MapIcon className="w-5 h-5" />
            <span className="text-xs">الخريطة</span>
          </Button>
          <Link to="/fund">
            <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 w-full">
              <HandHeart className="w-5 h-5" />
              <span className="text-xs">المبادرات</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}