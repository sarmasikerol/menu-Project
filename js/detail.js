/*
 * URL'de ki parametreleri yönetiebilmek için URLSearchParams classından örnek oluştur.

 * Örneği oluştururken kendi URL' imizde ki parametreleri gönderdik 
  
 */

import { menu } from "./db.js";
import { elements } from "./helpers.js";

const search = window.location.search;
const searchParams = new URLSearchParams(search);
//* Get metoduna gönderdiğimiz değişkene göre değere ulaştık
const paramid = searchParams.get("id");

//* data menu içersinde id li elemanı bulduk
const product = menu.find((item) => item.id === Number(paramid));

elements.outlet.innerHTML = ` 
  <div
    class="container d-flex flex-column gap-4 my-5"
    id="outlet"
    style="max-width: 900px"
>
  <div class="d-flex justify-content-between align-items-center">
    <a href="./index.html">
        <i class="bi bi-house fs-2"></i>
    </a>
  <div>anasayfa / ${
    product.category
  } / ${product.title.toLocaleLowerCase()}</div>
</div>
<h1 class="text-center shadow p-2 rounded">${product.title}</h1>
<div class="d-flex justify-content-center align-items-center">
  <img src="${product.img}" alt="" style="max-width: 480px" />
</div>
<div>
  <h3 class="my-5">
    Ürünün Kategorisi: <span class="text-success">${product.category}</span>
  </h3>
  <h3>Ürünün Fiyatı:  <span class="text-success">${product.price} ₺</span></h3>
</div>
<p class="lead fs-3">
${product.desc}
</p>
</div>
`;
