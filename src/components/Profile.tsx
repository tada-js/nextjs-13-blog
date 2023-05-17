import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/images/profile.png';

const Profile = () => {
  return (
    <section className="m-10 text-center">
      <Image
        src={profileImage}
        alt="작성자 사진"
        className="mx-auto rounded-full"
        width={300}
        priority
      />
      <h2 className="mt-2 text-2xl font-semibold">김성훈</h2>
      <h3 className="text-lg">Front-end Developer</h3>

      <Link href="/contact">
        <button className="mt-2 rounded-xl border-2 border-transparent -bg--bg-brand-1 px-4 py-1 font-bold -text--sub-color duration-300 hover:border-2 hover:border-orange-500 hover:-bg--sub-color hover:text-gray-800 hover:transition">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Profile;
