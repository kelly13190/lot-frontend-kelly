import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";
import supachaiImage from "../assets/images/supachai.jpg";
import supachai2Image from "../assets/images/supachai2.jpg";
import supachai3Image from "../assets/images/supachai3.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย
            ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์ในวิชา Internet of Things และนายกฤตณัฏฐ์
            ศิริพรนพคุณ เป็นผู้ช่วยสอนในหัวข้อ FastAPI และ React ในวิชานี้
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src={supachaiImage} alt="Supachai Maneerat" className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col">
            <p className="text-right col-span-2  items-center">
            ผมผู้ซึ่งชอบการถ่ายรูปและชอบเที่ยวคาเฟ่อยู่บ่อยครั้งเมื่อมีโอกาส ผมจึงเกิดความคิดว่าถ้าเราได้เปิดคาเฟ่เองจะมีสไตล์เป็นอย่างไร
            ผมนายศุภชัย มณีรัตน์ 65070224 ผมได้นนำประสบการณ์มากมายที่ได้เที่ยวคาเฟ่ต่างๆมาผสานความเป็นตัวเอง และนำสิ่งที่ชอบมาตกแต่งอย่างมีความคิดสร้างสรรค์
            จึงได้เกิดเป็นคาเฟ่ IoT Library & Cafe ครับ
            </p>
            <img src={supachai2Image} alt="Supachai Maneerat"/>
            <img src={supachai3Image} alt="Supachai Maneerat" />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
