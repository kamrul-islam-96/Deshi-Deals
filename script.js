const findBtn = (id) => {
    const activebtn = document.getElementById(id)
    activebtn.style.display = 'block'
}

const imageFunction = (id) => {
    return document.getElementById(id).src
}
const titleFunction = (id) => {
    return document.getElementById(id).innerText
}
const priceFunction = (id) => {
    return document.getElementById(id).innerText
}

const getCard = (id) => {
    const image = imageFunction(`image-${id}`)
    const title = titleFunction(`title-${id}`)
    const price = parseInt(priceFunction(`price-${id}`))

    const parentCard = document.getElementById('cart-section') 

    const card = document.createElement('div')
    card.classList = "w-full bg-gray-200 flex items-center justify-between p-3 rounded-lg"
    
    card.innerHTML = `
        <div class="w-full bg-gray-200 flex items-center justify-between p-3 rounded-lg">
              <img src=${image} alt="" class="h-[80px]">
              <div class="flex flex-col gap-2">
                <p>${title}</p>
                <p class="text-[18px] font-bold">${price} TK</p>
              </div>
            </div>
    `

    parentCard.appendChild(card)

    const totalPriceElement = document.getElementById('total-price')
    let totalPrice = parseInt(totalPriceElement.innerText)

    const totalAvilablePrice = totalPrice + price
    totalPriceElement.innerText = totalAvilablePrice

}

document.getElementById('btn-accessories').addEventListener('click', function() {
    findBtn('btn-accessories')
    getCard('one')
})
document.getElementById('btn-dish').addEventListener('click', function() {
    findBtn('btn-dish')
    getCard('two')
})
document.getElementById('btn-home-cooker').addEventListener('click', function() {
    findBtn('btn-home-cooker')
    getCard('three')
})
document.getElementById('btn-black-cap').addEventListener('click', function() {
    findBtn('btn-black-cap')
    getCard('four')
})
document.getElementById('btn-jersey-set').addEventListener('click', function() {
    findBtn('btn-jersey-set')
    getCard('five')
})
document.getElementById('btn-sports-cates').addEventListener('click', function() {
    findBtn('btn-sports-cates')
    getCard('six')
})
document.getElementById('btn-relax-chair').addEventListener('click', function() {
    findBtn('btn-relax-chair')
    getCard('seven')
})
document.getElementById('btn-childrean-play').addEventListener('click', function() {
    findBtn('btn-childrean-play')
    getCard('eight')
})
document.getElementById('btn-flexible-sofa').addEventListener('click', function() {
    findBtn('btn-flexible-sofa')
    getCard('nine')
})