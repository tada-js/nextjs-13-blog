'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import FormBanner, { FormBannerData } from './FormBanner';
import { sendContactEmail } from '@/service/contact';

interface Form {
  from: string;
  subject: string;
  message: string;
}

const DEFAULT_FORM = {
  from: '',
  subject: '',
  message: '',
};

const LABEL_CLASS =
  "after:content-['*'] after:ml-0.5 after:text-red-400 font-semibold";
const INPUT_CLASS = 'pl-1 text-black';

const ContactForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_FORM);
  const [banner, setBanner] = useState<FormBannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: '메일 전송 완료!', state: 'success' });
        setForm(DEFAULT_FORM);
      })
      .catch(() => {
        setBanner({ message: '메일 전송 실패', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => {
          setTimeout(() => {
            setBanner(null);
          }, 3000);
        });
      });
  };

  return (
    <section className="my-2 w-full max-w-lg text-gray-600">
      {banner && <FormBanner banner={banner} />}
      <form
        className="flex w-full flex-col gap-2 rounded-xl bg-[#C4DFDF] p-4 shadow-md"
        onSubmit={onSubmit}
      >
        <label htmlFor="from" className={LABEL_CLASS}>
          이메일
        </label>
        <input
          type="email"
          id="from"
          name="from"
          className={INPUT_CLASS}
          placeholder="example@mail.com"
          onChange={onChange}
          required
          autoFocus
        />
        <label htmlFor="subject" className={LABEL_CLASS}>
          제목
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={INPUT_CLASS}
          placeholder="제목"
          onChange={onChange}
          required
        />
        <label htmlFor="message" className={LABEL_CLASS}>
          내용
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          className={INPUT_CLASS}
          placeholder="내용을 입력해 주세요."
          onChange={onChange}
          required
        />
        <button className="mx-auto my-2 w-28 rounded-lg -bg--bg-brand-3 p-2 font-semibold text-slate-100 duration-75 hover:-bg--bg-brand-1 hover:transition">
          제출
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
