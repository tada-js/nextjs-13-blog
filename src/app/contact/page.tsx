import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의',
  description: '개발자에게 문의',
};

const ContactPage = () => {
  return (
    <section>
      <h2>연락 정보</h2>
      <p>justfix010@gmail.com</p>
      <h2>이메일 보내기</h2>
    </section>
  );
};

export default ContactPage;
