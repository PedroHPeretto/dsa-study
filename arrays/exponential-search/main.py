class Solution:
  def exponentialSearch(arr, target, low, high):
    if arr[0] == target:
      return 0
    
    arrayLenght = len(arr)
    index = 1

    while index < arrayLenght and arr[index] < target:
      index *= 2
    
    if arr[index] == target:
      return index
    
    high = min(index, arrayLenght - 1)
    low = index // 2

    while low < high:
      index = int((high + low) / 2)

      if arr[index] == target:
        return index
      elif arr[index] < target:
        low = index + 1
      else:
        high = index
    
    return -1
