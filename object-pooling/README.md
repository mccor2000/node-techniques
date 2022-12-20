STOP writing garbage code, aight? just STOP it.
## Pros & Cons

### Pros
 Reduce the number of times invoking the GC

### Cons
 From *Renato Mangini*: <br>

>Pools are not for everyone, even on high-performance apps. Consider the following tradeoffs before adopting object pools and static memory methods: Startup time will be longer, since you’re spending cycles allocating memory at initialization time. Memory doesn’t shrink in low-usage scenarios; Your app will greedily consume memory. You’ll sometimes need to clean an object when it’s returned to the pool, this can have a non-trivial overhead associated with it during high-memory-churn areas. 

