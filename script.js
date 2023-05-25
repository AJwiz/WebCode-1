'strict mode'
//FETCHING JSON DATA FROM URL 
let jsonData = async () => {
    const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        let valuedData = data.filter((ele) => (ele.price !== '0.0' && ele.brand !== null));
        let someData = valuedData.slice(500, valuedData.length - 367)
        someData.map((ele) => {
            conRow1.innerHTML += `<div class="card" style="width: 18rem;">
            <img id='card_img' src="${ele.image_link}" class="card-img-top" alt="${ele.product_type + 'Image'}">
            <div class="card-body">
              <h5 class="card-title">${ele.name}<span id='span_title'>(brand-${ele.brand})</span></h5>
              <p class="card-text">${ele.description}</p>
              <h6 class="card-subtitle mb-2 text-body-secondary">Price : ${ele.price}$</h6>              <a href="${ele.product_link}" class="btn btn-info">Product Link</a>
            </div>
            </div>`
        })
        let brandNames = ['Choose Your Brand'];
        valuedData.forEach((element) => {
            brandNames.push(element.brand);
            select2.innerHTML = ''
        });
        let brandList = brandNames
            .filter((value, index) => brandNames.indexOf(value) === index)
        brandList.map((brand) => {
            select2.innerHTML += `<option value="${brand}">${brand.toUpperCase()}</option>`;
        })

        let products = ['Choose Your Product'];
        valuedData.forEach((element) => {
            products.push(element.product_type);
            select1.innerHTML = ''
        });
        let productList = products
            .filter((value, index) => products.indexOf(value) === index)
        productList.map((prdt) => {
            select1.innerHTML += `<option value="${prdt}">${prdt.split('_').join('').toUpperCase()}</option>`;
        })
    } catch (err) {
        return alert(err)
    }
};
jsonData();


// Function for Creating DOM Elements
function createEle(tagname, attributeName, attributeValue, content) {
    const newElement = document.createElement(tagname);
    newElement.setAttribute(attributeName, attributeValue);
    newElement.innerHTML = content;
    return newElement;
}
function moreAttributes(tagname, atname1, atvalue1, atname2, atvalue2, content) {
    const attributes = document.createElement(tagname);
    attributes.setAttribute(atname1, atvalue1);
    attributes.setAttribute(atname2, atvalue2);
    attributes.innerHTML = content;
    return attributes;
}

// All DOM Elements 
//HEADER & NAV
const header = createEle('header', 'class', 'header', '')
const container = createEle('div', 'class', 'container', '')
const nav = createEle('nav', 'class', 'navbar', '');
const title = createEle('h2', 'class', 'site_name', 'Beauty Canvas');
const div = createEle('div', 'class', 'navmenu', '');
const unorderedList1 = createEle('ul', 'id', 'navigate', '');
const list1 = createEle('li', 'class', 'l1', '')
const anchor1 = moreAttributes('a', 'href', '#home', 'class', 'nav_link', 'Home')
const list2 = createEle('li', 'class', 'l2', '')
const anchor2 = moreAttributes('a', 'href', '#shop', 'class', 'nav_link', 'Shop')
const list3 = createEle('li', 'class', 'l3', '')
const anchor3 = moreAttributes('a', 'href', '#products', 'class', 'nav_link', 'Products')
const list4 = createEle('li', 'class', 'l4', '')
const anchor4 = moreAttributes('a', 'href', '#contact', 'class', 'nav_link', 'Contact')
//SECTION1 start
const section1 = moreAttributes('section', 'class', 'intro', 'id', 'home', '')
const subTitle = createEle('h4', 'id', 'words', 'Unveil Your True Colors with Our Makeup Essentials')
const image1 = moreAttributes('img', 'src', '/makeuppic.jpg', 'alt', 'makupcolorpic')
image1.setAttribute('id', 'imgsrc')
//end
//SECTION2 start
const section2 = createEle('section', 'class', 'section2', '')
// Select By Products
let select1 = document.createElement('select');
select1.setAttribute('id', 'productsList')
select1.innerHTML = `<option value="productsList">. . . Loading Product List</option>`;
// Select By Brands
let select2 = document.createElement('select');
select2.setAttribute('id', 'productsList')
select2.innerHTML = `<option value="brandsList">. . . Loading Brand List</option>`;
// Search Button
let search = createEle('button', 'id', 'search_btn', 'Search')
//section2end
//SECTION3 start
const section3 = moreAttributes('section', 'class', 'section3', 'id', 'shop', '')
const h3 = createEle('h3', 'class', 'h3', 'OUR FEATURED PRODUCTS')
const container2 = createEle('div', 'class', 'container', '')
const conRow1 = createEle('div', 'class', 'row', '')

list1.append(anchor1)
list2.append(anchor2)
list3.append(anchor3)
list4.append(anchor4)
unorderedList1.append(list1, list2, list3, list4)
div.append(unorderedList1)
nav.append(title, div)
header.append(nav)
section1.append(subTitle, image1)
section2.append(select1, select2, search)
container2.append(conRow1)
section3.append(h3, container2)
container.append(header, section1, section2, section3)
document.body.append(container)




