import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/next-auth";
import config from "@/config";
import SideMenu from "@/components/SideMenu";

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
            z-[-1]
            absolute
            h-full w-full
            blur-3xl
        ">
            <div className="relative h-full w-full">
                {/* <div className="absolute bg-gradient-to-b from-blue-400 to-blue-100 via-sky-200 h-full w-full"></div> */}
                {/* <div className="absolute left-0 top-32 bg-red-200 h-64 w-32 rounded-full"></div> */}
                {/* <div className="absolute left-64 bottom-16 bg-pink-200 h-64 w-32 rounded-full"></div> */}
                {/* <div className="absolute right-0 bottom-64 bg-green-200 h-32 w-64 rounded-full"></div> */}
            </div>
        </div>
        
        <div className="flex w-full h-full">
            <SideMenu 
                menuItems={[
                    // TODO replace SVGs with feather icon
                    {label: "Edit new CV", href: "/cv-upload", svgElement: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>},
                    {label: "My CVs", href: "/app/videos", svgElement: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" /></svg>}
                ]}
            />
            <div className="flex flex-col w-full h-full">
                {/* <div className='text-2xl p-4 font-medium'>My Sales Webinars</div> */}
                <div className="p-4 h-full w-full">
                    {children}
                </div>
            </div>
        </div>
    </div>;
}