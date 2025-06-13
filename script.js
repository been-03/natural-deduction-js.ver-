// 제목 및 설명
const h1 = document.createElement("h1");
h1.textContent = "자연연역 연습장";

const p = document.createElement("p");
p.textContent = "자연연역을 연습할 수 있는 공간입니다. 아래에 문제를 입력하고 복합명제를 추가하세요.";

// 문제 입력 텍스트영역
const textarea = document.createElement("textarea");
textarea.id = "problem-statements";
textarea.cols = 83;
textarea.rows = 5;
textarea.value = `아담이 백만장자라면, 가난은 이브가 그의 청혼을 거절한 이유가 아니다.
그런데 이브가 그의 청혼을 거절한 이유는 아담이 가난하다는 것 또는 그가 매력이 없다는 것 둘 중의 하나이다.
아담은 백만장자이다. 그러므로 매력이 없다는 것이 아담이 청혼을 거절당한 이유임에 틀림없다.`;

// 복합명제 입력 폼
const compoundForm = document.createElement("form");
const compoundInput = document.createElement("input");
compoundInput.style.width = '40%';
compoundInput.style.marginRight = '5px';
compoundInput.type = "text";
compoundInput.id = "new-compound";
compoundInput.placeholder = "복합명제를 입력하세요.";

const addCompoundBtn = document.createElement("button");
addCompoundBtn.type = "button";
addCompoundBtn.id = "add-compound-btn";
addCompoundBtn.textContent = "추가";

compoundForm.appendChild(compoundInput);
compoundForm.appendChild(addCompoundBtn);

// 복합명제 리스트
const compoundListContainer = document.createElement("div");
const compoundList = document.createElement("ol");
compoundList.type = "1";
compoundList.id = "compound-list";
compoundListContainer.style.width = "575px";
compoundListContainer.style.border = "1px solid gray";
compoundListContainer.appendChild(compoundList);

// 단순명제 입력 폼
const primaryForm = document.createElement("form");
const primaryInput = document.createElement("input");
primaryInput.style.width = '40%';
primaryInput.style.marginRight = '5px';
primaryInput.type = "text";
primaryInput.id = "new-primary";
primaryInput.placeholder = "단순명제를 입력하세요.";

const addPrimaryBtn = document.createElement("button");
addPrimaryBtn.type = "button";
addPrimaryBtn.id = "add-primary-btn";
addPrimaryBtn.textContent = "추가";

primaryForm.appendChild(primaryInput);
primaryForm.appendChild(addPrimaryBtn);

// 단순명제 리스트
const primaryListContainer = document.createElement("div");
const primaryList = document.createElement("ol");
primaryList.type = "A";
primaryList.id = "primary-list";
primaryListContainer.style.width = "575px";
primaryListContainer.style.border = "1px solid gray";
primaryListContainer.appendChild(primaryList);

// 기호명제 입력 폼
const symbolicForm = document.createElement("form");

// 첫 입력: 기호명제 자체
const symbolicInput = document.createElement("input");
symbolicInput.style.width = '20%';
symbolicInput.style.marginRight = '5px';
symbolicInput.style.marginBottom = '10px';
symbolicInput.classList.add("input1");
symbolicInput.type = "text";
symbolicInput.id = "new-symbolic";
symbolicInput.placeholder = "기호명제를 입력하세요.";
symbolicInput.required = true;

// 참조용 입력 3개
const ns1 = document.createElement("input");
ns1.style.width = '30px';
ns1.style.marginRight = '5px';
ns1.classList.add("input2");
ns1.type = "text";
ns1.id = "ns1";
ns1.required = true;

const ns2 = document.createElement("input");
ns2.style.width = '30px';
ns2.style.marginRight = '5px';
ns2.classList.add("input2");
ns2.type = "text";
ns2.id = "ns2";

const ns3 = document.createElement("input");
ns3.style.width = '30px';
ns3.style.marginRight = '5px';
ns3.classList.add("input2");
ns3.type = "text";
ns3.id = "ns3";

// 드롭다운 (규칙 선택)
const ruleSelect = document.createElement("select");
ruleSelect.id = "natual-deduction-rule";
[
  "전제", "결론", "조건기호제거 (→제거)", "선언기호제거 (∨제거)", "선언기호도입 (∨도입)", "조건기호도입 (→도입)",
  "연언기호제거 (∧제거)", "연언기호도입 (∧도입)", "쌍조건기호도입 (↔도입)", "쌍조건기호제거 (↔제거)", "부정기호제거 (∼제거)", "부정기호도입 (∼도입)"
].forEach(rule => {
  const option = document.createElement("option");
  option.value = rule;
  option.textContent = rule;
  ruleSelect.appendChild(option);
});

// 버튼들 (입력 및 연산)
const addSymbolicBtn = document.createElement("button");
addSymbolicBtn.type = "button";
addSymbolicBtn.id = "add-symbolic-btn";
addSymbolicBtn.style.marginRight = '5px';
addSymbolicBtn.textContent = "추가";

const openAssumptionBtn = document.createElement("button");
openAssumptionBtn.type = "button";
openAssumptionBtn.id = "open-assumption-btn";
openAssumptionBtn.style.marginRight = '5px';
openAssumptionBtn.textContent = "가정 [[";

const closeAssumptionBtn = document.createElement("button");
closeAssumptionBtn.type = "button";
closeAssumptionBtn.id = "close-assumption-btn";
closeAssumptionBtn.style.marginRight = '5px';
closeAssumptionBtn.textContent = "]] 가정";

// 논리 기호 버튼들
const logicButtons = [
  { id: "not-btn", text: "∼", value: "~" },
  { id: "and-btn", text: "∧", value: "∧" },
  { id: "or-btn", text: "∨", value: "∨" },
  { id: "imp-btn", text: "→", value: "→" },
  { id: "bi-imp-btn", text: "↔", value: "↔" }
].map(({ id, text, value }) => {
  const btn = document.createElement("button");
  btn.style.marginRight = '5px';
  btn.type = "button";
  btn.id = id;
  btn.textContent = text;
  btn.value = value;
  return btn;
});

// symbolicForm 조립
symbolicForm.appendChild(symbolicInput);
symbolicForm.appendChild(ns1);
symbolicForm.appendChild(ns2);
symbolicForm.appendChild(ns3);
symbolicForm.appendChild(ruleSelect);
symbolicForm.appendChild(document.createElement("br"));
symbolicForm.appendChild(addSymbolicBtn);
symbolicForm.appendChild(openAssumptionBtn);
symbolicForm.appendChild(closeAssumptionBtn);
logicButtons.forEach(btn => symbolicForm.appendChild(btn));

// 기호명제 리스트
const symbolicListContainer = document.createElement("div");
symbolicListContainer.style.width = "575px";
symbolicListContainer.style.border = "1px solid gray";
const symbolicList = document.createElement("ol");
symbolicList.type = "1";
symbolicList.id = "symbolic-list";
symbolicListContainer.appendChild(symbolicList);

// 학번
const studentId = document.createElement('h3');
studentId.textContent = '20222704 남규빈';

const adress = document.createElement('a');
adress.href = 'https://github.com/been-03/natural-deduction-js.ver-';
adress.textContent = '원격저장소 주소';
adress.target = "_blank"; 

// === body에 추가 ===
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(textarea);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(compoundForm);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(compoundListContainer);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(primaryForm);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(primaryListContainer);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(symbolicForm);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(symbolicListContainer);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(studentId)
document.body.appendChild(adress);
