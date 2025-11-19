const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const SITE_URL = "https://shreesaibabamultispecialityhospital.com";

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
  "/Interventional_Radiology"
];

(async () => {
  const sitemap = new SitemapStream({ hostname: SITE_URL });

  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);

  console.log("✔ Sitemap successfully generated at: public/sitemap.xml");
})();
