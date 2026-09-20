export default async function Page(){

    await new Promise((resolve)=>{
        setTimeout(resolve, 3000)
    })
    // useEffect(()=>{
    //     console.log('just adding')
    // },[])
    return (
        <h1> I am on blog page in the page</h1>
    )
}