import { Link } from "react-router";
import { Home as HomeIcon, Users, LogIn, UserPlus } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758796629979-c967b99dec5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMG5laWdoYm9yaG9vZCUyMGhvdXNlcyUyMHN0cmVldHxlbnwxfHx8fDE3NzEwMDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="حي سكني"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-emerald-500 p-6 rounded-full shadow-2xl">
              <HomeIcon className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Main Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            حيّنا
          </h1>
          
          <p className="text-xl md:text-3xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            حيث يصبح كل جار عائلة، وكل مساعدة بداية جديدة
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg min-w-[200px] shadow-xl">
                <LogIn className="ml-2 h-5 w-5" />
                تسجيل دخول
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="bg-white/95 hover:bg-white text-emerald-700 border-2 border-emerald-600 px-8 py-6 text-lg min-w-[200px] shadow-xl">
                <UserPlus className="ml-2 h-5 w-5" />
                تسجيل جديد
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Users className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-semibold mb-2">تواصل وتكافل</h3>
              <p className="text-white/80">تواصل مع جيرانك وساعد مجتمعك</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <HomeIcon className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-semibold mb-2">حيك بين يديك</h3>
              <p className="text-white/80">متابعة كل ما يحدث في حيك</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <svg className="w-12 h-12 mx-auto mb-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">أثر إيجابي</h3>
              <p className="text-white/80">ساهم في تحسين جودة الحياة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}