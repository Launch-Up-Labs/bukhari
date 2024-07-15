// pages/index.js
import Navbar from "../../components/Navbar";

export default function Biography() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="section--light hero-section text-br text-center py-12">
        <p className="text-lg mb-6">The Biography of</p>
        <h1 className="text-5xl font-bold mb-4"> Imam al- Bukhari</h1>

        <div className="border"></div>
      </header>
      <div className="section--gradient">
        <section
          className="container  mx-auto text-white p-10 text-center"
          style={{ minHeight: "600px" }}>
          <h1 className="text-5xl font-bold mb-16" style={{ marginTop: "10%" }}>
            {" "}
            A Proposed Timeline of Imām al-Bukhārī’s Life
          </h1>
          <p className="text-lg mb-6">
            [The following is a proposed timeline for the movements of
            al-Bukhārī from his childhood to studies abroad, and the final years
            of his life. The timeline is based on anecdotal accounts,
            al-Bukhārī’s own remarks, and the death dates of his teachers, but
            there is only so much certainty that we can have on the specifics of
            his year-to-year travels, as there is no extant account of this
            nature. Although the basic outline of the timeline is agreed upon,
            there are specifics that are open to interpretation and therefore
            not definitive. For example, al-Bukhārī visited certain cities
            multiple times and some visits are not dated, so the sequence of the
            visits and the times he met certain scholars are not certain. The
            format is: date (age) and the symbol (~) for approximate date. 1 ]
          </p>
        </section>
      </div>
      <div className="section--light">
        <section className="container  mx-auto text_light_brown p-10  ">
          <h1 className="text-5xl font-bold mb-16 mt-5">
            {" "}
            A Portrait of Imām al-Bukhārī
          </h1>
          <p className="text-lg mb-6">
            Muḥammad b. Ismāʿīl was born on the 13 th of Shawwāl 194 AH/810 CE
            in Bukhara to a scholarly and upper middle-class family. His
            ancestor Bardizbah (lit. farmer) was a Persian Zoroastrian whose son
            al-Mughīra accepted Islam at the hands of the governor of Bukhara
            al-Yamān al-Juʿfī; thus, through conversion-based clientage (walāʾ
            al-Islām), al-Mughīra’s family took on the Arab affiliation
            al-Juʿfī. Al-Bukhārī’s father Ismāʿīl was a scholar in his right who
            met Imām Mālik and Ibn al-Mubārak. Ismāʿīl died when al-Bukhārī was
            still a child, and bequeathed land and large sums of wealth that
            helped sustain his family. 2 His mother raised him and his older
            brother Aḥmad. 3 The family spoke Sogdian, an iteration of Persian.
            As a child, al-Bukhārī lost his sight but through the miraculous
            supplication of his mother, his sight was restored. As an adult, he
            was lean, average height with a beard, 4 and wore a turban. 5 He was
            physically fit, an expert archer and participated in defending the
            frontiers (ribāṭ) of Transoxiana. He was married but left behind no
            male progeny. After travelling to the major centers of Islamic
            learning, 6 he returned to Transoxiana and passed away in 256 AH/870
            CE in Khartenk, outside of Samarqand.
          </p>
        </section>
      </div>
      <div className="section--light bg_image_3" style={{ minHeight: "600px" }}>
        <section className="container mx-auto banner px-6 lg:px-20 py-6 lg:py-10  bg_content">
          <p className="text-4xl mb-6 text-white mt-40">
            Born in Bukhara in present-day Uzbekistan, Al-Bukhari began
            learning hadith at a young age. He travelled across the Abbasid
            Caliphate and learned under several influential contemporary
            scholars. Bukhari memorized thousands of hadith narrations,
            compiling the Sahih al-Bukhari in 846.
          </p>
        </section>
      </div>
    </div>
  );
}
