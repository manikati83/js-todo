import "./styles.css";

const onClickAdd = (id) => {
  // テキストボックスの値を取得し、初期化
  const addText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";
  const parent = document.querySelector(id);

  // liタグを生成
  const li = document.createElement("li");
  li.classList.add("list-row");

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = addText;
  // ボタン生成
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  deleteBtn.innerText = "削除";

  //ボタンのイベント登録
  deleteBtn.addEventListener("click", () => deleteChild(li));
  completeBtn.addEventListener("click", () => {
    const completeLi = document.createElement("li");
    completeLi.classList.add("list-row");
    const completeP = document.createElement("p");
    completeP.innerText = p.innerText;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "戻す";
    removeBtn.addEventListener("click", () => {
      deleteChild(completeLi);
      const text = completeP.innerText;
      createUncompleteList(text);
    });

    completeLi.appendChild(completeP);
    completeLi.appendChild(removeBtn);

    // parent.removeChild(li);
    deleteChild(li);
    document.querySelector("#complete-li").appendChild(completeLi);
  });

  // liタグの子要素に各要素を追加
  li.appendChild(p);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // 未完了のリストに追加
  parent.appendChild(li);
};

const deleteChild = (child) => child.parentNode.removeChild(child);

const createUncompleteList = (text) => {
  const li = document.createElement("li");
  li.classList.add("list-row");

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;
  // ボタン生成
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  deleteBtn.innerText = "削除";

  //ボタンのイベント登録
  deleteBtn.addEventListener("click", () => deleteChild(li));
  completeBtn.addEventListener("click", () => {
    const completeLi = document.createElement("li");
    completeLi.classList.add("list-row");
    const completeP = document.createElement("p");
    completeP.innerText = p.innerText;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "戻す";
    removeBtn.addEventListener("click", () => {
      deleteChild(completeLi);
      const text = completeP.innerText;
      createUncompleteList(text);
    });

    completeLi.appendChild(completeP);
    completeLi.appendChild(removeBtn);

    // parent.removeChild(li);
    deleteChild(li);
    document.querySelector("#complete-li").appendChild(completeLi);
  });

  // liタグの子要素に各要素を追加
  li.appendChild(p);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // 未完了のリストに追加
  document.querySelector("#uncomplete-li").appendChild(li);
};

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", () => onClickAdd("#uncomplete-li"));
