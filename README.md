# 개인 블로그✏️

<br>

## 프로젝트 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

<br><br>

## 배포

- Vercel: <a href="https://nextjs-13-blog-tada-js.vercel.app/" target="_blank">https://nextjs-13-blog-tada-js.vercel.app/</a>

<br><br>

## 개발 환경

- 개발 환경
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Tailwind CSS-41A2AD?style=for-the-badge&logo=tailwindcss&logoColor=white" />
- 세부 개발 환경

  ```json
  "@types/node": "20.1.5",
  "@types/react": "18.2.1",
  "@types/react-dom": "18.2.4",
  "autoprefixer": "10.4.14",
  "eslint": "8.40.0",
  "eslint-config-next": "13.4.2",
  "next": "13.4.2",
  "nodemailer": "^6.9.2",
  "postcss": "8.4.23",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "react-icons": "^4.8.0",
  "react-markdown": "^8.0.7",
  "react-multi-carousel": "^2.8.3",
  "react-syntax-highlighter": "^15.5.0",
  "remark-gfm": "^3.0.1",
  "tailwindcss": "3.3.2",
  "typescript": "5.0.4",
  "yup": "^1.1.1",

  "@tailwindcss/typography": "^0.5.9",
  "@types/nodemailer": "^6.4.7",
  "@types/react-syntax-highlighter": "^15.5.6",
  "prettier": "^2.8.8",
  "prettier-plugin-tailwindcss": "^0.2.7"
  ```

  <br><br>

## 구현 기능 및 세부 경험

- <a href="https://nodemailer.com/about/" target="_blank">nodemailer</a> 모듈을 통해 사용자가`contact` 페이지 폼에서 작성한 메일을 전송하고, 보낸 메일을 개인 계정 이메일로 확인할 수 있도록 구현하였습니다.
  ![](https://velog.velcdn.com/images/nu11/post/42b2f984-f87a-4989-9fb0-575d838af6f3/image.png)
- 서버 컴포넌트와 클라이언트 컴포넌트를 분리하였습니다. 데이터 파일을 읽어오는 data fetching 함수는 서버 컴포넌트를 통해 캐싱을 하였고, 이벤트나 리액트 훅을 사용할 때는 클라이언트 컴포넌트를 사용하였습니다.

  ```ts
  export const getAllPosts = cache(async (): Promise<Post[]> => {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return readFile(filePath, 'utf-8')
      .then<Post[]>(JSON.parse)
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
  });
  ```

  ```tsx
  'use client';
  ...
  const ContactForm = () => {
    const [form, setForm] = useState<Form>(DEFAULT_FORM);
    const [banner, setBanner] = useState<FormBannerData | null>(null);

    const onChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      ...
    };

    return (
      <section>
        <form></form>
      </section>
    );
  };
  ```

- `react-markdown` 라이브러리로 마크다운뷰어 컴포넌트를 사용해 `.md` 파일을 화면에 렌더링 할 수 있도록 구현하였습니다.
- 캐러셀을 통해 게시물들을 출력하도록 구현하였습니다.
- `metadata` 사용으로 페이지별 SEO 최적화를 하였습니다.
  ```js
  export const metadata = {
    title: {
      default: 'My Blog',
      template: 'My Blog | %s',
    },
    description: '프론트엔드 개발자 블로그',
    icons: {
      icon: 'favicon.ico',
    },
  };
  ```
- API 라우트

  ```ts
  // mail POST
  export const POST = async (req: Request) => {
    ...
    return sendEmail(body)
      .then(() => {
        return new Response(JSON.stringify({ message: '메일 전송 성공' }), {
          status: 200,
        });
      })
      .catch((error) => {
        console.log(error);
        return new Response(JSON.stringify({ message: '메일 전송 실패' }), {
          status: 500,
        });
      });
  };
  ```
