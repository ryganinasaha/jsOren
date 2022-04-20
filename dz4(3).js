const list = {
    values: ["fruts", "vegtebals", "apple"],
    printList() {
      const list2 = this.values.sort();
      const div = document.getElementById("app");
      div.innerHTML = " ";
      for (let i = 0; i < this.values.length; i++) {
        div.innerHTML += this.values[i] + "<br>";
      }
    },
    add(product) {
      this.values.push(product);
    }
  };
  list.printList();
  list.add("egg");
  list.printList()