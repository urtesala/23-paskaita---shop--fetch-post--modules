"use strict";
console.log("main.js");

const app = new Shop();
console.log("app ===", app);

class MyForm {
  formEl = document.forms[0];

  constructor() {
    this.initListener();
  }

  initListener() {
    this.formEl.addEventListener("submit", (event) => {
      // sutabdyti forma nuo issiuntimo
      event.preventDefault();
      // iskonsoliti kazka
      console.log("js control form");
      // surinkti visus inputus i javaskriptini objekta
      // ispausdinti objeka
    });
  }

  getCategoriesArray(allDataArr) {
    // is allDataArr === app.items
    // atrinkti visas skirtingas kategorijas i masyva ir ji irasyti i this.categoriesArr
  }

  getCategoriesFetch() {
    // gauti kategorijas is https://dummyjson.com/products/categories
    // irasyti i this.categoriesArrFetch
  }
}

const form1 = new MyForm();
console.log("form1 ===", form1);
