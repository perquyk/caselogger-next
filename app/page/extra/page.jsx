import '@/app/page.css'
import ExtraContentCard from "@/components/extra-content-cards/ExtraContentCard";
const Page = () => {
    return (
        <>
            <div className="content-div sticky">
                <div className={"content-header"}>
                    <h1>Extra Tools</h1>
                </div>
                <hr/>
            </div>
            <ExtraContentCard />
        </>
    )
}
export default Page
