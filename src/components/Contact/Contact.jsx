import { useState, useEffect, useRef } from "react";
// import { useState } from "react";
import "./Contact.css";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
   const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS credentials from .env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Send email via EmailJS
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('✅ Message sent successfully! I will get back to you soon.');
        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('❌ Failed to send message. Please try again or email me directly.');
        setIsSubmitting(false);
      });
  };

  //Animation state
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__container">

        {/* Header */}
        <div className="contact__header">
          <h2 className="contact__title">Get In Touch</h2>
          <div className="contact__title-underline"></div>
          <p className="contact__subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className={`contact__grid ${inView ? "contact__grid--visible" : ""}`}>

          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-info__title">Contact Information</h3>

            {/* Email */}
            <div className="contact-info__item">
              <div className="contact-info__icon contact-info__icon--email">
                <HiOutlineMail />
              </div>
              <div className="contact-info__details">
                <h4>Email</h4>
                <a href="mailto:devnataskar7@gmail.com">devnataskar7@gmail.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info__item">
              <div className="contact-info__icon contact-info__icon--phone">
                <HiOutlinePhone />
              </div>
              <div className="contact-info__details">
                <h4>Phone</h4>
                <a href="tel:+91-8451808041">+91-8451808041</a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-info__item">
              <div className="contact-info__icon contact-info__icon--location">
                <HiOutlineLocationMarker />
              </div>
              <div className="contact-info__details">
                <h4>Location</h4>
                <p>Kandivali (W), Mumbai</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-info__social">
              <h4 className="contact-info__social-title">Connect With Me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/devnataskar/" target="_blank" rel="noopener noreferrer" className="social-link social-link--linkedin">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Devsama007" target="_blank" rel="noopener noreferrer" className="social-link social-link--github">
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/DevNataskar_7/" target="_blank" rel="noopener noreferrer" className="social-link social-link--leetcode">
                  <SiLeetcode />
                </a>
                <a href="https://www.hackerrank.com/profile/devnataskar7" target="_blank" rel="noopener noreferrer" className="social-link social-link--hackerrank">
                  <FaHackerrank />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="contact-form__title">Send Me a Message</h3>

            <form onSubmit={handleSubmit}>
              {/* Name & Email Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <FiSend />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}