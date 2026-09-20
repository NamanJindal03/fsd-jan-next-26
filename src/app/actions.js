"use server"
export async function createTask(formData){
    // console.log(formData)
    console.log(formData.get("title"));
    //async work -> db call
}