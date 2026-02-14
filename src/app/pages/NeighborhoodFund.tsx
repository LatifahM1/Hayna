import { Link } from "react-router";
import { ArrowRight, Wallet, Heart, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

export function NeighborhoodFund() {
  const fundStats = {
    totalRaised: 145000,
    totalGoal: 200000,
    contributors: 87,
    initiatives: 12,
  };

  const activeInitiatives = [
    {
      title: "صيانة حديقة الحي",
      description: "تجديد وصيانة الألعاب والمرافق في حديقة الحي",
      raised: 25000,
      goal: 40000,
      contributors: 23,
    },
    {
      title: "دعم الأسر المحتاجة",
      description: "توفير احتياجات أساسية للأسر المحتاجة في الحي",
      raised: 38000,
      goal: 50000,
      contributors: 42,
    },
    {
      title: "برنامج التعليم التكميلي",
      description: "دروس تقوية مجانية للطلاب",
      raised: 15000,
      goal: 30000,
      contributors: 18,
    },
  ];

  const recentContributions = [
    { name: "محمد الأحمدي", amount: 1000, time: "منذ ساعة" },
    { name: "فاطمة السعيد", amount: 500, time: "منذ ساعتين" },
    { name: "عبدالله المحمود", amount: 2000, time: "منذ 3 ساعات" },
    { name: "نورة العتيبي", amount: 750, time: "منذ 5 ساعات" },
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
              <div className="bg-teal-500 p-2 rounded-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">صندوق الحي</h1>
                <p className="text-sm text-gray-600">معاً لحي أفضل</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-8 h-8" />
              </div>
              <p className="text-teal-100 text-sm mb-1">إجمالي التبرعات</p>
              <p className="text-3xl font-bold">{fundStats.totalRaised.toLocaleString()} ر.س</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-8 h-8" />
              </div>
              <p className="text-blue-100 text-sm mb-1">الهدف المالي</p>
              <p className="text-3xl font-bold">{fundStats.totalGoal.toLocaleString()} ر.س</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8" />
              </div>
              <p className="text-purple-100 text-sm mb-1">المساهمون</p>
              <p className="text-3xl font-bold">{fundStats.contributors}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-8 h-8" />
              </div>
              <p className="text-orange-100 text-sm mb-1">المبادرات النشطة</p>
              <p className="text-3xl font-bold">{fundStats.initiatives}</p>
            </CardContent>
          </Card>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8 border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">التقدم الإجمالي</h3>
                <p className="text-sm text-gray-600">نحو هدفنا المجتمعي</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-teal-600">
                  {Math.round((fundStats.totalRaised / fundStats.totalGoal) * 100)}%
                </p>
              </div>
            </div>
            <Progress value={(fundStats.totalRaised / fundStats.totalGoal) * 100} className="h-4" />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>{fundStats.totalRaised.toLocaleString()} ر.س تم جمعه</span>
              <span>{(fundStats.totalGoal - fundStats.totalRaised).toLocaleString()} ر.س متبقي</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Initiatives */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">المبادرات النشطة</h3>
            <div className="space-y-4">
              {activeInitiatives.map((initiative, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                    <CardDescription>{initiative.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">
                            {initiative.raised.toLocaleString()} ر.س من {initiative.goal.toLocaleString()} ر.س
                          </span>
                          <span className="font-semibold text-teal-600">
                            {Math.round((initiative.raised / initiative.goal) * 100)}%
                          </span>
                        </div>
                        <Progress value={(initiative.raised / initiative.goal) * 100} className="h-3" />
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{initiative.contributors} مساهم</span>
                        </div>
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          ساهم الآن
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Donation Form & Recent */}
          <div className="space-y-6">
            {/* Donation Form */}
            <Card className="shadow-lg border-teal-200">
              <CardHeader className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  تبرع الآن
                </CardTitle>
                <CardDescription className="text-teal-50">
                  ساهم في دعم حيك
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quick Amounts */}
                  <div>
                    <p className="text-sm text-gray-600 mb-3">اختر مبلغ سريع</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[100, 250, 500, 1000, 2000, 5000].map((amount) => (
                        <Button key={amount} variant="outline" className="hover:bg-teal-50 hover:border-teal-500">
                          {amount}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">أو أدخل مبلغاً مخصصاً</p>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="المبلغ"
                        className="text-right pr-12"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        ر.س
                      </span>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6">
                    <Heart className="w-5 h-5 ml-2" />
                    تبرع عبر إحسان
                  </Button>

                  {/* Info */}
                  <p className="text-xs text-gray-500 text-center">
                    سيتم تحويلك إلى منصة إحسان لإتمام التبرع بشكل آمن
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Contributions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">آخر المساهمات</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {recentContributions.map((contribution, index) => (
                    <div key={index} className="flex items-center justify-between pb-3 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{contribution.name}</p>
                          <p className="text-xs text-gray-500">{contribution.time}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-teal-600">{contribution.amount} ر.س</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Wallet className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">الشفافية والأمانة</h4>
                    <p className="text-sm text-blue-800">
                      جميع التبرعات تُدار بشفافية كاملة ويتم نشر تقارير دورية عن المصروفات والمبادرات.
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
