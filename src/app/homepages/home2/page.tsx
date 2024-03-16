import MenuTwo from "@/components/Header/Menu/MenuTwo";
import TopNavTwo from "@/components/Header/TopNav/TopNavTwo";


export default function HomeTwo() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavTwo />
                    <MenuTwo />
                </header>
                <main className="content">
                </main>
                <footer id="footer">
                </footer>
            </div>
        </>
    )
}