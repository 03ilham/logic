
    const products = `LG Asus 5432 Mix For Youtuber Bluetooth Adapter Solo Leveling Webtoon Panasoni Air Conditioner Karaoke Bazooka PowerBank 24 Hours Backpack ofHolding Game Box 5 Universal Gadget Charger USB Squirming Tentacle USB Fishquarium Intel Processor 8 core SpaceBarKeyboardOrganizer & USB HubPop USB Pet Rock Powerstation 5 Dual Heated Travel Mug Crosley Collegiate Portable USB Turntable Hoodie AK-47`
    const arr = products.split(" ");

console.log(arr);

function filterProduct(product,s) {
    let display = [];
    for (let i = 0; i < product.length; i++) {
        if(product[i][0].toLowerCase() === s.toLowerCase()) {
            display=(product[i]);
        }      
    }
    return display.split(" ");
}
console.log(filterProduct(arr, "B"));
console.log(filterProduct(arr, "A"));