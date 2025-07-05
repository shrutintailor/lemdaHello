 export const helloWorld = (async (event: string) => {
    console.log("hello form ts file");
    return {
        statusCode: 200, 
        body: JSON.stringify({message: "hello here muskan how are you ??"})
    }
})