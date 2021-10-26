/*Edge Cases

- Can't start with an operator - must start with number
- Must close parenthesis
- Must have open parenthesis for all close parenthesis
- If two operators are chosen in a row, the second will replace the first
-if two numbers are chosen in a row, they must concat together to make a new number
-no operator between number and parenthesis
- 




*/

    /* Parenthesis

    Find first index of (
        If it exists, find index of next ( and next )
        If second ( is before first ), then 
            Find last index of )
            store pair as array in array
        If not, 
            Find index of first )
            store pair as array
    Repeat, starting at index of first ( +1)
        repeat last index of starting at indexOf last -1
    Loop while parIndex > 0 (because indexOf returns -1 if false)

    Will have array of arrays with pairs of locations of parenthesis
    start at last pair - solve problem and replace span with result
    repeat until results array is at 0

    

    */

   /* Optimizations

   - accept key board entry in addition to clicks
   - clear out result when new numbers are added
   - don't allow starting with an operator

   */