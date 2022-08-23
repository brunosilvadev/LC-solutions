# Big O notes
O(1) Constant - No loops  
O(n) Linear - for, while loops  
O(n^2) Quadratic - every element in collection needs to be compared to every element  

*Iterating through half a collection is still O(n)  
*Two separete collections: O(a + b)  

# Things that cost resources in a function
Math operations  
Comparisons  
Loops  
Function calls  

# Rules
1: Always worst case scenario  
2: Remove constants  
3: Different inputs should have different variables O(a + b)  
4: Drop non-dominant terms (keep only the most expensive term)  

