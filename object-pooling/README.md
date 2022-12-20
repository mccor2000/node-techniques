The job of allocating and decallocating memory in javascript is up to the GC.
And there's a certain cost for the GC the clean our full of garbage code.

## Detect
Profiling probably the most efficient way.

## Reduce GC calls
> Object pooling pattern(static memory)

## Memory graph
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;_________-----------<br>
________---------<br>
linear


<br>
&emsp;&emsp;&emsp;____----|&emsp;&emsp;&emsp;____----|<br>
___----&emsp;&emsp;&emsp;|____----&emsp;&emsp;&emsp;|____----<br>
sawtooth

## The sawtooth bad??
No silver bullet of course. From *Renato Mangini*: <br>

>Pools are not for everyone, even on high-performance apps. Consider the following tradeoffs before adopting object pools and static memory methods: Startup time will be longer, since you’re spending cycles allocating memory at initialization time. Memory doesn’t shrink in low-usage scenarios; Your app will greedily consume memory. You’ll sometimes need to clean an object when it’s returned to the pool, this can have a non-trivial overhead associated with it during high-memory-churn areas. 

