"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full py-4 px-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 dark:text-white pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 px-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

const faqs = [
  {
    question: "เวิร์กช็อปนี้แตกต่างจากการเรียนคอร์สออนไลน์ฟรีอย่างไร?",
    answer: "คอร์สออนไลน์จะให้ความรู้เชิงทฤษฎีและตัวอย่างเบื้องต้น แต่เวิร์กช็อปนี้เน้นการลงมือทำจริงกับโจทย์ที่ใกล้เคียงกับการทำงานจริง ผู้เรียนจะได้รับการโค้ชและคำแนะนำแบบโต้ตอบ ทำให้สามารถปรับใช้ได้อย่างมีประสิทธิภาพมากขึ้น"
  },
  {
    question: "ผู้เข้าร่วมควรมีพื้นฐานอะไรบ้าง?",
    answer: "ควรมีประสบการณ์ในการพัฒนาโปรแกรมเบื้องต้น เช่น การใช้ Python หรือ JavaScript/TypeScript และควรเข้าใจการใช้งาน Git, CLI และการรันเทสต์อัตโนมัติ สำหรับส่วน MCP Server Development จะสอนตั้งแต่พื้นฐาน"
  },
  {
    question: "ต้องใช้ภาษาโปรแกรมใด?",
    answer: "เวิร์กช็อปมุ่งเน้นแนวคิดและเวิร์กโฟลว์ที่ใช้ได้กับหลายภาษาเป็นหลัก ตัวอย่างจะยกมาจาก Python และ TypeScript เป็นหลัก แต่สามารถปรับใช้กับภาษาอื่น ๆ ได้เช่นกัน"
  },
  {
    question: "จะได้รับเนื้อหาอะไรกลับไป?",
    answer: "ผู้เข้าร่วมจะได้รับเวิร์กบุ๊ก, โค้ดตัวอย่าง MCP Server, เทมเพลต FastMCP, เทมเพลต prompt และแนวทางปฏิบัติที่ดีในการใช้ Claude Code ซึ่งสามารถนำไปปรับใช้และต่อยอดกับทีมงานจริงได้ทันที"
  },
  {
    question: "ถ้าไม่เคยใช้ Claude Code มาก่อนจะเข้าร่วมได้หรือไม่?",
    answer: "สามารถเข้าร่วมได้ แต่ควรเตรียมบัญชีที่สามารถเข้าถึง Claude Code หรือเครื่องมือที่รองรับเทียบเท่า เพื่อจะได้ทำกิจกรรมแฮนด์ออนได้ครบถ้วน"
  },
  {
    question: "รูปแบบการเรียนเป็นอย่างไร?",
    answer: "ผู้เรียนจะได้เรียนรู้แบบผสมผสาน ทั้งการบรรยายสั้น ๆ เพื่อปูพื้นฐาน และกิจกรรมแฮนด์ออนแบบลงมือทำจริง โดยใช้กรณีศึกษาที่ออกแบบมาให้ใกล้เคียงการใช้งานจริง"
  },
  {
    question: "มีค่าใช้จ่ายหรือไม่?",
    answer: "รายละเอียดเรื่องค่าใช้จ่ายจะประกาศเมื่อกำหนดวันและสถานที่จัดงานแล้ว โดยจะแจ้งให้ผู้ที่อยู่ในรายชื่อ Waitlist ทราบล่วงหน้า"
  },
  {
    question: "เวิร์กช็อปนี้เหมาะสำหรับใคร?",
    answer: "เหมาะสำหรับวิศวกรซอฟต์แวร์, Tech lead, ผู้พัฒนาผลิตภัณฑ์ และผู้จัดการทีมที่ต้องการยกระดับความเร็วและคุณภาพการพัฒนาโค้ดผ่านการใช้ AI ช่วยอย่างเป็นระบบ และต้องการสร้างเครื่องมือ AI ที่เฉพาะเจาะจงสำหรับองค์กร"
  },
  {
    question: "การสร้าง MCP Server เองมีประโยชน์อย่างไร?",
    answer: "การสร้าง MCP Server ของตัวเองช่วยให้สามารถเชื่อมต่อ Claude กับระบบภายในองค์กร เช่น Database, API, หรือเครื่องมือที่เฉพาะเจาะจง ทำให้ AI สามารถช่วยงานได้แม่นยำและเหมาะสมกับบริบทขององค์กรมากขึ้น"
  },
  {
    question: "ถ้าต้องการนำความรู้ไปประยุกต์ใช้ในองค์กร ควรทำอย่างไร?",
    answer: "หลังจากจบเวิร์กช็อป ผู้เรียนจะมีแนวทางการออกแบบเวิร์กโฟลว์และมาตรการ guardrails ที่สามารถนำไปประยุกต์กับการพัฒนาในองค์กร เช่น การสร้างมาตรฐานโค้ดรีวิว การจัดการความเสี่ยงจากการใช้ AI และการพัฒนา Custom MCP Tools สำหรับทีม"
  }
];

export default function FAQ() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">คำถามที่พบบ่อย</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}