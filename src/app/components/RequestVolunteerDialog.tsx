import { useState } from "react";
import { Plus, X, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function RequestVolunteerDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Volunteer request:", formData);
    // Reset form
    setFormData({
      type: "",
      title: "",
      description: "",
      location: "",
      date: "",
      time: "",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg">
          <Plus className="w-4 h-4 ml-2" />
          طلب متطوع
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl">طلب متطوع جديد</DialogTitle>
          <DialogDescription>
            املأ التفاصيل التالية لإرسال طلب متطوع للمساعدة
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Request Type */}
          <div className="space-y-2">
            <Label htmlFor="type">نوع المساعدة</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
              <SelectTrigger id="type" className="text-right">
                <SelectValue placeholder="اختر نوع المساعدة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="walking">مرافقة للمشي</SelectItem>
                <SelectItem value="shopping">شراء احتياجات</SelectItem>
                <SelectItem value="transportation">توصيل</SelectItem>
                <SelectItem value="maintenance">صيانة منزلية</SelectItem>
                <SelectItem value="medical">مساعدة طبية</SelectItem>
                <SelectItem value="social">زيارة اجتماعية</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">عنوان الطلب</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="مثال: أحتاج متطوع للمشي في الحديقة"
              required
              className="text-right"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">وصف الطلب</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="اشرح تفاصيل المساعدة المطلوبة..."
              required
              className="text-right min-h-24"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">الموقع</Label>
            <div className="relative">
              <MapPin className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="شارع الورد، بيت رقم 15"
                required
                className="text-right pr-10"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">التاريخ</Label>
              <div className="relative">
                <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="text-right pr-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">الوقت</Label>
              <div className="relative">
                <Clock className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="text-right pr-10"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              إرسال الطلب
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              إلغاء
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
