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

  // div タグのっこようそに  li 要素を追加する
  div.appendChild(li);
  console.log(div);

  // 未完了のリストにタスクを追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
