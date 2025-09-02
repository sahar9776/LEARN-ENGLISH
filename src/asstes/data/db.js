import childrenCourses from "../imges/childrenCourses.jpg";
import adultCourses from "../imges/adultCourses.jpg";
import adolescentCourses from "../imges/adolescentCourses.jpg";

import videoOne from "../videos/video1.mp4";
import videoTwo from "../videos/video2.mp4";
import videoTree from "../videos/video3.mp4";

export const navList = [
  {
    id: 1,
    title: "دوره ها",
    url: "courses",
  },
  {
    id: 2,
    title: "نقشه راه",
    url: "roadMap",
  },
  {
    id: 3,
    title: "آزمون ها",
    url: "quizzes",
  },
  {
    id: 4,
    title: "فیلم های آموزشی",
    url: "videosLearn",
  },
];

export const courseList = [
  {
    id: 1,
    englishTitle: "Adult Master Course",
    persianTitle: "دوره مستری بزرگسالان",
    image: adultCourses,
    url: "",
  },
  {
    id: 2,
    englishTitle: "Adolescent Practical Course",
    persianTitle: "دوره کاربردی نوجوانان",
    image: adolescentCourses,
    url: "",
  },
  {
    id: 3,
    englishTitle: "Children's Play and Learning Course",
    persianTitle: "دوره بازی و یادگیری کودکان",
    image: childrenCourses,
    url: "",
  },
];

export const roadMapList = [
  {
    id: 1,
    title: "پایه ریزی",
    target: "فهمیدن و ساختن جمله های ساده",
    time: "2-3 ماه",
    category: "begin",
    steps: [
      {
        step: "الفبا و تلفظ",
        explanation: "یادگرفتن صدای حروف",
      },
      {
        step: "کلمات پایه",
        explanation: "کلمات روزمره",
      },
      {
        step: "گرامر پایه",
        explanation: "زمان حال ساده، ضمایر و افعال to be",
      },
      {
        step: "تمرین شنیداری ساده",
        explanation: "پادکست، انیمیشن کودکانه",
      },
      {
        step: "نوشتن کوتاه",
        explanation: "جمله های ساده در مورد خود",
      },
    ],
  },
  {
    id: 2,
    title: "ساختن مهارت ها",
    target: "توانایی مکالمه های ساده و درک متن های ساده",
    time: "3-4 ماه",
    category: "preIntermediate",
    steps: [
      {
        step: "لغات بیشتر",
        explanation: "موضوعی یاد بگیر (خرید، کار)",
      },
      {
        step: "گرامر",
        explanation: "زمان گذشته و آینده ساده، حروف اضافه",
      },
      {
        step: "مکالمه روزمره",
        explanation: "نقش بازی مثل سفارش غذا",
      },
      {
        step: "فیلم و سریال ساده",
        explanation: "با زیرنویس انگلیسی",
      },
      {
        step: "نوشتن روزانه",
        explanation: "یک پاراگرف در مورد روز خود",
      },
    ],
  },
  {
    id: 3,
    title: "تقویت",
    target: "مکالمه روان تر و درک متن های ساده",
    time: "5-6 ماه",
    category: "intermediate",
    steps: [
      {
        step: "لغات سطح بالاتر",
        explanation: "اصطلاحات و ضرب المثل ها",
      },
      {
        step: "گرامر",
        explanation: "زمان های کامل",
      },
      {
        step: "فیلم",
        explanation: "بدون زیرنویس فارسی (زیرنویس انگلیسی)",
      },
      {
        step: "کتاب",
        explanation: "سطح بندی شده",
      },
      {
        step: "نوشتن متن بلند",
        explanation: "ایمیل یا مقاله کوتاه ",
      },
      {
        step: "مکالمه واقعی",
        explanation: "با پارتنر یا اپلیکیشن های مکالمه",
      },
    ],
  },
  {
    id: 4,
    title: "پیشرفته",
    target: "استفاده حرفه ای در کار، زمان تحصیل، مهاجرت و...",
    time: "مداوم (هیچ وقت تموم نمیشه)",
    category: "advanced",
    steps: [
      {
        step: "لغت تخصصی",
        explanation: "در حوزه کاری، تحصیلی خود",
      },
      {
        step: "گرامر پیشرفته",
        explanation: "جملات شرطی و...",
      },
      {
        step: "فیلم و پادکست تخصصی",
        explanation: "BBC, TED Talks",
      },
      {
        step: "نوشتن حرفه ای",
        explanation: "رزومه، ایمیل کاری و رسمی",
      },
      {
        step: "مکالمه روان",
        explanation: "بحث در مورد موضوعات مختلف",
      },
    ],
  },
];

export const goldKeyVideoList = [
  {
    id: 1,
    title: "یادگیری در موقعیت واقعی",
    description:
      "به جای حفظ کردن خشک، با دیدن مکالمات روزمره بهتر میفهمی مکالمات در دنیای واقعی چطور استفاده میشوند.",
  },
  {
    id: 2,
    title: "تقویت همزمان مهارت ها",
    description:
      "هم گوش میدهی، هم میبینی و هم تکرار میکنی، این یعنی لیسنینگ، اسپیکینگ و واژگان همه با هم پیشرفت میکنند.",
  },
  {
    id: 3,
    title: "تکرار هوشمند",
    description:
      "هر ویدیو، کوتاه، هدفمند و قابل تکرار طراحی شده تا بتوانی هر روز بدون خستگی تمرین کنی.",
  },
  {
    id: 4,
    title: "تمرکز روی نکات مهم",
    description:
      "به جای غرق شدن در جزئیات، ویدیو ها روی رایج ترین جملات و اصطلاحات تمرکز دارند.",
  },
];

export const footerList = [
  {
    id: 1,
    title: "درباره ما",
    url: "/about",
  },
  {
    id: 2,
    title: "تماس با ما",
    url: "/contact",
  },
  {
    id: 3,
    title: "پرسش های متداول",
    url: "/FAQ",
  },
  {
    id: 4,
    title: "پشتیبانی",
    url: "/support",
  },
];

export const quizzesList = [
  {
    id: 1,
    title: "آزمون های آنلاین (مجازی)",
    description:
      "این آزمون ها را می توانید به رایگان و آنلاین در سایت انجام دهید و بلافاصله نتیجه و تحلیل دریافت کنید.",
    facilities: [
      "سطح بندی (مبتدی، متوسط، پیشرفته)",
      "آزمون لغت، گرامر، شنیداری",
      "نمایش زمان باقیمانده و درصد پیشرفت",
      "نتیجه سریع + پیشنهاد منابع برای بهبود",
    ],
  },
  {
    id: 2,
    title: "آزمون های حضوری",
    description:
      "این آزمون ها در آموزشگاه برگزار میشوند و  مناسب کسانی است که میخواهند مدرک معتبر دریافت کنند.",
    facilities: [
      "ثبت نام آنلاین",
      "توضیح شرایط آزمون (مدت زمان، محل برگزاری، هزینه)",
      "پشتیبانی برای هماهنگی (تماس صوتی، آنلاین)",
    ],
  },
];

export const certificatesList = [
  "گزارش سطح زبان (A1 تا C2)",
  "کارنامه آنلاین با نقاط قوت و ضعف",
  "امکان دانلود نتیجه یا دریافت گواهی حضوری",
];

export const videoList = [
  {
    id: 1,
    src: videoOne,
  },
  {
    id: 2,
    src: videoTwo,
  },
  {
    id: 3,
    src: videoTree,
  },
];

export const adultCourseList = [
  "آشنایی و مرور پایه",
  "مهارت خوندن، نوشتن، شنیدن،صحبت کردن",
  "گرامر کاربردی",
  "واژگان پیشرفته",
  "زبان انگلیسی در زندگی واقعی",
  "آزمون و ارزیابی پایانی",
];

export const teenagersCourseList = [
  "مکالمات روزمره",
  "گرامر کاربردی",
  "لغات پرکاربرد",
  "فیلم و موزیک آموزشی",
  "فعالیت های گروهی",
  "نوشتن کوتاه",
  "پروژه پایانی",
];

export const inputList = [
  {
    id: 1,
    type: "text",
    placeholder: "نام",
  },
  {
    id: 2,
    type: "text",
    placeholder: "نام خانوادگی",
  },
  {
    id: 3,
    type: "text",
    placeholder: "09910000000",
  },
  {
    id: 4,
    type: "email",
    placeholder: "test@gmail.com",
  },
];

export const videosInfo = [
  {
    id: 1,
    title: "ساختار ویدیو ها",
    list: [
      "کوتاه و کاربردی (5-15 دقیقه)",
      "تمرکز هر ویدیو روی یک موضوع مشخص",
      "توضیح + مثال + تمرین",
      "زیرنویس انگلیسی + فایل زیرنویس فارسی",
    ],
  },
  {
    id:2,
    title:"دسته بندی ویدیو ها",
    list:[
      "سطح زبان (Beginner, Intermated, Advanced)",
      "مهارت ها (Reading, Speaking,..)",
      "موضوعات کاربردی (Travel, Business, IELTS,..)"
    ]
  }
];

export const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
