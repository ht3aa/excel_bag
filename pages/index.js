import homeStyles from '../styles/Home.module.css';
import aboutUsStyles from "../styles/AboutUs.module.css";
import Image from "next/image";
import { db }  from "../data/db";
import Link from 'next/link';
export default function Home() {

const parts = Object.keys(db);
  
  return (
    <>
      <div className={homeStyles.bgImg}>
        <div className={homeStyles.overlayer}>
          <header className={homeStyles.hero}>
              <div className={homeStyles.excelLogo}>
                <Image src="/excelImg.png" width={250} height={230} alt="excel logo"/>
              </div>
              <div className={homeStyles.mainContent}>
                <h1>أحترافك لدوال الأكسل 
أصبح سهل معنا</h1>
                <h4>                  تم الأعداد من قبل الطالب علي محمد سلمان
                  بأشراف أ. م. د. مؤيد حنون سلمان
                </h4>
                <a href="#files"><button><h5>أبدأ الأن</h5></button></a>
              </div>
            <i className="fa-solid fa-arrow-down"></i>
          </header>
          <main id="files" className={homeStyles.mainContainer}>
            {parts.map((part, index) => {
              return (
                <div key={index}>
                  <div className={homeStyles.title}><h3>{ part }</h3></div>
                  <div className={homeStyles.cardContainer}>
                    {db[part].map(card => {
                      return (
                        <div key={card.id} className={homeStyles.card}>
                          <div className={homeStyles.cardImg}>
                            <div className={homeStyles.cardOverlay}><h5>{ card.lesson_number }</h5></div>
                          </div>
                          <div className={homeStyles.cardContent}>
                            <h4>{ card.lesson_name }</h4>
                            <p>{ card.description }</p>
                            <Link href={`/lecture?file=/files/${card.file_path}.pdf&video_link=${card.video_link}`} passHref ><button>أبدأ الدرس</button></Link>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              )
            })}    
          </main>
          <div className={homeStyles.departmentContent}>
            <h3>الحاسوب</h3>
            <Image className={homeStyles.departmentImg} src="/department_logo.png" width={100} height={100} alt="excel logo"/>
            <h3>تقنيات</h3>
          </div>
        </div>
      </div>
        <div id="aboutUs" className={aboutUsStyles.container}>
          <Image src="/personalImg.png" width="400" height="400" alt="personal Img"/>
          <div className={aboutUsStyles.content}>
            <h1>من نحن</h1>
            <p>أنا الطالب علي محمد سلمان أدرس في جامعة الأمام الكاظم (عليه السلام) قسم هندسة تقنيات الحاسوب. هذا الموقع يهدف الى توفير البيئة التعليمية لبرنامج الأكسل لتجعلك قادر على فهم و تعلم دوال الأكسل بسهولة و بسرعة عن طريق توفير ملفات و فيديوات يتم فيها شرح اساسيات و مبادئ تعلم دوال الأكسل. تم الأشراف من قبل أ.م.د مؤيد حنون سلمان</p>
            <div>
                <a href="https://instagram.com/alimuhammed9" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://t.me/Ali_M14" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </div>
      <footer></footer>
    </>
  )
}
