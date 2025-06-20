import Test from './Test.jsx';

/* 부모 컴포넌트 App */
function App() {
  const greeting = "hello react";
  const num = 1;
  const boolA = true;
  const boolB = false;
  return (
    <>
      <Test />
      <h1>리액트 기초{num}</h1>
      <h2>{greeting+num}</h2>
      <p>리액트는 jsx문법을<br /> 먼저 익혀야 한다.</p>
      <p>리액트는 Node JS가 필요없다.</p>
      <p>(위) 문장은 {boolA && boolB ? '참' : '거짓'}이다.</p>
      <input />
      {/* 동일 jsx 파일내에 작성된 자식 컴포넌트 불러오기 */}
      {/* 동일 jsx 파일이므로 import 작성 필요 없음 */}
      <Footer />
    </>
  )
}

export default App;

//자식 컴포넌트 Footer
function Footer(){
  return(
    <footer>
      <p>회사소개 이용약관 고객센터 오시는 길</p>
    </footer>
  )
}