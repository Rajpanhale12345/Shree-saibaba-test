import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

 
const routes = [
  "/",
  "/about",
  "/departments",
  "/doctors",
  "/packages",
  "/blogs",
  "/pr",
  "/contact",
  "/cardiology",
  "/cardiovascular",
  "/ortho",
  "/urology",
  "/neurology",
  "/radiology",
  "/interventionalradiology",
  "/neurosurgery",
  "/internalmedicine",
  "/dentistry",
  "/generalsurgery",
  "/plasticsurgery",
  "/opthalmology",
  "/nephrology",
  "/gastroenterology",
  "/testimonials",
  "/kidney",
  "/spine",
  "/sitemap",
  "/fullbodycheckup",
  "/cardio",
  "/privacypolicy",
  "/termsandconditions",
  "/spinecare",
  "/gynaecology",
  "/generalmedicine",
  "/pulmonology",
  "/facilities",
  "/tieups",

  
  "/nutrition",
  "/understanding",
  "/Cardiac_Surgery",
  "/Dengue",
  "/Vitamin_B12",
  "/Heart_Attack",
  "/Heart_Disease",
  "/Interventional_Radiology",
  "/Pneumonia",
  "/Lifestyle",
  "/Understanding_CABG",
  "/Kidney_Health",
  "/Holter",
  "/Spine_Joint",
  "/Varicose",
  "/Angiographies",
  "/Angiography",
  "/Angiographiess",
  "/Heart_Healthy",
  "/Stress_Anxiety",
  "/Robotic_Surgery",
  "/Robotic_Joint",
  "/Neurology_Blog",
  "/Urology_Blog",
  "/Multidisciplinary",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://shreesaibabamultispecialityhospital.com",
  });

  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap).then((data) => data.toString());

  writeFileSync("public/sitemap.xml", xml);
  console.log("public/sitemap.xml generated");
}

generateSitemap();
