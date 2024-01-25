import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/next-auth";
import config from "@/config";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({ children }) {

    const session = await getServerSession(authOptions);
    const headersList = headers()
    const redirectPath = headersList.get("pathname")
    const query = `?callbackUrl=${encodeURIComponent(redirectPath)}`
    if (!session) {
        redirect(config.auth.loginUrl + query);
    }

    
    // before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40
    // bg-white 
    // shadow-none h-full
    // bg-gradient-radial from-red-100 to-blue-100 via-gray-200
    // bg-red-200
    // bg-gradient-radial from-red-100 to-blue-100 via-gray-200
    // before:blur-2xl
    // transition
    // duration-200
    return <div className="h-full">
        <div className="
            absolute
            h-full w-full
            blur-3xl
        ">
            <div className="relative h-full w-full">
                <div className="absolute bg-gradient-to-b from-blue-400 to-blue-100 via-sky-200 h-full w-full"></div>
                {/* <div className="absolute left-0 top-32 bg-red-200 h-64 w-32 rounded-full"></div> */}
                {/* <div className="absolute left-64 bottom-16 bg-pink-200 h-64 w-32 rounded-full"></div> */}
                {/* <div className="absolute right-0 bottom-64 bg-green-200 h-32 w-64 rounded-full"></div> */}
            </div>
        </div>
        {children}
    </div>;
}
