'use strict';
export const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

export const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(inventory, itemName);
};
/*The script below were commented to allow button in html run this script*/

// invokeInventoryAction('Medkit', inventory.add);
// console.log(inventory.items);
// invokeInventoryAction('Gas mask', inventory.remove);
// console.log(inventory.items);
