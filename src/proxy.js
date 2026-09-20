import { NextResponse} from "next/server";
export function proxy(){
    console.log('always called')
    return NextResponse.next();
}
