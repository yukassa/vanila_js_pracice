import "./styles.css";

const onClickAdd = () => {
  // alert();
  // form の値を取得
  const inputText = document.getElementById("add-text").value;

  // 追加ボタンが押されたら、form 内のテキストを空にする
  document.getElementById("add-text").value = "";
  alert(inputText);

  // リスト表示するためのDOMを作成する
  // div タグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li タグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタンと削除ボタンを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // alert("完了");
    // 未完了エリアから削除
    // const deleteTarget = completeButton.parentNode;
    // console.log(deleteTarget);
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素と、タスクテキストを取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    // div 以下を初期化
    addTarget.textContent = null;

    // li タグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // div タグの小要素として追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了エリアに移すためのDOM を生成
    // const completeDiv = document.createElement("div");
    // completeDiv.className = "list-row";

    // li タグを生成
    // const completeLi = document.createElement("li");
    // completeLi.innerText = inputText;

    // 戻すボタンを生成
    // const backButton = document.createElement("button");
    // backButton.innerText = "戻す";
    // backButton.addEventListener("click", () => {
    //   alert("戻す");
    // });

    // completeDiv.appendChild(completeLi);
    // completeDiv.appendChild(backButton);
    // console.log(completeDiv);

    // 完了したTODO にタスクを追加
    // document.getElementById("complete-list").appendChild(completeDiv);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    // alert("削除");
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div タグのっこようそに  li 要素を追加する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  // 未完了のリストにタスクを追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定のタスクを削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
