# 개인 블로그✏️

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

## 주요 기능

- <a href="https://nodemailer.com/about/" target="_blank">nodemailer</a> 모듈을 통해 사용자가 작성한 메일을 전송하고, 보낸 메일을 개인 계정 이메일로 확인할 수 있도록 구현
  ![](https://velog.velcdn.com/images/nu11/post/42b2f984-f87a-4989-9fb0-575d838af6f3/image.png)
- `metadata` 사용으로 페이지별 SEO 최적화
- `react-markdown` 라이브러리를 통해 마크다운뷰어 컴포넌트를 사용해 `.md` 파일을 화면에 렌더링 할 수 있도록 구현
- mail POST API 라우트

  ```ts
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

- 캐러셀을 통해 게시물들을 출력
- 클라이언트와 서버 컴포넌트의 분리
