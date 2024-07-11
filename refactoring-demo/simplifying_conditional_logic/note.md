

See https://code.tutsplus.com/refactoring-legacy-code-part-3-complex-conditionals--cms-20944t
See https://learn.codesee.io/tackling-technical-debt-through-javascript-refactoring-part-2-techniques-of-refactoring-in-javascript/
See https://www.stackbuilders.com/blog/refactoring-javascript-with-functional-patterns/
See https://martinfowler.com/articles/refactoring-adaptive-model.html
See https://code.tutsplus.com/series/refactoring-legacy-code--cms-633
See https://github.com/jbrains/trivia.gihttps://github.com/caradojo/triviat
See 
See https://github.com/caradojo/trivia/tree/master/java
See https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

</br>

> A good API clearly separates any functions that update data from those that only read data.

</br>

> use ***Separate Query from Modifier*** to tease them apart.

</br>

> unify functions that only vary due to a value with ***Parameterize Function***.

</br>

> Some parameters, however, are really just a signal of an entirely different behavior and are best excised with ***Remove Flag Argument***.

</br>

> Data structures are often unpacked unnecessarily when passed between functions; prefer to keep them together with ***Preserve Whole Object***.

</br>

> Decisions on what should be passed as a parameter, and what can be resolved by the called function, are the ones we often need to revisit with ***Replace Parameter with Query*** and ***Replace Query with Parameter***.

</br>

> Prefer our objects to be as immutable as possible, so use ***Remove Setting Method*** whenever I can.

</br>

> Often, when a caller asks for a new object, we need more flexibility than a simple constructor gives, which we can get by using ***Replace Constructor with Factory Function***.

</br>

> The last two refactorings address the difficulty of breaking down a particularly complex function that passes a lot of data around. we can turn that function into an object with /***Replace Function with Command***, which makes it easier to use Extract Function on the function’s body. If we later simplify the function and no longer need it as a command object, we turn it back into a function with ***Replace Command with Function***.

</br>

