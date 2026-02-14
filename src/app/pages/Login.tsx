import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LogIn, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<"resident" | "volunteer">("resident");
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", { ...credentials, loginType });
    // Navigate based on user type
    if (loginType === "resident") {
      navigate("/resident");
    } else {
      navigate("/volunteer");
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-emerald-100">
        <CardHeader className="text-center space-y-2 pb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-500 p-4 rounded-full">
              <LogIn className="w-10 h-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl">تسجيل الدخول</CardTitle>
          <CardDescription className="text-base">مرحباً بك في حيّنا</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs value={loginType} onValueChange={(value) => setLoginType(value as "resident" | "volunteer")} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="resident">ساكن</TabsTrigger>
              <TabsTrigger value="volunteer">متطوع</TabsTrigger>
            </TabsList>
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email or Phone */}
            <div className="space-y-2">
              <Label htmlFor="emailOrPhone">البريد الإلكتروني أو رقم الجوال</Label>
              <Input
                id="emailOrPhone"
                value={credentials.emailOrPhone}
                onChange={(e) => setCredentials({ ...credentials, emailOrPhone: e.target.value })}
                placeholder="example@email.com أو 05xxxxxxxx"
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
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="أدخل كلمة المرور"
                required
                className="text-right"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-left">
              <button type="button" className="text-sm text-emerald-600 hover:text-emerald-700">
                نسيت كلمة المرور؟
              </button>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
              دخول
            </Button>

            {/* Register Link */}
            <div className="text-center pt-4">
              <p className="text-gray-600">
                ليس لديك حساب؟{" "}
                <Link to="/register" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  تسجيل جديد
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
