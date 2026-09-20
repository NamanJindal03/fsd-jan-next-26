export default function Page(){

    async function createTask(formData){
        "use server"
        const title = formData.get("title");
        console.log(title)
    }

    return (
        <form action={createTask}>
            <input name="title" style={{backgroundColor: "white", color: 'black'}}/>
            <button>Create</button>
        </form>
    )
}