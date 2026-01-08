class Solution:
  def binarySearch(nums, n):
    lp = 0
    hp = len(nums)

    while lp < hp:
      mid = int((lp + hp) / 2)

      if nums[mid] == n:
        return mid
      elif nums[mid] < n:
        lp = mid + 1
      else:
        hp = mid
    
    return -1