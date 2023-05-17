'use client';

const ContactForm = () => {
  return (
    <section>
      <form>
        <label htmlFor="from">이메일</label>
        <input type="email" id="from" name="from" required autoFocus />
        <label htmlFor="subject">제목</label>
        <input type="text" id="subject" name="subject" required />
        <label htmlFor="message">내용</label>
        <textarea rows={10} id="message" name="message" />
        <button>제출</button>
      </form>
    </section>
  );
};

export default ContactForm;
