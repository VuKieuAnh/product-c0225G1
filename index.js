let products = ["Iphone 16 promax",
    "VIVO X200 Pro Mini1",
    "VIVO X200 Pro Mini2 ",
    "VIVO X200 Pro Mini 3",
    "Iphone 11 promax"];
// viet ham hien thi danh sach san pham
function showAllProducts() {
    let content = "";
    for (let i = 0; i < products.length; i++) {
        content += `<tr>
        <td>${products[i]}</td>
        <td><button>Edit</button></td>
        <td><button onclick="deleteByIndex(${i})">Delete</button></td>
    </tr>`
    }
    document.getElementById("products").innerHTML = content;
}
showAllProducts()

//them moi san pham
// ten: addNewProduct
// tham so: tra ve: none
// phan than:
// 1> Lay du lieu tu o input
// 2> Them vao mang
// 3> Hien thi lai danh sach
function addNewProduct() {
    let newProduct = document.getElementById("name").value;
    products.push(newProduct);
    showAllProducts();
}
// xoa san pham
// 1: ten: deleteByIndex
// 2: tham so: index
// 3: Tra ve: none
// 4: Phan than:
// b1: Xoa phan tu trong mang
// b2: Hien thi lai danh sach
function deleteByIndex(index) {
    products.splice(index, 1);
    showAllProducts();
}
