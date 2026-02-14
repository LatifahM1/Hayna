import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot" }>>([
    { text: "مرحباً! أنا المساعد الذكي لحيّنا. كيف يمكنني مساعدتك اليوم؟", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "كيف أطلب مساعدة؟",
    "ما هي الفعاليات القادمة؟",
    "كيف أبلغ عن مشكلة؟",
    "كيف أتبرع لصندوق الحي؟",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" as const }];
    setMessages(newMessages);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      
      if (input.includes("مساعدة")) {
        botResponse = "لطلب مساعدة، اذهب إلى قسم 'ساعد جار' من القائمة الرئيسية، ثم اختر 'طلب مساعدة' واملأ التفاصيل المطلوبة.";
      } else if (input.includes("فعاليات")) {
        botResponse = "يمكنك الاطلاع على جميع الفعاليات القادمة من قسم 'فعاليات الحي' في لوحة التحكم.";
      } else if (input.includes("بلاغ") || input.includes("مشكلة")) {
        botResponse = "للإبلاغ عن مشكلة، انتقل إلى قسم 'البلاغات والتنبيهات' واختر نوع المشكلة (شاحنات، ضوضاء، نظافة، مرافق).";
      } else if (input.includes("تبرع") || input.includes("صندوق")) {
        botResponse = "يمكنك التبرع لصندوق الحي من خلال قسم 'صندوق الحي'. جميع التبرعات تذهب لدعم السكان والمبادرات المجتمعية.";
      } else {
        botResponse = "شكراً لسؤالك! يمكنني مساعدتك في معرفة المزيد عن خدمات حيّنا. جرب أحد الأسئلة السريعة أدناه.";
      }

      setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
    }, 1000);

    setInput("");
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <Card className="fixed bottom-6 left-6 w-96 max-w-[calc(100vw-3rem)] shadow-2xl z-50" dir="rtl">
      <CardHeader className="bg-emerald-600 text-white rounded-t-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <CardTitle className="text-lg">المساعد الذكي</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-emerald-700 h-8 w-8"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === "user" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-gray-100 text-gray-900"
                    : "bg-emerald-600 text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="p-4 border-t bg-gray-50">
          <p className="text-xs text-gray-600 mb-2">أسئلة سريعة:</p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-white border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 px-3 py-1 rounded-full transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="اكتب رسالتك..."
            className="text-right flex-1"
          />
          <Button onClick={handleSend} className="bg-emerald-600 hover:bg-emerald-700">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
