import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub } from 'react-icons/ai';

export const metadata: Metadata = {
  title: '문의',
  description: '개발자에게 문의',
};

const LINKS = [{ icon: <AiFillGithub />, url: 'https://github.com/tada-js' }];

const ContactPage = () => {
  return (
    <>
      <section className="m-8 flex flex-col items-center -bg--sub-color shadow-lg">
        <h2 className="my-4 text-2xl font-semibold -text--text-brand-3">
          연락 정보
        </h2>
        <article className="flex w-60 items-center justify-between">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="ition text-4xl duration-300 hover:text-orange-400 hover:transition"
            >
              {link.icon}
            </a>
          ))}
          <p className="text-gray-500">justfix010@gmail.com</p>
        </article>
        <h2 className="my-8 text-2xl font-semibold -text--text-brand-3">
          이메일 보내기
        </h2>
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
