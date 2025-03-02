// variables
const breakfastMenu =  ['Pancakes - $13', 'Eggs Benedict - $15', 'Oatmeal - $16', 'Frittata - $13'];
const mainCourseMenu = ['Steak - $50', 'Pasta - $35', 'Burger - $30', 'Salmon-$50'];
let maincourseItem = '';
const dessertMenu = ['Ice Cream - $30', 'Pudding - $40', 'Fruit Salad - $40'];
let dessertItem = '';
// displaying breakfast menu, map()
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// display main course menu, foreach()
mainCourseMenu.forEach((item, index) => {
    maincourseItem += `<p>${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = maincourseItem;

// display dessert menu, for loop
for(let i=0; i<dessertMenu.length; i++){
    dessertItem += `<p>${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;