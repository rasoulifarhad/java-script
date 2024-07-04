> A good API clearly separates any functions that update data from those that only read data.
> use ***Separate Query from Modifier*** to tease them apart.
> unify functions that only vary due to a value with ***Parameterize Function***.
> Some parameters, however, are really just a signal of an entirely different behavior and are best excised with ***Remove Flag Argument***.
> Data structures are often unpacked unnecessarily when passed between functions; prefer to keep them together with ***Preserve Whole Object***.
> Decisions on what should be passed as a parameter, and what can be resolved by the called function, are the ones we often need to revisit with ***Replace Parameter with Query*** and ***Replace Query with Parameter***.
> Prefer our objects to be as immutable as possible, so use ***Remove Setting Method*** whenever I can.
> Often, when a caller asks for a new object, we need more flexibility than a simple constructor gives, which we can get by using ***Replace Constructor with Factory Function***.
> The last two refactorings address the difficulty of breaking down a particularly complex function that passes a lot of data around. we can turn that function into an object with /***Replace Function with Command***, which makes it easier to use Extract Function on the function’s body. If we later simplify the function and no longer need it as a command object, we turn it back into a function with ***Replace Command with Function***.