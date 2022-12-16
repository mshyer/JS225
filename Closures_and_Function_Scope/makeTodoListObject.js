function makeList() {
  let items = [];
  return {
    add(todo) {
      let index = items.indexOf(todo);
      if (index === -1) {
        items.push(todo);
        console.log(todo + ' added!');
      }
    },

    remove(todo) {
      let index = items.indexOf(todo);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(todo + ' removed!');
      }
    },

    list() {
      if (items.length === 0) {
        console.log('No todos yet!');
      } else {
        items.forEach(todo => console.log(todo));
      }
    }
  };
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();

console.log(list.items);
