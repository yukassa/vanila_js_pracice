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
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    // alert("削除");
  });

  // div タグのっこようそに  li 要素を追加する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  // 未完了のリストにタスクを追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
