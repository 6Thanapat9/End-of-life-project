import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';

// สร้าง instance ของ Elysia และใช้ static plugin
const app = new Elysia()
  .use(staticPlugin({
    assets: '../public',           
    prefix: '/',                            
  }))
  .get('/', () => Bun.file('../public/Login.html')) // รองรับ route ตรงหน้าแรก
  .get('/api/hello', () => ({ message: 'สวัสดีจาก API' })) // เพิ่ม endpoint ตัวอย่าง
  .listen(3000);

console.log(`🚀 Server running at http://localhost:3000`);