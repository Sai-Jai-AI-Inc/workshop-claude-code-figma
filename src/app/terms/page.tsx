import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เงื่อนไขการใช้งานและข้อตกลง | SaiJaiAI",
  description: "เงื่อนไขการใช้งานและข้อตกลงการเข้าร่วม Workshop ของ SaiJaiAI LLC",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← กลับหน้าหลัก
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          เงื่อนไขการใช้งานและข้อตกลง
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
          อัปเดตล่าสุด: 15 พฤษภาคม 2569
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. การยอมรับข้อตกลง</h2>
            <p>
              การเข้าใช้งานเว็บไซต์ learn.saijaiai.com หรือการสมัครเข้าร่วม Workshop ของ SaiJaiAI LLC
              ถือว่าท่านได้อ่าน เข้าใจ และยอมรับเงื่อนไขการใช้งานเหล่านี้ทั้งหมด
              หากท่านไม่เห็นด้วยกับข้อตกลงใด กรุณาหยุดใช้งานและไม่สมัครเข้าร่วม Workshop
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. เกี่ยวกับ Workshop</h2>
            <p className="mb-4">
              SaiJaiAI LLC จัดให้บริการ Workshop ด้าน AI Prompting และการใช้งาน Generative AI
              โดยมีรายละเอียดดังนี้:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Workshop เป็นกิจกรรมแบบลงมือทำ (Hands-on) ในสถานที่จริง</li>
              <li>ผู้เข้าร่วมต้องนำอุปกรณ์คอมพิวเตอร์หรือแท็บเล็ตพร้อมอินเทอร์เน็ตมาเอง</li>
              <li>เนื้อหาและตัวอย่างอาจปรับเปลี่ยนได้ตามความเหมาะสมโดยไม่ต้องแจ้งล่วงหน้า</li>
              <li>ภาษาที่ใช้สอนหลักคือภาษาไทย</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. การสมัครและคุณสมบัติผู้เข้าร่วม</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>ผู้สมัครต้องมีอายุ 18 ปีขึ้นไป หรือได้รับความยินยอมจากผู้ปกครอง</li>
              <li>การสมัครจะสมบูรณ์เมื่อได้รับการยืนยันจากผู้จัดและชำระเงินเรียบร้อยแล้ว</li>
              <li>ที่นั่งมีจำนวนจำกัด ผู้จัดขอสงวนสิทธิ์ในการพิจารณารับสมัคร</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. ค่าธรรมเนียมและการชำระเงิน</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>ค่าธรรมเนียม Workshop เป็นไปตามที่ระบุในหน้าสมัคร</li>
              <li>ชำระผ่านช่องทางที่กำหนดในแบบฟอร์มสมัคร</li>
              <li>ราคาไม่รวมภาษีมูลค่าเพิ่ม (VAT) เว้นแต่จะระบุไว้เป็นอย่างอื่น</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. นโยบายการยกเลิกและคืนเงิน</h2>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <span>ยกเลิกก่อนวันอบรม 7 วันขึ้นไป</span>
                <span className="font-semibold text-green-600 dark:text-green-400">คืนเงิน 100%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <span>ยกเลิกก่อนวันอบรม 3–6 วัน</span>
                <span className="font-semibold text-yellow-600 dark:text-yellow-400">คืนเงิน 50%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <span>ยกเลิกก่อนวันอบรมน้อยกว่า 3 วัน</span>
                <span className="font-semibold text-red-600 dark:text-red-400">ไม่คืนเงิน*</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Workshop ถูกยกเลิกโดยผู้จัด</span>
                <span className="font-semibold text-green-600 dark:text-green-400">คืนเงิน 100%</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              * กรณีไม่คืนเงิน สามารถโอนสิทธิ์การเข้าร่วมให้ผู้อื่นได้ โดยแจ้งชื่อผู้รับโอนล่วงหน้าอย่างน้อย 24 ชั่วโมง
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. ทรัพย์สินทางปัญญา</h2>
            <p className="mb-4">
              เนื้อหาทั้งหมดในเว็บไซต์และ Workshop รวมถึง สไลด์ เอกสาร วิดีโอ ตัวอย่างโค้ด และ Prompt Templates
              เป็นทรัพย์สินทางปัญญาของ SaiJaiAI LLC ท่านได้รับอนุญาตให้ใช้เพื่อการศึกษาส่วนตัวเท่านั้น
            </p>
            <p className="font-medium text-gray-900 dark:text-white">ห้ามดำเนินการต่อไปนี้โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร:</p>
            <ul className="space-y-2 list-disc list-inside mt-3">
              <li>คัดลอก ทำซ้ำ หรือแจกจ่ายเนื้อหา Workshop ในเชิงพาณิชย์</li>
              <li>นำเนื้อหาไปสอนหรือจัด Workshop ในนามอื่น</li>
              <li>ดัดแปลงหรือสร้างงานดัดแปลงจากเนื้อหา Workshop</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. จรรยาบรรณผู้เข้าร่วม</h2>
            <p className="mb-4">เพื่อสภาพแวดล้อมการเรียนรู้ที่ดี ผู้เข้าร่วม Workshop ต้อง:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>ปฏิบัติต่อผู้เข้าร่วมคนอื่นและผู้สอนด้วยความเคารพ</li>
              <li>ไม่บันทึกวิดีโอหรือเสียงของผู้สอนและผู้เข้าร่วมคนอื่นโดยไม่ได้รับอนุญาต</li>
              <li>ใช้อุปกรณ์เพื่อกิจกรรม Workshop เท่านั้นในช่วงเวลาเรียน</li>
              <li>ไม่ก่อกวนหรือขัดขวางการดำเนินกิจกรรม</li>
            </ul>
            <p className="mt-4">
              ผู้จัดขอสงวนสิทธิ์ในการปฏิเสธหรือขอให้ผู้เข้าร่วมที่ละเมิดจรรยาบรรณออกจาก Workshop
              โดยไม่คืนเงิน
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. การจัดการเนื้อหา AI</h2>
            <p className="mb-4">
              Workshop นี้สอนการใช้งาน AI Tools ของบริษัทภายนอก (เช่น Anthropic Claude, OpenAI ChatGPT)
              โดยผู้เข้าร่วมต้องปฏิบัติตาม:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>เงื่อนไขการใช้งานของแต่ละ AI Platform</li>
              <li>ไม่ใช้ AI เพื่อสร้างเนื้อหาที่ผิดกฎหมาย ละเมิดสิทธิ์ผู้อื่น หรือก่อให้เกิดความเสียหาย</li>
              <li>ผู้เข้าร่วมรับผิดชอบต่อผลลัพธ์ที่เกิดจากการใช้งาน AI ด้วยตนเอง</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. การจำกัดความรับผิด</h2>
            <p className="mb-4">
              SaiJaiAI LLC ให้บริการ Workshop &ldquo;ตามสภาพที่เป็นอยู่&rdquo; โดยไม่รับประกันผลลัพธ์ใด ๆ โดยเฉพาะ
              เราไม่รับผิดชอบต่อ:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>การสูญเสียข้อมูลหรืออุปกรณ์ของผู้เข้าร่วม</li>
              <li>ผลลัพธ์ที่ได้จากการนำความรู้ไปใช้ภายหลัง Workshop</li>
              <li>การเปลี่ยนแปลงของ AI Tools ภายนอกที่อาจกระทบเนื้อหา</li>
              <li>ความล่าช้าหรือการยกเลิกอันเนื่องมาจากเหตุสุดวิสัย</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. การเปลี่ยนแปลงข้อตกลง</h2>
            <p>
              SaiJaiAI LLC ขอสงวนสิทธิ์ในการปรับปรุงเงื่อนไขเหล่านี้ได้ตลอดเวลา
              การเปลี่ยนแปลงจะมีผลเมื่อประกาศในเว็บไซต์ การใช้งานเว็บไซต์ต่อไปหลังการเปลี่ยนแปลง
              ถือว่าท่านยอมรับเงื่อนไขใหม่
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. กฎหมายที่ใช้บังคับ</h2>
            <p>
              ข้อตกลงนี้อยู่ภายใต้กฎหมายแห่งราชอาณาจักรไทย ข้อพิพาทใด ๆ ที่เกิดขึ้นให้อยู่ในเขตอำนาจของศาลไทย
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. ติดต่อเรา</h2>
            <p>หากมีคำถามเกี่ยวกับข้อตกลงนี้ ติดต่อได้ที่:</p>
            <div className="mt-4 space-y-1">
              <p className="font-medium text-gray-900 dark:text-white">SaiJaiAI LLC</p>
              <p>
                อีเมล:{" "}
                <a
                  href="mailto:tholapz@gmail.com"
                  className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  tholapz@gmail.com
                </a>
              </p>
              <p>
                LINE:{" "}
                <a
                  href="https://lin.ee/Qtw25w6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  @saijaiaillc
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
