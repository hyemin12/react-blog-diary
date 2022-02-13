## 오류...

### npm ERR! code ENOENT(에러넘버 4058)

```http
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path C:\Users\user\Desktop\react-Blog/package.json
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, open 'C:\Users\user\Desktop\react-Blog\package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\user\AppData\Local\npm-cache\_logs\2022-02-13T13_03_01_683Z-debug-0.log
```

원인: 경로가 잘못됨

해결: 프로젝트 폴더로 이동하여 명령어를 재실행하니, 정상작동함

### github init 오류

```js
Reinitialized existing Git repository in C:/Users/user/Desktop/react-Blog/blog/.git/
```

문제: github와 연결하려고 git init 명령어를 입력했을 때 에러 발생

해결방법: git remote -v 입력하여, 원격 remote 주소 확인  
-> 다를 경우는 git remote rm origin 으로 삭제  
-> git remote add origin 주소로 연결
