import React , { useState} from 'react'
import ParticlesBackground from '../component/ParticlesBackground'
import NavBar from "../component/NavBar";
import './ContactUs.css'
import ContactChatBot from '../component/ChatBot';

const ContactUs = () => {
  const [movieDownload,setMovieDownload] = useState(false)
  const [searchTerm, setSearchTerm] = useState(null);
  const [change,SetChange] = useState(null);
  const [year,setYear] = useState(null)
  const [language,setLanguage] = useState(null)
  const [gener,setGener] = useState(null)
  const [flag,setFlag] = useState(false)
  const isSEarchBarShow = false;
  return (
    <div>
      <ParticlesBackground />
      <div className="content">
        <NavBar setSearchTerm={setSearchTerm} flag={flag} setFlag={setFlag} SetChange={SetChange} setYear={setYear} setLanguage={setLanguage} setGener={setGener} isSEarchBarShow={isSEarchBarShow}/>
        <ContactChatBot />
      </div>
    </div>
  )
}

export default ContactUs
