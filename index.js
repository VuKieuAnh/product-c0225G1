// ma, ten, so luong, gia
let products = [
    new Product("01", "But thien long", 3000, 100),
    new Product("02", "But chi", 7000, 80),
    new Product("03", "Bang hong ha ", 30000, 100)
];
// viet ham hien thi danh sach san pham
function showAllProducts() {
    let content = "";
    for (let i = 0; i < products.length; i++) {
        content += `<tr>
        <td>${products[i].id}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].number}</td>
        <td>${products[i].getAmount()}</td>
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
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let price = +document.getElementById("price").value;
    let number = +document.getElementById("number").value;
    let newProduct = new Product(id,name, price,number);
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
