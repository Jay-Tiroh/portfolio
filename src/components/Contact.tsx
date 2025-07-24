"use client";
import React from "react";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center text-sm text-faded justify-center gap-6 max-w-xl mx-auto px-6 py-16 text-center semiformal"
      id="contact"
    >
      <h1 className="text-white text-3xl font-semibold">Let’s Connect</h1>
      <p className="text-base leading-relaxed text-gray-400">
        I love building user-first websites that help businesses grow and
        connect with people. If you’ve got a project or idea, let’s talk.
      </p>

      <form
        className="w-full flex flex-col gap-4 form"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement & {
            subject: { value: string };
            message: { value: string };
          };

          const subject = encodeURIComponent(form.subject.value);
          const body = encodeURIComponent(form.message.value);

          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=uchechijethro1@gmail.com&su=${subject}&body=${body}`,
            "_blank"
          );
        }}
      >
        <input
          type="text"
          name="subject"
          defaultValue="Hiring for a project"
          className="p-3 rounded-md bg-zinc-800 text-white placeholder:text-gray-400"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          rows={5}
          defaultValue={`Hi Jethro,\n\nI'm reaching out because I’m interested in working with you on a frontend project.\n\nLet me know your availability and how best to proceed.\n\nThanks!`}
          className="p-3 rounded-md bg-zinc-800 text-white placeholder:text-gray-400"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:bg-gradient-to-r hover:to-[#FF8660] hover:from-[#9A33FF] text-white font-medium tracking-wide py-2 px-4 rounded-md transition duration-300 w-48 cursor-pointer m-auto"
        >
          Send Message
        </button>
      </form>

      <span className="text-xs text-faded">
        Or email me directly at uchechijethro1@gmail.com
      </span>
      <div className="social-links flex items-center gap-5">
        <a
          href="https://www.instagram.com/chizuru_jethro/"
          className="instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="neon-img"
          >
            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
          </svg>
        </a>

        <a href="https://github.com/Jay-Tiroh" className="github ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="neon-img"
          >
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
          </svg>
        </a>
        <a
          href="https://facebook.com/profile.php?id=100084326743097"
          className="facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="neon-img"
          >
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
