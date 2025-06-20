import Header from './Header.jsx';
import './Test.css';

//컴포넌트 생성 Test(부모 컴퍼넌트)
function Test(){
    return(
        <>
            <Header />
            <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}
//다른 컴포넌트에서 해당 Test 컴포넌트 사용가능하도록 내보내기 설정
export default Test;

function Aside(){
    return(
        <aside>
            <p style={{color: 'red', fontSize:'32px', fontWeight: '700'}}>Aside는 Test 컴포넌트의 자식 컴포넌트</p>
        </aside>
    )
}