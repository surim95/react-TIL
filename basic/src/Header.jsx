import './Header.css';

function Header(){
    const num1 = 5;
    const num2 = 3;
    const hello = '안녕하세요';
    const name = '리액트';
    const isLogin = false;
    return(
        <header>
            <h1 style={{backgroundColor: 'yellow', color: 'red'}}>Logo</h1>
            <p style={{border: '1px solid #000', padding: '12px 8px', textAlign: 'center', fontWeight: '600'}}>숫자 {num1}에서 {num2}을 뺀 결과 : {num1-num2}</p>
            <p style={{borderBottom: '1px solid #cceeaa', padding : '8px 20px', textAlign: 'right', fontWeight: '800', background: 'linear-gradient(90deg, #ff2255, rgba(80,255,50, 0.2)) text' , color: 'transparent'}}>{hello}, {name} 출력결과 : {hello+', '+name}</p>
            <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
            {/* const isLogin = false; 일때 p태그에 '로그인 필요' 출력하기, 반대로 true면 p태그에 '로그인 성공' 출력하기 */}
            {/* 힌트: 삼항조건연산자, 변수 */}
        </header>
    )
}

export default Header;