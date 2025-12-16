### Context
You are practicing **Stack Logic** and **Path Normalization**. This simulates how operating systems resolve file paths. It forces you to manage a "history" of where you are (state) and modify it based on specific command rules (logic).

### Task: The Directory Crawler
Write a function `resolvePath(commands)` that calculates the final absolute file path based on a string of inputs.

**Input:** A single string containing directory names or commands separated by slashes `/`.
**Output:** The normalized, absolute path string.

**The Logic:**
1.  Start at the root: `/`
2.  `name`: Move down into a directory named `name`.
3.  `..`: Move up to the parent directory.
4.  `.`: Stay in the current directory (do nothing).
5.  `//` (Multiple slashes): Treat as a single slash (ignore empty inputs).
6.  **Constraint:** You cannot go higher than the root (e.g., if you are at root, `..` does nothing).

**Examples:**

| Input String | Logic Breakdown | Return Output |
| :--- | :--- | :--- |
| `/a/b/c` | Enter a, enter b, enter c | `"/a/b/c"` |
| `/a/b/../c/` | Enter a, enter b, **go back**, enter c | `"/a/c"` |
| `/home//code/./js` | Enter home, (ignore /), enter code, (ignore .), enter js | `"/home/code/js"` |
| `/../` | At root, try to go back (fail), stay at root | `"/"` |
| `/a/../../b` | Enter a, go back (root), go back (root), enter b | `"/b"` |

### Rules
* **Must** use TDD (write the test for "Simple path" first, then "Go back", then "Edge cases").
* **Must** handle the trailing slash (the output should not end with `/` unless it is simply `"/"`).

### Done When
1.  `deno test` passes for:
    * Deep nesting: `/x/y/z`
    * Parent directory logic: `/x/y/..` -> `/x`
    * Root boundary check: `/..` -> `/`
    * Complex mix: `/a/./b/../../c/` -> `/c`
2.  The solution handles empty inputs (returns `"/"`).

### Optional Stretch
Handle an input that doesn't start with `/`. If the input is `x/y`, assume it is relative to a starting path of `/root` (so result is `/root/x/y`).