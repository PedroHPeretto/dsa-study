class Solution:
  def reverseWords(string):
    res = ''
    l = 0
    r = 0

    while r < len(string):
      if string[r] != ' ':
        r += 1
      else:
        res += string[l:r+1][::-1]

        r += 1
        l = r

    res += ' '
    res += string[l:r+2][::-1]

    return res[1:]
