import { useRouter } from "next/router";
import lectureStyles from "../styles/Lecture.module.css";
import homeStyles from '../styles/Home.module.css';

export default function Lecture() {
  const route = useRouter()
  const { file, video_link } = route.query;

  return (
    <div className={homeStyles.bgImg}>
      <div className={lectureStyles.overLayer}>
        <div className={lectureStyles.container}>
          <button onClick={() => route.push('/')} className="backButton">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <iframe width="350" height="315" src={video_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          <object data={file} type="application/pdf" width="100%" height="600px">

            <h5>لا يحتوي متصفح الويب الخاص بك على قابلية فتح ملف بتنسيق بي دي اف بدلا من ذلك يمكنك تحميل المحاضرة بالنقر على الأيقونة اسفل يسار الشاشة</h5>
          </object>

          <a href={file} download>
            <button className="downloadBtn">
              <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}