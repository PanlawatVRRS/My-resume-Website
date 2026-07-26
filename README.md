# เว็บ Resume — Next.js + TypeScript

เว็บไซต์เรซูเม่แบบหน้าเดียว (single-page) สไตล์ "engineering blueprint"
สร้างด้วย Next.js (App Router), TypeScript และ Tailwind CSS

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## แก้ไขข้อมูลของคุณ

ข้อมูลทั้งหมด (ชื่อ, ตำแหน่ง, ทักษะ, ประสบการณ์, ผลงาน, การศึกษา, ช่องทางติดต่อ)
อยู่ในไฟล์เดียว:

```
data/resume.ts
```

แก้ตรงนั้นที่เดียว ทุกส่วนของเว็บจะอัปเดตตาม ไม่ต้องแตะโค้ด component

## โครงสร้างหน้า (ส่วนต่าง ๆ ในหน้าเดียว)

- Hero — ชื่อ/ตำแหน่ง สไตล์ title block ของแบบวิศวกรรม
- About — เกี่ยวกับตัวเองและใบรับรอง
- Skills — ทักษะแยกตามกลุ่ม
- Experience — ประสบการณ์ทำงานแบบ revision log
- Projects — ผลงานเด่น
- Education — ประวัติการศึกษา
- Contact — ช่องทางติดต่อ

## Deploy

โปรเจกต์นี้ deploy ขึ้น Vercel ได้ทันที (`vercel.com`) หรือแพลตฟอร์มอื่นที่รองรับ Next.js

## หมายเหตุ

- ฟอนต์ใช้ IBM Plex Sans Thai และ IBM Plex Mono ผ่าน `next/font/google`
  ต้องมีอินเทอร์เน็ตตอน build ครั้งแรกเพื่อดาวน์โหลดฟอนต์ (แล้วจะถูก cache ไว้ในเครื่อง)
- ถ้าต้องการใส่ไฟล์ resume PDF ให้ดาวน์โหลด วางไฟล์ไว้ที่ `public/resume.pdf`
  แล้วลิงก์ `Resume PDF` ใน `data/resume.ts` จะใช้งานได้ทันที
