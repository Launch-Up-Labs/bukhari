// pages/index.js
import Navbar from "../../components/Navbar";

export default function Manuscripts() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="section--light text_brown text-br text-center py-12">
        <h1 className="text-6xl font-bold mb-4">
          {" "}
          Manuscripts of Ṣaḥīḥ al-Bukhārī
        </h1>
      </header>
      <div className="section--light">
        <section className="container mx-auto banner px-6 lg:px-20 py-6 lg:py-10 flex flex-wrap justify-between items-start">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text_brown">
              Introduction:
            </h1>
            <p className="text-base lg:text-lg mb-6 text_light_brown">
              The exact number of extant manuscripts of Ṣaḥīḥ al-al-Bukhārī is
              difficult to assess. The now dated Muʾassasat Āl al-Bayt catalog
              of hadith manuscripts lists 2327 manuscripts of the Ṣaḥīḥ while
              one researcher identified 971 manuscripts in Istanbul alone. The
              thousands of manuscripts date from fourth century AH until the
              advent of modernity and are spread throughout various regions and
              epochs. The value of each manuscript varies based on a myriad of
              factors, like provenance, dating, corroboration, and marginal
              data. Here, we would like to introduce readers to a handful of
              important manuscript of the Ṣaḥīḥ that can help appreciate its
              textual integrity and shed light on scholarly efforts in studying
              and transmitting it. One can easily spend years exploring the
              manuscript tradition of the Ṣaḥīḥ. For now, we will introduce five
              manuscripts and two lithographic editions as a point of departure
              for anyone interested in a deeper study.
            </p>
          </div>
          <div className="w-full display_content lg:w-1/2 pl-0  lg:pl-4">
            <img
              src="/assets/manuscripts.jpg"
              alt="sahih image"
              className="w-full h-auto lg:mt-20"
              style={{ maxWidth: "350px", maxHeight: "350px" }}
            />
          </div>
        </section>
      </div>
      <div
        className="section--light bg_image_4 flex justify-center items-center relative"
        style={{ minHeight: "400px" }}>
        <div
          className="overlay absolute inset-0"
          style={{ backgroundColor: "rgba(235, 226, 209, 0.4)" }}></div>
        <section className="container mx-auto flex justify-center items-center banner px-6 lg:px-20 py-6 lg:py-10 relative">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text_brown">
            1. Al-Marwazī’s Manuscript
          </h1>
        </section>
      </div>
      <div
        className="section--light bg_image_5 flex justify-center items-center relative"
        style={{ minHeight: "400px" }}>
        <div
          className="overlay absolute inset-0"
          style={{ backgroundColor: "rgba(235, 226, 209, 0.4)" }}></div>
        <section className="container mx-auto flex justify-center items-center banner px-6 lg:px-20 py-6 lg:py-10 relative">
          <p className="text-base lg:text-lg mb-6 text_light_brown">
            The earliest extant manuscript is a fragmentary copy in two parts
            based on the recension of Abū Zayd al-Marwazī (d. 371 AH) from
            al-Farabrī from al-Bukhārī. The manuscript is of Egyptian provenance
            where it remained for centuries until it was transferred to Britain
            in the early 1900s. Based on a paleographic and chemical examination
            of the papyrus, it has been dated to 360–390 AH/970–1000 CE.
            Although it is commonly held to have been transcribed by the
            Andalusian Abū ʿAbd Allāh al-Aṣīlī (d. 392 AH), a student of
            al-Marwazī, the material evidence on the manuscript and its
            paleography suggest that it was transcribed by the hand of an
            unidentified Egyptian student of al-Marwazī. After its
            transcription, it was actively utilized for auditions of the Ṣaḥīḥ
            and variant collations, gathering marginal notes along the way, in
            Alexandra and Cairo well into uthe ninth century AH. One of its
            reading notices is dated to Ramadan 464 AH in Alexandria. In 1929,
            Alphonse Mingana (d. 1937) discovered part of this fragment,
            comprising only three chapters (ṣawm, zakāh, and a part of ḥajj),
            which is currently held in the Mingana collection in Birmingham.
            Recently, a section of this manuscript four times larger comprising
            eighteen chapters was discovered in the British Library.
          </p>
        </section>
      </div>

      <div className="section--light bg_image_6" style={{ minHeight: "400px" }}>
        <div
          className="overlay absolute inset-0"
          style={{ backgroundColor: "rgba(235, 226, 209, 0.4)" }}></div>
        <section className="container  mx-auto text-white px-6 lg:px-20 py-6 lg:py-10 relative ">
          <h3 className="text-3xl lg:text-5xl font-bold mb-4 text_brown">
            Further Reading
          </h3>
          <ul className="sahih_point">
            <li className="text-base lg:text-lg  text_light_brown">
              1) Anas Wakāk, “al-Taʿrīf bi-aqdam nuskha khaṭṭiyya min Ṣaḥīḥ
              al-Bukhārī: Qiṭʿat Minjānā wa-l-Matḥaf al-Brīṭānī,” Lisān
              al-muḥaddith 1, (2018)
            </li>
            <li className="text-base lg:text-lg  text_light_brown">
              2) Alphonse Mingana, An Important Manuscript of the Tradition of
              Bukhārī (Cambridge: W. Heffer and Sons, 1936).
            </li>
            <li className="text-base lg:text-lg  text_light_brown">
              3) Muntasir Zaman, The Textual Integrity of Ṣaḥīḥ al-Bukhārī: A
              Study on thePrimary Recensions, Textual Variants, and Transmission
              of the Ṣaḥīḥ (Dallas: Qalam, 2024).
            </li>
          </ul>
        </section>
      </div>
      <div
        className="section--light  flex justify-center items-center relative"
        style={{ minHeight: "400px" }}>
        <section className="container mx-auto flex justify-center items-center banner px-6 lg:px-20 py-6 lg:py-10 relative">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text_brown">
            2. The Saʿādiyya I & II{" "}
          </h1>
        </section>
      </div>
      <div
        className="section--light bg_image_5 flex justify-center items-center relative"
        style={{ minHeight: "400px" }}>
        <div
          className="overlay absolute inset-0"
          style={{ backgroundColor: "rgba(235, 226, 209, 0.4)" }}></div>
        <section className="container mx-auto flex justify-center items-center banner px-6 lg:px-20 py-6 lg:py-10 relative">
          <p className="text-base lg:text-lg mb-6 text_light_brown">
            The Saʿādiyya I is a manuscript of the Ṣaḥīḥ transcribed in 492 AH
            by the hadith scholar of Valencia, Spain Abū ʿImrān b. Saʿāda (d. c.
            522 AH) based on the recension of Abū Dharr al-Harawī (d. 434 AH)
            via his three teachers from al- Farabrī from al-Bukhārī. In addition
            to its early dating, the Saʿādiyya I stands out for the critical
            editorial and comparative work done on it by Abū ʿImrān. This
            manuscript served as the reference point for countless secondary
            manuscripts and commentaries in the Maghreb until recently. Its
            whereabouts for the first three centuries are unknown, but in the
            ninth century, it was listed as part of the endowment of the
            al-Qarawiyyīn library in Fes. In 1928, the French Orientalist
            Évariste Lévi-Provençal (d. 1956) produced a facsimile edition of
            the second volume. Lévi-Provençal had borrowed the third volume, but
            it got lost after he died. To date, only three of the five volumes
            are available, which are housed in the National Library of the
            Kingdom of Morocco though there is a secondary copy of the entire
            manuscript.
          </p>
        </section>
      </div>
      <div
        className="section--light bg_image_5 flex justify-center items-center relative"
        style={{ minHeight: "400px" }}>
        <div
          className="overlay absolute inset-0"
          style={{ backgroundColor: "rgba(235, 226, 209, 0.4)" }}></div>
        <section className="container mx-auto flex justify-center items-center banner px-6 lg:px-20 py-6 lg:py-10 relative">
          <p className="text-base lg:text-lg mb-6 text_light_brown">
            The earliest complete manuscript in our possession today was
            transcribed in al- Andalus in Shaʿbān 550 AH. We can label this is
            the Saʿādiyya II since it was read in 555 AH under the auspices of
            the the hadith scholar Abū ʿAbd Allāh Muḥammad b. Saʿāda (d. 565
            AH), a nephew of Abū ʿImrān. This manuscript is based on the
            recension of Abū Dharr. The colophon attests to the exceptional
            quality of the manuscript: it was compared multiple times with
            authoritative manuscripts like that of al-Ṣadafī (d. 514 AH) and a
            secondar copy of al-Bājī (474AH). In the seventh century, it was
            relocated to Fes, and then in the eighth century, it made its way to
            Cairo. It was read and audited by multiple scholars in each of these
            regions. In the ninth century, it was endowed to the library of the
            Sahn ı Seman Medrese in Istanbul. It is currently housed in the
            Süleymanye Yazma Eser Library under the Murād Mullā collection where
            it was recently discovered. The entire manuscript is in one codex
            and contains 269 folios. Each folio is 27x22 cm with 49 lines. In
            2018, ISAM published a facsimile edition of this manuscript.
          </p>
        </section>
      </div>
      <div className="section--light bg_image_6" style={{ minHeight: "400px" }}>
        <div
          className="overlay absolute inset-0"
          style={{ backgroundColor: "rgba(235, 226, 209, 0.4)" }}></div>
        <section className="container  mx-auto text-white px-6 lg:px-20 py-6 lg:py-10 relative ">
          <h3 className="text-3xl lg:text-5xl font-bold mb-4 text_brown">
            Further Reading
          </h3>
          <ul className="sahih_point">
            <li className="text-base lg:text-lg  text_light_brown">
              1) ʿArafāt Aydin, “Nuskha qadīma li-Ṣaḥīḥ al-Bukhārī bi-l-khaṭṭ
              al-Maghribī bi riwāyat Abī Dharr fī Turkiyā,” in al-Jāmiʿ al-ṣaḥīḥ
              al-musnad al-mukhtaṣar min ḥadīth Rasūl Allāh (ṣ): Ṭibāʿa ṭibq
              al-aṣl ʿan nuskhat maktabat Murād Mullā Istānbūl (Istanbul: ISAM,
              2018).
            </li>
            <li className="text-base lg:text-lg  text_light_brown">
              2) Ṣalāḥ Fatḥī Halal, Nuskhat al-Bukhārī al-aṣliyya wa-riwāyātuhu
              al-ʿaliyya: Qirāʾa fī al-nuskha al-Murādiyya (Dubai: Jamʿiyyat Dār
              al-Birr, 2020).
            </li>
            <li className="text-base lg:text-lg  text_light_brown">
              3) Muntasir Zaman, “From Khurasan to al-Andalus: Ṣaḥīḥ al-Bukhārī
              in theMaghreb in Light of Two Early Manuscripts,” Studies in
              Hadith Sciences, no. 2 (2021).
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
