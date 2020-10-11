// Comparison operators
// < > <= >=

5 > 5 // false
5 >= 5 // true

// Equality/inequality operators
// Double equals (equality) will only compare the value
// It has a loose idea of equality because it tries to 
// coerce one or both operands to similar data types before comparing
// == !=

2 == 2 // true
2 != 2 // false
2 == '2' // true

// Strict equality/inequality
// Triple equals will compare the value and its data type
// It won't do type coercion
// === !== 

2 === 2 // true
2 !== 2 // false
2 === '2' // false

// Logical operators 
// && (AND)
// || (OR)

// with the && (AND) operator both operands must be true to return true
true && true // true
true && false // false
false && true // false
false && false // false

// with the || (OR) operator, at least one operand must be true to return true
true || true // true
false || true // true
true || false // true
false || false // false

// Falsy values
0
-0
null
undefined
''
NaN

// The logical operators work in a short circuit way
// &&:
// if the first operand is truthy, it will return the second operand no matter whether it's truthy or falsy
// if the first operand is falsy, it will return that falsy value and ignore the 2nd operand
"truthy" && '' // ''
'' && "truthy" // ''
'' && false // ''
100 && "truthy" // "truthy"

// ||:
// if the first operand is truthy, it returns that value and ignores the 2nd value
// if the first operand is falsy, it will return the second operand no matter whether it's truthy or falsy
"truthy" || '' // "truthy"
'' || "truthy" // "truthy" 
'' || 0 // 0
