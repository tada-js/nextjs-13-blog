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
      <section className="m-8 mx-auto flex max-w-screen-xl flex-col items-center -bg--sub-color py-4 shadow-lg">
        <h2 className="mb-2 mt-4 text-2xl font-semibold -text--text-brand-3">
          연락 정보
        </h2>
        <div className="mx-auto mb-2 w-24 border-b-4"></div>
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
        <h2 className="mb-2 mt-8 text-2xl font-semibold -text--text-brand-3">
          이메일 보내기
        </h2>
        <div className="mx-auto mb-2 w-24 border-b-4"></div>
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
