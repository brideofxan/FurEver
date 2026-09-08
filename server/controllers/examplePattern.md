import dependencies from "dependency";

export function functionName(req, res) {

Stuff happens, if this and that.

return res.status(123).json({
message: "Wow good job, impressive"
})
}

You can use an async function and use await for db interactions in a try/catch block.
