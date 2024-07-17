// pages/index.js
import BlogCard from "@/components/BlogCard";
import Navbar from "../components/Navbar";
import Home1 from "../../public/assets/home1.png"
import Home2 from "../../public/assets/home2.png"
import Home3 from "../../public/assets/home3.png"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="section--light hero-section text-br text-center py-12" style={{height: "100vh"}}>
        <h1 className="text-5xl font-bold mb-4" style={{marginTop: "150px"}}>The Bukhārī Project</h1>
        <p className="text-lg mb-6">
          An introductory resource on the life and works of Imam al-Bukhārī and
          relevant scholarship
        </p>
        <div className="border"></div>
      </header>
      <div className="section--brown">
        <section className="container  mx-auto text-white p-10">
          <p className="text-lg mb-6">
            Ṣaḥīḥ al-Bukhārī is the most revered compendium of hadith, receiving
            unparalleled scholarly attention since its compilation. After over a
            decade of writing papers, books, and conducting research on Ṣaḥīḥ
            al-Bukhārī, I recognized the need for an accessible online resource
            to present its millennia-long intellectual tradition. The Bukhārī
            Project was created to meet this need, offering an online platform
            for exploring the life of Imam al-Bukhārī and the scholarship
            surrounding his Ṣaḥīḥ. In the dropdown menu, you will find the
            following sections: • An interactive map detailing the life of Imam
            al-Bukhārī • An introductory overview of Ṣaḥīḥ al-Bukhārī and its
            reception over time •A study of the most significant manuscripts of
            the Ṣaḥīḥ from the fourth to the eighth centuries AH •A blog
            featuring shorter research posts and guest contributions on the
            Ṣaḥīḥ and related topics For those seeking a comprehensive treatment
            of these issues, I recommend consulting longer primers, such as my
            2024 monograph, “The Textual Integrity of Ṣaḥīḥ al-Bukhārī,” and my
            translation of Muṣṭafā Aʿẓamī’s “An Introduction to Ṣaḥīḥ
            al-Bukhārī: Author's Biography, Recensions, and Manuscripts.” This
            platform would not have possible without the assistance of many
            well-wishers, advisors, and contributors. In particular, I would
            like to mention Muḥammad Hozien, ʿAlī Shahbaz, Zaki Ansari, and
            Sania -. All mistakes are mine alone. Muntasir Zaman{" "}
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>An interactive map detailing the life of Imam al-Bukhārī</li>
            <li>
              An introductory overview of Sahīh al-Bukhārī and its reception
              over time
            </li>
            <li>
              A study of the most significant manuscripts of the Sahīh from the
              fourth to the eighth centuries AH
            </li>
            <li>
              A blog featuring shorter research posts and guest contributions on
              the Sahīh and related topics
            </li>
          </ul>
          <p className="text-lg mb-6">
            For those seeking a comprehensive treatment of these issues, I
            recommend consulting longer primers, such as my 2024 monograph, “The
            Textual Integrity of Ṣaḥīḥ al-Bukhārī,” and my translation of
            Muṣṭafā Aʿẓamī’s “An Introduction to Ṣaḥīḥ al-Bukhārī: Author's
            Biography, Recensions, and Manuscripts.” This platform would not
            have possible without the assistance of many well-wishers, advisors,
            and contributors. In particular, I would like to mention Muḥammad
            Hozien, ʿAlī Shahbaz, Zaki Ansari, and Sania -. All mistakes are
            mine alone.
          </p>
          <footer className=" mt-12">
            <p className="text-lg font-semibold">Muntsir Zaman</p>
          </footer>
        </section>
      </div>
      <div className="section--light">
        <section className="container mx-auto banner p-10">
          <div className="blogCards">
            <BlogCard thumb={Home1} title={"The Ṣaḥīḥ"} />
            <BlogCard thumb={Home2} title={"Biography"} />
            <BlogCard thumb={Home3} title={"Manuscripts"} />
          </div>
        </section>
      </div>

      <div className="section--brown" style={{ height: "200px" }}></div>
    </div>
  );
}
