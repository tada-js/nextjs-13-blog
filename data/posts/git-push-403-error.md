## 현상

---

`$ git push` 명령 했으나 `Permission` 문제로 실패.

이는 해당 주소, 즉 `push` 하고 싶은 대상 저장소에 대한 권한이 없기 때문에 발생한 에러.

**권한을 주면 문제 해결 가능**

## 해결 방법

---

1. 권한을 부여하기 위해서 인증을 해야한다.
2. 인증을 하기 위해서 가장 먼저 원격 저장소 URL을 올바르게 변경해 주어야 한다.
   `$ git remote set-url origin https://<user-name>@github.com/<user-name>/<repository-name>.git`
3. 위의 명령어에서 `<user-name>` , `<repository-name>` 을 변경해주자.
4. PUSH 시도
5. github 페이지에서 password 입력
6. `$ git push -u origin master`

#### 2022.06.21 추가

GitHub 그룹(organization)에 PUSH 할 때 403(The requested URL returned error) error가 발생한다면 윈도우의 경우 `제어판 -> 사용자 계정 -> 자격 증명 관리자`로 이동하여 일반 자격 증명 목록 중 github와 관련된 모든 자격을 제거한다. 그리고 다시 처음부터 시도하여 `push` 해 보자.

## 참고

---

- [블로그 - git error 403 해결하기](https://penguingoon.tistory.com/109)
- [블로그 - GitHub 그룹(organization) PUSH 권한 오류](https://data-jj.tistory.com/49)
