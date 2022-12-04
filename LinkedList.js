function LinkedList () {
  var length=0;
  var head = null; 

  var Node = function (element) {
    this.element = element;
    this.next = null;
  }

  this.size = function() {
    return length;
  }

  this.head = function (){
    return head;
  }

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }

  this.remove = function(element){
    var currentNode = head
    var previousNode

    if(currentNode.element === element){
      head = currentNode.next
    } else {
      while(currentNode.element !== element){
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    length--
  }

  this.IndexOf  = function(element){
    var currentNode = head;
    var index = -1;
     while(currentNode){
      index ++;
      if(currentNode.element === element)
      {
        return index;
      }
      currentNode = currentNode.next;
     }
     return -1;
  }

  this.ElementAt = function(index){
    var currentNode = head;
    counter = 0;
    if (index > this.size() || index < 0){
      return -1
    }

    while (counter < index){
      counter ++
      currentNode = currentNode.next
    }
    return currentNode.element
  }

}

var fruits = new LinkedList()
fruits.add('mangoe')
fruits.add('water-melon')
fruits.add('orange')
fruits.add('dates')

console.log(fruits.size())
fruits.remove('mangoe')
console.log(fruits.size())
console.log(fruits.IndexOf('mangoe'))
console.log(fruits.IndexOf('dates'))
console.log(fruits.ElementAt(1))


