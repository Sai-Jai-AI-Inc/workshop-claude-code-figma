import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | SaiJaiAI",
  description: "นโยบายความเป็นส่วนตัวของ SaiJaiAI LLC และการใช้งานเว็บไซต์ learn.saijaiai.com",
};

export default function PrivacyPolicy() {
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
          นโยบายความเป็นส่วนตัว
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
          อัปเดตล่าสุด: 15 พฤษภาคม 2569
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. ข้อมูลทั่วไป</h2>
            <p>
              SaiJaiAI LLC (&ldquo;เรา&rdquo; หรือ &ldquo;ผู้ดำเนินการ&rdquo;) ให้ความสำคัญกับความเป็นส่วนตัวของท่าน
              นโยบายนี้อธิบายวิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของท่านเมื่อท่านใช้งานเว็บไซต์{" "}
              <span className="font-medium">learn.saijaiai.com</span> และสมัครเข้าร่วม Workshop ของเรา
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. ข้อมูลที่เราเก็บรวบรวม</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2.1 ข้อมูลที่ท่านให้โดยตรง</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>ชื่อ-นามสกุล</li>
                  <li>ที่อยู่อีเมล</li>
                  <li>เบอร์โทรศัพท์</li>
                  <li>ข้อมูลการชำระเงิน (ผ่านช่องทางที่กำหนด)</li>
                  <li>ข้อมูลอื่นที่ท่านให้ผ่านแบบฟอร์มสมัคร</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2.2 ข้อมูลที่เก็บโดยอัตโนมัติ</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>ข้อมูลการใช้งานเว็บไซต์ผ่าน Google Analytics (เมื่อท่านให้ความยินยอม)</li>
                  <li>หน้าที่เยี่ยมชม เวลาที่ใช้ในแต่ละหน้า แหล่งที่มาของการเข้าชม</li>
                  <li>ประเภทอุปกรณ์ เบราว์เซอร์ และระบบปฏิบัติการ</li>
                  <li>ที่อยู่ IP แบบไม่ระบุตัวตน</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. คุกกี้และ Google Analytics</h2>
            <p className="mb-4">
              เว็บไซต์นี้ใช้ Google Analytics เพื่อวิเคราะห์พฤติกรรมผู้เยี่ยมชม โดย Google Analytics
              จะเก็บข้อมูลผ่านคุกกี้เพื่อให้เราเข้าใจว่าผู้ใช้โต้ตอบกับเว็บไซต์อย่างไร
            </p>
            <p className="mb-4">
              เราใช้ <span className="font-medium">Google Consent Mode v2</span> ซึ่งหมายความว่า:
            </p>
            <ul className="space-y-2 list-disc list-inside mb-4">
              <li>ก่อนที่ท่านจะให้ความยินยอม: Google Analytics จะไม่เก็บข้อมูลการวิเคราะห์</li>
              <li>เมื่อท่านยอมรับ: เราจะเก็บข้อมูลสถิติการใช้งานเพื่อปรับปรุงเว็บไซต์</li>
              <li>เมื่อท่านปฏิเสธ: ไม่มีคุกกี้วิเคราะห์ถูกตั้งค่า</li>
            </ul>
            <p>
              ท่านสามารถเปลี่ยนการตั้งค่าได้ตลอดเวลาโดยล้าง localStorage ของเบราว์เซอร์ หรือดูข้อมูลเพิ่มเติมที่{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                นโยบายความเป็นส่วนตัวของ Google
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. วัตถุประสงค์การใช้ข้อมูล</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>ดำเนินการลงทะเบียนและยืนยันการเข้าร่วม Workshop</li>
              <li>ติดต่อสื่อสารเกี่ยวกับรายละเอียดของ Workshop</li>
              <li>ส่งข้อมูลและเอกสารประกอบการเรียน</li>
              <li>วิเคราะห์และปรับปรุงเว็บไซต์ (เฉพาะเมื่อให้ความยินยอม)</li>
              <li>ปฏิบัติตามข้อกำหนดทางกฎหมาย</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. การแบ่งปันข้อมูล</h2>
            <p className="mb-4">เราไม่ขายข้อมูลส่วนบุคคลของท่านให้บุคคลที่สาม เราอาจแบ่งปันข้อมูลกับ:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium">Google LLC</span> — ผ่าน Google Analytics และ Google Forms
                ตามนโยบายความเป็นส่วนตัวของ Google
              </li>
              <li>
                <span className="font-medium">หน่วยงานของรัฐ</span> — เมื่อได้รับคำสั่งตามกฎหมาย
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. การเก็บรักษาข้อมูล</h2>
            <p>
              เราเก็บข้อมูลส่วนบุคคลของท่านตราบเท่าที่จำเป็นสำหรับวัตถุประสงค์ที่ระบุ หรือตามที่กฎหมายกำหนด
              ข้อมูลการลงทะเบียน Workshop จะถูกเก็บไว้ไม่เกิน 2 ปีหลังจาก Workshop สิ้นสุด
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. สิทธิ์ของท่าน (PDPA)</h2>
            <p className="mb-4">
              ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) ท่านมีสิทธิ์:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>เข้าถึงและขอสำเนาข้อมูลส่วนบุคคลของท่าน</li>
              <li>แก้ไขข้อมูลที่ไม่ถูกต้อง</li>
              <li>ขอลบหรือทำลายข้อมูล</li>
              <li>คัดค้านการประมวลผลข้อมูล</li>
              <li>ถอนความยินยอมได้ตลอดเวลา</li>
            </ul>
            <p className="mt-4">
              ในการใช้สิทธิ์ดังกล่าว กรุณาติดต่อเราที่{" "}
              <a
                href="mailto:tholapz@gmail.com"
                className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                tholapz@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. ติดต่อเรา</h2>
            <p>หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ ติดต่อได้ที่:</p>
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
