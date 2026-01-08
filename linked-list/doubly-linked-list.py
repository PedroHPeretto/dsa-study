class Node:
  def __init__(self, value: int):
    self.value = value
    self.next = None
    self.prev = None

class DoublyLinkedList:
  def __init__(self):
    self.head: Node = None
    self.tail: Node = None

  def add_node_to_front(self, value: int) -> Node:
    new_node = Node(value)
    
    if self.head:
      new_node.next = self.head
      self.head.prev = new_node
    
    self.head = new_node

    return self.head

  def add_node_to_end(self, value: int) -> Node:
    new_node = Node(value)
    
    if self.tail:
      new_node.prev = self.tail
      self.tail.next = new_node
    
    self.tail = new_node

    return self.tail

  def remove_node_from_front(self) -> Node:
    if not self.head:
      return None
    
    removed_value: Node = self.head.value

    self.head = self.head.next

    self.head.prev = None

    return removed_value