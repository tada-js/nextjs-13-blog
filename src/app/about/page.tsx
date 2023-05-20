import Profile from '@/components/Profile';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '소개',
  description: '프론트엔드 개발자 소개',
};

const TITLE_CLASS = 'my-2 text-2xl font-semibold -text--text-brand-3';
const SUB_TITLE_CLASS = 'm-4 -text--text-brand-2';
const STRONG_CLASS = 'font-semibold';
const LINK_CLASS = 'hover:-text--text-brand-3';

const AboutPage = () => {
  return (
    <>
      <Profile />
      <section className="m-8 mx-auto grid max-w-screen-xl grid-cols-2 -bg--sub-color text-center shadow-lg">
        <article className="my-4 ">
          <h2 className={TITLE_CLASS}>프로필</h2>
          <div className="mx-auto w-24 border-b-4"></div>
          <p className="my-4">
            <strong className={STRONG_CLASS}>Blog: </strong>
            <Link href="https://velog.io/@nu11" className={LINK_CLASS}>
              https://velog.io/@nu11
            </Link>

            <strong className={STRONG_CLASS}>GitHub: </strong>
            <Link href="https://github.com/tada-js" className={LINK_CLASS}>
              https://github.com/tada-js
            </Link>
          </p>
        </article>

        <article className="my-4 mr-10">
          <h2 className={TITLE_CLASS}>소개</h2>
          <div className="mx-auto w-24 border-b-4"></div>
          <h3 className={SUB_TITLE_CLASS}>
            새로운 걸 배우고 기록하고 경험하는 것을 좋아합니다.
          </h3>
          멋쟁이 사자처럼 프론트엔드 스쿨 2기를 참여하며 그날 학습한 내용을
          <Link
            href="https://github.com/tada-js/codelion-TIL"
            className={LINK_CLASS}
          >
            &nbsp;GitHub
          </Link>
          , 블로그에 기록하였습니다. 주말과 공휴일에도 빠짐없이 개인 공부를 한
          덕분에 총 642commits, 45개의 포스팅을 하였습니다.
          <h3 className={SUB_TITLE_CLASS}>
            배우고 경험한 것을 나눌 수 있도록 노력하고 있습니다.
          </h3>
          타입스크립트를 학습하고 저와 같은 입문자들을 위해 무료 책을 출간
          하였습니다. 또한 책을 집필하면서 알게 된 내용을 바탕으로 제주 웹
          컨퍼런스에서 연사하였습니다.
          <h3 className={SUB_TITLE_CLASS}>
            궁극적인 목표는 “배운 것을 나눌 줄 아는 긍정적인 영향력을 가진
            개발자”입니다.
          </h3>
          앞으로도 꾸준히 무엇을 배웠는지, 어떤 것을 느꼈는지 기록하고, 배운
          것으로 끝내지 않고 나눌 줄 아는 개발자가 되기 위해 끊임없이 시도할
          것입니다.
        </article>
      </section>
    </>
  );
};

export default AboutPage;
