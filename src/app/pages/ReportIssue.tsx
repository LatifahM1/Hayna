import { useState } from "react";
import { Link } from "react-router";
import { 
  ArrowRight, 
  Truck, 
  Volume2, 
  Trash2, 
  Wrench,
  AlertCircle,
  Camera,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function ReportIssue() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const issueTypes = [
    {
      id: "trucks",
      title: "شاحنات",
      description: "شاحنات متوقفة أو مزعجة",
      icon: Truck,
      color: "bg-orange-500",
    },
    {
      id: "noise",
      title: "ضوضاء",
      description: "إزعاج صوتي",
      icon: Volume2,
      color: "bg-red-500",
    },
    {
      id: "cleanliness",
      title: "نظافة",
      description: "مشاكل النظافة والقمامة",
      icon: Trash2,
      color: "bg-green-500",
    },
    {
      id: "facilities",
      title: "مرافق",
      description: "أعطال في المرافق العامة",
      icon: Wrench,
      color: "bg-blue-500",
    },
  ];

  const myReports = [
    {
      id: 1,
      type: "شاحنات",
      description: "شاحنة متوقفة تسد الطريق",
      location: "شارع الورد",
      date: "12 فبراير 2026",
      status: "قيد المعالجة",
      statusColor: "bg-yellow-500",
    },
    {
      id: 2,
      type: "نظافة",
      description: "تراكم القمامة بالقرب من الحديقة",
      location: "حديقة الحي",
      date: "10 فبراير 2026",
      status: "تم الحل",
      statusColor: "bg-green-500",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedType(null);
      setDescription("");
      setLocation("");
    }, 3000);
  };

  if (submitted) {
    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl text-center">
          <CardContent className="p-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">تم إرسال البلاغ بنجاح!</h2>
            <p className="text-gray-600 mb-6">
              شكراً لك على مساهمتك في تحسين الحي. سيتم متابعة البلاغ ومعالجته في أقرب وقت.
            </p>
            <Link to="/resident">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                العودة للرئيسية
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              <div className="bg-orange-500 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">البلاغات والتنبيهات</h1>
                <p className="text-sm text-gray-600">أبلغ عن مشاكل الحي</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">بلاغ جديد</CardTitle>
                <CardDescription>اختر نوع المشكلة وقدم التفاصيل</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Issue Types */}
                  <div className="space-y-3">
                    <Label>نوع المشكلة</Label>
                    <div className="grid grid-cols-2 gap-4">
                      {issueTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setSelectedType(type.id)}
                            className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                              selectedType === type.id
                                ? "border-emerald-500 bg-emerald-50 shadow-md"
                                : "border-gray-200 hover:border-emerald-300"
                            }`}
                          >
                            <div className={`${type.color} p-3 rounded-lg mb-3`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className={`font-semibold mb-1 ${selectedType === type.id ? "text-emerald-700" : "text-gray-900"}`}>
                              {type.title}
                            </span>
                            <span className="text-xs text-gray-600 text-center">
                              {type.description}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">الموقع</Label>
                    <div className="relative">
                      <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="اسم الشارع أو رقم المنزل"
                        required
                        className="text-right pr-10"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">وصف المشكلة</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="قدم وصفاً تفصيلياً للمشكلة..."
                      required
                      className="text-right min-h-32"
                    />
                  </div>

                  {/* Upload Photo */}
                  <div className="space-y-2">
                    <Label>إضافة صورة (اختياري)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600">انقر لتحميل صورة</p>
                      <p className="text-sm text-gray-500 mt-1">PNG, JPG حتى 10MB</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!selectedType}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6"
                  >
                    إرسال البلاغ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* My Reports */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>بلاغاتي السابقة</CardTitle>
                <CardDescription>تابع حالة بلاغاتك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {myReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{report.type}</h4>
                        <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {report.location}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                      </div>
                    </div>
                    <Badge className={`${report.statusColor} text-white`}>
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="shadow-lg mt-4 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">معلومة مهمة</h4>
                    <p className="text-sm text-blue-800">
                      سيتم متابعة جميع البلاغات من قبل الفريق المختص وإبلاغك بالتحديثات عبر الإشعارات.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
