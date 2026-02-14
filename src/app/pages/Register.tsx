import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Home, Building2, UserPlus, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function Register() {
  const navigate = useNavigate();
  const [housingType, setHousingType] = useState<"house" | "apartment">("house");
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",
    houseNumber: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle registration
    console.log("Register data:", { ...formData, housingType });
    // Navigate to resident dashboard
    navigate("/resident");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-emerald-100">
        <CardHeader className="text-center space-y-2 pb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-500 p-4 rounded-full">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl">إنشاء حساب جديد</CardTitle>
          <CardDescription className="text-base">انضم إلى مجتمع حيّنا</CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">الاسم الكامل</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="أدخل اسمك الكامل"
                required
                className="text-right"
              />
            </div>

            {/* Street */}
            <div className="space-y-2">
              <Label htmlFor="street">الشارع</Label>
              <Input
                id="street"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                placeholder="اسم الشارع"
                required
                className="text-right"
              />
            </div>

            {/* House Number */}
            <div className="space-y-2">
              <Label htmlFor="houseNumber">رقم المنزل</Label>
              <Input
                id="houseNumber"
                value={formData.houseNumber}
                onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                placeholder="رقم المنزل أو الشقة"
                required
                className="text-right"
              />
            </div>

            {/* Housing Type */}
            <div className="space-y-3">
              <Label>نوع السكن</Label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setHousingType("house")}
                  className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                    housingType === "house"
                      ? "border-emerald-500 bg-emerald-50 shadow-md"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <Home className={`w-12 h-12 mb-2 ${housingType === "house" ? "text-emerald-600" : "text-gray-400"}`} />
                  <span className={housingType === "house" ? "text-emerald-700 font-semibold" : "text-gray-600"}>
                    بيت
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setHousingType("apartment")}
                  className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                    housingType === "apartment"
                      ? "border-emerald-500 bg-emerald-50 shadow-md"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <Building2 className={`w-12 h-12 mb-2 ${housingType === "apartment" ? "text-emerald-600" : "text-gray-400"}`} />
                  <span className={housingType === "apartment" ? "text-emerald-700 font-semibold" : "text-gray-600"}>
                    عمارة
                  </span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">رقم الجوال</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="05xxxxxxxx"
                required
                className="text-right"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@email.com"
                required
                className="text-right"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="أدخل كلمة مرور قوية"
                required
                className="text-right"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
              إنشاء حساب
            </Button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <p className="text-gray-600">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  تسجيل دخول
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-2">
              <Link to="/" className="text-gray-500 hover:text-gray-700 inline-flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                العودة للرئيسية
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
