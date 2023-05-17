import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/images/profile.png';

const Profile = () => {
  return (
    <section>
      <Image src={profileImage} alt="작성자 사진" />
      <h2>김성훈 | tada-js</h2>
      <h3>Front-end Developer</h3>
      <p>
        매일 기록하며, 경험하고 시도하는 것을 좋아하는 프론트엔드 개발자 김성훈
        입니다.
      </p>
      <Link href="/contact">
        <button>Contact Me</button>
      </Link>
    </section>
  );
};

export default Profile;
