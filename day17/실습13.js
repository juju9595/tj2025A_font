/*
[ 실습13 : 미니 전화번호부 페이지 ] *제출
1. 목표
   - 사용자가 이름, 전화번호, 그리고 간단한 메모를 함께 저장하여 자신만의 상세한 연락처 목록을 만들고, 등록된 모든 
   연락처를 한눈에 볼 수 있는 전화번호부 웹 페이지를 만듭니다.
2. 화면 구성
   - 페이지는 사용자가 정보를 입력하는 **'연락처 등록 영역'**과 그 결과를 보여주는 **'연락처 목록 영역'**으로 명확히 
   구분되어야 합니다.
   - 연락처 등록 영역:
      - 이름 입력: 저장할 사람의 이름을 텍스트로 자유롭게 입력할 수 있어야 합니다. (예: "홍길동")
      - 전화번호 입력: 연락처의 전화번호를 숫자로 입력할 수 있어야 합니다 (예:010-1234-5678)
      - 메모 입력: 해당 연락처에 대한 추가 정보(소속, 관계 등)를 텍스트로 입력할 수 있는 칸이 있어야 합니다. (예: "OO회사 부장")
      - 등록 버튼: 이름과 전화번호를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.

   - 연락처 목록 영역:
      - 등록된 모든 연락처 정보를 보여주는 표가 있어야 합니다.
       - 표는 "이름", "전화번호", "메모" 순서의 열로 구성되어야 합니다.
3. 핵심 기능
   - 초기 데이터 표시:
      - 사용자가 페이지에 처음 방문했을 때, 전화번호부 사용법을 쉽게 이해할 수 있도록 두 개의 예시 연락처가 목록 표에 
      기본적으로 표시되어 있어야 합니다.
   - 연락처 등록 기능:
      - 사용자가 '등록 영역'에 이름과 전화번호를 모두 입력하고 "등록" 버튼을 클릭하면, 해당 연락처가 '목록 영역' 표의 
      가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.*/

      /*
[ 작업순서 ]
        1. (프) 화면구성(HTML/CSS)
        2. (백) 데이터모델링
            (1) 저장할 자료들을 모두 찾기
                -이름, 전화번호, 메모
            (2) 저장할 자료들의 분리(중복 배제) 1:M (하나가 여러개를 참조/관계) x
            (3) 분리된 자료들끼리 연관관계 x
            * 테이블(배열), 테이블내 행/가로 단위(객체)
        3. (백) 함수(기능) 설계
            (1) '등록버튼' 클릭했을때 입력받은 3가지 정보를 배열에 저장
                함수명 :    (아무거나) '등록함수'
                매개변수 :  x 
                반환값 :    x
                로직 :      1. input으로부터 입력받은 값 가져오기
                            2. 입력값 3개를 객체로 구성
                            3. 구성된 객체를 전화번호부목록(배열)에 저장
                실행조건 : '등록버튼' 클릭(onclick) 했을때

            (2)'전체조회' 함수
                함수명 :    '전체조회함수'
                매개변수 : x ,      반환값 : x
                로직 :      1. 특정한 구역(table)에 배열내 모든 정보를 HTML 형식으로 출력한다.
                실행조건 : 1.페이지가 열렸을때(최초1번) 2. 등록 성공했을때(새로고침)
        4. (백) 로직
        5. (프/백) 화면 <---> 기능 연동
*/
const 전화번호부목록 = [
    {코드 :1, 이름:'홍길동', 전화번호: '010-1234-5678', 메모:'OO회사 부장'},
    {코드 :2, 이름:'신동엽', 전화번호: '010-8765-4321', 메모:'동료'}]
let 마지막인덱스 = 전화번호부목록.length -1;
let 코드자동번호 = 전화번호부목록[마지막인덱스].코드

function 등록함수(){  console.log(`---등록함수 exe---`);  
            
    const nameInput = document.querySelector('#nameInput');         console.log(nameInput);
    const numberInput = document.querySelector('#numberInput');     console.log(numberInput);
    const memoInput = document.querySelector('#memoInput');         console.log(memoInput);
    
    const name = nameInput.value;           console.log(name);
    const number = numberInput.value;       console.log(number);
    const memo = memoInput.value;           console.log(memo);

        코드자동번호++;
    const obj = {코드 :코드자동번호, 이름: name, 전화번호: number, 메모: memo}; console.log(obj);
    전화번호부목록.push(obj);   console.assert(전화번호부목록);
    전체조회함수();
}//func end

전체조회함수();
function 전체조회함수(){ console.log('---전체조회함수 exe---');
    const contentBody = document.querySelector('#contentBody'); console.log(contentBody);
    let html =``;
    for(let index=0; index <= 전화번호부목록.length -1; index++){
        const obj = 전화번호부목록[index];
        html += `<tr>
                    <td> ${obj.이름}</td>
                    <td> ${obj.전화번호}</td>
                    <td> ${obj.메모}</td>
                </tr>`
    } // for end
    contentBody.innerHTML = html;
}// func end

