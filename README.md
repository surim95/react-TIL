# React
## 리액트 설치 명령 + vite
1. `npm create vite@latest 생성프로젝트명 -- --template react`
2. `cd 프로젝트명`
3. `npm install`
4. `npm run dev`

## 리액트 폴더 삭제 명령(rm == remove)
* `rm -r 삭제폴더명`
* 삭제 폴더 상위에서 위 명령어 입력하기
----
# vite+리액트 설치 후 폴더와 파일 구조
* public, src/assets : 이미지, 동영상, 폰트 등 외부 파일 관리
* **src 폴더 내에 css, jsx(javascript xml) 리액트용 JS확장문법**
* index.html 최상위(root) 위치 이동 금지, 기본 위치 그대로 사용
* .gitignore : 깃허브 업로드 시 업로드 되지 않는 보호 파일 목록
* package.json, vite.config.js : 리액트 관련 설치 정보 및 세팅 정보
----
## jsx 파일 생성 후 다른  jsx파일에 연결하는 방법
1. `app.jsx` 생성 후 `main.jsx` 연결하고 싶다면?
2. `main.jsx`의 시작줄에서 `inport` 방식으로 외부 jsx 연결해야 한다.
* `import 컴퍼넌트명 from 'jsx상대경로';`
* 컴포넌트명은  jsx파일의 이름과 동일하게 작성한다(대소문자 주의)
* import의 컴포넌트명은 앞으로 이 이름을 쓰겠다는 뜻의 변수 선언과 같다. 호출은 별도로 진행해야 한다.
3. (위) import 진행 후 원하는 렌더링 위치에 `<컴포넌트명 />`을 작성한다.
* `import App from './App.jsx'`라면 `<App />`이렇게 작성한다.
4. `main.jsx`에서 컴포넌트로 연결한 `App.jsx`가 정상적으로 출력되며 리액트 프로그래밍이 진행된다.
----
# jsx 기본 템플릿과 뜻
`
import 외부파일 불러오는 위치
function 컴포넌트명(){
    추가 변수 작성위치
    return(
        <>
            추가 HTML태그 작성 위치
        </>
    )
}
export default 컴포넌트명;
`