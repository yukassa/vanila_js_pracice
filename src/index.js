import "./styles.css";

const onClickAdd = () => {
  // alert();
  // form の値を取得
  const inputText = document.getElementById("add-text").value;

  // 追加ボタンが押されたら、form 内のテキストを空にする
  document.getElementById("add-text").value = "";
  alert(inputText);

  createIncompleteList(inputText);
};

// 未完了リストから指定のタスクを削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストにタスクを追加する関数
const createIncompleteList = (text) => {
  // リスト表示するためのDOMを作成する
  // div タグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li タグを生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンと削除ボタンを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了エリアから削除
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
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 未完了テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // div タグの小要素として追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了したTODO にタスクを追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
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

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
