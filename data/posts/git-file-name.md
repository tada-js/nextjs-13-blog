# 오늘의 오류 기록

## 문제 발생

`NotificationCommitteemy.jsx` → `NotificationCommitteeMy.jsx`

파일명을 수정하고 git push 했음에도 불구하고 파일명 변경을 추적관리 하지 못했다.
당연히 스테이징 관리가 안 된 채로 push 되었고, 파일명 중에서 대소문자 구분이 안 돼서 자꾸 에러가 발생하는 문제가 생겼다.

## 문제 해결

아래 명령어를 통해 git 설정을 해준다.

```bash
$ git config core.ignorecase false

false → 대소문자 구분 함
true → 대소문자 구분 안함
```
